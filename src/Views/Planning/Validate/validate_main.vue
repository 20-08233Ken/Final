
<script>
    import Planning_nav from '../../../components/Others/Navigation/Planning_nav.vue';
    import { Form, ErrorMessage, Field } from 'vee-validate';
    import { markRaw } from "vue"

    import { x } from './sample.js'

    
    import v_OCI_1 from './HighEd/v_OCI_1.vue'
    import v_OCI_2 from './HighEd/v_OCI_2.vue'
    import v_OPI_1 from './HighEd/v_OPI_1.vue'
    import v_OPI_2 from './HighEd/v_OPI_2.vue'

    import ad_OCI_1 from './AdvEd/v_OCI_1.vue'
    import ad_OPI_1 from './AdvEd/v_OPI_1.vue'
    import ad_OPI_2 from './AdvEd/v_OPI_2.vue'

    import Research from './Research.vue'

    import OPI1N2Vue from './Extension/OPI_1N2.vue'
    import OC from './Extension/OC.vue'
    import OPI_2 from './Extension/OPI_2.vue'

    const mark_v_OCI_1 = markRaw(v_OCI_1)
    const mark_v_OCI_2 = markRaw(v_OCI_2)
    const mark_v_OPI_2 = markRaw(v_OPI_2)
    
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
                z:x
            }
        },
        components:{
            Planning_nav,
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
</script>
<template>
    <main class="w-full flex flex-col">
        <Planning_nav/>

        <section class="w-full flex gap-16 px-3vw mt-8">

            <div class="w-3/12  flex flex-col">
                <h3 class="w-full flex px-4 py-1 font-Subheader bg-gray-700 text-white" >Performace Indicator</h3>
                <h4 class="w-full  text-white  bg-Red-Darken px-4 py-1">Higher Education</h4>
                    
                    <h5 class=" ml-2 px-2 py-1 mt-2"  @click="showComponent('v_OCI_1', 1)" :class="{'isActive':currentBtn === 1}">Outcome Indicator 1</h5>
                    <h5 class=" ml-2 px-2 py-1" @click="showComponent('v_OCI_2', 2)" :class="{'isActive':currentBtn === 2}">Outcome Indicator 2</h5>      
                    <h5 class=" ml-2 px-2 py-1" @click="showComponent('v_OPI_1', 3)" :class="{'isActive':currentBtn === 3}">Output Indicator 1</h5>
                    <h5 class=" ml-2 px-2 py-1" @click="showComponent('v_OPI_2',4 )" :class="{'isActive':currentBtn === 4}">Output Indicator 2</h5>

                <h4 class="w-full mt-4 text-white  bg-Red-Darken px-4 py-1">Advanced Education</h4>
                    
                    <h5 class=" ml-2 px-2 py-1 mt-2"  @click="showComponent('ad_OCI_1',5 )" :class="{'isActive':currentBtn === 5}">Outcome Indicator 1</h5>
                    <h5 class=" ml-2 px-2 py-1 mt-2"  @click="showComponent('ad_OPI_1',6 )" :class="{'isActive':currentBtn === 6}">Output Indicator 1</h5>
                    <h5 class=" ml-2 px-2 py-1 mt-2"  @click="showComponent('ad_OPI_2',7 )" :class="{'isActive':currentBtn === 7}">Output Indicator 2</h5>

                <h4 class="w-full mt-4  text-white  bg-Red-Darken px-4 py-1">Research Program</h4>
                    <h5 class="ml-2 px-2 py-1 mt-2"  @click="showComponent('Research',8 )" :class="{'isActive':currentBtn === 8}">Output and Outcome Indicator </h5>

                <h4 class="w-full mt-4 text-white  bg-Red-Darken px-4 py-1">Technical Extension Service</h4>
                    <h5 class=" ml-2 px-2 py-1 mt-2" @click="showComponent('OC',9 )" :class="{'isActive':currentBtn === 9}">Outcome Indicator 1</h5>
                    <h5 class=" ml-2 px-2 py-1 mt-2" @click="showComponent('OPI1N2Vue',10 )" :class="{'isActive':currentBtn === 10}">Output Indicator 1 and 3 </h5>
                    <h5 class=" ml-2 px-2 py-1 mt-2" @click="showComponent('OPI_2',11 )" :class="{'isActive':currentBtn === 11}">Output Indicator 2</h5>
            </div>

            <div class="w-9/12 shadow-card2 px-3vw py-3vw rounded-lg">
                <component :is="currentComponent"></component>
            </div>
               
        </section>

    </main>

</template>

<style scoped>
    td:last-child{
        display:flex;
        align-items:center
    }

    ::v-deep thead {
  background-color:	rgb(55 65 81);

    }
    ::v-deep th{
        color: white;
        border: 1px solid white;
    }

    .isActive{
        background-color:rgb(255, 240, 221);
    }
   
  


</style>