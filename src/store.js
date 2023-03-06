import { reactive } from 'vue'

const store = reactive({ 
    cards: [],
    count: 0,

    //watchers
    pageOffset: '0',

    //serve per inviare info al comp padre
    searchName: '',
    filteredCardType: 'Normal Monster',
    
})

export default store 