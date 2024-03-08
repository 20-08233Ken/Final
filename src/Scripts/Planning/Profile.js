import Navigation from '../../components/Others/Navigation.vue'
import Planning_nav from '../../components/Others/Navigation/Planning_nav.vue';
import notification from '../../components/Profile/notification.vue'
import activities from '../../components/Profile/activities.vue'
import MainProfile from '../../Views/Planning/Profile/main.vue'
import user_management from '../../Views/Planning/Profile/user_management.vue'
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
    

    setup(){
        const {cookies} =useCookies();
        return {cookies}
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

            currentComponent:MainProfile
        }
    },
    mounted(){
        let userCookies = this.cookies.get('userCookies');
        let accesstoken = this.cookies.get('userAccessToken');
        let userPosition = this.cookies.get('userPosition');
        let userCollege = this.cookies.get('userCollege');
        let userCampus = this.cookies.get('userCampus');
        // console.log(userCookies);
        // console.log(userPosition);
        this.user = userPosition;
        this.userCookies = userCookies;
  
        if (this.user == null && this.userCookies == null){
            this.$router.push('/');
        }
       
    },
    methods:{
        showComponent(getComponent){
            this.currentComponent =getComponent
        }
    },

    
    components:{
        Navigation,
        Planning_nav,
        notification,
        activities,
        MainProfile,
        user_management
    },

}