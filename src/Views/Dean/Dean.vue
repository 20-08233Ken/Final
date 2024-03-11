<script src="../../Scripts/Dean/Dean.js">
</script>

<style scoped>
@import url('../../style//Dean/dean_style.css');
</style>

<template>
    <main class="w-full flex flex-col items-center">
        <Dean_nav v-if="user == 'Dean'" />
        <section class='w-full flex justify-between gap-8' v-if="user == 'Dean'">

            <div class="flex flex-col w-3/12  pl-8 h-dvh">

                <h3 class="w-full flex  py-3 font-Subheader mt-8">Performace Indicator</h3>

                <h4 class="w-full text-white  bg-Red-Darken px-4 py-1">Higher Education</h4>

                <ul class="nav-list mt-2 flex flex-col gap-1">
                    <li class="px-4 py-2" :class="{ 'active': activeBtn === 1 }" @click="showComponent('HE_OCI_1', 1)">
                        First-time
                        licensure exam-takers that pass the licensure exams </li>
                    <li class="px-4 py-2" :class="{ 'active': activeBtn === 2 }" @click="showComponent('HE_OCI_2', 2)">
                        Graduates
                        (2 years prior) that are employed</li>
                </ul>

                <h4 class="w-full text-white  bg-Red-Darken px-4 py-1 mt-8">Advanced Education</h4>

                <ul class="mt-2 flex flex-col gap-1">
                    <li class="px-4 py-2" :class="{ 'active': activeBtn === 3 }" @click="showComponent('AE_OCI_1', 3)">
                        Graduate
                        school faculty engaged in research work</li>

                </ul>

            </div>
            <div class="w-7/12 flex justify-end gap-4" v-if="user == 'Dean'">

                <div class="w-full flex  px-16 py-16 ">
                    <span class="flex w-full flex-col   ">
                        <component :is="currentComponent"></component>
                    </span>

                </div>

            </div>

            <activityList />



        </section>



    </main>
</template>
