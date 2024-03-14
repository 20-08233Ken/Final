<script setup>
    import modal1 from './modal/HEmodal1.vue'
    import modal2 from './modal/HEmodal2.vue'
    import modal3 from './modal/HEmodal3.vue'
    import modal4 from './modal/HEmodal4.vue'
</script>
<template>
    <div class="w-full flex flex-col px-12 pb-8">
        <p class="font-Header text-Red-Rose text-lg mt-4">Higher Education</p>

        <span class="w-100 flex items-center mt-4 gap-3">

            <span class="w-full">

                <h2 class="font-Subheader "> Outcome Indicator</h2>

                <div class="flex items-center w-full bg-white mt-4 shadow-card2 py-4 px-6 rounded-lg">
                    <span class="flex px-5" style="color: forestgreen;">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                    </span>

                    <h5 class="w-6/12 font-Subheader text-0.9">Percentage of first time licensure exam takers</h5>

                    <span class="flex w-5/12 justify-end  gap-4 ">

                        <modal1 />
                        <router-link to="/" class="w-3/12">
                            <v-btn class="bg-teal-accent-4 w-full rounded-md w-3/12">Validate</v-btn>
                        </router-link>
                    </span>
                </div>


                <div class="flex items-center w-full bg-white mt-4 shadow-card2 py-4 px-6 rounded-lg">
                    <span class="flex px-5" style="color: forestgreen;">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                    </span>

                    <h5 class="w-6/12 font-Subheader text-0.9">Percentage of graduates (2 years prior) that are employed</h5>

                    <span class="flex w-5/12 justify-end  gap-4 ">

                        <modal2 />
                        <router-link to="/" class="w-3/12">
                            <v-btn class="bg-teal-accent-4 w-full rounded-md w-3/12">Validate</v-btn>
                        </router-link>
                    </span>
                </div>

                <h2 class="font-Subheader mt-10 "> Output Indicator</h2>

                <div class="flex items-center w-full bg-white mt-4 shadow-card2 py-4 px-6 rounded-lg">
                    <span class="flex px-5" style="color: forestgreen;">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                    </span>

                    <h5 class="w-6/12 font-Subheader text-0.9 ">Percentage of undergraduate students enrolled in CHED-identified
                        and RDC-identified priority programs</h5>

                    <span class="flex w-5/12 justify-end  gap-4 ">

                        <modal3 />
                        <router-link to="/" class="w-3/12">
                            <!-- <button class="btn btn-sm  btn-success text-white w-full">Validate</button> -->
                            <v-btn class="bg-teal-accent-4 w-full rounded-md w-3/12">Validate</v-btn>
                        </router-link>
                    </span>
                </div>



                <div class="flex items-center w-full bg-white mt-4 shadow-card2 py-4 px-6 rounded-lg">
                    <span class="flex px-5" style="color: forestgreen;">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                    </span>

                    <h5 class="w-6/12 font-Subheader text-0.9">Percentage of undergraduate programs with accreditation</h5>

                    <span class="flex w-5/12 justify-end  gap-4 ">

                        <modal4 />
                        <router-link to="/" class="w-3/12">
                            <!-- <button class="btn btn-sm  btn-success text-white w-full">Validate</button> -->
                            <v-btn class="bg-teal-accent-4 w-full rounded-md w-3/12">Validate</v-btn>

                        </router-link>
                    </span>
                </div>


            </span>

            <!-- <span class="w-full flex mt-4 gap-3">
                <button :class="{'active':activeButton===1}" @click="showComponent('OPI',1)" class="btn border-1 w-3/12 py-2 px-2 rounded-md font-Subheader">Output Indicator</button>
                <button :class="{'active':activeButton===2}" @click="showComponent('OCI',2)" class="btn border-1 w-3/12 py-2 px-2 rounded-md font-Subheader">Outcome Indicator</button>
            </span>
         
            <v-select
            class="w-5/12"
            label="Department"
            v-model="selected"
            :items="department"
            item-title="dep"
            item-value="id"
            variant="outlined"
            
            ></v-select> -->
        </span>
    </div>
</template>