
import Target1 from '../../../../components/graph/PBB/target1.vue'
import Accomplishment1 from '../../../../components/graph/PBB/accomplished1.vue'
import Target2 from '../../../../components/graph/PBB/graph1.vue'
import Target3 from '../../../../components/graph/PBB/graph2.vue'
import Target4 from '../../../../components/graph/PBB/graph3.vue'



import {markRaw} from 'vue'

const hold_AdvanceEd = markRaw(Target2);


export default{
    data(){
        return{
            currentComponent:null
        };
    },
    components:{
        Target1,
        Accomplishment1,
        Target2,
        Target3,
        Target4,


    },
    methods:{
        showComponent(componentName){
            this.currentComponent = componentName
        }
    }
}
