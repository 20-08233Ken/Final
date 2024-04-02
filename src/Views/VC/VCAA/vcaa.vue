<script>
import VCAA_nav from "../../../components/Others/Navigation/VCAA_nav.vue";

import activityList from "../../../components/Others/activityList.vue";

import Swal from "sweetalert2";
import axios from "axios";
import { useCookies } from "vue3-cookies";

import { Form, Field, ErrorMessage } from "vee-validate";
import HE_OCI_1 from './HE_OCI_1.vue'
import HE_OCI_2 from './HE_OCI_2.vue'

import { markRaw } from "vue"

const raw_HE_OCI_1 = markRaw(HE_OCI_1)

export default {

  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },

  components: {
    Form,
    Field,
    ErrorMessage,
    VCAA_nav,
    activityList,
    HE_OCI_1,
    HE_OCI_2


  },
  data() {
    return {
      currentComponent: HE_OCI_1,
      currentBtn: 1,
     
    };
  },
  methods: {
   

    showComponent(myComponent, myBtn1) {
      this.currentComponent = myComponent;
      this.currentBtn = myBtn1;
    },


  },


  mounted() {
    // call here
    // this.fetchProgram_Data()


    let userCookies = this.cookies.get("userCookies");
    let accesstoken = this.cookies.get("userAccessToken");
    let userPosition = this.cookies.get("userPosition");
    let userCollege = this.cookies.get("userCollege");
    let userCampus = this.cookies.get("userCampus");
    this.user = userPosition;
    this.userCookies = userCookies;

    if (this.user == null && this.userCookies == null) {
      this.$router.push("/");
    }


  },
};
</script>
<template>
  <main class="w-full">
    <VCAA_nav />

    <section class="w-full flex justify-between gap-1 pl-3vw ">
      <div class="w-9/12 flex flex-col">

        <span class="w-full flex gap-4 mt-8">
          <button class="btn btn-ghost font-Subheader text-gray-600 " :class="{isBtnActive: currentBtn === 1}" @click="showComponent('HE_OCI_1',1)">
            <v-icon color="teal-darken-3">mdi-numeric-1-box</v-icon>HighEd:
            Outcome Indicator 1
          </button>
          <button class="btn btn-ghost font-Subheader text-gray-600 " :class="{isBtnActive: currentBtn === 2}" @click="showComponent('HE_OCI_2',2)">
            <v-icon color="teal-darken-3">mdi-numeric-2-box</v-icon>HighEd:
            Outcome Indicator 2
          </button>
        </span>

        <div class="w-full flex flex-col shadow-lg px-8 py-2 mt-2">
           <component :is="currentComponent"></component>
        </div>
      </div>

   
        <activityList/>
     
    </section>
  </main>
</template>

<style scoped>
  .isBtnActive{
      background-color: #e5e7eb;
  }
</style>
