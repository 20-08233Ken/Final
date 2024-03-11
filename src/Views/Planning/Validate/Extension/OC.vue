<script>
    import {Form, Field, ErrorMessage} from 'vee-validate'
    export default{
        data(){
            return{
                sampleData:[
                    {
                       campus:'Alangilan Campus',
                       department:'College of Engineering',
                       program:"Bachelor of Science in Civil Engineering",
                       year_io:'2012',
                       status:'status',
                       pov_from:'pov_from',
                       pov_to:'pov to',
                       sup_doc:'',
                       v_status:"Not validated"     

                    },
                    {
                       campus:'Alangilan Campus',
                       department:'College of Engineering',
                       program:"Bachelor of Science in Civil Engineering",
                       year_io:'2012',
                       status:'status',
                       pov_from:'pov_from',
                       pov_to:'pov to',
                       sup_doc:'',
                       v_status:"Not validated"         

                    },
                    {
                       campus:'Alangilan Campus',
                       department:'College of Engineering',
                       program:"Bachelor of Science in Civil Engineering",
                       year_io:'2012',
                       status:'status',
                       pov_from:'pov_from',
                       pov_to:'pov to',
                       sup_doc:'',
                       v_status:"Not validated"         

                    }
                    ,
                    {
                       campus:'Alangilan Campus',
                       department:'College of Engineering',
                       program:"Bachelor of Science in Civil Engineering",
                       year_io:'2012',
                       status:'status',
                       pov_from:'pov_from',
                       pov_to:'pov to',
                       sup_doc:'',
                       v_status:"Not validated"         

                    }
                    ,
                    {
                       campus:'Alangilan Campus',
                       department:'College of Engineering',
                       program:"Bachelor of Science in Civil Engineering",
                       year_io:'2012',
                       status:'status',
                       pov_from:'pov_from',
                       pov_to:'pov to',
                       sup_doc:'',
                       v_status:"Not validated"         

                    }
                    ,
                    {
                       campus:'Alangilan Campus',
                       department:'College of Engineering',
                       program:"Bachelor of Science in Civil Engineering",
                       year_io:'2012',
                       status:'status',
                       pov_from:'pov_from',
                       pov_to:'pov to',
                       sup_doc:'',
                       v_status:"Not validated"         

                    }
                    ,
                    {
                       campus:'Alangilan Campus',
                       department:'College of Engineering',
                       program:"Bachelor of Science in Civil Engineering",
                       year_io:'2012',
                       status:'status',
                       pov_from:'pov_from',
                       pov_to:'pov to',
                       sup_doc:'',
                       v_status:"Not validated"         

                    }
                    ,
                    {
                       campus:'Alangilan Campus',
                       department:'College of Engineering',
                       program:"Bachelor of Science in Civil Engineering",
                       year_io:'2012',
                       status:'status',
                       pov_from:'pov_from',
                       pov_to:'pov to',
                       sup_doc:'',
                       v_status:"Not validated"         

                    }
                    ,
                    {
                       campus:'Alangilan Campus',
                       department:'College of Engineering',
                       program:"Bachelor of Science in Civil Engineering",
                       year_io:'2012',
                       status:'status',
                       pov_from:'pov_from',
                       pov_to:'pov to',
                       sup_doc:'',
                       v_status:"Not validated"         

                    }
                    ,
                    {
                       campus:'Alangilan Campus',
                       department:'College of Engineering',
                       program:"Bachelor of Science in Civil Engineering",
                       year_io:'2012',
                       status:'status',
                       pov_from:'pov_from',
                       pov_to:'pov to',
                       sup_doc:'',
                       v_status:"Not validated"         

                    }
                    ,
                    {
                       campus:'Alangilan Campus',
                       department:'College of Engineering',
                       program:"Bachelor of Science in Civil Engineering",
                       year_io:'2012',
                       status:'status',
                       pov_from:'pov_from',
                       pov_to:'pov to',
                       sup_doc:'',
                       v_status:"Not validated"         

                    }
                ],

                headers:[
                    {
                        title:'Campus',
                        value:'campus',
                        class:'table_header',
                    },
                    {
                        title:'Department',
                        value:'department',
                    },
                    {
                        title:'Program',
                        value:'program',
                    },
                    {
                        title:'Year of Initial Operation',
                        value:'year_io',
                    },
                    {
                        title:'Program Accredittation Status',
                        value:'accr_status',
                    },
                    {
                        title:'Validity of Accredittation',
                        align:'center',

                        children:[
                            {
                                title:'Started Date',
                                value:'pov_from',
                            },
                            {
                                title:'End Date',
                                value:'pov_to',
                            }
                        ]
                    },
                    {
                        title:'Supported Documents',
                        value:'sup_doc',
                        align:'center'
                    },
                    {
                        title:'Validation Status',
                        value:'v_status',
                    },{
                        title:"Actions",
                        value:'actions'
                    }
                    
                ],
                reasonOpt:[
                    {
                        reason:'Lack of Supporting Documents'
                    },{
                        reason:'Inconsistent Data'
                    }
                ]
            }
        },
        components:{
            Form, Field, ErrorMessage
        }

        
    }

</script>

<template>
            <h1 class="font-Header text-3xl text-Red-Rose">Higher Education Program</h1>
            <h2 class="font-Subheader text-lg text-Red-Rose">Output Indicator 2</h2>
            <h2 class="font-Subheader text-1gray-700"> Percentage of undergraduate programs with accreditation</h2>

            <span>
                <div class="text-sm breadcrumbs w-full mt-4">
                    <ul>
                        <li class="text-gray-500">
                            <router-link to="/pbb">
                                <a>PBB</a>
                            </router-link>
                        </li> 
                        <li class="text-gray-500">                   
                             <router-link to="/PPB_Higher">
                                <a>PBB Logs</a>
                            </router-link></li> 
                        <li class="text-gray-500">
                            <router-link 
                                :to="{
                                    name:'PBB_Summary',
                                    query:{
                                        program:'PBB_Summary2'
                                    }
                                    }"
                            >
                            
                                <a>Modified Form</a>
                            </router-link>
                        </li> 
                        <li class="text-gray-500">
                            <router-link 
                                :to="{
                                    name:'pbb3',
                                    query:{
                                        program:'HigherEd'
                                    }
                                    }"
                            >
                            
                                <a>View Data</a>
                            </router-link>
                            
                        </li>
                        <li class="text-gray-500">
                       
                            
                                <a>Validation</a>
                        
                            
                        </li>
                    
                    </ul>
                </div>
            </span>

            <span class=" w-full">

                <v-data-table
                        
                        :headers="headers"
                        :items="sampleData"
                        class="elevation-1"
                        items-per-page="10"   
                >

                <template v-slot:item.actions="{item}">
                
                    <span class="flex w-full  gap-2 py-4">
                    <v-btn size="x-small" class="bg-teal-darken-3" onclick="showApproval.showModal()"> Approved</v-btn>
                    <v-btn size="x-small" class="bg-red-darken-3"  onclick="showRejection.showModal()"> Reject</v-btn>
                    </span>
                </template>



           </v-data-table>
            </span>

            <dialog id="showApproval" class="modal">
            <div class="modal-box">
           
                <h3 class="font-bold text-lg bg-gray-700 text-white px-4 py-3 font-Header">Approval</h3>
                <p class="py-4">Are you sure you want to approve this record? </p>

                <form method="dialog">
                    <span class="w-full flex justify-end gap-4 mt-4">
                    <button class="btn bg-white border-0 shadow-0">
                        Cancel
                    </button>

                    <button class="btn btn-success text-white">
                        Confirm
                    </button>
                </span>
                </form>

            </div>
            </dialog>
            <dialog id="showRejection" class="modal">
            <div class="modal-box">
           
                <h3 class="font-bold text-lg bg-gray-700 text-white px-4 py-3 font-Header">Reason of Rejection</h3>
              

                <Form >
                    <p class="py-4 text-0.9">Reasons </p>
                    <Field as="select" placeholder="Type here" name="reason" class="select w-full" style="border:  1px solid #d2d2d2;">
                        <option v-for=" x in reasonOpt" :value="x.reason" >{{ x.reason }}</option>
                    </Field>
                    <ErrorMessage name="reason" class="error_message"/>

                    <p class="py-4 text-0.9">If others, please specify </p>
                    <Field type="text" placeholder="Type here" name="otherReason" class="input  input-bordered w-full"  style="border:  1px solid #d2d2d2;"/>
                    <ErrorMessage name="otherReason" class="error_message"/>

                    
                    <button class="btn btn-success text-white">
                        Submit
                    </button>
                </Form>


                <form method="dialog">
                    <span class="w-full flex justify-end gap-4 mt-4">
                    <button class="btn bg-white border-0 shadow-0">
                        Cancel
                    </button>

                    <button class="btn btn-success text-white">
                        Submit
                    </button>
                </span>
                </form>

            </div>
            </dialog>


</template>