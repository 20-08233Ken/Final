
import VCs from '../../components/Others/Navigation/VCs_nav.vue'
import Planning_navVue from '../../components/Others/Navigation/Planning_nav.vue';
import { useCookies } from "vue3-cookies";
import { userPosition } from '../../Scripts/cookies';
import VCAA_nav from '../../components/Others/Navigation/VCAA_nav.vue';

export default {
    mounted() {
        const holdCookies = userPosition()
        this.user = holdCookies()

    },
    data() {
        return{
            user: null
        }
    },
    components: {
        VCs,
        Planning_navVue,
        VCAA_nav
    }
}

