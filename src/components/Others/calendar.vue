<template>
    <div class="w-full">
    <VCalendar transparent  expanded :attributes='attrs'/>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Navigation from '../../components/Others/Navigation.vue'
const attrs = ref([
  {
    key: 'today',
    highlight: 'red',
    dates: new Date(),
  },
]);
</script>