<script>
import store from '../store';

export default {

    data(){
        return {
            store,
            type: ['Normal Monster', 'Effect Monster', 'Synchro Monster', 'Spell Card', 'Trap Card']
        }
    },

    methods: {
        onEnter(){
            console.log('ho premuto tasto enter');
            this.$emit('onSearch');
            this.store.searchName = '';
        }
    }

}
</script>

<template>

    <input class="search-bar" type="text" placeholder="filtra per nome..." v-model="this.store.searchName" @keyup.enter="onEnter">

</template>

<style lang="scss" scoped>

.search-bar {
    border: none;
    padding: 10px;
}


</style>