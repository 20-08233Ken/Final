<script src="../Scripts/Home.js" >

</script>
<template>
        <main class="flex flex-col w-100 ">

          
                <!-- <Navigation/>  -->

                
            <Planning_nav  v-if="user === 'Planning'"/>
            <Dean_nav  v-if="user == 'Dean'"/>
            <Registrar_nav  v-if="user === 'Registrar'"/>
            <QAM_nav  v-if="user === 'QAM'"/>
            <Extension_nav  v-if="user === 'Extension'"/>
            <Research_nav v-if="user === 'Research'"/>
                

               
            <section class="flex flex-col justify-center w-full bg-wave-bg bg-bottom bg-no-repeat bg-cover pb-3vw ">
            
                <div class="flex ">
                    <span class="flex flex-col w-3/6 px-6vw pt-6vw pb-8 sm:w-full sm:text-center">
                        <h1 class="text-Red-Darken font-Header " style="font-size: clamp(18px,4vw,48px);">University Management</h1>
                        <h1 class="text-Red-Rose font-Header " style="font-size: clamp(18px,4vw,48px);">Information<span class="text-Red-Darken ml-3 font-Header" style="font-size: clamp(18px,4vw,45px);">System</span></h1>
                        <p class="mt-4 w-4/5 sm:w-full" style="font-size: clamp(14px,2vw,18px);">Central System for Managing and Processing Data of Batangas State University</p>
                        <p class="flex mt-8 w-full" style="font-size: clamp(12px,2vw,15px);">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem placeat veritatis
                            accusantium laborum dignissimos animi? Maiores labore ducimus distinctio vero a fugiat
                            autem dolore optio sapiente magnam! Veniam, at.
                            accusantium laborum dignissimos animi? Maiores labore ducimus distinctio vero a fugiat
                            autem dolore optio sapiente magnam! Veniam, at.
                        </p>
                    </span>

                    <span class=" flex items-center justify-center w-3/6 sm:hidden">
                        <img src="../assets/img/merge/img1.png" style="width:50%;height: auto;" alt="">
                    </span>
                </div>

                <div class="w-full flex flex-col items-center justify-center">
                    <h2 class="w-3/5 text-Red-Darken font-Header text-xl mt-4" style="font-size: clamp(12px,3vw,24px);">Search for an Office</h2>

                    <span class="flex items-center bg-white w-3/5 rounded-md border-1 border-gray-400 mt-4">
                        <input type="search" name="" class="w-11/12 py-3 px-4 rounded-md" placeholder="Search for an office">
                        
                        <span class="flex items-center justify-center w-1/12 ">
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </span>

                    </span>
                </div>

                <div class="flex flex-col w-full px-6vw py-8">
                    <!-- <h2 class="text-white font-Header text-xl">Head Offices</h2>
                    <p class="text-white text-sm">Find your Office under these head offices</p> -->

                    <div class="flex flex-wrap w-full gap-5 justify-center mt-4">

                        <span class="flex bg-white w-64 h-36 px-4 rounded-md items-center gap-2 shadow-card1">
                                <h1 class="text-Red-Darken font-Header text-3xl w-4/12 text-center" >OUP</h1>
                                <p class="text-Red-Darken font-Subheader text-center w-8/12 text-sm ">Office of the University President</p>
                        </span>

                        <span class="flex bg-white w-64 h-36  px-4 rounded-md items-center gap-2 shadow-card1">
                                <h1 class="text-Red-Darken font-Header text-3xl w-4/12 text-center">OVP<br>AA</h1>
                                <p class="text-Red-Darken font-Subheader text-center w-8/12 text-sm ">Office of the Vice President for Academic Affairs </p>
                        </span>

                        <span class="flex bg-white w-64  h-36 px-4  rounded-md items-center gap-2 shadow-card1">
                                <h1 class="text-Red-Darken font-Header text-3xl w-4/12 text-center">OVP<br>RDES</h1>
                                <p class="text-Red-Darken font-Subheader text-center w-8/12 text-sm">Office of the Vice President for Research, Development, and Extension Services </p>
                        </span>

                        <span class="flex bg-white w-64  h-36 px-4  rounded-md items-center gap-2 shadow-card1">
                                <h1 class="text-Red-Darken font-Header text-3xl w-4/12 text-center">OV<br>PAF</h1>
                                <p class="text-Red-Darken font-Subheader text-center w-8/12 text-sm ">Office of the Vice President for Administraation and Finance</p>
                        </span>

                        <span class="flex bg-white w-64  h-36 px-4  rounded-md items-center gap-2 shadow-card1">
                                <h1 class="text-Red-Darken font-Header text-3xl w-4/12 text-center">OVP<br>DEA</h1>
                                <p class="text-Red-Darken font-Subheader text-center w-8/12 text-sm ">Office of the Vice President for Development and External Affairs </p>
                        </span>
                    </div>
                </div>


                <button class="flex text-white bg-Red-Darken font-Regular text-sm  py-3 px-8 self-center rounded-md items-center justify-center" style="font-size: clamp(12px,2vw,14px);"> 
                    See more offices
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </section>

            <section class="flex w-full px-6vw py-3vw bg-slate-50 sm:flex-col sm:mt-8">
                <span class="w-2/5 flex flex-col 0 justify-center sm:w-full">
                    <h1 class="text-Red-Darken text-5xl font-Header sm:w-full sm:text-center" style="font-size: clamp(18px,4vw,48px);">University Data</h1>
                    <h1 class="text-Red-Rose text-5xl font-Header mt-2 sm:w-full sm:text-center sm:mt-2" style="font-size: clamp(18px,4vw,48px);">Dashboard</h1>
                    <p class="mt-14 w-4/5 sm:w-full sm:mt-8">Monitor overall data gathered within the university. Process those data and visualize those data into more understandable presentation.</p>
                    <p class="mt-4 w-4/5 sm:w-full" >Help visualize the trajectory of the university through visualizing data from criterion of different university rankings.</p>
                </span>
                        
                <span class="w-3/5 flex justify-center sm:w-full sm:flex-col sm:mt-4 ">
                    <Graph1/>
                    <Graph2/>
                </span>
            </section>
            
            <section class="w-full flex flex-col bg-slate-50 pb-16">
                <Graph3/>
                <button class="flex text-white bg-Red-Darken font-Regular text-sm py-3 px-8 self-center rounded-md items-center justify-center mt-4" style="font-size: clamp(12px,2vw,14px);"> 
                    View more in Dashboard
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

            </section>

            <section class="flex w-full px-6vw py-6vw bg-wave2-bg bg-no-repeat bg-bottom bg-cover h-dvh">
                    <span class="w-2/4 flex flex-col sm:w-full sm:text-center sm:items-center" >
                        <h1 class="text-Red-Darken font-Header text-5xl" style="font-size: clamp(18px,4vw,48px);">University <span class="text-Red-Rose font-Header">Facts</span></h1>
                        <h1 class="text-Red-Darken font-Header text-5xl mt-2" style="font-size: clamp(18px,4vw,48px);">and <span class="text-Red-Rose font-Header">Figures</span></h1>

                        <p class="mt-14 w-3/4 "> View the university’s facts and information coming from data gathered within the whole school year.</p>
                        <p class="mt-4 w-3/4 ">Showcase the capabilities of the university through organized report and data visualization</p>
                        
                        <button class="flex gap-2 w-3/4 text-white bg-Red-Darken font-Regular text-sm py-4 rounded-md items-center justify-center mt-24 "> 
                                <img src="../assets/img/icons8-pdf-50.png" alt="" style="width: 1.5rem;">
                                Download BatStateU Facts and Figures
                    </button>

                    <p class="w-3/4  text-center mt-4"><u>View University Facts and Figures Table of Contents</u> </p>
                    </span>

                    <span class="w-2/4 flex items-center justify-center sm:hidden">
                        <img src="../assets/img/dash.png" alt="">
                    </span>
            </section>

            <section class="w-full text-white " style="background-color:#D8D8D8;">
                <Footer/>

            </section>
        </main>


</template>
<style scoped>
.active{
    background-color: rgb(153 27 27);
}
</style>