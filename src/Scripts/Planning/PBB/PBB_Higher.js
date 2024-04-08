
    // import Navigation from '../../../components/Others/Navigation.vue';
    // import AdvanceEd from '../Indicators/AdvanceEd.vue';
    // import HigherEd from '../Indicators/AdvanceEd.vue';

    import PBB_sideNav from '../../../components/Others/PBB_sideNav.vue';
    import Planning_nav from '../../../components/Others/Navigation/Planning_nav.vue'
    import Logs from '../../../Views/Planning/PBB/HighEd/logs.vue'
    import Target from '../../../Views/Planning/PBB/HighEd/target.vue'
    import Indicators from '../../../Views/Planning/PBB/HighEd/indicators.vue'
    import {markRaw} from 'vue'

    const raw_Planning_nav = markRaw(Planning_nav)
    const raw_Logs = markRaw(Logs)
    const raw_Target = markRaw(Target)
    const raw_Indicators = markRaw(Indicators)

    export default{
        data(){
            return{
                currentComponent:Logs,
                myBtn :1,
                OCI_1:[
                    {
                        status:"submitted",
                        title:"BSED September 2021",
                        date:"07-12-2023"
                    },
                    {
                        status:"submitted",
                        title:"Elementary Education September 2021",
                        date:"07-12-2023"
                    },
                    {
                        status:"submitted",
                        title:"	Accountancy December 2021",
                        date:"07-12-2023"
                    },
                    {
                        status:"submitted",
                        title:"Nutritionist Dietitian October 2021",
                        date:"07-12-2023"
                    },
                    {
                        status:"submitted",
                        title:"Nursing November 2021",
                        date:"07-12-2023"
                    },
                ],
                OCI_2:[
                    {
                        status:"submitted",
                        title:"Annex A: Graduates Tracer Study or Summary results of survey of employment",
                        date:"07-12-2023"
                    },
                    {
                        status:"submitted",
                        title:"List of Graduates March 2019",
                        date:"07-12-2023"
                    },
                    {
                        status:"submitted",
                        title:"	List of Graduates June 2019",
                        date:"07-12-2023"
                    },
                    {
                        status:"submitted",
                        title:"List of Graduates September 2019",
                        date:"07-12-2023"
                    }
                    
                ],
                OPI_1:[
                    {
                        status:"submitted",
                        title:"Annex A Board Resolutions",
                        date:"07-12-2023"
                    },
                    {
                        status:"submitted",
                        title:"Annex B Enrollment List - Pablo Borbon",
                        date:"07-12-2023"
                    },
                    {
                        status:"not submitted",
                        title:"	Enrollment List -Alangilan",
                        date:"07-12-2023"
                    },
                    {
                        status:"not submitted",
                        title:"Enrollment List - ARASOF-Nasugbu",
                        date:"07-12-2023"
                    },
                    {
                        status:"not submitted",
                        title:"Enrollment List - JLPC Malvar",
                        date:"07-12-2023"
                    }
                    
                ],
                OPI_2:[
                    {
                        status:"submitted",
                        title:"Summary of Accre Cert for Main I revised",
                        date:"07-12-2023"
                    },
                    {
                        status:"submitted",
                        title:"Summary Accre Cert for Main II",
                        date:"07-12-2023"
                    },
                    {
                        status:"not submitted",
                        title:"	BatStateU Accreditation Schedule for FY 2022",
                        date:"07-12-2023"
                    },
                    {
                        status:"submitted",
                        title:"2020 ACCUP Technical Review and Board Action",
                        date:"07-12-2023"
                    },
                    {
                        status:"not submitted",
                        title:"2021 ACCUP Technical Review and Board Action",
                        date:"07-12-2023"
                    }
                    
                ]
                

            };
        },
        components:{
            Planning_nav,
            PBB_sideNav,
            Logs,
            Target,
            Indicators
            

        },
        methods:{
            // showComponent(componentName){
            //     this.currentComponent = componentName
            // },
            getStatusColor(status){
                return status === "submitted" ? "green":"red";
            },
            showComponent(btn, myComponent){
                this.currentComponent = myComponent
                this.myBtn = btn
            }
        }
    }


