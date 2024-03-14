
    import PBB_sideNav from '../../../components/Others/PBB_sideNav.vue';
    import Planning_nav from '../../../components/Others/Navigation/Planning_nav.vue';
    import Logs from '../../../Views/Planning/PBB/Research/logs.vue'
    import Target from '../../../Views/Planning/PBB/Research/target.vue'
    import Indicators from '../../../Views/Planning/PBB/Research/indicators.vue'
    import {markRaw} from 'vue'

    const raw_Logs = markRaw(Logs)
    export default{
        data(){
            return{
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
                        status:"not submitted",
                        title:"	Accountancy December 2021",
                        date:"07-12-2023"
                    },
                    {
                        status:"not submitted",
                        title:"Nutritionist Dietitian October 2021",
                        date:"07-12-2023"
                    },
                    {
                        status:"submitted",
                        title:"Nursing November 2021",
                        date:"07-12-2023"
                    },
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
                    
                ],
                currentComponent:Logs,
                myBtn :1,

            }
        },
        methods:{
            getStatusColor(status){
                return status === "submitted" ? "green":"red";
            },
            showComponent(btn, myComponent){
                this.currentComponent = myComponent
                this.myBtn = btn
            },
        },
        components:{
            PBB_sideNav,
            Planning_nav,
            Logs

        }
    }

