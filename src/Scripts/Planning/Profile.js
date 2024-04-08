import Navigation from '../../components/Others/Navigation.vue'
import Planning_nav from '../../components/Others/Navigation/Planning_nav.vue';
import notification from '../../components/Profile/notification.vue'
import activities from '../../components/Profile/activities.vue'
import MainProfile from '../../Views/Planning/Profile/main.vue'
import user_management from '../../Views/Planning/Profile/user_management.vue'
import addUser from '../../Views/Planning/Profile/addUser.vue';
import Maintain from '../../Views/Planning/Profile/maintain.vue'

import { ref,markRaw } from 'vue';
import { useCookies } from 'vue3-cookies';

import {userPosition} from '../cookies.js'


// import Navigation from '../../components/Others/Navigation'
// import Planning_nav from '../../components/Others/Navigation/Planning_nav.vue';

const markRaw_notification = markRaw(notification)
const markRaw_activities = markRaw(activities)
const markRaw_Planning_nav = markRaw(Planning_nav)
const markRaw_userManagement= markRaw(user_management)
const markRaw_MainProfile= markRaw(MainProfile)
export default{
    
    mounted(){
        const holdCookies = userPosition();
        this.user = holdCookies();
    },
    data(){
        return{
            user:userPosition,
            attrs: ref([
                {
                  key: 'today',
                  highlight: 'red',
                  dates: new Date(),
                },
              ]),

            currentComponent:MainProfile,
            user:null,
            isActive:0
        }
    },
    methods:{
        showComponent(getComponent,myBtn){
            this.currentComponent =getComponent
            this.isActive = myBtn
        }
    },
    components:{
        Navigation,
        Planning_nav,
        notification,
        activities,
        MainProfile,
        user_management,
        addUser,
        Maintain
    },

}