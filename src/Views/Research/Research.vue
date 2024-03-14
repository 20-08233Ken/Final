<script>
    import {Form, Field, ErrorMessage} from 'vee-validate'
    import Research_nav from '../../components/Others/Navigation/Research_nav.vue';
    import activityList from '../../components/Others/activityList.vue';
    import { userPosition } from '../../Scripts/cookies';
    import { useCookies } from 'vue3-cookies';

    import myOutput from './output.vue'
    import myUtilized from './utilized.vue'
    import myPublication from './publication.vue'
    import myPresentation from './presentation.vue'
    import { markRaw } from 'vue';

    const markRaw_myOutput = markRaw(myOutput)
    export default{
        mounted(){
            const holdCookies = userPosition();
            this.user = holdCookies();
        },
        components:{
            Form,
            Field,
            ErrorMessage,
            Research_nav,
            activityList,
            myOutput,
            myUtilized,
            myPublication,
            myPresentation
        },
        data(){
            return{
                user:null,
                count:true,
                isActive:false,
                sampleData:[
                    {
                       tb_id:1,
                       tb_title:"",
                       tb_status:"",
                       tb_started:"",
                       tb_completed:"",

                       tb_pr_article:"",
                       tb_forum:"",
                       tb_venue:"",
                       tb_type:"",
                       tb_date:"",

                       tb_pub_title:"",
                       tb_pub_date:"",
                       tb_pub_journal:"",
                       tb_pub_vol:"",
                       tb_ISSN:"",
                       tb_index:"",

                       tb_o_pname:"",
                       tb_o_proof:"",

                       tb_benef:""
                       
                    },
                    {
                        tb_id:2,
                       tb_title:"",
                       tb_status:"",
                       tb_started:"",
                       tb_completed:"",

                       tb_pr_article:"",
                       tb_forum:"",
                       tb_venue:"",
                       tb_type:"",
                       tb_date:"",

                       tb_pub_title:"",
                       tb_pub_date:"",
                       tb_pub_journal:"",
                       tb_pub_vol:"",
                       tb_ISSN:"",
                       tb_index:"",

                       tb_o_pname:"",
                       tb_o_proof:"",

                       tb_benef:""
                    },
                ],
                currentComponent:myOutput,
                currentBtn:1
        }},
        methods:{
            validateData(value){
                if(!value){
                   return 'This field is required';
                }

                return true

            },
       
            submitData(){
                    if(this.count === true ){
                        this.isActive = true
                        this.count = false
                    }else{
                        this.isActive = false
                    }
                   
            },
            onClose(){
                this.isActive = false
            },

            showComponent(myComponent, btn){
                this.currentComponent = myComponent
                this.currentBtn = btn
            }
        },

    }


</script>

<template>
    <main class="w-full flex flex-col items-center">

      
        <Research_nav v-if="user === 'Research'"/>

        <section class="w-full flex  gap-8"> 
            <div class="flex flex-col w-3/12  pl-8 h-dvh">
                <h3 class="w-full flex  py-3 font-Subheader mt-8">Performace Indicator</h3>

                <h4 class="w-full text-white  bg-Red-Darken px-4 py-1">Research Service</h4>

                <ul class="nav-list mt-2 flex flex-col gap-1">
                    <li class="px-4 py-2" :class="{'isActive':currentBtn === 1}" @click="showComponent('myOutput', 1)">Details of Research Outputs </li>
                    <li class="px-4 py-2" :class="{'isActive':currentBtn === 2}" @click="showComponent('myPresentation', 2)">Details of Presentation</li>
                    <li class="px-4 py-2" :class="{'isActive':currentBtn === 3}" @click="showComponent('myPublication', 3)">Details of Publication</li>
                    <li class="px-4 py-2" :class="{'isActive':currentBtn === 4}" @click="showComponent('myUtilized', 4)">Details of Utilized Output</li>
                </ul>

  
            </div>

            <div class="w-7/12  flex flex-col items-center shadow-card2  px-16 py-16">
                <h1 class="w-full text-center font-Header text-xl text-Red-Rose">Research Service</h1>
                <p class="w-full text-center text-gray-400">College of Engineering</p>
                <p class="w-full text-center text-gray-400">Firstname M. Lastname</p>

                    <component :is="currentComponent"></component>
            </div>

            <!-- <div class="w-7/12  flex flex-col items-center shadow-card2  px-16 py-16">
                <h1 class="w-full text-center font-Header text-xl text-Red-Rose">Research Service</h1>
                <p class="w-full text-center text-gray-400">College of Engineering</p>
                <p class="w-full text-center text-gray-400">Firstname M. Lastname</p>

                <div class="w-full">
                    <p class="self-start mt-8 text-0.9 text-gray-500 text-justify"><b>Outcome Indicator 1:</b><br> Number of research outputs in the last three years (FY 2021-2023) utilized by the industry or by other beneficiaries</p>
                    <p class="self-start text-0.9 text-gray-500 mt-1 text-justify"><b>Output Indicator 1:</b> <br>  Number of research outputs completed within the year</p>
                    <p class="self-start text-0.9 text-gray-500 mt-1 text-justify"><b>Output Indicator 2:</b> <br>  (For State Universities): Percentage of researches published within the year (FY 2023) in internationally-refereed journal </p>
                    <p class="self-start text-0.9 text-gray-500 mt-1 text-justify"><b>Output Indicator 2:</b> <br>  (For State Colleges and Professional Institutes): Percentage of researches presented within the year (FY 2023) in national, regional, and international fora</p>

                    <div class="w-full overflow-x-auto ">
                        <div role="tablist" class="tabs tabs-lifted">
                            <input type="radio" name="my_tabs_2" role="tab" class="tab mt-8 font-Subheader text-base text-Red-Rose"
                                aria-label="Form" checked />
                            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">

                                <Form @submit="validateData">

                                    <h4 class="font-Subheader text-Red-Rose  mt-4">Details of Research Outputs</h4>

                                    <p class="text-0.9 font-Subheader text-gray-500 ">Research Title</p>
                                    <Field type="text" name="research_title" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData"  style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="research_title" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Researcher's Lastname</p>
                                    <Field type="text" name="lname" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData"  style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="lname" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Researcher's Firstname</p>
                                    <Field type="text" name="fname" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData"  style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="fname" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Researcher's Middlename</p>
                                    <Field type="text" name="mname" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData"  style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="mname" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Status of Research</p>
                                    <Field as="select" name="status" class="select select-bordered w-full mt-2"
                                        :rules="validateData" style="border: 1px solid #d2d2d2;">
                                        <option disabled selected>Select Status ...</option>
                                        <option value="Completed"> Completed</option>
                                    </Field>
                                    <ErrorMessage name="status" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date Started</p>
                                    <Field type="date" name="date_started" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData" style="border: 1px solid #d2d2d2;" />
                                    <ErrorMessage name="date_started" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date Completed</p>
                                    <Field type="date" name="date_completed" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData" style="border: 1px solid #d2d2d2;" />
                                    <ErrorMessage name="date_completed" class="error_message" />


                                    <div class="divider mt-8 "></div>

                                    <h4 class="font-Subheader text-Red-Rose ">Details of Presentation</h4>

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Article</p>
                                    <Field type="text" name="article1" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData" style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="article1" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Title of Forum</p>
                                    <Field type="text" name="forum" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData" style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="forum" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Venue</p>
                                    <Field type="text" name="venue" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData" style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="venue" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Forum Type</p>
                                    <Field type="text" name="forumType" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData" style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="forumType" class="error_message" />


                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date of Presentation</p>
                                    <Field type="date" name="date" placeholder="Type here" class="input mt-2 input-bordered w-full "
                                        :rules="validateData" style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="date" class="error_message" />

                                    <div class="divider mt-8 "></div>
                                    <h4 class="font-Subheader text-Red-Rose ">Details of Publication</h4>
                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Published Title</p>
                                    <Field type="text" name="article2" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData" style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="article2" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date of Publication</p>
                                    <Field type="date" name="publication" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData" style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="publication" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Title of Journal / Publication</p>
                                    <Field type="text" name="journal" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData" style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="journal" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Volume & Issue</p>
                                    <Field type="text" name="vol" placeholder="Type here" class="input mt-2 input-bordered w-full "
                                        :rules="validateData" style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="vol" class="error_message" />


                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">ISSN/ ISBN</p>
                                    <Field type="text" name="issn" placeholder="Type here" class="input mt-2 input-bordered w-full "
                                        :rules="validateData" style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="issn" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Index</p>
                                    <Field type="text" name="index" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData" style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="index" class="error_message" />


                                    <div class="divider mt-8 "></div>
                                    <h4 class="font-Subheader text-Red-Rose ">Details of Utilized Output</h4>
                                    
                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Product Name / Methods / Process / Technology</p>
                                    <Field type="text" name="methods" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData" style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="methods" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Patent Number / Product Description</p>
                                    <Field type="text" name="patent_no" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData" style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="patent_no" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Benefitting Industry / Community</p>
                                    <Field type="text" name="proof" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData" style="border: 1px solid #d2d2d2;"/>
                                    <ErrorMessage name="proof" class="error_message" />


                                    <span class="w-full flex items-center justify-end gap-2 mt-5">
                                        <button class="btn w-2/12 bg-white border-0">Add</button>
                                    </span>

                                </Form>
                            </div>

                            <input type="radio" name="my_tabs_2" role="tab" class="tab font-Subheader text-base text-Red-Rose"
                                aria-label="Table" />
                            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 overflow-x-auto">

                                <table class="table-zebra table-md">
                                    <thead >
                                        <tr class=" border bg-gray-700 text-white" >
                                            <th class="text-0.9 text-white "></th>
                                            <th class="text-0.9 text-white  border-r-2 border-white font-Subheader text-center" colspan="5">Details of Research Outputs</th>
                                            <th class="text-0.9 text-white font-Subheader text-center  border-r-2 border-white" colspan="5">Details of Presentation</th>
                                            <th class="text-0.9 text-white font-Subheader text-center  border-r-2 border-white" colspan="6">Details of Publication</th>
                                            <th class="text-0.9 text-white font-Subheader text-center  border-r-2 border-white " colspan="2">Details of Utilized Output</th>
                                            <th class="text-0.9 text-white font-Subheader text-center  border-r-2 border-white">Utilization</th>
                                        </tr>

                                        <tr class="bg-gray-700 text-white border">
                                            <th rowspan="2" class="text-0.9 text-white border-t-2 "></th>
                                            <th rowspan="2" class="text-0.9 text-white font-Subheader  border-t-2 border-r-2 border-white">Research Title</th>
                                            <th rowspan="2" class="text-0.9 text-white font-Subheader  border-t-2 border-r-2 border-white">Name of Faculty Researcher / Author</th>
                                            <th rowspan="2" class="text-0.9 text-white font-Subheader  border-t-2 border-r-2 border-white">Status</th>
                                            <th  class="text-0.9 text-white font-Subheader text-center border-r-2 border-white border-t-2 " colspan="2">Duration</th>

                                            <th rowspan="2" class="text-0.9 text-white font-Subheader border-t-2 border-r-2 border-white">Title of Forum</th>
                                            <th rowspan="2" class="text-0.9 text-white font-Subheader border-t-2 border-r-2 border-white">Venue</th>
                                            <th rowspan="2" class="text-0.9 text-white font-Subheader border-t-2 border-r-2 border-white">Forum Type</th>
                                            <th rowspan="2" class="text-0.9 text-white font-Subheader border-t-2 border-r-2 border-white">Date of Presentation</th>

                                            <th rowspan="2" class="text-0.9 text-white font-Subheader border-t-2  border-r-2 border-white">Published TItle</th>
                                            <th rowspan="2" class="text-0.9 text-white font-Subheader border-t-2 border-r-2 border-white">Date of Publication </th>
                                            <th rowspan="2" class="text-0.9 text-white font-Subheader border-t-2 border-r-2 border-white">Title of Journal or Publication</th>
                                            <th rowspan="2" class="text-0.9 text-white font-Subheader border-t-2 border-r-2 border-white">Volume & Issue</th>
                                            <th rowspan="2" class="text-0.9 text-white font-Subheader border-t-2 border-r-2 border-white">ISSN / ISBN</th>
                                            <th rowspan="2" class="text-0.9 text-white font-Subheader border-t-2 border-r-2 border-white">Index</th>

                                            <th rowspan="2" class="text-0.9 text-white  font-Subheader border-t-2 border-r-2 border-white">Product Name / Methods/ Process / Technology</th>
                                            <th rowspan="2" class="text-0.9 text-white  font-Subheader border-t-2 border-r-2 border-white"> Patent Number / Product Description</th>
                                            <th rowspan="2" class="text-0.9 text-white  font-Subheader border-t-2 border-r-2 border-white">Benefiting Industry / Community</th>
                                        </tr>

                                        <tr class="bg-gray-700 text-white border">
                                            <th class="text-0.9 text-white font-Subheader  border-t-2 border-r-2 border-white">Date Started</th>
                                            <th class="text-0.9 text-white font-Subheader  border-t-2 border-r-2 border-white">Date Completed</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in sampleData">
                                            <td>{{ item.tb_id }}</td>
                                            <td>{{ item.tb_title }}</td>
                                            <td>{{ item.tb_status }}</td>
                                            <td>{{ item.tb_started }}</td>
                                            <td>{{ item.tb_completed }}</td>

                                            <td>{{ item.tb_pr_article }}</td>
                                            <td>{{ item.tb_forum }}</td>
                                            <td>{{ item.tb_venue }}</td>

                                            <td>{{ item.tb_type }}</td>
                                            <td>{{ item.tb_date }}</td>

                                            <td>{{ item.tb_pub_title }}</td>
                                            <td>{{ item.tb_pub_date }}</td>
                                            <td>{{ item.tb_pub_journal }}</td>
                                            <td>{{ item.tb_pub_vol }}</td>

                                            <td>{{ item.tb_ISSN }}</td>
                                            <td>{{ item.tb_index }}</td>


                                            <td>{{ item.tb_o_pname }}</td>
                                            <td>{{ item.tb_o_proof }}</td>
                                            <td>{{ item.tb_benef }}</td>


                                        </tr>


                                    </tbody>
                                </table>

                                <span class="w-full flex items-center justify-end gap-2 mt-5">
                                    <button class="btn btn-accent w-2/12" @click="submitData">Submit</button>
                                    <span class="flex justify-center items-center w-dvw h-svh fixed top-0 left-0"
                                        style="background: rgb(0,0,0,0.6);"
                                        :class="{ 'active': isActive == true, 'inActive': isActive == false }">

                                        <div class="modal-box">
                                            <h3 class="font-bold text-lg">Reminder</h3>
                                            <p class="py-4 text-lg">Please review the information you've provided before proceeding
                                                with submission.</p>
                                            <h1>After reviewing, please click the <b> "Submit" </b>" button</h1>
                                            <div class="modal-action">
                                                <form method="dialog">
                                                    <button class="btn" @click="onClose">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </span>
                                </span>
                            </div>


                        </div>

                    </div>
                </div>
            
            </div> -->

       
                <activityList/>
      
        </section>
    </main>


</template>

<style scoped>
        .active{
            display: flex;
            flex-direction: column;
        }

        .inActive{
            display: none;
        }
        .error_message{
            color: red;
            font-size: .9rem;
        }

        .isActive {
            /* background-color: rgb(207 250 254); */
            background-color:rgb(255, 240, 221);

        }

</style>