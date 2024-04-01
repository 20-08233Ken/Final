<script>
    import campus from './maintainance/campus.vue';
    import office from './maintainance/office.vue'
    import program from './maintainance/program.vue'
    import college from './maintainance/college.vue'

    export default {
    data() {
        return {
        headers: [
            {
            title: "Campus Name",
            },
            {
            title: "Action",
            },
        ],
        
            currentComponent:campus,
            isActive:1
        };
    },

    components:{
        campus,
        office,
        program,
        college
    },
    
    methods:{
        showComponent(getComponent,myBtn){
            this.currentComponent =getComponent
            this.isActive = myBtn
        }
    }
    };
</script>

<template>
  <div class="w-10/12 flex flex-col px-2vw py-2vw bg-white shadow-card2">


    <div class="w-full flex gap-4">
      <span class="w-3/12 flex flex-col">
        <p class="text-lg font-Header text-Red-Darken">Maintainance</p>
        <ul class="mt-2">
          <li class="text-sm px-2 py-2" @click="showComponent('campus',1) " :class="{activeBtn: isActive ===1}">Campus</li>
          <li class="text-sm px-2 py-2" @click="showComponent('office',2) " :class="{activeBtn: isActive ===2}">Office</li>
          <li class="text-sm px-2 py-2" @click="showComponent('program',3) " :class="{activeBtn: isActive ===3}">Program</li>
          <li class="text-sm px-2 py-2" @click="showComponent('college',4) " :class="{activeBtn: isActive ===4}">College</li>
        </ul>
      </span>

      <span class="w-9/12">
        <component :is="currentComponent"></component>
      </span>
    </div>
  </div>
</template>


<style scoped>
    :deep(.v-table .v-table__wrapper > table > thead > tr > th) {
        background-color: rgb(55 65 81);
        border: 1px solid white;
        color: white;
        font-size: 13px;
    
    }
    :deep(.v-table > .v-table__wrapper > table){
        border: 1px solid #e5e7eb;
    }
    .activeBtn{
        background-color: #e5e7eb;
    }

    :deep(.v-table .v-table__wrapper > table > thead > tr > th:last-child){
        width: 13%;
    }

    :deep(.v-data-table-header__content){
        justify-content: center;
    }
</style>
