

    import Planning_nav from '../../../components/Others/Navigation/Planning_nav.vue';
    import PBB_sideNav from '../../../components/Others/PBB_sideNav.vue';
    export default{
        data(){
            return{
                currentComponent:null,

                AE_OCI_1:[
                    {
                    status:"submitted",
                    title:"Annex A PSIPOP",
                    date:"07-12-2023"
                    },
                    {
                    status:"submitted",
                    title:"Annex C Faculty Loadings",
                    date:"07-12-2023"
                    },                    {
                    status:"submitted",
                    title:"Abstract: SIC Projects",
                    date:"07-12-2023"
                    },                    {
                    status:"submitted",
                    title:"Abstract: Eggciting Project",
                    date:"07-12-2023"
                    },                    {
                    status:"submitted",
                    title:"Abstract: VERMI 2",
                    date:"07-12-2023"
                    },                    {
                    status:"submitted",
                    title:"Abstract: ROBIN",
                    date:"07-12-2023"
                    }, {
                    status:"submitted",
                    title:"Abstract: Road safety for children",
                    date:"07-12-2023"
                    },                              
            ],

                AE_OPI_1:[
                    {
                    status:"submitted",
                    title:"Enrollment List - Pablo Borbon",
                    date:"07-12-2023"
                    },
                    {
                    status:"submitted",
                    title:"Alangilan Enrollment Summary First Semester AY 2021-2022",
                    date:"07-12-2023"
                    },
                    {
                    status:"submitted",
                    title:"ARASOF-Nasugbu Summary of Enrollment List 1st Semester 2021 - 2022",
                    date:"07-12-2023"
                    },
                    {
                    status:"not submitted",
                    title:"JPLPC Malvar Enrollment Summary First Semester AY 2021-2022",
                    date:"07-12-2023"
                    },
                    {
                    status:"not submitted",
                    title:"Lipa Enrollment Summary",
                    date:"07-12-2023"
                    },
                    {
                    status:"not submitted",
                    title:"Curriculum: Bachelor of Law",
                    date:"07-12-2023"
                    },
                    {
                    status:"not submitted",
                    title:"Curriculum: Masters in Information Technology (MIT)",
                    date:"07-12-2023"
                    },
            ],

            AE_OPI_2:[             {
                    status:"submitted",
                    title:"	Summary of Completed Accreditation Survey 2020",
                    date:"07-12-2023"
                    },
                    {
                    status:"submitted",
                    title:"Summary of Completed Accreditation Survey 2021",
                    date:"07-12-2023"
                    },
                    {
                    status:"submitted",
                    title:"Summary Accre Cert for Main II revised",
                    date:"07-12-2023"
                    },
                    {
                    status:"not submitted",
                    title:"Summary Accre Cert for Main I revised",
                    date:"07-12-2023"
                    },
                    {
                    status:"not submitted",
                    title:"BatStateU Accreditation Schedule for FY 2022",
                    date:"07-12-2023"
                    },
                ]
            };
        },
        components:{
            Planning_nav,
            PBB_sideNav,


        },
        methods:{
            showComponent(componentName){
                this.currentComponent = componentName
            },

            getStatusColor(status){
                
                return status === "submitted" ? "green":"red";
                
            }
        }
    }

