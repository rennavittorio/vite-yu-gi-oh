<script>
import axios from 'axios';
import store from '../store';
import AppCard from './AppCard.vue';

export default {
    components: {
        AppCard,
    },
    data(){
        return {
            store,
        }
    },
    methods: {
        fetchCard(){
            console.log('fetching data')
            //fare chiamata in get all'endpoint
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
            .then((res)=>{
                //decide chi implementa l'API che ti po di risposta viene data
                const cards = res.data.data;
                this.store.cards = cards;
                console.log('cards', cards)
            })
        }
    },

    created(){
        this.fetchCard()
    }
    
}
</script>

<template>

    <main class="main">

        <div class="container">

            <div class="select-wrapper">
                <select name="cardType" id="" value="">
                    <option value="">type 1</option>
                    <option value="">type 2</option>
                    <option value="">type 3</option>
                </select>
            </div>

            <div class="cards">

                <AppCard 
                v-for="card in store.cards" :key="card.id" 
                :image_url="card.card_images[0].image_url" :card_name="card.name" :card_type="card.archetype"
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
        
    }

}

.select-wrapper {
    margin-bottom: 30px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;


}



</style>