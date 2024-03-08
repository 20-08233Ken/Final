<script setup>

    // import HE_OCI_1 from '../../Views/Dean/HE_OCI_1.vue'; 
    import Navigation from './Navigation.vue';

</script>

<template>
    <Navigation/>
    <main class="w-full flex items-center">
    <div class="w-7/12 flex flex-col items-center shadow-card2 px-16 py-16 mt-8">
        <h1 class="font-Header text-3xl text-Red-Rose text-center">Performace Result</h1>
        <p class="font-Subheader text-md text-Red-Darken text-center mt-2">Higher Education</p>
        
        <h3 class="w-full flex justify-center py-3 font-Subheader bg-Red-Darken text-white mt-12">Performace Indicator</h3>

        <div class="flex flex-col mt-8">

            <h2 class="font-Subheader text-Red-Darken">Higher Education</h2>

            <div class="w-full flex flex-wrap items-center mt-2">

                <div class="flex items-center gap-2 w-3/12 px-4 py-4 hover:bg-sky-100">
                    <img id ="img-1" src="../../assets/img/icons8-license-50.png" style="width:15%; height: auto;" alt="">
                    <span class="w-9/12 ">
                        <h4 class="font-Subheader text-Red-Rose">Outcome Indicator 1</h4>
                        <p class="text-sm  indicator_title" >Percentage of first-time licensure exam-takers that pass the licensure exams</p>
                    </span>
                </div>

                <div class="flex items-center gap-2 w-3/12 px-4 py-4 hover:bg-sky-100">
                    <img id ="img-1" src="../../assets/img/icons8-graduate-64.png" style="width:15%; height: auto;" alt="">
                    <span class="w-9/12 ">
                        <h4 class="font-Subheader text-Red-Rose">Outcome Indicator 2</h4>
                        <p class="text-sm  indicator_title" >Percentage of first-time licensure exam-takers that pass the licensure exams</p>
                    </span>
                </div>

                <div class="flex items-center gap-2 w-3/12 px-4 py-4 hover:bg-sky-100">
                    <img id ="img-1" src="../../assets/img/icons8-credit-50.png" style="width:15%; height: auto;" alt="">
                    <span class="w-9/12 ">
                        <h4 class="font-Subheader text-Red-Rose">Output Indicator 1</h4>
                        <p class="text-sm  indicator_title" >Percentage of first-time licensure exam-takers that pass the licensure exams</p>
                    </span>
                </div>
                <div class="flex items-center gap-2 w-3/12 px-4 py-4 hover:bg-sky-100">
                    <img id ="img-1" src="../../assets/img/icons8-credit-50.png" style="width:15%; height: auto;" alt="">
                    <span class="w-9/12 ">
                        <h4 class="font-Subheader text-Red-Rose">Output Indicator 2</h4>
                        <p class="text-sm  indicator_title" >Percentage of first-time licensure exam-takers that pass the licensure exams</p>
                    </span>
                </div>
            </div>


            <h2 class="font-Subheader text-Red-Darken mt-8">Advanced Education</h2>
            <div class="w-full flex flex-wrap items-center mt-2">

                <div class="flex items-center gap-2 w-3/12 px-4 py-4 hover:bg-sky-100">
                    <img id ="img-1" src="../../assets/img/icons8-license-50.png " style="width:15%; height: auto;" alt="">
                    <span class="w-9/12 ">
                        <h4 class="font-Subheader text-Red-Rose">Outcome Indicator 1</h4>
                        <p class="text-sm  indicator_title" >Percentage of first-time licensure exam-takers that pass the licensure exams</p>
                    </span>
                </div>

                <div class="flex items-center gap-2 w-3/12 px-4 py-4 hover:bg-sky-100">
                    <img id ="img-1" src="../../assets/img/icons8-graduate-64.png" style="width:15%; height: auto;" alt="">
                    <span class="w-9/12 ">
                        <h4 class="font-Subheader text-Red-Rose">Output Indicator 1</h4>
                        <p class="text-sm  indicator_title" >Percentage of first-time licensure exam-takers that pass the licensure exams</p>
                    </span>
                </div>

                <div class="flex items-center gap-2 w-3/12 px-4 py-4 hover:bg-sky-100">
                    <img id ="img-1" src="../../assets/img/icons8-credit-50.png" style="width:15%; height: auto;" alt="">
                    <span class="w-9/12 ">
                        <h4 class="font-Subheader text-Red-Rose">Output Indicator 2</h4>
                        <p class="text-sm  indicator_title" >Percentage of first-time licensure exam-takers that pass the licensure exams</p>
                    </span>
                </div>
  
            </div>



        </div>
    </div>

    <div class="w-7/12 flex flex-col shadow-card2 px-16 py-16 mt-8">
            <!-- <HE_OCI_1/> -->
    </div>
</main>

</template>

<style scoped>
    .indicator_title{
        max-width: 13rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>