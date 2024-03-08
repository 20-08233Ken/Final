<script src="../../Scripts/Planning/Dashboard.js">

</script>

<template>
    <main class="flex flex-col w-100">
        <Planning_nav/>
        
        <section class="flex flex-col w-full pt-6vw px-6vw">
                <h1 class="text-Red-Darken font-Header text-5xl" style="font-size: clamp(18px,4vw,48px);">University Management</h1>
                <h1 class="text-Red-Rose font-Header text-5xl mt-2"  style="font-size: clamp(18px,4vw,48px);">Information <span class="font-Header text-Red-Darken">System</span></h1>

                <div class="flex items-center sm:flex-col sm:items-start">
                    <p class="flex items-center w-3/12 mt-4 sm:w-full">Central System for Managing and Processing data of Batangas State University</p>

                    <span class="flex w-9/12 sm:w-full">
                        <ul class="flex justify-end w-full sm:justify-start sm:mt-8">
                            <li class="text-center w-12% py-2 bg-Red-Darken text-white sm:w-2/12">Overview</li>
                            <li class="text-center w-12% py-2 sm:w-2/12">QS Stars</li>
                            <li class="text-center w-12% py-2 sm:w-2/12">THE</li>
                            <li class="text-center w-12% py-2 sm:w-2/12">Scopus</li>
                            <li class="text-center w-12% py-2 sm:w-2/12">Almetric</li>
                        </ul>
                    </span>
                </div>

                <h2 class="mt-16 font-Header text-2xl text-Red-Rose" style="font-size: clamp(12px,3vw,24px);">Faculty Profile</h2>
                <div class="flex w-full sm:flex-col sm:gap-8">
                    <span class="w-2/4 mt-8 sm:w-full">
                        <Graph1/>
                    </span>
                    <span class="w-2/4 mt-8 sm:w-full">
                        <Graph2/>
                    </span>
                </div>

                <div class="flex w-full justify-center mt-24">
                        <Graph3/>
                </div>
        </section>

        <section class="px-6vw mt-8 bg-grey-2 pb-6vw">

            <h2 class="text-Red-Rose font-Header text-3xl mt-16 mb-8" style="font-size: clamp(12px,3vw,24px);">College Statistics</h2>
            
            <div class="flex flex-wrap w-full gap-8 justify-center sm:flex-col">
                <span class =" flex w-5/12 justify-center items-center shadow-xl  bg-white sm:w-full">
                    <Enrollment/>
                </span>
                <span class =" flex w-5/12 shadow-md justify-center items-center shadow-xl  bg-white sm:w-full">
                    <Graduates/>
                </span>
                <span class =" flex w-5/12 shadow-md justify-center items-center shadow-xl  bg-white sm:w-full">
                    <Scholarship/>
                </span>
                <span class =" flex w-5/12 shadow-md justify-center items-center shadow-xl  bg-white sm:w-full">s</span>

                <span class =" flex w-10/12 shadow-md justify-center items-center shadow-xl  bg-white py-24 sm:w-full">
                    <PassingRate/>
                </span>
            </div>
        </section>

        <!-- Extension Services -->
        <section class="w-full px-6vw mt-4 bg-white flex flex-col items-center pb-16">
            <h2 class="self-start mt-8 text-Red-Rose font-Header text-2xl" style="font-size: clamp(12px,3vw,24px);">Extension Services</h2>

            <div class="w-full flex flex-wrap pb-8 mt-8 ">
                <div class="w-full flex gap-8 justify-center">
                    <span class="flex items-center w-96 shadow-card2 py-4 px-4 rounded-md gap-4 mt-4 h-28">
                        <img src="../../assets/img/extension/7.png" alt="" style="width: 20%;">
                        <p class="text-Red-Rose font-Subheader text-4xl">2</p>
                        <p class="text-0.9" style="max-width: 100%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">Fund Rasing <br> for Community <br>Development</p>
                    </span>

                    <span class="flex items-center w-96 shadow-card2 py-4 px-4 rounded-md gap-4 mt-4 h-28">
                        <img src="../../assets/img/extension/2.png" alt="" style="width: 16%;">
                        <p class="text-Red-Rose font-Subheader text-4xl">9</p>
                        <p class="text-0.9" style="max-width: 100%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">Clean and  <br> Green community /<br> Coastal Cleanup</p>
                    </span>

                    <span class="flex items-center w-96 shadow-card2 py-4 px-4 rounded-md gap-4 mt-4 h-28">
                        <img src="../../assets/img/extension/4.png" alt="" style="width: 13%;">
                        <p class="text-Red-Rose font-Subheader text-4xl">2</p>
                        <p class="text-0.9" style="max-width: 100%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">Tree <br>Planting</p>
                    </span>

                </div>

                <div class="w-full flex gap-8 mt-4 justify-center">
                    <span class="flex items-center w-96 shadow-card2 py-4 px-4 rounded-md gap-4 mt-2 h-28">
                        <img src="../../assets/img/extension/1.png" alt="" style="width: 13%;">
                        <p class="text-Red-Rose font-Subheader text-4xl">2</p>
                        <p class="text-0.9" style="max-width: 100%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">Youth sports,<br> development,<br> environment camps</p>
                    </span>

                    
                    <span class="flex items-center w-96 shadow-card2 py-4 px-4 rounded-md gap-4 mt-2 h-28">
                        <img src="../../assets/img/extension/3.png" alt="" style="width: 13%;">
                        <p class="text-Red-Rose font-Subheader text-4xl">2</p>
                        <p class="text-0.9" style="max-width: 100%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">Gift Giving<br> Activity</p>
                    </span>

                    <span class="flex items-center w-96 shadow-card2 py-4 px-4 rounded-md gap-4 mt-2 h-28">
                        <img src="../../assets/img/extension/5.png" alt="" style="width: 10%;">
                        <p class="text-Red-Rose font-Subheader text-4xl">2</p>
                        <p class="text-0.9" style="max-width: 100%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">Blood <br>Donation</p>
                    </span>
                </div>

                <div class="w-full flex gap-8 mt-4 justify-center">
                    <span class="flex items-center w-96 shadow-card2 py-4 px-4 rounded-md gap-4 mt-4 h-28">
                        <img src="../../assets/img/extension/6.png" alt="" style="width: 13%;">
                        <p class="text-Red-Rose font-Subheader text-4xl">2</p>
                        <p class="text-0.9" style="max-width: 100%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">Food and Nutrition /<br> Health and Sanitation / Material and Child Care</p>
                    </span>
                </div>
            </div>

            <h2 class="self-start text-Red-Rose font-Header text-2xl mt-16" style="font-size: clamp(12px,3vw,24px);">Accreditation Status of Academic Programs</h2>

            <div class="flex flex-wrap justify-center w-full gap-12 mt-8 sm:gap-8">

                <span class="bg- flex flex-col justify-center items-center w-64 py-8 rounded-xl shadow-card2 ">
                    <h2 class="text-3xl font-Subheader text-Red-Rose">6</h2>
                    <p class="text-sm mt-2 text-center" >ABET Accredited</p>
                </span>

                <span class="flex flex-col justify-center items-center w-64 py-8 rounded-xl shadow-card2">
                    <h2 class="text-3xl font-Subheader text-Red-Rose">4</h2>
                    <p class="text-sm mt-2 text-center">Qualified for Level IV</p>
                </span>

                <span class="flex flex-col justify-center items-center w-64 py-8 rounded-xl shadow-card2">
                    <h2 class="text-3xl font-Subheader text-Red-Rose">3</h2>
                    <p class="text-sm mt-2 text-center">Level IV Phase 1</p>
                </span>

                <span class="flex flex-col justify-center items-center w-64 py-8 rounded-xl shadow-card2">
                    <h2 class="text-3xl font-Subheader text-Red-Rose">4</h2>
                    <p class="text-sm mt-2 text-center">Qualified for Level III</p>
                </span>


                <span class="flex flex-col justify-center items-center  w-64 py-8 rounded-xl shadow-card2">
                    <h2 class="text-3xl font-Subheader text-Red-Rose">6</h2>
                    <p class="text-sm mt-2 text-center">Level III Re-accredited</p>
                </span>

                <span class="flex flex-col justify-center items-center  w-64 py-8 rounded-xl shadow-card2">
                    <h2 class="text-3xl font-Subheader text-Red-Rose">4</h2>
                    <p class="text-sm mt-2 text-center">Level II Re-accredited</p>
                </span>

                <span class="flex flex-col justify-center items-center  w-64 py-8 rounded-xl shadow-card2">
                    <h2 class="text-3xl font-Subheader text-Red-Rose">3</h2>
                    <p class="text-sm mt-2 text-center">Level II Accredited</p>
                </span>

                <span class="flex flex-col justify-center items-center  w-64 py-8 rounded-xl shadow-card2">
                    <h2 class="text-3xl font-Subheader text-Red-Rose">4</h2>
                    <p class="text-sm mt-2 text-center">Candidates</p>
                </span>
            </div>
        </section>

        <!-- Accreditation Status -->
        <section class="w-full px-6vw bg-grey-2 flex flex-col items-center">
            <h2 class="self-start font-Subheader text-Red-Rose text-2xl mt-24" style="font-size: clamp(12px,3vw,24px);">Research</h2>

            <div class="w-full flex sm:flex-col">
                <span class="flex w-2/4 justify-center items-center sm:w-full sm:mt-8">
                    <Research/>
                </span>
                <span class="flex w-2/4 justify-center items-center sm:w-full sm:mt-8">
                    <Research2/>
                </span>
            </div>

            <div class="mt-24 flex flex-wrap w-3/4 justify-center gap-8 pb-16">

                <span class="flex flex-col text-center items-center justify-center w-72 shadow-card2 py-8 rounded-2xl bg-white">
                    <h3 class="text-Red-Rose font-Subheader text-3xl">90</h3>
                    <p class="text-sm w-3/4">Full time researcherswith research projects</p>
                </span>

                <span class="flex flex-col text-center items-center justify-center w-72 shadow-card2 py-8 rounded-2xl bg-white">
                    <h3 class="text-Red-Rose font-Subheader text-3xl">90</h3>
                    <p class="text-sm w-3/4">Full time researchers with research projects</p>
                </span>

                <span class="flex flex-col text-center items-center justify-center w-72 shadow-card2 py-8 rounded-2xl bg-white">
                    <h3 class="text-Red-Rose font-Subheader text-3xl">90</h3>
                    <p class="text-sm w-3/4">Full time researchers with research projects</p>
                </span>

                <span class="flex flex-col text-center items-center justify-center w-72 shadow-card2 py-8 rounded-2xl bg-white">
                    <h3 class="text-Red-Rose font-Subheader text-3xl">90</h3>
                    <p class="text-sm w-3/4">Full time researchers with research projects</p>
                </span>
            </div>
        </section>
        
        <section class="w-full px-6vw bg-white flex flex-col items-center pb-16">
            <h2 class="self-start font-Subheader text-Red-Rose text-2xl mt-24">Financial Status</h2>     
            <div class="flex justify-center items-center w-3/4 sm:w-full">
                <Financial/>
            </div>
        </section>

        <footer>
            <Footer/>
        </footer>
   
            
        
    </main>

</template>