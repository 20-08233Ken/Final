<script src="../../Scripts/Registrar/PRC.js">
</script>

<template>
    
    <div v-if="isAdd" role="alert" class="alert alert-success w-5/12 text-white fixed top-20 z-50 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="text-white">Data Addedd Successfully!</span>
    </div>

    <div class="flex  shadow-card2 py-8 px-8 rounded-lg gap-4 bg-gray-700">
        <i class="mt-4" style="color: #BEFFF7;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
            </svg>
        </i>
        <span class="flex flex-col justify-center w-9/12">
            <h1 class="w-full  font-Header text-lg text-white">Graduates by Institution, Program, and Sex</h1>
        </span>

        <span class="flex w-3/12 items-center justify-end">
            <notification />
        </span>
    </div>



    <div class="w-full overflow-x-auto shadow-card2 mt-4 px-4 py-4 rounded-lg">


        <div role="tablist" class="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" class="tab font-Subheader text-base text-Red-Rose"
                aria-label="Form" checked />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">

                <span class="w-full flex ">

                    <button class="flex items-center gap-3 bg-cyan-50 px-4 py-1 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                            viewBox="0 0 48 48">
                            <path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path>
                            <path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z">
                            </path>
                            <path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path>
                            <path fill="#17472a" d="M14 24.005H29V33.055H14z"></path>
                            <g>
                                <path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path>
                                <path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z">
                                </path>
                                <path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path>
                                <path fill="#129652" d="M29 24.005H44V33.055H29z"></path>
                            </g>
                            <path fill="#0c7238"
                                d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z">
                            </path>
                            <path fill="#fff"
                                d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z">
                            </path>
                        </svg>
                        <a class="font-Subheader text-sm" href=".././../assets/files/UII_Name-of-HEI_PRC-List-of-Graduates_2023.xlsx" download="">Download
                            Form
                        </a>
                    </button>
               

                </span>
                <form class="mt-4">
                    <input type="file" class="file-input file-input-bordered w-full "
                        style="border: 1px solid #d2d2d2;" />
                </form>
            </div>

            <input type="radio" name="my_tabs_2" role="tab" class="tab font-Subheader text-base text-Red-Rose"
                aria-label="Table" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">


            </div>


        </div>

    </div>
</template>
<style scoped>.active {
    display: flex;
    flex-direction: column;
}

.inActive {
    display: none;
}

.iconActive {
    display: flex;

}

.iconInActive {
    display: none;
}

.error_message {
    color: red;
    font-size: .9rem;
}</style>