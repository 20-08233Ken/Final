
    import VCs from '../../components/Others/Navigation/VCs_nav.vue'
    import Chancellor_navVue from '../../components/Others/Navigation/Chancellor_nav.vue'

    import v_OCI_1 from '../../Views/Chancellor/HighEd/v_OCI_1.vue'
   
    import v_OCI_2 from '../../Views/Chancellor/HighEd/v_OCI_2.vue'
    import v_OPI_1 from '../../Views/Chancellor/HighEd/v_OPI_1.vue'
    import v_OPI_2 from '../../Views/Chancellor/HighEd/v_OPI_2.vue'

    import ad_OCI_1 from '../../Views/Chancellor/AdvEd/v_OCI_1.vue'
    import ad_OPI_1 from '../../Views/Chancellor/AdvEd/v_OPI_1.vue'
    import ad_OPI_2 from '../../Views/Chancellor/AdvEd/v_OPI_2.vue'

    import OPI1N2Vue from '../../Views/Chancellor/Extension/OPI_1N2.vue'
    import OC from '../../Views/Chancellor/Extension/OC.vue'
    import OPI_2 from '../../Views/Chancellor/Extension/OPI_2.vue'

    import Research from '../../Views/Chancellor/Research.vue'
    import { markRaw } from "vue"

    import { userPosition } from '../../Scripts/cookies'
    const mark_v_OCI_1 = markRaw(v_OCI_1)
    const mark_v_OCI_2 = markRaw(v_OCI_2)
    const mark_v_OPI_2 = markRaw(v_OPI_2)
    

export default{

    mounted(){
        const holdCookies = userPosition();
        this.user = holdCookies();

        if (this.user == null && this.userCookies == null){
            this.$router.push('/');
        }
    },
    components:{
        VCs,
        v_OCI_1,
        v_OCI_2,
        v_OPI_1,
        v_OPI_2,
        ad_OCI_1,
        ad_OPI_1,
        ad_OPI_2,
        OPI1N2Vue,
        OC,
        OPI_2,
        Research,
        Chancellor_navVue
    },
    data(){
        return{
            currentComponent:v_OCI_1,
            currentBtn:1,
            user:null
        }
    },

    methods:{
        showComponent(myComponent, myBtn1){
                this.currentComponent = myComponent
                this.currentBtn = myBtn1
            }
    }
}
