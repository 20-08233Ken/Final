import Registrar_nav from '../../components/Others/Navigation/Registrar_nav.vue';
    import HE_OPI_1 from '../../Views/Registrar/HE_OPI_1.vue';
    import AE_OPI_1 from '../../Views/Registrar/AE_OPI_1.vue';
    import PRC from '../../Views/Registrar/PRC.vue'
    import { markRaw } from "vue"
    import activityList from '../../components/Others/activityList.vue'
    
    import { userPosition } from '../cookies';
    
    const hold_oc_1 = markRaw(HE_OPI_1);
    import { useCookies } from 'vue3-cookies';

export default{
    mounted(){
        const holdCookies = userPosition()
        this.user = holdCookies()
    },
    components:{
        Registrar_nav,
        HE_OPI_1,
        AE_OPI_1,
        activityList,
        PRC
        
    },

    data(){
        return{
            currentComponent:HE_OPI_1,
            activeBtn:1,
            user:null,
        }
    },
    methods:{
        showComponent(componentName, btnNumber){
            this.currentComponent  = componentName
            this.activeBtn = btnNumber
        },

    },

}