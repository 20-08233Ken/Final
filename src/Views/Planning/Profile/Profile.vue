<script src="../../../Scripts/Planning/Profile.js"></script>

<template>
  <main class="w-full flex flex-col bg-white pb-6vw">
    <Planning_nav v-if="user === 'Planning'" />
    <Planning_nav v-if="user === 'IPDO'" />
    <section class="w-full flex">
      <div class="w-9/12 flex flex-col">
        <div class="flex flex-col pt-3vw pb-1vw pl-6vw">
          <span class="flex justify-between" style="width: 95%">
            <h1
              class="w-7/12 font-Header text-3xl text-Red-Darken"
              @click="showComponent('MainProfile')"
            >
              OFFICE OF INSTITUTIONAL PLANNING AND DEVELOPMENT
            </h1>

            <span class="flex gap-3 items-center">
              <notification />
              <!-- <v-btn elevation='1' class='rounded-full' >
                                <v-icon>mdi-cogs</v-icon>
                            </v-btn> -->


              <!-- 
                            <button class="text-white bg-emerald-500 px-2 py-2 rounded-full" @click="showComponent('user_management')">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                </svg>
                            </button>

                            <activities /> -->
            </span>
          </span>
          <p class="font-Subheader mt-3 text-lg">Campus: Central</p>

          <span class="w-full flex gap-2 mt-8 justify-end " style="width: 91%">
            <button
                class=" bg-gray-100 rounded-lg flex items-center py-3"
                @click="showComponent('MainProfile', 0)"
                :class="{ active: isActive === 0 }"
                style="width: 13%;"
              >
                <span class="w-full flex items-center justify-center gap-1">
                  <v-icon
                    :class="{
                      activeBtn: isActive === 0,
                      isNotActiveBtn: isActive != 0,
                    }"
                    size="sm"
                    >mdi-home</v-icon
                  >
                  <h6 class="text-xs font-Subheader">Home</h6>
                </span>
              </button>


              <button
                class=" bg-gray-100 rounded-md py-3"
                @click="showComponent('addUser', 1)"
                :class="{ active: isActive === 1 }"
                style="width: 13%;"
              >
                <span class="w-full flex items-center justify-center gap-2">
                  <v-icon
                    :class="{
                      activeBtn: isActive === 1,
                      isNotActiveBtn: isActive != 1,
                    }"
                    size="xs"
                    >mdi-account-plus</v-icon
                  >
                  <h6 class="text-xs font-Subheader">Add</h6>
                </span>
              </button>

              <button
                class=" bg-gray-100 rounded-md py-3"
                @click="showComponent('user_management', 2)"
                :class="{ active: isActive === 2 }"
                style="width: 13%;"
              >
                <span class="w-full flex items-center justify-center gap-2">
                  <v-icon
                    :class="{
                      activeBtn: isActive === 2,
                      isNotActiveBtn: isActive != 2,
                    }"
                    
                    size="xs"
                    >mdi-cogs</v-icon
                  >
                  <h6 class="text-xs font-Subheader">Manage</h6>
                </span>
              </button>

              
              <button
                class=" bg-gray-100 rounded-md py-3"
                @click="showComponent('Maintain', 3)"
                :class="{ active: isActive === 3 }"
                style="width: 13%;"
              >
                <span class="w-full flex items-center justify-center gap-1">
                  <v-icon
                    :class="{
                      activeBtn: isActive === 3,
                      isNotActiveBtn: isActive != 3,
                    }"
                    size="xs"
                    >mdi-wrench</v-icon
                  >
                  <h6 class="text-xs font-Subheader">Maintenance</h6>
                </span>
              </button>

<!-- 
              <v-btn class="bg-gray-100 rounded-full">
                <v-icon
                  :class="{
                    activeBtn: isActive === 4,
                    isNotActiveBtn: isActive != 4,
                  }"
                  >mdi-plus-circle-outline</v-icon
                >
              </v-btn> -->


          </span>
        </div>

        <div class="w-full flex justify-center">
          <component :is="currentComponent"></component>
        </div>
      </div>

      <div
        class="w-3/12 flex flex-col px-8 py-4 bg-white fixed right-0 h-lvh shadow-card2"
      >
        <span class="w-full">
          <VCalendar transparent expanded :attributes="attrs" />
        </span>

        <h4 class="mt-6 font-Header text-Red-Rose">Activities</h4>

        <span class="flex gap-4 mt-4 items-center ml-4">
          <i class="text-Red-Darken">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-9 h-9"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </i>
          <span>
            <p class="font-Subheader">Submission of PBB Documents</p>
            <p class="text-sm">July 11,2024</p>
          </span>
        </span>

        <span class="flex gap-4 mt-4 items-center ml-4">
          <i class="text-Red-Darken">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-9 h-9"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </i>
          <span>
            <p class="font-Subheader">Submission of PBB Documents</p>
            <p class="text-sm">July 11,2024</p>
          </span>
        </span>
      </div>
    </section>
  </main>
</template>

<!-- <script setup>
import { ref } from 'vue';
import Navigation from '../../components/Others/Navigation.vue'
import Planning_nav from '../../components/Others/Navigation/Planning_nav.vue';

const attrs = ref([
  {
    key: 'today',
    highlight: 'red',
    dates: new Date(),
  },
]);
</script> -->

<style scoped>
#mis_table > tr > td {
  border-width: 2px;
  border-color: red;
}

td:first-child,

th:first-child {
  border-width: 0 2px 0 0;
  border-color: rgb(66, 66, 66);
}

:deep(.v-table .v-table__wrapper > table > thead > tr > th) {
    border: 1px solid white;
}

.active {
  background-color: #00695c;
  color: white;
}
.activeBtn {
  color: white;
}
.isNotActiveBtn {
  color: #00695c;
}
</style>
