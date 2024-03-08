<script setup>
    import drawer from '../drawer.vue';
</script>

<template>
    <nav class="w-full bg-red-700 flex items-center px-20 h-auto sticky top-0 z-40 ">
        <ul class="flex text-white gap-2 w-full items-center" id='nav'>
            <li class="py-6 ">

                <drawer/>

            </li>

            <li class="flex items-center justify-center w-1/12  md:hidden sm:hidden xm:hidden"><img src="../../../assets/img/school.png" style="width: 4rem;" alt=""></li>

            <li 
                class="w-1/12 py-6 hover:bg-red-800 text-center md:hidden sm:hidden xm:hidden" 
                style="font-size: clamp(14px , 2vw , 16px);"
                >
                <router-link to="/home"> MIS</router-link>
            </li>


            <li 
                class="w-1/12 py-6 hover:bg-red-800 text-center md:hidden sm:hidden xm:hidden"
                style="font-size: clamp(14px , 2vw , 16px);"
            >
                <router-link to="/qam">QAM</router-link>
            </li>


        </ul>
    </nav>
</template>

<style scoped>

    #nav .vue-school-active-link{
        color: yellow;

    }
</style>