<script setup>

import notification from '../../../components/Profile/notification.vue'
import activities from '../../../components/Profile/activities.vue'


// import notification from '../../../'
// import activities from '../../components/Profile/activities.vue'
</script>

<template>
    <div class="w-full">

        <div class="flex flex-col  pl-6vw ">

            <h3 class="font-Header text-lg text-Red-Rose ">Submissions</h3>

            <div class="w-full flex gap-6 mt-4">

                <span class="flex gap-4 w-3/12 py-5 px-4 rounded-xl shadow-card2 bg-white">
                    <router-link to="/pbb" class="flex w-full gap-4">
                        <h3 class="font-Header text-Red-Darken text-3xl">QRPO</h3>
                        <p>Quarterly</p>
                    </router-link>
                </span>


                <span class="flex w-3/12 gap-4 py-5 px-4 rounded-xl shadow-card2 bg-white">

                    <h3 class="font-Header text-Red-Darken text-3xl">PBB</h3>
                    <p>Performance-based Bonus(Q3)</p>

                </span>
            </div>

            <h3 class="font-Header text-lg text-Red-Rose mt-9">Performance Statistics</h3>

            <div class="w-full flex gap-4 mt-4">
                <span class="flex flex-col items-center px-9 py-9 w-3/12 bg-white shadow-card2 rounded-xl">
                    <div class="radial-progress" style="--value:25; --size:12rem; --thickness: 2rem; color: #d00412;"
                        role="progressbar">25%</div>
                    <p class="mt-4">Completion of overall data</p>
                </span>
                <span class="flex flex-col items-center  px-9 py-9 w-3/12  bg-white shadow-card2 rounded-xl">
                    <div class="radial-progress" style="--value:70; --size:12rem; --thickness: 2rem; color: #d00412;"
                        role="progressbar">70%</div>
                    <p class="mt-4">PBB Grading: Non-Eligible</p>
                </span>

                <span class="flex flex-col gap-4 px-9 py-9 w-5/12  bg-white shadow-card2 rounded-xl">
                    <select class="select w-5/12 font-bold">
                        <option disabled selected>Select year</option>
                        <option>2023</option>
                        <option>2022</option>
                    </select>
                    <span class="flex w-11/12 items-center gap-6">
                        <h6 class="text-Red-Rose">Q1</h6>
                        <progress class="progress progress-error w-9/12" value="100" max="100"></progress>
                        <p class="text-Red-Rose">100%</p>
                    </span>
                    <span class="flex w-11/12 items-center gap-6">
                        <h6 class="text-Red-Rose">Q2</h6>
                        <progress class="progress progress-error w-9/12" value="100" max="100"></progress>
                        <p class="text-Red-Rose">100%</p>
                    </span>
                    <span class="flex w-11/12 items-center gap-6">
                        <h6 class="text-Red-Rose">Q3</h6>
                        <progress class="progress progress-error w-9/12" value="50" max="100"></progress>
                        <p class="text-Red-Rose">50%</p>
                    </span>
                    <span class="flex w-11/12 items-center gap-6">
                        <h6 class="text-Red-Rose">Q4</h6>
                        <progress class="progress progress-error w-9/12" value="0" max="100"></progress>
                        <p class="text-Red-Rose">0%</p>
                    </span>

                </span>
            </div>
        </div>

        <div class="w-full h-1vh mt-8 bg-white">
            <h4 class="font-Subheader bg-Red-Darken text-white py-3 px-3vw" style="font-size: 18px;">MIS: Office Summary of
                Data</h4>

            <table class="w-full " id="mis_table">
                <tr class="w-full py-2" style="background-color: #c4c4c4;">
                    <th class="w-4/12 py-2">Data title / name</th>
                    <th class="w-8/12  py-2">Description </th>
                </tr>

                <tr>
                    <td class="w-4/12 py-4 px-8">
                        <div class="skeleton h-9 " style="width: 90%;"></div>
                    </td>
                    <td class="w-8/12 py-4 px-8">
                        <div class="skeleton h-9 " style="width: 90%;"></div>
                    </td>
                </tr>
                <tr>
                    <td class="w-4/12 py-4 px-8">
                        <div class="skeleton h-9 " style="width: 60%;"></div>
                    </td>
                    <td class="w-8/12 py-4 px-8">
                        <div class="skeleton h-9 " style="width: 60%;"></div>
                    </td>
                </tr>
                <tr>
                <td class="w-4/12 py-4 px-8">
                    <div class="skeleton h-9 " style="width: 65%;"></div>
                </td>
                <td class="w-8/12 py-4 px-8">
                    <div class="skeleton h-9 " style="width: 65%;"></div>
                </td>
            </tr>
            <tr>
                <td class="w-4/12 py-4 px-8">
                    <div class="skeleton h-9 " style="width: 95%;"></div>
                </td>
                <td class="w-8/12 py-4 px-8">
                    <div class="skeleton h-9 " style="width: 95%;"></div>
                </td>
            </tr>
        </table>
    </div>
</div></template>