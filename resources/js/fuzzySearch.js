import 'bootstrap/dist/css/bootstrap.css'
import FuzzySearch from './components/FuzzySearch.vue';

let app = new Vue({
    el: '#app',
    data: {
        title: '模糊查詢',
    },
    components: {
        'fuzzy-search': FuzzySearch
    }
})
