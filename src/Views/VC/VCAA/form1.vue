<script>
    
    export default{
        data(){
            return{
                isDataActive: 1,
            }
        },

        methods:{
            changeData(isActive){
                this.isDataActive = isActive
            }
        }
    }


</script>


<template>
  <div class="flex shadow-card2 py-8 px-8 rounded-lg gap-4 bg-gray-700">
    <i class="mt-4" style="color: #befff7">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-7 h-7"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
        />
      </svg>
    </i>
    <span class="flex flex-col justify-center w-9/12">
      <h1 class="w-full font-Header text-lg text-white">
        Percentage of first-time licensure exam takers that pass the licensure
        exams
      </h1>

      <p class="w-full text-0.9 text-gray-400">
        Higher Education Program: Outcome Indicator 1
      </p>
      <p class="w-full text-0.9 text-gray-400">College of Engineering</p>
    </span>

    <span class="flex w-3/12 items-center justify-end">
      <!-- <notification /> -->
    </span>
  </div>

  <div class="w-full flex justify-center gap-2">
    <v-btn
      class="btn font-Subheader flex-1"
      :class="{ isDataActive: isDataActive === 1 }"
      @click="changeData(1)"
    >
      <v-icon>mdi-table</v-icon>
      Table
    </v-btn>

    <v-btn
      class="btn font-Subheader flex-1"
      :class="{ isDataNotActive: isDataActive === 2 }"
      @click="changeData(2)"
    >
      <v-icon>mdi-form-select</v-icon>
      Form
    </v-btn>
  </div>
</template>


<style scoped>
.isDataNotActive{
    background-color: #94080D;
    color: white;
}


.isDataActive{
    background-color: #94080D;
    color: white;
}

</style>