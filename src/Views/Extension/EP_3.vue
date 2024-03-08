<script setup>
    import notification from '../../components/Others/notification.vue';
    import activityList from '../../components/Others/activityList.vue';
    import {Field, Form, ErrorMessage} from 'vee-validate'
</script>
<style scoped>
    .input{
        border: 1px solid #d2d2d2;
    }
</style>
<template>
          <div class="w-fullflex flex-col">
                <!-- <h1 class="w-full text-center font-Header text-xl text-Red-Rose">Technical Advisory Extension</h1>

                <h3 class=" mt-8"> <b>Outcome Indicator :</b>  Number of active partnerships with LGUs, industries, NGA, SMEs, and other stakeholders as a result of extension activities</h3>

                <ul class=" mt-4" style="list-style-type: decimal;">
                    <li class="ml-16 text-sm">List All active partnerships with extension activities as of 2023</li>
                    <li class="ml-16 text-sm">Incomplete entries will be DISREGARDED </li>
                </ul> -->

                <div class="flex  shadow-card2 py-8 px-8 rounded-lg gap-4 bg-gray-700">
                    <i class="mt-4" style="color: #BEFFF7;">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                        </svg>
                    </i>
                    <span class="flex flex-col justify-center w-9/12">
                        <h1 class="w-full  font-Header text-lg text-white">Percentage of undergraduate programs with
                            accreditation</h1>
                    </span>

                    <span class="flex w-3/12 items-center justify-end">
                        <notification />
                    </span>
                </div>
            </div>

            <h3 class="text-gray-600 mt-8"> <b>Outcome Indicator :</b>  Number of active partnerships with LGUs, industries, NGA, SMEs, and other stakeholders as a result of extension activities</h3>

            <div class="w-full flex flex-col items-center ">

                <div role="tablist" class="tabs tabs-lifted w-full mt-8">
                    <input type="radio" name="my_tabs_2" role="tab" class="tab font-Subheader text-base text-Red-Rose" aria-label="Form" checked />
                    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        
                        <Form>
                            <p class="self-start text-0.9 font-Subheader text-gray-500 mt-6">Campus</p>
                            <Field name="campus" type="text" placeholder="Alangilan Campus" disabled class="input mt-2 input-bordered w-full " />

                            <p class="self-start text-0.9 font-Subheader text-gray-500 mt-6">Partnet LGU / Community / Industry / SMEs /Private of Public Agencies / NGOs</p>
                            <Field name="partners" type="text" placeholder="Type here"  class="input mt-2 input-bordered w-full " />
                            
                            <p class="self-start text-0.9 font-Subheader text-gray-500 mt-6">Extension Program / Activities</p>
                            <Field name="ext_program" type="text" placeholder="Type here"  class="input mt-2 input-bordered w-full " />

                            <!-- <h4 class="self-start mt-8 font-Subheader text-Red-Rose text-base">Date Conducted</h4> -->

                            <span class="w-full flex gap-2">
                                <span class="w-2/4">
                                    <p class="text-0.9 font-Subheader text-gray-500 mt-4">Start Date</p>
                                    <Field name="start_date" type="date" placeholder=" " class="input mt-2 input-bordered w-full " />
                                </span>
                                <span class="w-2/4">
                                    <p class="text-0.9 font-Subheader text-gray-500 mt-4">End Date</p>
                                    <Field  name="end_date" type="date" placeholder="" class="input mt-2 input-bordered w-full " />
                                </span>
                            </span>             
<!-- 
                            <p class="w-full text-0.9  font-Subheader text-gray-500 mt-6">Upload Supported File</p>
                            <input type="file" class="file-input file-input-bordered w-full mt-2" /> -->

                            <span class="w-full flex items-center justify-end gap-2 mt-5">
                                <button class="btn w-2/12 bg-white border-0" >Add</button>
                            </span>
                        </Form>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" class="tab font-Subheader text-base text-Red-Rose" aria-label="Table"  />
                    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 overflow-x-auto">

                        <table class="table-zebra table-md">
                                <thead>
                                <tr class ="bg-gray-700">
                                    <th></th> 
                                    <th class="text-0.9 text-white font-Subheader border-r-1 border-white">Campus</th> 
                                    <th class="text-0.9 text-white font-Subheader border-r-1 border-white">Partnet LGU / Community / Industry / SMEs /Private of Public Agencies / NGOs</th> 
                                    <th class="text-0.9 text-white font-Subheader border-r-1 border-white">Extension Program / Activitie</th> 
                                    <th class="text-0.9 text-white font-Subheader border-r-1 border-white">Start Date</th> 
                                    <th class="text-0.9 text-white font-Subheader border-r-1 border-white">End Date</th> 

                                </tr>
                                </thead> 
                                <tbody>
                                <tr>
                                    <th>1</th> 
                                    <td>Cy Ganderton</td> 
                                    <td>Quality Control Specialist</td> 
                                    <td>Littel, Schaden and Vandervort</td> 
                                    <td>Canada</td> 
                                    <td>12/16/2020</td> 
                            
                                </tr>
                                <tr>
                                    <th>1</th> 
                                    <td>Cy Ganderton</td> 
                                    <td>Quality Control Specialist</td> 
                                    <td>Littel, Schaden and Vandervort</td> 
                                    <td>Canada</td> 
                                    <td>12/16/2020</td> 
                                 
                                </tr>

                            </tbody>
                            </table>

                    </div>


                </div>

          
            </div>

           
</template>

