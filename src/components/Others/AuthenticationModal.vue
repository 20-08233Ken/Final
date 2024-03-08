<script>
    export default{
        name:'AuthenticationModal.vue'
    }
</script>

<template>

        <main class="flex w-full h-dvh w-dvw fixed top-0 bg-red-100 z-50 items-center justify-center">

            <span class="flex flex-col items-center justify-center gap-4 w-4/12 p-28 rounded-lg   bg-white shadow-card2 " >
                
                <i class="text-Red-Rose ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </i>

                <h1 class=" font-Header text-gray-500 text-5xl"> Error</h1>
                
                <h1 id="errorMessage" class="text-Red-Rose pb-18">Authentication Failed. Please try again</h1>
            </span>

        </main>
     
</template>

<style scoped>
    main{
        background-color: rgba(0, 0, 0, 0.28); 
        color: rgba(0, 0, 0, 0.28);
    }
</style>