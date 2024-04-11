
    import VCs from '../../components/Others/Navigation/VCs_nav.vue'
    import VCAA_nav from '../../components/Others/Navigation/VCAA_nav.vue'
    import vpaa_nav from '../../components/Others/Navigation/vpaa_nav.vue'
    import vprdes_nav from '../../components/Others/Navigation/vprdes_nav.vue'
    import vcrdes_nav from '../../components/Others/Navigation/VCRDES_nav.vue'
    import Planning_navVue from '../../components/Others/Navigation/Planning_nav.vue'

    // VCAA
    import v_OCI_1 from '../../Views/VC/HighEd/v_OCI_1.vue'
    // import v_OC1_1 from '../../Views/VC/HighEd/v_OCI_1.vue'
    import v_OCI_2 from '../../Views/VC/HighEd/v_OCI_2.vue'
    import v_OPI_1 from '../../Views/VC/HighEd/v_OPI_1.vue'
    import v_OPI_2 from '../../Views/VC/HighEd/v_OPI_2.vue'

    import ad_OCI_1 from '../../Views/VC/AdvEd/v_OCI_1.vue'
    import ad_OPI_1 from '../../Views/VC/AdvEd/v_OPI_1.vue'
    import ad_OPI_2 from '../../Views/VC/AdvEd/v_OPI_2.vue'

    // Planning
    import Pl_v_OCI_1 from '../../Views/VC/HighEd/v_OCI_1.vue'
    import Pl_v_OCI_2 from '../../Views/VC/HighEd/v_OCI_2.vue'
    import Pl_v_OPI_1 from '../../Views/VC/HighEd/v_OPI_1.vue'
    import Pl_v_OPI_2 from '../../Views/VC/HighEd/v_OPI_2.vue'

    import Pl_ad_OCI_1 from '../../Views/VC/AdvEd/v_OCI_1.vue'
    import Pl_ad_OPI_1 from '../../Views/VC/AdvEd/v_OPI_1.vue'
    import Pl_ad_OPI_2 from '../../Views/VC/AdvEd/v_OPI_2.vue'



    import OPI1N2Vue from '../../Views/VC/Extension/OPI_1N2.vue'
    import OC from '../../Views/VC/Extension/OC.vue'
    import OPI_2 from '../../Views/VC/Extension/OPI_2.vue'

    import Research from '../../Views/VC/Research.vue'
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
        Planning_navVue,
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
        vprdes_nav,
        vpaa_nav,
        vcrdes_nav,
        VCAA_nav
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
