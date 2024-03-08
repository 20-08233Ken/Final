<script setup>
    import AEmodal2 from './AEmodal2.vue';
    import AEmodal3 from './AEmodal3.vue';
</script>

<template>
    <div class="flex flex-col w-full">


        <div class="flex items-center w-full bg-white mt-8 shadow-card2 py-6 px-6 rounded-lg">
            <span class="flex px-5" style="color: forestgreen;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
            </span>

            <h5 class="w-6/12 font-Subheader ">Percentage of graduate students enrolled in research degree programs</h5>

            <span class="flex w-5/12 justify-end  gap-4 ">

                <AEmodal2/>
                <router-link to="/validateMain" class="w-3/12"> 
                    <v-btn class="bg-teal-accent-4 w-full rounded-md w-3/12">Validate</v-btn>
                </router-link>
            </span>
        </div>

        <div class="flex items-center w-full bg-white mt-8 shadow-card2 py-6 px-6 rounded-lg">
            <span class="flex px-5" style="color: forestgreen;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
            </span>

            <h5 class="w-6/12 font-Subheader ">Percentage of accredited graduate Programs</h5>

            <span class="flex w-5/12 justify-end  gap-4 ">

                <AEmodal3/>
                <router-link to="/validateMain" class="w-3/12"> 
                    <v-btn class="bg-teal-accent-4 w-full rounded-md w-3/12">Validate</v-btn>
                </router-link>
            </span>
        </div>


        <!-- <div class="flex flex-col items-end w-full bg-white mt-8 shadow-card2 px-10 py-10">
            
            <span class="flex items-center gap-2 w-full ">
                <span class="px-5" style="color: forestgreen;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                </span>

                <h5 class="w-8/12 font-Subheader">Percentage of graduate students enrolled in research degree programs</h5>
                <AEmodal2/>
            </span>

            <ol class="flex flex-col mt-4  w-10/12" style="list-style-type: decimal;">
                <li>List undergraduate programs in ALL campuses</li>
                <li>Spell out program name</li>
                <li>Incomplete entries will be DISREGARDED</li>
            </ol>

            <h5 class="mt-4 w-11/12"><b>REFERENCE :CHED Memorandum Order No s. 2019, CMO No.10, s. 2021</b></h5>

            <span class="flex w-11/12">
                <h5 class="w-2/4"><b>Means of Verification</b></h5>
                <ol class="auto ml-8" style="list-style-type: decimal;">
                    <li>Duly certified enrollment list 1st Sem AY 2023-2024</li>
                    <li>For programs claimed as priority but are not listed in CMO 5 s. 2019, CMO 10 s. 2021, submit RDC or any similar government council resolution/certification that the programs are priority programs</li>
                </ol>
            </span>

        </div> -->

        <!-- <div class="flex flex-col items-end w-full shadow-card2 px-10 py-10" style="background-color: #F0F8FF;">

            <span class="flex items-center gap-2 w-full ">
                <span class="px-5" style="color: forestgreen;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                </span>

                <h5 class="w-8/12 font-Subheader">Percentage of accredited graduate Programs</h5>
                <AEmodal3/>
            </span>

            <ol class="flex flex-col mt-4  w-10/12" style="list-style-type: decimal;">
                <li>List undergraduate programs in ALL campuses</li>
                <li>Choose ACCREDITATION LEVEL/STATUS (put a check mark corresponding the accreditation level in column A-F). Please note that a CANDIDATE STATUS is not an accreditation level.</li>
                <li>Please indicate period of validity, including programs with CANDIDATE STATUS (CS), VALIDITY PERIOD AS OF DECEMBER 31, 2023.</li>
                <li>For programs that are NOT ACCREDITED (NA), indicate the reason for non-accreditation in column 5. Choose from drop-down list</li>
                <li>ncomplete entries will be DISREGARDED</li>
            </ol>

            <h5 class="mt-4 w-11/12"><b>MEANS OF VERIFICATION:</b> Accreditation certificates; if certificates are not available, AACCUP letter/notice/resolution of accredited programs</h5>



        </div> -->

    </div>
    
</template>