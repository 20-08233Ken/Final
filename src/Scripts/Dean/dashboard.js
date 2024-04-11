

import Dean_nav from '../../components/Others/Navigation/Dean_nav.vue';
import {userCampus }from '../../Scripts/cookies';
import { userPosition } from '../../Scripts/cookies';
import {userCollege }from '../../Scripts/cookies';
import { useCookies } from 'vue3-cookies';

import Dashboard_tracer from '../../components/graph/Dean/tracer.vue'
import Dashboard_takers from '../../components/graph/Dean/takers.vue'

const myArray = [1, 2, 3, 4, 5]; // Array data
export default{
    setup() {
        const { cookies } = useCookies();
        return { cookies }
    },
    components:{
        Dean_nav,
        Dashboard_tracer,
        Dashboard_takers
    },

    data(){
        return{
            campus:null,
            college:null,
            
        }
    },

    mounted(){
        const holdCookies = userPosition();
        this.user = holdCookies();

        const holdcampus = userCampus();
        this.campus = holdcampus();

        const holdCollege = userCollege();
        this.college = holdCollege();
    }
}
