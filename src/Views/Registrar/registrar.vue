<script src="../../Scripts/Registrar/registrar.js">
</script>

<template>

    <main class="w-full flex flex-col">

        <Registrar_nav v-if="user == 'Registrar'" />

        <section class="w-full flex  justify-between  gap-2" v-if="user == 'Registrar'">

            <div class="flex flex-col pl-8 h-dvh w-3/12" style="width: 20%;">

                <h3 class="w-full flex  py-3 font-Subheader mt-8 text-0.9">Performace Indicator</h3>

                <h4 class="w-full text-white  bg-Red-Darken px-4 py-1  text-0.9">Higher Education</h4>

                <ul class="nav-list mt-2 flex flex-col gap-1">

                    <li class="px-4 py-2  text-0.9" :class="{ 'active': activeBtn === 1 }" @click="showComponent('HE_OPI_1', 1)">
                        Undergraduate students enrolled in CHED-identified and RDC-identified priority programs</li>
                </ul>

                <h4 class="w-full text-white  bg-Red-Darken px-4 py-1 mt-8  text-0.9">Advanced Education</h4>

                <ul class="mt-2 flex flex-col gap-1  text-0.9">
                    <li class="px-4 py-2  text-0.9" :class="{ 'active': activeBtn === 2 }" @click="showComponent('AE_OPI_1', 2)">
                        Graduate students enrolled in research degree program</li>
                </ul>

                <h4 class="w-full text-white  bg-Red-Darken px-4 py-1 mt-8  text-0.9">Graduates</h4>
                <ul class="mt-2 flex flex-col gap-1">
                    <li class="px-4 py-2  text-0.9" :class="{ 'active': activeBtn === 3 }" @click="showComponent('PRC', 3)">
                        Graduates by Institution, Program, and Sex</li>
                </ul>

            </div>

            <div class=" w-7/12 flex flex-col gap-4 mt-8">

                <!-- <div class="flex w-7/12  px-8 mt-4"> -->
                    <!-- <span class="w-full flex flex-col   "> -->
                        <component :is="currentComponent"></component>
                    <!-- </span> -->

                <!-- </div> -->

            </div>

            <activityList />

        </section>

    </main>
</template>

<style scoped>
    .indicator_title{
        max-width: 13rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .active {
        /* background-color: rgb(207 250 254); */
        background-color:rgb(255, 240, 221);
    
    }

    .nav-list > li:hover{
        background-color:rgb(255, 240, 221);
        

    }

</style>