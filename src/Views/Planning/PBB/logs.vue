<template>
                 <span class="w-full flex justify-between items-center mt-4 px-12">  
                    <h3 class="font-Header text-Red-Rose text-xl">Higher Education Logs</h3>
                </span>
                
                <div class="w-full flex-col overflow-x-auto px-12">
 

                    <v-expansion-panels class="mt-4 ">
                        <v-expansion-panel>
                            <v-expansion-panel-title >
                                <h4 class="flex gap-4 items-center  font-Subheader"> 
                                    <span class="text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                        </svg>
                                    </span>
                                    Outcome Indicator 1: Percentage of first-time licensure exam takers that pass the licensure exams
                                </h4>
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>

                                <table class="table-zebra w-full border-0" id="HE_OCI_1">
                                    <tr v-for="(x,index) in OCI_1" :key='index'>
                                        <td><span :style="{backgroundColor:getStatusColor(x.status)}"></span></td>
                                        <td>{{ x.title }}</td>
                                        <td>{{x.date}}</td>
                                    </tr>
                                </table>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>

                    <v-expansion-panels class="mt-4">
                        <v-expansion-panel>
                            <v-expansion-panel-title>
                                <h4 class="flex gap-4 items-center  font-Subheader"> 
                                    <span class="text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                        </svg>
                                    </span>
                                    Outcome Indicator 2: Percentage of graduates (2 years prior) that are employed
                                </h4>
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>

                                <table class="table-zebra w-full border-0" id="HE_OCI_1">
                                    <tr v-for="(x,index) in OCI_1" :key='index'>
                                        <td><span :style="{backgroundColor:getStatusColor(x.status)}"></span></td>
                                        <td>{{ x.title }}</td>
                                        <td>{{x.date}}</td>
                                    </tr>
                                </table>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>

                    <v-expansion-panels class="mt-4">
                        <v-expansion-panel>
                            <v-expansion-panel-title>
                                <h4 class="flex gap-4 items-center  font-Subheader"> 
                                    <span class="text-green-600">
                                        <span class="text-Red-Rose">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        </span>
                                    </span>
                                    Output Indicator 1: Percentage of undergraduate students enrolled in CHED-identified and RDC-identified priority programs
                                </h4>
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>

                                <table class="table-zebra mt-4 w-full " id="HE_OCI_1">
                                    <tr v-for="(x,index) in OPI_1" :key="index">
                                        <td><span :style="{backgroundColor:getStatusColor(x.status)}"></span></td>
                                        <td>{{ x.title }}</td>
                                        <td>{{ x.date }}</td>
                                    </tr>
                                </table>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>

                    <v-expansion-panels class="mt-4">
                        <v-expansion-panel>
                            <v-expansion-panel-title>
                                <h4 class="flex gap-4 items-center  font-Subheader"> 
                                    <span class="text-Red-Rose">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </span>
                                    Output Indicator 2: Percentage of undergraduate programs with accreditation                                </h4>
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>


                                <table class="table-zebra mt-4 w-full " id="HE_OCI_1">
                                    <tr v-for="(x,index) in OPI_2" :key="index">
                                        <td><span :style="{backgroundColor:getStatusColor(x.status)}"></span></td>
                                        <td>{{x.title }} </td>
                                        <td>{{x.date }} </td>
                                    </tr>
                                 </table>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
    
                </div>

</template>