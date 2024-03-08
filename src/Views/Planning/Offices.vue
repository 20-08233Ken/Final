<script setup>

    import Navigation from '../../components/Others/Navigation.vue'

</script>
<template>

    <main class="flex flex-col w-full bg-white">
        <Navigation/>
        
        <section class="w-full flex pt-6vw pb-2 px-6vw ">
            <div class="w-2/4 sm:w-full">
                <h1 class="font-Header text-4xl text-Red-Rose" style="font-size: clamp(18px,4vw,48px);">Report Submission</h1>
                <p class="text-Red-Rose w-6/12 mt-2 sm:w-full" style="font-size: clamp(14px,2vw,18px);">Submit report in CSV File with proper documentation and format of data</p>

                
                <div class="mt-4 flex items-center w-10/12 bg-white color-white rounded-xl border-1 border-neutral-300 sm:w-full sm:my-8">
                    <input class="px-4 py-3 w-11/12 rounded-xl" type="search" name="" id="" placeholder="Search for an Office">
                    <span class="flex justify-center w-1/12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="flex justify-center items-center w-2/4 sm:hidden">
                <img src="../../assets//img/dataset.png" alt="image here">
            </div>
        </section>

        <section class="w-full flex flex-col px-6vw ">
            <h2 class="font-Header text-Red-Rose text-3xl" style="font-size: clamp(12px,3vw,28px);">Head Offices</h2>
            <p class="text-Red-Rose" style="font-size: clamp(14px,2vw,18px);">Find your Office under these head offices</p>

            <div class="flex flex-col items-center w-full mt-8">                  
                    <div class="w-6/12 mt-4 collapse collapse-arrow bg-Red-Darken border-1 rounded-xl border-Red-Rose text-white sm:w-11/12">
                        <input type="checkbox" class="peer" /> 
                        <div class="collapse-title font-Subheader text-center ">
                            Office of the University President
                        </div>
                        <div class="collapse-content bg-white text-black"> 
                            <ul class="flex flex-col gap-1">
                                <li class="mt-4">KSIT Park Development Office </li>
                                <li>Action Cente</li>
                                <li>Office of the Secretary'</li>
                                <li>Office of the Board of Regents'</li>
                                <li>Internal Audit Services Office' </li>
                                <li>Presidential Project Management Office' </li>
                                <li>Center for Innovation in Engineering Education' </li>
                                <li>Legal Affairs Office</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-6/12 mt-4 collapse collapse-arrow bg-Red-Darken border-1 rounded-xl border-Red-Rose text-white sm:w-11/12">
                        <input type="checkbox" class="peer" /> 
                        <div class="collapse-title font-Subheader text-center ">
                            Office of the Vice President for Academic Affairs
                        </div>
                        <div class="collapse-content bg-white text-black"> 
                            <ul class="flex flex-col gap-1">
                                <li class="mt-4">Office of Culture and Arts</li>
                                <li>Office of Sports</li>
                                <li>Office of Curriculum and Instructions</li>
                                <li>Office of Student Affairs and Services</li>
                                <li>Scholarship Office</li>
                                <li>Testing and Admission Office</li>
                                <li>Center for Transformative Learning </li>
                                <li>Office of Quality Assurance Management</li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-6/12 mt-4 collapse collapse-arrow bg-Red-Darken border-1 rounded-xl border-Red-Rose text-white sm:w-11/12">
                        <input type="checkbox" class="peer" /> 
                        <div class="collapse-title font-Subheader text-center ">
                            Office of the Vice President for Research, Development, and Extension Services
                        </div>
                        <div class="collapse-content bg-white text-black"> 
                            <ul class="flex flex-col gap-1">
                                <li class="mt-4">Office of Research, Development, and Extension Services </li>
                                <li>Office of Industry, Energy and Emerging Technology Research</li>
                                <li>Office of Agriculture, Aquatic, and Natural Resources Research</li>
                                <li>Office of Integrated Basic and Applied Research</li>
                                <li>Research Management Office</li>
                                <li>Research Publication Management Office</li>
                                <li>Knowledge and Technology Transfer Management Office</li>
                                <li>Extension Services Office</li>
                                <li>Community Development Office</li>
                                <li>Extension Monitoring and Impact Assessment Office </li>
                                <li>Gender and Development Advocacies Office</li>
                                <li>Management and Health Research Office</li>
                                <li>STEER Hub</li>
                            </ul>
                        </div>
                    </div>


                    <div class="w-6/12 mt-4 collapse collapse-arrow bg-Red-Darken border-1 rounded-xl border-Red-Rose text-white sm:w-11/12">
                        <input type="checkbox" class="peer" /> 
                        <div class="collapse-title font-Subheader text-center ">
                            Office of the Vice President for Administration and Finance
                        </div>
                        <div class="collapse-content bg-white text-black"> 
                            <ul class="flex flex-col gap-1">
                                <li class="mt-4"> Office of Administration and Impact Assessment </li>
                                <li> Office of Administration Services</li>
                                <li> Human Resource Management Office</li>
                                <li> Finance Services Office</li>
                                <li> Accounting Office </li>
                                <li> Budget Office</li>
                                <li> Procurement Office</li>
                                <li> Records Office</li>
                                <li> General Services Office</li>
                                <li> Cashiering Office  </li>
                                <li> Project Management Office</li>
                                <li> Health Services Office </li>
                            </ul>
                        </div>
                    </div>

                    <div class="w-6/12 mt-4 collapse collapse-arrow bg-Red-Darken border-1 rounded-xl border-Red-Rose text-white sm:w-11/12">
                        <input type="checkbox" class="peer" /> 
                        <div class="collapse-title font-Subheader text-center ">
                            Office of the Vice President for Development and External Affiars
                        </div>
                        <div class="collapse-content bg-white text-black"> 
                            <ul class="flex flex-col gap-1">
                               <li class="mt-4">Development and  External Services Office</li>
                               <li>ICT Service Office </li>
                               <li>Network and Systems Administration Services Office</li>
                               <li>ICT Special Project Office </li>
                               <li>Electronic System Research Center Offices</li>
                               <li>GIS Application Development Center</li>
                               <li>External Affairs </li>
                               <li>Auxiliary Services Office</li>
                               <li>Digital Transformation Center</li>
                               <li>Manufacturing Research Center</li>
                               <li>ICT Operations Office </li>
                               <li>Institutional Planning and Development Office</li>
                       
                               <li>ICT Operations Office </li>
                               <li>Material Testing and Calibration Center</li>
                               <li>Analytical Research Center Office</li>
                               <li>Food Innovation Center</li>
                               <li>Social Innovation Research Center</li>

                               <li>Management Information System Office</li>
                               <li>Center for Technopreneurship and Innovation</li>
                               <li>VIP Corals Office - Lobo</li>
                               <li>VIP Corals Office - Nasugbu</li>
                            </ul>
                        </div>
                    </div>


            </div>
        </section>
    </main>



    
</template>