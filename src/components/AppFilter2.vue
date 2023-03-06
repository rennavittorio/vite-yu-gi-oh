<script>
import store from '../store';

export default {

    data(){
        return {
            store,
            cardTypes: ['Effect Monster', 'Synchro Monster', 'Spell Card', 'Trap Card']
        }
    },

    methods: {
        onChange(){
            console.log('ho cambiato type');
            this.$emit('onFilterType');
        }
    }

}
</script>

<template>

    <div class="select-type">

        <select @change="onChange" v-model="store.filteredCardType">
            <option value="Normal Monster" selected> Normal Monster </option>
            <option v-for="cardType in cardTypes" :value="cardType" :key="cardType">{{ cardType }}</option>
        </select>

    </div>

</template>

<style lang="scss" scoped>


</style>