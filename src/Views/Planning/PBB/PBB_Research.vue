<script src="../../../Scripts/Planning/PBB/PBB_Research.js">
</script>


<template>

    <main class="w-flex flex flex-col w-full">
        <Planning_nav />

        <section class="w-full flex  px-6vw pt-6vw">
            <div class="w-2/4">
                <h1 class="font-Header text-4xl text-Red-Darken">Quarterly Physical Report of Operation</h1>

            </div>

            <div class="flex gap-1 w-2/4 justify-end items-center">
                <span class="flex items-center gap-4 w-full justify-end">
                    <h2 class="font-Subheader mt-2 text-Red-Rose">Year</h2>
                    <select class="select  w-3/12 mt-2 bg-gray-100">
                        <option disabled selected>FY 2023</option>
                        <option>FY 2021</option>
                        <option>FY 2022</option>
                        <option>FY 2023</option>
                    </select>

                    <h2 class="font-Subheader mt-2 text-Red-Rose">Quarter</h2>
                    <select class="select  w-3/12 mt-2 bg-gray-100">
                        <option disabled selected>Q1</option>
                        <option>Q2</option>
                        <option>Q3</option>
                        <option>Q4</option>
                    </select>
                </span>
            </div>
        </section>

        <section class="w-full flex px-6vw py-3vw">
            <div class="flex flex-col w-4/12">
                <PBB_sideNav />
            </div>


            <div class="flex w-8/12 flex-col">

                <div class="w-full flex gap-2  py-4 ">
                    <v-btn :class="{ 'isActive': myBtn === 1 }" @click="showComponent(1, 'Logs')" class="flex-1"
                        size="large">
                        <p class="font-Subheader normal-case ">Logs</p>
                    </v-btn>
                    <v-btn :class="{ 'isActive': myBtn === 2 }" @click="showComponent(2, 'Target')" class="flex-1 "
                        size="large">
                        <p class="font-Subheader normal-case">Targets</p>
                    </v-btn>
                    <v-btn :class="{ 'isActive': myBtn === 3 }" @click="showComponent(3, 'Indicators')" class="flex-1 "
                        size="large">
                        <p class="font-Subheader normal-case">Indicators </p>
                    </v-btn>
                </div>

                <div class="w-full flex flex-col shadow-card2 rounded-lg pt-4 ">

                    <component :is="currentComponent"></component>

                </div>
                <!-- <div class="text-sm breadcrumbs w-full">
                    <ul>
                        <li class="text-gray-500">
                            <router-link to="/pbb">
                                <a>PBB</a>
                            </router-link>
                        </li> 
                        <li class="text-gray-500">                   
                             <router-link to="/PBB_Research">
                                <a>PBB Logs</a>
                            </router-link></li> 

                    
                    </ul>
                </div> -->
                <!-- <h3 class="font-Header text-Red-Rose text-xl">Research Services</h3>

                <div class="w-full flex-col overflow-x-auto">

                    <h4 class="flex gap-4 items-center mt-4 font-Subheader"> 
                        <span class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                        </span>
                        Outcome Indicator 1: Number of research outputs in the last  three years utilized by the industry or
     by other beneficiaries
                    </h4>

                    <table class="table-zebra mt-4 w-full " id="HE_OCI_1">
                        <tr v-for="(x,index) in OCI_1" :key='index'>
                            <td><span :style="{backgroundColor:getStatusColor(x.status)}"></span></td>
                            <td>{{ x.title }}</td>
                            <td>{{x.date}}</td>
                        </tr>
                    </table>

                    <span class="flex w-full gap-4 justify-end mt-4">
                        <router-link 
                            :to="{
                                name:'PBB_Summary',
                                query:{
                                    program:'PBB_Summary4'
                                }
                                }"
                        >
                        <button class="bg-Red-Rose text-white text-sm w-24 py-1 rounded-xl"> View</button>
                        </router-link>
                    </span>
                </div>


                <div class="w-full flex-col  overflow-x-auto">
                    <h4 class="flex gap-4 items-center mt-4 font-Subheader">
                        <span class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                        </span>
                        Output Indicator 1:  Number of research outputs completed within the year (2023)
                    </h4>
                    <table class="table-zebra mt-4 w-full " id="HE_OCI_1">
                        <tr v-for="(x,index) in OPI_1" :key="index">
                            <td><span :style="{backgroundColor:getStatusColor(x.status)}"></span></td>
                            <td>{{ x.title }}</td>
                            <td>{{x.date}}</td>
                        </tr>
                    </table>

                    <span class="flex w-full gap-4 justify-end mt-4">

                        <router-link 
                            :to="{
                                name:'PBB_Summary',
                                query:{
                                    program:'PBB_Summary4'
                                }
                                }"
                        >
                        <button class="bg-Red-Rose text-white text-sm w-24 py-1 rounded-xl"> View</button>
                        </router-link>
                    </span>

                </div>

                
                <div class="w-full flex-col  overflow-x-auto">
                    <h4 class="flex gap-4 items-center mt-4 font-Subheader">
                        <span class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                        </span>
                        Output Indicator 2:  Percentage of research outputs published in internationally-refereed or CHED recognized journal within the year
                    </h4>
                    <table class="table-zebra mt-4 w-full " id="HE_OCI_1">
                        <tr v-for="(x,index) in OPI_2" :key="index">
                            <td><span :style="{backgroundColor:getStatusColor(x.status)}"></span></td>
                            <td>{{ x.title }}</td>
                            <td>{{x.date}}</td>
                        </tr>
                    </table>

                    <span class="flex w-full gap-4 justify-end mt-4">

                        <router-link 
                            :to="{
                                name:'PBB_Summary',
                                query:{
                                    program:'PBB_Summary4'
                                }
                                }"
                        >
                        <button class="bg-Red-Rose text-white text-sm w-24 py-1 rounded-xl"> View</button>
                        </router-link>
                    </span>

                </div> -->
            </div>
        </section>

    </main>

</template>

<style scoped>
   
   @import url('../../../style/Planning/PBB/PBB_Research.css');
    </style>