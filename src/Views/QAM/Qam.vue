<script src="../../Scripts/QAM/QAM.js">

</script>

<template>

    <main class="w-full flex flex-col items-center">



        <QAM_nav v-if="user == 'QAM'" />

        <section class="w-full flex justify-between gap-2 pl-3vw" v-if="user == 'QAM'">

            <div class="w-9/12 flex flex-col mt-8">
                <span class="w-full flex gap-4 ">
                    <button class="btn btn-ghost font-Subheader text-gray-600" :class="{ isBtnActive: activeBtn === 1 }"
                        @click="showComponent('HE_OPI_2', 1)">
                        <v-icon color="teal-darken-3">mdi-numeric-1-box</v-icon>HighEd:
                        Output Indicator 2
                    </button>

                    <button class="btn btn-ghost font-Subheader text-gray-600" :class="{ isBtnActive: activeBtn === 2 }"
                        @click="showComponent('AE_OPI_2', 2)">
                        <v-icon color="teal-darken-3">mdi-numeric-2-box</v-icon>AdvEd:
                        Output Indicator 2
                    </button>

                    <!-- <button class="btn btn-ghost font-Subheader text-gray-600" :class="{ isBtnActive: activeBtn === 3 }"
                        @click="showComponent('AE_OCI_1', 3)">
                        <v-icon color="teal-darken-3">mdi-numeric-3-box</v-icon>AdvEd:
                        Outcome Indicator 1
                    </button> -->
                </span>

                <div class='w-full '>
                    <component :is="currentComponent"></component>
                </div>

            </div>
            <!-- <div class="flex flex-col w-3/12  pl-8 h-dvh">

            <h3 class="w-full flex  py-3 font-Subheader mt-8" >Performace Indicator</h3>

            <h4 class="w-full text-white  bg-Red-Darken px-4 py-1 text-0.9">Higher Education</h4>

            <ul class="nav-list mt-2 flex flex-col gap-1">

                <li class="px-4 py-2 text-0.9" :class="{'active':activeBtn===1}" @click="showComponent('HE_OPI_2',1)">Undergraduate programs with accreditation</li>            </ul>

            <h4 class="w-full text-white  bg-Red-Darken px-4 py-1 mt-8 text-0.9">Advanced Education</h4>

            <ul class="mt-2 flex flex-col gap-1">
                <li class="px-4 py-2 text-0.9" :class="{'active':activeBtn===2}" @click="showComponent('AE_OPI_2',2)">Graduate programs with accreditation</li>
            </ul>
        </div> -->

            <!-- <div class="flex-1 flex justify-end gap-4">

            <div class="w-full flex  px-16 py-16 mt-4">
                <span class="flex w-full flex-col   ">
                    <component :is="currentComponent"></component>
                </span>

            </div>

        </div> -->

            <activityList />


        </section>

    </main>
</template>

<style scoped>

    @import url('../../style/QAM/Qam.css');
    .isBtnActive{
        background-color: #e5e7eb;
    }

</style>