<script src="../../Scripts/Dean/Dean.js"></script>

<style scoped>
@import url("../../style//Dean/dean_style.css");
</style>

<template>
  <main class="w-full flex flex-col items-center">
    <Dean_nav v-if="user == 'Dean'" />

    <section class="w-full flex justify-between gap-2 pl-3vw" v-if="user == 'Dean'">

      <div class="w-9/12 flex flex-col mt-8" v-if="user == 'Dean'">
        <span class="w-full flex gap-4 ">
            <button
                    class="btn btn-ghost font-Subheader text-gray-600"
                    :class="{ isBtnActive: activeBtn === 1 }"
                    @click="showComponent('HE_OCI_1', 1)"
            >
                    <v-icon color="teal-darken-3">mdi-numeric-1-box</v-icon>HighEd:
                    Outcome Indicator 1
            </button>

            <button
                    class="btn btn-ghost font-Subheader text-gray-600"
                    :class="{ isBtnActive: activeBtn === 2 }"
                    @click="showComponent('HE_OCI_2', 2)"
            >
                    <v-icon color="teal-darken-3">mdi-numeric-2-box</v-icon>HighEd:
                    Outcome Indicator 2
            </button>

            <button
                    class="btn btn-ghost font-Subheader text-gray-600"
                    :class="{ isBtnActive: activeBtn === 3 }"
                    @click="showComponent('AE_OCI_1', 3)"
            >
                    <v-icon color="teal-darken-3">mdi-numeric-3-box</v-icon>AdvEd:
                    Outcome Indicator 1
            </button>
      </span>

        <div class='w-full '>
            <component :is="currentComponent"></component>
        </div>

        <!-- <div class=" flex-1  px-4 mt-8">
                    <span class="flex flex-1 flex-col   ">
                        <component :is="currentComponent"></component>
                    </span>

                </div> -->
      </div>

      <activityList />
    </section>
  </main>
</template>

<style scoped>
    .isBtnActive{
        background-color: #e5e7eb;
    }
</style>
