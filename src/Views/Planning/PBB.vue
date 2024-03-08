<script src="../../Scripts/Planning/PBB/PBB.js" >
</script>

<template>
   <main class="w-full bg-gray-100">
        <Planning_nav/>

        <span class="flex flex-col bg-Red-Darken w-20 h-20 items-center justify-center text-white rounded-full fixed bottom-10 right-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            <p>PBB</p>
        </span>
        <section class="w-full flex shadow-card2 bg-white rounded-b-2xl">
            <div class="w-5/12 px-6vw py-3vw flex flex-col justify-center">
                <!-- <h1 class="font-Header text-3xl text-Red-Darken">Performance-based Bonus</h1> -->
                <h1 class="font-Header text-4xl text-Red-Darken">Quarterly Physical Report of Operation</h1>

                <span class="flex items-center gap-4">
                    <h2 class="font-Subheader mt-2">Year</h2>
                    <select class="select  w-3/12 mt-2 bg-gray-100">
                        <option disabled selected>FY 2023</option>
                        <option>FY 2021</option>
                        <option>FY 2022</option>
                        <option>FY 2023</option>
                    </select>

                    <h2 class="font-Subheader mt-2">Quarter</h2>
                    <select class="select  w-3/12 mt-2 bg-gray-100">
                        <option disabled selected>Q1</option>
                        <option>Q2</option>
                        <option>Q3</option>
                        <option>Q4</option>
                    </select>
                </span>

            </div>
            
            <div class="w-4/12">
                <LineGraph/>
                <span class="w-full justify-center flex items-center gap-4 relative bottom-8 ">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </span>
                    <p class="text-sm">Current Activity of Offices for the week</p>
                </span>
            </div>

            <div class="w-3/12 flex flex-col items-center justify-center gap-8">
                
                <span class="bg-white shadow-card2 w-7/12 flex items-center h-14 rounded-lg">
                    <h5 class="w-9/12 flex items-center h-14 bg-Red-Rose text-white px-4 rounded-lg">Current Office Ranking</h5>
                    <h5 class="w-3/12 flex justify-center">1st</h5>
                </span>
                <span class="bg-white shadow-card2 w-7/12 flex items-center h-14 rounded-lg">
                    <h5 class="w-7/12 flex items-center h-14 bg-Red-Rose text-white px-4 rounded-lg">PBB Elgibility</h5>
                    <h5 class="w-5/12 flex justify-center text-green-900">Eligible</h5>
                </span>

            </div>
        </section>

        <section class="w-full flex gap-8 mt-8  bg-white shadow-card2">

            <div class="w-4/12 flex flex-col items-center">
                <h1 class="w-full font-Subheader text-lg bg-Red-Darken text-white pl-16 py-3">Progress</h1>

                <span class="w-full flex flex-col justify-center items-center relative">
                    
                        <Progress/>
                    
                    <h1 class="w-full font-Subheader text-3xl flex flex-col justify-center items-center relative" style="position:absolute;top: 40vh0%;">
                        50%
                        <p class="text-base">Completed</p>
                    </h1>
                </span>

                <p class="flex w-full items-center justify-center text-Red-Rose font-Subheader mt-4">Overall PBB Progress Status  </p>


                <span class="flex flex-col w-full items-center justify-center ">
                        <Progress2/>
                    <h1 class="font-Subheader text-3xl flex flex-col justify-center items-center" style="position: relative;top:-50%">
                        50%
                        <p class="text-base">Completed</p>
                    </h1>
                </span>
                
                <span class="flex w-full items-center flex-col gap-2 pl-10" style="position: relative;top:-10%">
                                <span class="flex flex-col w-11/12 justify-center">
                                    <h6 class="text-Red-Rose text-sm">Performance Results</h6>
                                    <span class="flex items-center gap-4">
                                        <progress class="progress progress-error w-9/12" value="50" max="100"></progress>
                                        <p class="text-Red-Rose">50%</p>
                                    </span>
                                </span>
                                <span class="flex flex-col w-11/12 justify-center">
                                    <h6 class="text-Red-Rose text-sm">Process Results</h6>
                                    <span class="flex items-center gap-4">
                                        <progress class="progress progress-error w-9/12" value="75" max="100"></progress>
                                        <p class="text-Red-Rose">75%</p>
                                    </span>
                                </span>
                                <span class="flex flex-col w-11/12 justify-center">
                                    <h6 class="text-Red-Rose text-sm">Financial Results</h6>
                                    <span class="flex items-center gap-4">
                                        <progress class="progress progress-error w-9/12" value="35" max="100"></progress>
                                        <p class="text-Red-Rose">35%</p>
                                    </span>
                                </span>
                                <span class="flex flex-col w-11/12 justify-center">
                                    <h6 class="text-Red-Rose text-sm">Citizen / Client Satisfaction Reports</h6>
                                    <span class="flex items-center gap-4">
                                        <progress class="progress progress-error w-9/12" value="90" max="100"></progress>
                                        <p class="text-Red-Rose">90%</p>
                                    </span>
                                </span>
                                <span class="flex flex-col w-11/12 justify-center">
                                    <h6 class="text-Red-Rose text-sm">Agency Accountability</h6>
                                    <span class="flex items-center gap-4">
                                        <progress class="progress progress-error w-9/12" value="100" max="100"></progress>
                                        <p class="text-Red-Rose">100%</p>
                                    </span>
                                </span>
                </span>

                

            </div>

            <div class="w-8/12 flex flex-col items-center">
                <h1 class="w-full font-Subheader text-lg bg-Red-Darken text-white pl-16 py-3">Tasks</h1>

                <span class="w-11/12 flex justify-between mt-12 ">
                    <h3 class=" w-5/12 py-2 px-4 text-white font-Subheader "
                        style="background: rgb(208,4,18);
                               background: linear-gradient(90deg, rgba(208,4,18,1) 0%, rgba(208,4,18,1) 50%, rgba(255,255,255,1) 100%);"   
                    >Performance Results</h3>
                    <span class="">Deadline: July 19, 2023 (10d)</span>
                </span>

                <span class="flex w-11/12 items-center ml-4 mt-8">
                    <h4 class="flex w-2/12  font-Subheader ">Higher Education </h4>
                        <span class="w-5/12 flex items-center gap-4">
                            <progress class="progress progress-error w-full" value="50" max="100"></progress>
                            <p class="text-Red-Rose text-sm">50%</p>
                        </span>
                </span>
                

                <ul class="w-10/12 mt-4">
                    <router-link to="/PPB_Higher">
                    <li class="flex items-center gap-4"> 
                        <input type="checkbox" checked="checked">
                        Outcome Indicator 1: Percentage of first time licensure exam takers
                    </li>
                    </router-link>

                    <router-link to="/PPB_Higher">
                    <li  class="flex items-center gap-4">
                        <input type="checkbox" checked="checked">
                        Outcome Indicator 2: Percentage of graduates (2 years prior) that are employed
                    </li>
                    </router-link>

                    <router-link to="/PPB_Higher">
                    <li class="flex items-center gap-4">
                        <input type="checkbox" checked="checked">
                        Outcome Indicator 3: Percentage of undergraduate students enrolled in CHED-identified  and RDC-identified priority programs  
                    </li>
                    </router-link>

                    <router-link to="/PPB_Higher">
                    <li class="flex items-center gap-4">
                        <input type="checkbox" checked="checked">
                        Outcome Indicator 4: Percentage of undergraduate programs with accreditation
                    </li>
                    </router-link>
                </ul>





                <span class="flex w-11/12 items-center ml-4 mt-8">
                    <h4 class="flex w-2/12  font-Subheader ">Advanced Education </h4>
                        <span class="w-5/12 flex items-center gap-4">
                            <progress class="progress progress-error w-full" value="25" max="100"></progress>
                            <p class="text-Red-Rose text-sm">25%</p>
                        </span>
                </span>

                <ul class="w-10/12 mt-4">
                    <router-link to="/PPB_Adv">
                    <li class="flex items-center gap-4">
                        <input type="checkbox" checked="checked">
                        Outcome Indicator 1: Percentage of graduate school faculty engaged in research work
                    </li>
                    </router-link>

                    <router-link to="/PPB_Adv">
                    <li  class="flex items-center gap-4">
                        <input type="checkbox" checked="checked">
                        Output Indicator 1 (State Universities): Percentage of graduate students enrolled in research degree program
                    </li>
                    </router-link>

                    <router-link to="/PPB_Adv">
                    <li class="flex items-center gap-4">
                        <input type="checkbox" checked="checked">
                        Output Indicator 2: Percentage of graduate programs with accreditation 
                    </li>
                    </router-link>

                </ul>
               
                <span class="flex w-11/12 items-center ml-4 mt-8">
                    <h4 class="flex w-2/12  font-Subheader ">Research Extension </h4>
                        <span class="w-5/12 flex items-center gap-4">
                            <progress class="progress progress-error w-full" value="45" max="100"></progress>
                            <p class="text-Red-Rose text-sm">45%</p>
                        </span>
                </span>
                <ul class="w-10/12 mt-4">
                            <router-link to="/PBB_Research">
                                <li class="flex items-center gap-4">
                                    <input type="checkbox" checked="checked">
                                    Outcome Indicator 1: Percentage of graduate school faculty engaged in research work
                                </li>
                            </router-link>
                        </ul>


                
            </div>

        </section>
   </main> 
</template>

<style scoped>
    li{
        margin-top: 1rem;
    }
</style>