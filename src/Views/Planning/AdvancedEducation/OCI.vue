<script setup>
    import AEmodal1 from './AEmodal1.vue';
</script>
<template>
    <div class="flex flex-col w-full">

        <div class="flex items-center w-full bg-white mt-8 shadow-card2 py-6 px-6 rounded-lg">
            <span class="flex px-5" style="color: forestgreen;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
            </span>

            <h5 class="w-6/12 font-Subheader ">Percentage of graduate school faculty engaged in research work</h5>

            <span class="flex w-5/12 justify-end  gap-4 ">

                <AEmodal1/>
                <router-link to="/validateMain" class="w-3/12"> 
                    <v-btn class="bg-teal-accent-4 w-full rounded-md w-3/12">Validate</v-btn>
                </router-link>
            </span>
        </div>





       

    </div>
    
</template>