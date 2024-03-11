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
                    title:'Undergraduate Program',
                    value:'program',
                },
                {
                    title:'No. of Enrollees for 1st Semester',
                    align:'center',
                    children:[
                        {
                            title:'Thesis/Dissertation Requiring Degree',
                            value:'thesis',
                        },
                        {
                            title:'Not Thesis/Dissertation Requiring Degree',
                            value:'not_thesis',
                        }
                    ]
                },
             
                {
                    title:'Supporting Documents',
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
