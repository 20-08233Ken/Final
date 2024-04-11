
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
                        title:'Partner LGU /Community/ Industry / SMEs / Private or Public Agencies / NGOs',
                        value:'campus',
                        class:'table_header',
                    },
                    {
                        title:'Extension Program / Activities',
                        value:'department',
                    },
                    {
                        title:'Start Date',
                        value:'program',
                    },
                    {
                        title:'End Date',
                        value:'year_io',
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

