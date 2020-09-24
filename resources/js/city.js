import 'bootstrap/dist/css/bootstrap.css'
import cityCounties from './components/CityCounties.vue';
import cityDistricts from './components/CityDistricts.vue';

let app = new Vue({
    el: '#app',
    data: {
        message: 'Vue練習:',
        showText: '顯示郵遞區號!',
        countiesSelected: 0,
        districtsSelected: 0,
        countiesSelectedText: '',
        districtsSelectedText: '',
        btnStyle: 'btn btn-primary'
    },
    components: {
        'city-counties': cityCounties,
        'city-districts': cityDistricts
    },
    methods: {
        getDistrictsData (DistrictsSelectedText, DistrictsSelected) {
            this.districtsSelectedText = DistrictsSelectedText
            this.districtsSelected = DistrictsSelected
        },
        updateDistricts (CountiesSelectedText, CountiesSelected) {
            this.countiesSelectedText = CountiesSelectedText
            this.countiesSelected = CountiesSelected
            this.districtsSelected = 0
        },
        showPostalCode() {
            let show_text = ''
            if (this.countiesSelected != 0 && this.districtsSelected  != 0) {
                show_text = this.countiesSelectedText + " " + this.districtsSelectedText + " 郵遞區號為：" + this.districtsSelected
                alert(show_text)
            }
        }
    }
})