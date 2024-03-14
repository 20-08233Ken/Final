<script>
    export default{
        data(){
            return{
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

            AE_OPI_2:[
                {
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
            }
        },

        methods:{
            getStatusColor(status){
                
                return status === "submitted" ? "green":"red";
                
            }
        }
    }
</script>

<template>
    <span class="w-full flex justify-between items-center mt-4 px-12">
        <h3 class="font-Header text-Red-Rose text-xl">Advnaced Education Logs</h3>
    </span>

    <div class="w-full flex flex-col overflow-x-auto px-12 pb-8">
        <v-expansion-panels class="mt-4 ">
        <v-expansion-panel>
            <v-expansion-panel-title>
                <h4 class="flex gap-4 items-center  font-Subheader">
                    <span class="text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                    </span>
                    Outcome Indicator 1: Percentage of graduate school faculty engaged in research work
                </h4>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                <table class="table-zebra mt-4 w-full " id="HE_OCI_1">
                    <tr v-for="(x, index) in AE_OCI_1" :key="index">
                        <td><span :style="{ backgroundColor: getStatusColor(x.status) }" id="status_icon"></span></td>
                        <td>{{ x.title }}</td>
                        <td>{{ x.date }}</td>
                    </tr>
                </table>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>


    <v-expansion-panels class="mt-4 ">
        <v-expansion-panel>
            <v-expansion-panel-title>
                <h4 class="flex gap-4 items-center  font-Subheader">
                    <span class="text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                    </span>
                    Outcome Indicator 1 (State Universities): Percentage of graduate students enrolled in research
                    degree program
                </h4>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                <table class="table-zebra mt-4 w-full " id="HE_OCI_1">
                    <tr v-for="(x, index) in AE_OPI_1" :key="index">
                        <td><span :style="{ backgroundColor: getStatusColor(x.status) }" id="status_icon"></span></td>
                        <td>{{ x.title }}</td>
                        <td>{{ x.date }}</td>
                    </tr>
                </table>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels class="mt-4 ">
        <v-expansion-panel>
            <v-expansion-panel-title>
                <h4 class="flex gap-4 items-center  font-Subheader">
                    <span class="text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                    </span>
                    Output Indicator 2: Percentage of graduate programs with accreditation
                </h4>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                <table class="table-zebra mt-4 w-full " id="HE_OCI_1">
                    <tr v-for="(x, index) in AE_OPI_2" :key="index">
                        <td><span :style="{ backgroundColor: getStatusColor(x.status) }" id="status_icon"></span></td>
                        <td>{{ x.title }} </td>
                        <td>{{ x.date }}</td>
                    </tr>
                </table>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
    </div>


</template>

<style scoped>
table,tr, td{
    /* border-collapse: collapse; */
  
}
td{
    padding:10px 0 ;
}
td:first-child{
    width:5%;

}
td:nth-child(2){
    width:70%;
    padding-left: 2%;
  
}

td:last-child{
   
    width:15%;
    text-align: center;
   
    /* padding-right: 5%; */
}


#HE_OCI_1 tr:nth-child(even){
    background-color: #f2f2f2;
}
#HE_OCI_1 > tr >td >span{
        display: flex;
         width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-left: 50%;
        background-color: red;
}

.isActive{
    background-color: #212121;
    color: white;
}</style>