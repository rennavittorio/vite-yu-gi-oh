<script>
import axios from 'axios';
import store from '../store';
import AppCard from './AppCard.vue';
import AppFilter from './AppFilter.vue';
import AppFilter2 from './AppFilter2.vue';

export default {
    components: {
        AppCard,
        AppFilter,
        AppFilter2,
    },
    data(){
        return {
            store,
        }
    },
    methods: {
        fetchCard(){
            console.log('fetching data')
            const offset = this.store.offset //1. richiamo e salvo la variabile
            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`, {
                params: {
                    num: 20,
                    offset: 0,
                    fname: this.store.searchName,
                    type: this.store.filteredCardType,
                }
            }) //2. inserisco la var tra le option
            .then((res)=>{
                //decide chi implementa l'API che ti po di risposta viene data
                const cards = res.data.data;
                this.store.cards = cards;
                this.store.count = cards.length;
            })
            .catch((error)=>{ //serve per recuperare gli errori generati dal server (da concatenare subito dopo il then.)
                console.log(error);
                this.store.filteredCardType = '';
            })
            .finally(()=>{ //serve per eseguire comunque il codice anche in caso di errore

            })
        },

    },

    // watch: { 
        //test--------------------------------
    //     offsetIndex(newIndex, oldIndex) {
    //         if (newIndex !== oldIndex){
    //             // this.fetchCard()
    //             console.log('on main', this.offsetIndex)

    //         }
    //     }
    // },

    created(){
        this.fetchCard()
    },

    
}
</script>

<template>

    <main class="main">

        <div class="container">

            <div class="wrapper">

                <div class="search_bar">
                    <AppFilter @onSearch="fetchCard()" />
                </div>

                <div class="filter_type">
                    <AppFilter2 @onFilterType="fetchCard()" />
                </div>

            </div>
                


            <div class="counter">
                {{ store.count }}
            </div>

            <div class="cards">

                <AppCard 
                v-for="card in store.cards" :key="card.id" 
                :image_url="card.card_images[0].image_url" :card_name="card.name" :card_type="card.type"
                />

            </div>

        </div>

    </main>

</template>


<style lang="scss" scoped>

.main {
    background-color: burlywood;

    .container{
        padding: 50px 0;

        .wrapper {
            display: flex;
            gap: 50px;
        }
        
    }

}

.select-wrapper, .counter {
    margin-bottom: 30px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;


}



</style>