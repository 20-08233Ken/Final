<script src="../../../Scripts/Planning/PBB/PBB_Higher.js">
</script>
<template>
    <main class="w-full flex flex-col">
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


            <div class="flex w-8/12 flex-col ">

                <div class="w-full flex gap-2  py-4 ">

                    <v-btn :class="{'isActive':myBtn === 1}" @click="showComponent(1,'Logs')" class="flex-1"
                        size="large">
                        <p class="font-Subheader normal-case ">Logs</p>
                    </v-btn>
                    <v-btn :class="{'isActive':myBtn === 2}" @click="showComponent(2,'Target')" class="flex-1 "
                        size="large">
                        <p class="font-Subheader normal-case">Targets</p>
                    </v-btn>
                    <v-btn :class="{'isActive':myBtn === 3}" @click="showComponent(3,'Indicators')" class="flex-1 "
                        size="large">
                        <p class="font-Subheader normal-case">Indicators </p>
                    </v-btn>
                </div>

                <div class="w-full flex flex-col shadow-card2 rounded-lg py-4 ">

                    <component :is="currentComponent"></component>

                </div>

            </div>
        </section>

    </main>

</template>

<style scoped>

    @import url('../../../style/Planning/PBB/PBB_Higher.css');
    
</style>