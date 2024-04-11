
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
                        title:'Title of Training',
                        value:'campus',
                        class:'table_header',
                    },
                    {
                        title:'Inclusive Dates',
                        value:'department',
                        children:[
                            {
                                title:"Start Date"
                            },{
                                title:"End Date"
                            }
                        ]
                    },
                    {
                        title:'Duration in Terms of Number of Hours',
                        value:'program',
                    },
                    {
                        title:'Weight per Duration',
                        value:'year_io',
                    },
                    {
                        title:'Number of Trainees',
                        value:'accr_status',
                    },
                    {
                        title:'Number of Trainees x Wight per Duration',
                        align:'center',
                    },
                    {
                        title:'Number of Trainees Surveyed',
                        align:'center',
                    },
                    {
                        title:'Quality and Relevance Rating',
                        align:'center',
                        children:[
                            {
                                title:'1',
                                children:[{
                                    title:'P'
                                }]
                            },
                            {
                                title:'2',
                                children:[{
                                    title:'F'
                                }]
                            },
                            {
                                title:'3',
                                children:[{
                                    title:'S'
                                }]
                            },
                            {
                                title:'4',
                                children:[{
                                    title:'VS'
                                }]
                            },
                            {
                                title:'5',
                                children:[{
                                    title:'E'
                                }]
                            },
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
                        align:'center',
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


