import Navigation from '../../components/Others/Navigation.vue';

import Graph1 from '../../components/graph/Dashboard/graph1.vue'
import Graph2 from '../../components/graph/Dashboard/graph2.vue'
import Graph3 from '../../components/graph/Dashboard/graph3.vue'
import Enrollment from '../../components/graph/Dashboard/enrollment.vue'
import Graduates from '../../components/graph/Dashboard/graduates.vue'
import Scholarship from '../../components/graph/Dashboard/scholarship.vue'
import PassingRate from '../../components/graph/Dashboard/passing_rate.vue'
import Research from '../../components/graph/Dashboard/research.vue'
import Research2 from '../../components/graph/Dashboard/research2.vue'
import Financial from '../../components/graph/Dashboard/financial.vue'
import Footer from '../../Views/Footer.vue'
import Planning_nav from '../../components/Others/Navigation/Planning_nav.vue';

import { useCookies } from 'vue3-cookies';
export default{
    setup(){
        const {cookies} =useCookies();
        return {cookies}
    },
    data(){
        return{
            user:''
        }
    },
    components:{
        Graph1,
        Graph2,
        Graph3,
        Enrollment,
        Graduates,
        Scholarship,
        PassingRate,
        Research,
        Research2,
        Financial,
        Footer,
        Planning_nav,
        Navigation
    },
    mounted(){
        let userPosition = this.cookies.get('userPosition');
        this.user = userPosition
    }

}