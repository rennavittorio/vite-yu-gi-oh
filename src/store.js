import { reactive } from 'vue'

const store = reactive({ 
    cards: [],
    count: 0,
    pageIndex: '',
    offset: 0,

    //serve per inviare info al comp padre
    searchName: '',
    
})

export default store 