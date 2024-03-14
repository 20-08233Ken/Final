
import Target1 from '../../../../components/graph/PBB/target1.vue'
import Accomplishment1 from '../../../../components/graph/PBB/accomplished1.vue'
import Target2 from '../../../../components/graph/PBB/target2.vue'
import Target3 from '../../../../components/graph/PBB/target3.vue'
import Target4 from '../../../../components/graph/PBB/target4.vue'
// import AdvanceEd from '../Indicators/AdvanceEd.vue'
// import HigherEd from '../Indicators/HigherEd.vue'


import {markRaw} from 'vue'

const hold_AdvanceEd = markRaw(Target4);


export default{
    data(){
        return{
            
        };
    },
    components:{
        Target1,
        Accomplishment1,
        Target2,
        Target3,
        Target4,


    },

}
