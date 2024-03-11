import Dataset from '../Views/Planning/Dataset.vue'
import Dashboard from '../Views/Planning/Dashboard.vue'
import Offices from '../Views/Planning/Offices.vue'
import PBB from '../Views/Planning/PBB.vue'
import Dean from '../Views/Dean/Dean.vue'
import Landing from '../Views/Planning/Landing.vue'

import Graph1 from '../components/graph/graph1.vue'
import Graph2 from '../components/graph/graph2.vue'
import Graph3 from '../components/graph/graph3.vue'
import Footer from '../Views/Footer.vue'

import Navigation from '../components/Others/Navigation.vue'
import Dean_nav from '../components/Others/Navigation/Dean_nav.vue'
import Planning_nav from '../components/Others/Navigation/Planning_nav.vue'
import Registrar_nav from '../components/Others/Navigation/Registrar_nav.vue'
import QAM_nav from '../components/Others/Navigation/QAM_nav.vue'
import Extension_nav from '../components/Others/Navigation/Extension_nav.vue'

import Research_nav from '../components/Others/Navigation/Research_nav.vue'



import { useCookies } from 'vue3-cookies';
import { ref } from 'vue'

let x = ref();

export default{

    setup(){
        const {cookies} =useCookies();
        return {cookies}
    },
    data(){
        return{
            activeTab: null,
            currentComponent:null,
            user:"",
            token:this.cookies.get('userCookies')
            
        }
    },  
    components:{
        Dataset,
        Dashboard,
        Offices,
        PBB,
        Dean,
        Landing,
        Graph1,
        Graph2,
        Graph3,
        Footer,
        Navigation,
        Dean_nav,
        Planning_nav,
        Registrar_nav,
        QAM_nav,
        Extension_nav,
        Research_nav
    },  
      methods:{
        showActive(componentName,tabNumber){
            this.activeTab = tabNumber
            this.currentComponent = componentName
        },

    },



    mounted(){
        // userCookies Value
        // [1] Dean , [2] Registrar, [3] QAM
        // [4] Planning
        this.cookies
        .set('userCookies','random_key','1hr')
        .set('userPosition','Dean','1hr');

        let userCookies = this.cookies.get('userCookies');
        let userPosition = this.cookies.get('userPosition');
        console.log("userCookies",userCookies)
        console.log("userPosition",userPosition)

        //
        this.user = userPosition
        this.userCookies = userCookies
       
    },

}