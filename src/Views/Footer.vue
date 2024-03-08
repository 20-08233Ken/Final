<script>
    export default{
        data(){
            return{
                offices:[
                    {
                        office:"KSIT Park Development Office"
                    },
                    {
                        office:"ACTION Center"
                    },
                    {
                        office:"Office of the Secretary"
                    },
                    {
                        office:"Office of the Board of Regents"
                    },
                    {
                        office:"Office of Internal Services"
                    },
                    {
                        office:"Presedential Project Management Office"
                    },
                    {
                        office:"Center for Innovation in Engineering Education"
                    },
                    {
                        office:"Office of Sports"
                    },
                    {
                        office:"Curriculum and Instruction Office"
                    },
                    {
                        office:"Student Affairs and Services Office"
                    },
                    {
                        office:"Testing and Admission Office"
                    },
                ]
            }
        },
        
    }

</script>


<template>

        <h1 class="w-2/4 px-6vw text-3xl font-Header pt-16 bg-Red-Rose text-white" style="clip-path: polygon(0 0, 95% 0, 100% 100%, 0% 100%);">University Dataset</h1>

        <div class="flex w-100 bg-Red-Rose pb-8">
            <div class="flex justify-center w-8/12 gap-8">

                <span class="flex flex-col w-2/5 bg-white text-black rounded-t-2xl rounded-b-2xl mt-16">

                    <h3 class="flex w-100 items-center gap-4 justify-center text-white py-4 bg-Red-Darken rounded-t-2xl">
                        <img src="../assets//img/qs-stars.png" style="width: 12%;">
                        <p >QR Stars Data Criteria</p>
                    </h3>

                            <!-- List 1 --> 
                            <h4 class="px-4 py-4 font-Regular">
                                <b>Culture and Arts</b>
                            </h4>
                            
                            <ul class="px-16" style="list-style-type: disc;">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Maecenas vehicula purus vitae sapien malesuada, eget pretium justo lacinia.</li>
                                <li>Aliquam ac ipsum auctor, dictum ex vitae, placerat nisi.</li>
                                <li>Suspendisse dictum leo eu nibh pretium, et finibus turpis porta.</li>
                            </ul>

                            <!-- List 2 --> 
                            <h4 class="px-4 py-4 font-Regular">
                                <b>Sports</b>
                            </h4>
                            
                            <ul class="px-16" style="list-style-type: disc;">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Maecenas vehicula purus vitae sapien malesuada, eget pretium justo lacinia.</li>
                                <li>Aliquam ac ipsum auctor, dictum ex vitae, placerat nisi.</li>
                                <li>Suspendisse dictum leo eu nibh pretium, et finibus turpis porta.</li>
                            </ul>


                            <!-- List 3 --> 
                            <h4 class="px-4 py-4">
                                <b>Teaching</b>
                            </h4>
                            
                            <ul class="px-16 pb-8" style="list-style-type: disc; ">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Maecenas vehicula purus vitae sapien malesuada, eget pretium justo lacinia.</li>
                                <li>Aliquam ac ipsum auctor, dictum ex vitae, placerat nisi.</li>
                                <li>Suspendisse dictum leo eu nibh pretium, et finibus turpis porta.</li>
                            </ul>

                            <div class="flex justify-center w-100 bg-Red-Darken py-4 rounded-b-2xl ">
                                <button class="flex w-100 text-white text-sm items-center">
                                    View More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                            <!-- <v-btn class="w-100 mt-8 d-flex text-white" style="background-color:#880f0f;">
                                <p class="text-subtitle-2 mr-4"> View More</p>
                                <v-icon icon>mdi-arrow-right-circle</v-icon>
                            </v-btn> -->
                </span>

                <span class="flex flex-col w-2/5 bg-white text-black rounded-t-2xl rounded-b-2xl mt-16 ">

                    <h3 class="flex w-100 items-center gap-4 justify-center text-white py-4 bg-Red-Darken rounded-t-2xl">
                        <img src="../assets//img/qs-stars.png" style="width: 12%;">
                        <p >QR Stars Data Criteria</p>
                    </h3>

                            <!-- List 1 --> 
                            <h4 class="px-4 py-4 font-Regular">
                                <b>Culture and Arts</b>
                            </h4>
                            
                            <ul class="px-16" style="list-style-type: disc;">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Maecenas vehicula purus vitae sapien malesuada, eget pretium justo lacinia.</li>
                                <li>Aliquam ac ipsum auctor, dictum ex vitae, placerat nisi.</li>
                                <li>Suspendisse dictum leo eu nibh pretium, et finibus turpis porta.</li>
                            </ul>

                            <!-- List 2 --> 
                            <h4 class="px-4 py-4 font-Regular">
                                <b>Sports</b>
                            </h4>
                            
                            <ul class="px-16" style="list-style-type: disc;">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Maecenas vehicula purus vitae sapien malesuada, eget pretium justo lacinia.</li>
                                <li>Aliquam ac ipsum auctor, dictum ex vitae, placerat nisi.</li>
                                <li>Suspendisse dictum leo eu nibh pretium, et finibus turpis porta.</li>
                            </ul>


                            <!-- List 3 --> 
                            <h4 class="px-4 py-4">
                                <b>Teaching</b>
                            </h4>
                            
                            <ul class="px-16 pb-8" style="list-style-type: disc; ">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Maecenas vehicula purus vitae sapien malesuada, eget pretium justo lacinia.</li>
                                <li>Aliquam ac ipsum auctor, dictum ex vitae, placerat nisi.</li>
                                <li>Suspendisse dictum leo eu nibh pretium, et finibus turpis porta.</li>
                            </ul>

                            <div class="flex justify-center items-center w-100 bg-Red-Darken py-4 rounded-b-2xl ">
                                <button class="flex w-100 text-white text-sm items-center">
                                    View More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                </span>
            </div>
        
            <div class="flex flex-col w-4/12">

                <h2 class="mt-16 font-Header text-3xl text-white">Data Documentation</h2>
                <p class="text-white">per Offices</p>

                <ul class="mt-8 w-11/12 ">
                    <li class="flex justify-between w-full border-1 border-white px-8 py-3 rounded-xl mt-2 text-white text-0.9" v-for="(x, index) in offices" :key="index">
                    {{ x.office }}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </li>

                    <!-- <li class="flex justify-between w-full border-1 border-white px-8 py-3 rounded-xl mt-2 text-white">
                        ACTION Center
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-full border-1 border-white px-8 py-3 rounded-xl mt-2 text-white">
                        Office of the Secretary
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5 " />
                        </svg>
                    </li>

                    <li class="flex justify-between w-full border-1 border-white px-8 py-3 rounded-xl mt-2 text-white">
                        Office of the Board of Regents
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </li>
                    <li class="flex justify-between w-full border-1 border-white px-8 py-3 rounded-xl mt-2 text-white">
                        Office of Internal Services
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-full border-1 border-white px-8 py-3 rounded-xl mt-2 text-white">
                        Presedential Project Management Office
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </li>


                    <li class="flex justify-between w-full border-1 border-white px-8 py-3 rounded-xl mt-2 text-white">
                        Center for Innovation in Engineering Education
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-full border-1 border-white px-8 py-3 rounded-xl mt-2 text-white">
                        Office of Culture and Arts
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-full border-1 border-white px-8 py-3 rounded-xl mt-2 text-white">
                        Office of Sports
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-full border-1 border-white px-8 py-3 rounded-xl mt-2 text-white">
                        Curriculum and Instruction Office
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </li>

                    <li class="flex justify-between w-full border-1 border-white px-8 py-3 rounded-xl mt-2 text-white">
                        Student Affairs and Services Office
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </li>
                    <li class="flex justify-between w-full border-1 border-white px-8 py-3 rounded-xl mt-2 text-white">
                        Testing and Admission Office
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </li> -->
                </ul>

                <button class="flex text-white bg-Red-Darken font-Regular text-sm py-3 px-8 self-center rounded-md items-center justify-center  mt-8"> 
                        View more in Datasets
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                </button>
            </div>
        </div>

</template>