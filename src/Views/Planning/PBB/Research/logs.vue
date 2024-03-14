<script>

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
        }
    },
    methods:{
            getStatusColor(status){
                return status === "submitted" ? "green":"red";
            }
        },
}
</script>


<template>

    <div class="w-full flex flex-col px-12">
        <span class="w-full flex justify-between items-center mt-4 ">
            <h3 class="font-Header text-Red-Rose text-lg">Research Services Logs</h3>
        </span>

        <div class="flex w-full flex-col">

            

            <div class="w-full flex-col overflow-x-auto">

                <h4 class="flex gap-4 items-center mt-4 font-Subheader">
                    <span class="text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                    </span>
                    Outcome Indicator 1: Number of research outputs in the last three years utilized by the industry or
                    by other beneficiaries
                </h4>

                <table class="table-zebra mt-4 w-full " id="HE_OCI_1">
                    <tr v-for="(x, index) in OCI_1" :key='index'>
                        <td><span :style="{ backgroundColor: getStatusColor(x.status) }"></span></td>
                        <td>{{ x.title }}</td>
                        <td>{{ x.date }}</td>
                    </tr>
                </table>


            </div>


            <div class="w-full flex-col  overflow-x-auto">
                <h4 class="flex gap-4 items-center mt-4 font-Subheader">
                    <span class="text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                    </span>
                    Output Indicator 1: Number of research outputs completed within the year (2023)
                </h4>
                <table class="table-zebra mt-4 w-full " id="HE_OCI_1">
                    <tr v-for="(x, index) in OPI_1" :key="index">
                        <td><span :style="{ backgroundColor: getStatusColor(x.status) }"></span></td>
                        <td>{{ x.title }}</td>
                        <td>{{ x.date }}</td>
                    </tr>
                </table>



            </div>


            <div class="w-full flex-col  overflow-x-auto">
                <h4 class="flex gap-4 items-center mt-4 font-Subheader">
                    <span class="text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                    </span>
                    Output Indicator 2: Percentage of research outputs published in internationally-refereed or CHED
                    recognized journal within the year
                </h4>
                <table class="table-zebra mt-4 w-full " id="HE_OCI_1">
                    <tr v-for="(x, index) in OPI_2" :key="index">
                        <td><span :style="{ backgroundColor: getStatusColor(x.status) }"></span></td>
                        <td>{{ x.title }}</td>
                        <td>{{ x.date }}</td>
                    </tr>
                </table>



            </div>
        </div>
    </div>




</template>

<!-- <style scoped>
   
   @import url('../../../style/Planning/PBB/PBB_Research.css');
    </style> -->

<style scoped>
table,tr, td{
    border-collapse: collapse;
  
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
   
}
#HE_OCI_1 > tr >td >span{
        display: flex;
         width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-left: 50%;
        background-color: red;
}

#HE_OCI_1 tr:nth-child(even){
    background-color: #f2f2f2;
}</style>