<script>
import VCAA_nav from "../../../components/Others/Navigation/VCAA_nav.vue";
import HE_OCI_1 from "../../Dean/HE_OCI_1.vue";
import HE_OCI_2 from "../../Dean/HE_OCI_2.vue";
import activityList from "../../../components/Others/activityList.vue";
import form1 from "./form1.vue";
import table1 from "./table1.vue";

export default {
  components: {
    VCAA_nav,
    activityList,
    HE_OCI_1,
    HE_OCI_2,
    form1,
    table1
  },
  data() {
    return {
      currentComponent: form1,
      currentBtn: 1,
      user: null,
    };
  },
  methods: {
    showComponent(myComponent, myBtn1) {
      this.currentComponent = myComponent;
      this.currentBtn = myBtn1;
    },
  },
};
</script>
<template>
  <main class="w-full">
    <VCAA_nav />

    <section class=" w-full flex justify-between gap-1 ">
      <div class="flex flex-col pl-8 h-dvh mt-4" style="width: 20%;">
            <h3 class="w-full flex px-4 py-1 font-Subheader bg-gray-700 text-white">
            Performace Indicator
            </h3>
            <h4 class="w-full text-white bg-Red-Darken px-4 py-1">
            Higher Education
            </h4>

            <h5
            class="ml-2 px-2 py-1 mt-2"
            @click="showComponent('form1', 1)"
            :class="{ isActive: currentBtn === 1 }"
            >
            Outcome Indicator 1
            </h5>
            <h5
            class="ml-2 px-2 py-1"
            @click="showComponent('table1', 2)"
            :class="{ isActive: currentBtn === 2 }"
            >
            Outcome Indicator 2
            </h5>
      </div>

      <div class="flex flex-col w-7/12 shadow-card2 px-3vw py-8 rounded-lg gap-4">
            <component :is="currentComponent"></component>
      </div>


      <activityList/>
   
    </section>
  </main>
</template>

<style scoped>
    .isActive{
        background-color:rgb(255, 240, 221);
    }
</style>
