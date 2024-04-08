
<script>

    import calendar from './calendar.vue';
    export default{
        components:{
            calendar
        },
        data(){
            return{
                sampleData:[
                {
                    id:1,
                    activity:"Submission of PBB Documents",
                    date:"June 14, 2023",
                    status:"Missing"
                },
                {
                    id:2,
                    activity:"Submission of PBB Documents",
                    date:"June 14, 2023",
                    status:"Late"
                },
                {
                    id:3,
                    activity:"Submission of PBB Documents",
                    date:"June 14, 2023",
                    status:"Completed"
                },
                {
                    id:4,
                    activity:"Submission of PBB Documents",
                    date:"June 14, 2023",
                    status:"Missing"
                },
                {
                    id:5,
                    activity:"Submission of PBB Documents",
                    date:"June 14, 2023",
                    status:"Late"
                },
                {
                    id:6,
                    activity:"Submission of PBB Documents",
                    date:"June 14, 2023",
                    status:"Completed"
                },
            ]
            }
        }
    }
</script>

<template>
            <div class="flex w-20% shadow-card2" >
            <span class="flex flex-col w-full px-4 py-4 ">
                <calendar/>
                <h4 class="mt-6 font-Header text-Red-Rose" >Activities</h4>



                <span class="flex mt-4 items-center " v-for=" item in sampleData" :key="item.id" >
                    <span v-if="item.status === 'Missing'" class="w-full flex gap-4 ml-4">
                    <i class="text-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                        </svg>
                    </i>
                    <span>
                        <p class="font-Subheader text-sm">{{item.activity}}</p>
                        <p class="text-sm">{{item.date}}</p>
                        <p class="text-0.8 text-orange-600"><b>{{ item.status }}</b></p>
                    </span>
                    </span>
                </span>

                <h4 class="mt-2 font-Header text-Red-Rose" >Submitted</h4>                
                
                <span class="flex gap-4 mt-2 items-center "  v-for=" item in sampleData" :key="item.id">

                    
                    <span v-if="item.status === 'Completed'" class="w-full flex gap-4 ml-4">
                        <i class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                            </svg>
                        </i>
                        <span>
                            <p class="font-Subheader text-sm">{{item.activity}}</p>
                            <p class="text-sm">{{item.date}}</p>
                            <p class="text-0.8 text-green-600"><b>{{ item.status }}</b></p>
                        </span>
                    </span>
                </span>
          
                    <span class="flex gap-4 mt-2 items-center "  v-for=" item in sampleData" :key="item.id">
                        <span v-if="item.status === 'Late'" class="w-full flex gap-4 ml-4">
                            <i class="text-Red-Darken">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9">
                                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                                </svg>
                            </i>
                            <span>
                                <p class="font-Subheader text-sm">{{item.activity}}</p>
                                <p class="text-sm">{{item.date}}</p>
                                <p class="text-0.8 text-Red-Rose"><b>{{ item.status }}</b></p>
                            </span>
                        </span>
                    </span>
                


            </span>
        </div>
</template>