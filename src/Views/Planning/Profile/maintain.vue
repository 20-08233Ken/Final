<script src = '../../../Scripts/Planning/Profile/maintain.js' >

</script>

<template>
  <div class="w-10/12 flex flex-col px-2vw py-2vw bg-white shadow-card2">


    <div class="w-full flex gap-4">
      <span class="w-3/12 flex flex-col">
        <p class="text-lg font-Header text-Red-Darken">Maintenance</p>
        <ul class="mt-2">
          <li class="text-sm px-2 py-2" @click="showComponent('campus',1) " :class="{activeBtn: isActive ===1}">Campus</li>
          <li class="text-sm px-2 py-2" @click="showComponent('program',3) " :class="{activeBtn: isActive ===3}">Program</li>
          <li class="text-sm px-2 py-2" @click="showComponent('office',2) " :class="{activeBtn: isActive ===2}">Office</li>
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
  @import url('../../../style/Planning/Profile/maintain.css');
</style>
