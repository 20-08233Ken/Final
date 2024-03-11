import QAM_nav from '../../components/Others/Navigation/QAM_nav.vue';
import HE_OPI_2 from '../../Views/QAM/HE_OPI_2.vue';
import AE_OPI_2 from '../../Views/QAM/AE_OPI_2.vue';

import activityList from '../../components/Others/activityList.vue'
import { useCookies } from 'vue3-cookies';
import { markRaw } from "vue"
import { userPosition } from '../../Scripts/cookies';

const hold_oc_1 = markRaw(HE_OPI_2);

export default{
    mounted(){
        const holdCookies = userPosition()
        this.user = holdCookies()
    },
    components:{
        QAM_nav,
        HE_OPI_2,
        AE_OPI_2,
        activityList
        
    },

    data(){
        return{
            currentComponent:HE_OPI_2,
            activeBtn:1,
            user:null
        }
    },
    methods:{
    showComponent(componentName, btnNumber){
        this.currentComponent = componentName
        this.activeBtn = btnNumber
    }
},

}
