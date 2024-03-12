
    import Planning_nav from '../../components/Others/Navigation/Planning_nav.vue';
    import VCAA_nav from '../../components/Others/Navigation/VCAA_nav.vue'
    import { Form, ErrorMessage, Field } from 'vee-validate';
    import { markRaw } from "vue"

    import v_OCI_1 from '../../Views/Validate/HighEd/v_OCI_1.vue'
    import v_OCI_2 from '../../Views/Validate/HighEd/v_OCI_2.vue'
    import v_OPI_1 from '../../Views/Validate/HighEd/v_OPI_1.vue'
    import v_OPI_2 from '../../Views/Validate/HighEd/v_OPI_2.vue'

    import ad_OCI_1 from '../../Views/Validate/AdvEd/v_OCI_1.vue'
    import ad_OPI_1 from '../../Views/Validate/AdvEd/v_OPI_1.vue'
    import ad_OPI_2 from '../../Views/Validate/AdvEd/v_OPI_2.vue'

    import Research from '../../Views/Validate/Research.vue'
  
    import OPI1N2Vue from '../../Views/Validate/Extension/OPI_1N2.vue'
    import OC from '../../Views/Validate/Extension/OC.vue'
    import OPI_2 from '../../Views/Validate/Extension/OPI_2.vue'
    import {userPosition} from '../cookies.js'

    const mark_v_OCI_1 = markRaw(v_OCI_1)
    const mark_v_OCI_2 = markRaw(v_OCI_2)
    const mark_v_OPI_2 = markRaw(v_OPI_2)
    
    export default{
        mounted(){
            const holdCookies = userPosition();
            this.user = holdCookies();
        },
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
                        title:'Period of Validity',
                        align:'center',

                        children:[
                            {
                                title:'Started of Validation',
                                value:'pov_from',
                            },
                            {
                                title:'End of Validation',
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

                currentComponent:v_OCI_1,
                currentBtn:1,
                user:null
              
            }
        },
        components:{
            Planning_nav,
            VCAA_nav,
            Form,
            ErrorMessage,
            Field,
            v_OCI_1,
            v_OCI_2,
            v_OPI_1,
            v_OPI_2,
            ad_OCI_1,
            ad_OPI_1,
            ad_OPI_2,
            Research,
            OPI1N2Vue,
            OC,
            OPI_2

            
           
        },
        methods:{
            showComponent(myComponent, myBtn1){
                this.currentComponent = myComponent
                this.currentBtn = myBtn1
            }
        }
        
    }
