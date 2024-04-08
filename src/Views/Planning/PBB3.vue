<script>

    import Navigation from '../../components/Others/Navigation.vue';
    import HigherEd from './Indicators/HigherEd.vue';
    import AdvanceEd from './Indicators/AdvanceEd.vue';
    import ResearchServices from './Indicators/ResearchServices.vue';
    import PBB_sideNav from '../../components/Others/PBB_sideNav.vue';

    import Planning_nav from '../../components/Others/Navigation/Planning_nav.vue';

    import {markRaw} from 'vue'

    const raw_HigherEd = markRaw(HigherEd);
    const raw_AdvanceEd = markRaw(AdvanceEd);
    
    export default{
        data(){
            return{
                currentComponent:null
            };
        },
        components:{
            Navigation,
            HigherEd,
            AdvanceEd,
            PBB_sideNav,
            ResearchServices,
            Planning_nav

        },
        watch:{
            '$route.query.program':{
                handler:function(value){
                    console.log(value)

                    if(value == "HigherEd"){
                        this.currentComponent = HigherEd

                    }else if(value == "AdvancedEd"){
                        this.currentComponent = AdvanceEd
                        
                    }else if(value == "ResearchServices"){
                        this.currentComponent = ResearchServices
                        
                    }
                    
                    
                },
                immediate:true,
                deep:true
            }
        },
        methods:{
            showComponent(componentName){
                this.currentComponent = componentName
            }
        },

        // mounted(){
        //     console.log("were")
        //     console.log(this.$route.query.program)
        // }
    }

</script>

<template>
    <main class="w-full flex flex-col">
        <Planning_nav/>

        <section class="w-full flex  px-6vw pt-6vw">
            <div class="w-full flex justify-between">
                <h1 class="font-Header text-4xl text-Red-Darken">Performanced-Based Bonus</h1>

                <div class="w-2/4 flex items-center gap-4 justify-end">
                    <h2 class="font-Subheader mt-2 text-Red-Rose">Year</h2>
                    <select class="select  w-3/12 mt-2 bg-gray-100">
                        <option disabled selected>FY 2023</option>
                        <option>FY 2021</option>
                        <option>FY 2022</option>
                        <option>FY 2023</option>
                    </select>

                    <h2 class="font-Subheader mt-2 text-Red-Rose">Quarter</h2>
                    <select class="select  w-3/12 mt-2 bg-gray-100">
                        <option disabled selected>Q1</option>
                        <option>Q2</option>
                        <option>Q3</option>
                        <option>Q4</option>
                    </select>
                </div>

            </div>




        </section>

        <section class="w-full flex px-6vw py-3vw">
            <div class="flex flex-col w-4/12">
                <PBB_sideNav/>
            </div>


            <div class="flex w-8/12 ">
                <component :is="currentComponent"></component>
            </div>
        </section>

    </main>

</template>