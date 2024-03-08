<script setup>
    // import modal1 from './HEmodal1.vue';
    // import modal2 from './HEmodal2.vue';
    import RS_modal1 from './RS_modal1.vue'
</script>


<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-col items-end w-full bg-white mt-8 shadow-card2 px-10 py-10">

            <span class="flex items-center gap-2 w-full ">
                <span class="px-5" style="color: forestgreen;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                </span>

                <h5 class="w-8/12 font-Subheader">Output Indicator 1: Number of research outputs completed within the year (2023)</h5>
                
                <!-- <button class="bg-Red-Rose text-white text-sm py-2 px-4 rounded-md ml-24 shadow-card2">Data Entry</button> -->
                <RS_modal1/>
            </span>

            <span class="flex items-center gap-2 w-full mt-4 ">
                <span class="px-5" style="color: forestgreen;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                </span>
                 <h5  class="w-full font-Subheader">Output Indicator 2: Percentage of research outputs published in internationally-refereed</h5>


            </span>

            <span class="flex items-center gap-2 w-full mt-4 ">
                <span class="px-5" style="color: forestgreen;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                </span>
                 <h5  class="w-full font-Subheader">Outcome Indicator 1: Number of research outputs in the last three years utilized by the industry or by other beneficiaries</h5>

            </span>          
          
            <ol class="flex flex-col mt-4  w-10/12" style="list-style-type: decimal;">
                <li>List all researches in the last three years in the following order (FY 2021, 2022, 2023)</li>
                <li>For State Colleges, please fill-up information for PRESENTATIONS, may include on-going researches started in FY 2021, 2022, and 2023</li>
                <li>For RESEARCH PRESENTATION, in-house presentations/reviews ARE NOT CONSIDERED</li>
                <li>For State Universiites, please fill-up information for PUBLICATIONS</li>
                <li>Incomplete entries will be DISREGARDED</li>
            </ol>


            <span class="flex w-11/12 mt-8">
                <h5 class="w-2/4"><b>Means of Verification</b></h5>
                <ol class="auto ml-8 flex flex-col gap-2" style="list-style-type: decimal;">
                    <li> <b>Research Abstract</b></li>
                    <li> <b>Presentation: </b><br>a. Conference Proceedings / Program  <br>b. Proof of attendance</li>
                    <li> <b>Publication:</b>
                        <br>a. Title Page of Journal
                        <br>b. Table of Contents
                        <br>c. Published research with actual pages of journal
                        <br><br>NOTE: Journals, publishers, etc. will not be considered if tagged in Beal's List / Predatory Journals
                        
                    </li>

                    <li>
                       <b>Utilization</b>
                        <br>a. MOUs/MOAs
                        <br>b. Extension reports, certification from beneficiaries, 
                    </li>
                </ol>
            </span>

        </div>

    </div>
    
</template>