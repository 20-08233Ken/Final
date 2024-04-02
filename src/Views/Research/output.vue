<script src="../../Scripts/Research/output.js">

</script>

<template>

    <div class="w-full flex shadow-card2 py-5 px-8 gap-4 bg-gray-700 mt-8">

        <span class="flex flex-col justify-center w-9/12">
            <h1 class="w-full font-Header text-white">
                Percentage of first-time licensure exam takers that pass the
                licensure exams
            </h1>

            <p class="w-full text-sm text-gray-400">
                Higher Education Program: Outcome Indicator 1
            </p>
            <p class="w-full text-sm text-gray-400">College of Engineering</p>
        </span>

        <span class="flex w-3/12 items-center justify-end gap-3">
            <!-- <notification /> -->
            <button class="btn btn-sm w-4/12 font-Subheader text-xs" @click="changeData(1)"
                :class="{ isBtnActive: isDataActive === 1 }">
                <v-icon>mdi-table</v-icon>Table
            </button>
            <button class="btn btn-sm w-4/12 font-Subheader text-xs" @click="changeData(2)"
                :class="{ isBtnActive: isDataActive === 2 }">
                <v-icon>mdi-form-select</v-icon> Form
            </button>
        </span>
    </div>

    <div  class="w-full flex flex-col" v-if="isDataActive === 1">
        <v-data-table :headers="headers" :items="hepData" class="elevation-1 " items-per-page="10"
            loading-text="Loading... Please wait" :loading="myLoading" :search="search"
            style="width: 100%; overflow-x: scroll">
        
        </v-data-table>
    </div>

</template>


<style scoped>
.isDataNotActive {
    background-color: #94080D;
    color: white;
}


.isDataActive {
    background-color: #94080D;
    color: white;
}


.isBtnActive {
  background-color: #6b7280;
  color: white;
}
</style>