import {Form, Field, ErrorMessage} from 'vee-validate'
import { userPosition } from '../../cookies'
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
                    title:'Name',
                    value:'name',
                },
                {
                    title:'Status',
                    align:'status',
                },
                {
                    title:'Companys Business / Type of Business',
                    align:'business',
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
    },

    mounted(){

        const holdCookies = userPosition();
       
        if(holdCookies === 'VCAA'){
            // call the API for VCAA
            // PASS it to sampleData[]

        }else if( holdCookies === 'Planning'){
            // call the API for VCAA
            // PASS it to sampleData[]

        }    
        else if( holdCookies === 'Chancellor'){
            // call the API for VCAA
            // PASS it to sampleData[]

        }else if( holdCookies === 'VPAA'){
            // call the API for VCAA
            // PASS it to sampleData[]

        }else if( holdCookies === 'IPDO'){
            // call the API for VCAA
            // PASS it to sampleData[]
            
        }
    }

    
}
