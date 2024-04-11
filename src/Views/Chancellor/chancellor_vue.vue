<script src="../../Scripts/Chancellor/chancellor.js">
</script>

<template>

    <main class="w-full">
        <Chancellor_navVue v-if="user === 'Chancellor'"/> 
        <section class="w-full flex gap-16 px-3vw mt-8">

            <div class="w-3/12  flex flex-col">
                <h3 class="w-full flex px-4 py-1 font-Subheader bg-gray-700 text-white">Performace Indicator</h3>
                <h4 class="w-full  text-white  bg-Red-Darken px-4 py-1">Higher Education</h4>

                <h5 class=" ml-2 px-2 py-1 mt-2" @click="showComponent('v_OCI_1', 1)"
                    :class="{ 'isActive': currentBtn === 1 }">Outcome Indicator 1</h5>
                <h5 class=" ml-2 px-2 py-1" @click="showComponent('v_OCI_2', 2)" :class="{ 'isActive': currentBtn === 2 }">
                    Outcome Indicator 2</h5>
                <h5 class=" ml-2 px-2 py-1" @click="showComponent('v_OPI_1', 3)" :class="{ 'isActive': currentBtn === 3 }">
                    Output Indicator 1</h5>
                <h5 class=" ml-2 px-2 py-1" @click="showComponent('v_OPI_2', 4)" :class="{ 'isActive': currentBtn === 4 }">
                    Output Indicator 2</h5>

                <h4 class="w-full mt-4 text-white  bg-Red-Darken px-4 py-1">Advanced Education</h4>

                <h5 class=" ml-2 px-2 py-1 mt-2" @click="showComponent('ad_OCI_1', 5)"
                    :class="{ 'isActive': currentBtn === 5 }">Outcome Indicator 1</h5>
                <h5 class=" ml-2 px-2 py-1 mt-2" @click="showComponent('ad_OPI_1', 6)"
                    :class="{ 'isActive': currentBtn === 6 }">Output Indicator 1</h5>
                <h5 class=" ml-2 px-2 py-1 mt-2" @click="showComponent('ad_OPI_2', 7)"
                    :class="{ 'isActive': currentBtn === 7 }">Output Indicator 2</h5>

                <h4 class="w-full mt-4  text-white  bg-Red-Darken px-4 py-1">Research Program</h4>
                <h5 class="ml-2 px-2 py-1 mt-2" @click="showComponent('Research', 8)"
                    :class="{ 'isActive': currentBtn === 8 }">Output and Outcome Indicator </h5>

                <h4 class="w-full mt-4 text-white  bg-Red-Darken px-4 py-1">Technical Extension Service</h4>
                <h5 class=" ml-2 px-2 py-1 mt-2" @click="showComponent('OC', 9)" :class="{ 'isActive': currentBtn === 9 }">
                    Outcome Indicator 1</h5>
                <h5 class=" ml-2 px-2 py-1 mt-2" @click="showComponent('OPI1N2Vue', 10)"
                    :class="{ 'isActive': currentBtn === 10 }">Output Indicator 1 and 3 </h5>
                <h5 class=" ml-2 px-2 py-1 mt-2" @click="showComponent('OPI_2', 11)"
                    :class="{ 'isActive': currentBtn === 11 }">Output Indicator 2</h5>
            </div>

            <div class="flex flex-col w-9/12 shadow-card2 px-3vw py-3vw rounded-lg">
                <component :is="currentComponent"></component>
            </div>

        </section>
    </main>
   


</template>

<style scoped>


   
  
    @import url('../../style/Chancellor/chancellor.css');

</style>