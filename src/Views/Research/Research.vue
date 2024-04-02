<script>
    import {Form, Field, ErrorMessage} from 'vee-validate'
    import Research_nav from '../../components/Others/Navigation/Research_nav.vue';
    import activityList from '../../components/Others/activityList.vue';
    import { userPosition } from '../../Scripts/cookies';
    import { useCookies } from 'vue3-cookies';

    import myOutput from './output.vue'
    import myUtilized from './utilized.vue'
    import myPublication from './publication.vue'
    import myPresentation from './presentation.vue'
    import { markRaw } from 'vue';

    const markRaw_myOutput = markRaw(myOutput)
    export default{
        mounted(){
            const holdCookies = userPosition();
            this.user = holdCookies();
        },
        components:{
            Form,
            Field,
            ErrorMessage,
            Research_nav,
            activityList,
            myOutput,
            myUtilized,
            myPublication,
            myPresentation
        },
        data(){
            return{
                user:null,
                count:true,
                isActive:false,
                sampleData:[
                    {
                       tb_id:1,
                       tb_title:"",
                       tb_status:"",
                       tb_started:"",
                       tb_completed:"",

                       tb_pr_article:"",
                       tb_forum:"",
                       tb_venue:"",
                       tb_type:"",
                       tb_date:"",

                       tb_pub_title:"",
                       tb_pub_date:"",
                       tb_pub_journal:"",
                       tb_pub_vol:"",
                       tb_ISSN:"",
                       tb_index:"",

                       tb_o_pname:"",
                       tb_o_proof:"",

                       tb_benef:""
                       
                    },
                    {
                        tb_id:2,
                       tb_title:"",
                       tb_status:"",
                       tb_started:"",
                       tb_completed:"",

                       tb_pr_article:"",
                       tb_forum:"",
                       tb_venue:"",
                       tb_type:"",
                       tb_date:"",

                       tb_pub_title:"",
                       tb_pub_date:"",
                       tb_pub_journal:"",
                       tb_pub_vol:"",
                       tb_ISSN:"",
                       tb_index:"",

                       tb_o_pname:"",
                       tb_o_proof:"",

                       tb_benef:""
                    },
                ],
                currentComponent:myOutput,
                currentBtn:1
        }},
        methods:{
            validateData(value){
                if(!value){
                   return 'This field is required';
                }

                return true

            },
       
            submitData(){
                    if(this.count === true ){
                        this.isActive = true
                        this.count = false
                    }else{
                        this.isActive = false
                    }
                   
            },
            onClose(){
                this.isActive = false
            },

            showComponent(myComponent, btn){
                this.currentComponent = myComponent
                this.currentBtn = btn
            }
        },

    }


</script>

<template>
    <main class="w-full flex flex-col items-center">


        <Research_nav v-if="user === 'Research'" />
        <section class="w-full flex justify-between gap-1 pl-3vw ">
            <div class="w-9/12 flex flex-col">
                <myOutput/>
            </div>
            <activityList/>
        </section>

        <!-- <section class="w-full flex  gap-8"> 
            <div class="flex flex-col w-3/12  pl-8 h-dvh">
                <h3 class="w-full flex  py-3 font-Subheader mt-8">Performace Indicator</h3>

                <h4 class="w-full text-white  bg-Red-Darken px-4 py-1">Research Service</h4>

                <ul class="nav-list mt-2 flex flex-col gap-1">
                    <li class="px-4 py-2" :class="{'isActive':currentBtn === 1}" @click="showComponent('myOutput', 1)">Details of Research Outputs </li>
                    <li class="px-4 py-2" :class="{'isActive':currentBtn === 2}" @click="showComponent('myPresentation', 2)">Details of Presentation</li>
                    <li class="px-4 py-2" :class="{'isActive':currentBtn === 3}" @click="showComponent('myPublication', 3)">Details of Publication</li>
                    <li class="px-4 py-2" :class="{'isActive':currentBtn === 4}" @click="showComponent('myUtilized', 4)">Details of Utilized Output</li>
                </ul>

  
            </div>

            <div class="w-7/12  flex flex-col items-center shadow-card2  px-16 py-16">
                <h1 class="w-full text-center font-Header text-xl text-Red-Rose">Research Service</h1>
                <p class="w-full text-center text-gray-400">College of Engineering</p>
                <p class="w-full text-center text-gray-400">Firstname M. Lastname</p>

                    <component :is="currentComponent"></component>
            </div>

                <activityList/>
      
        </section> -->
    </main>


</template>

<style scoped>
        .active{
            display: flex;
            flex-direction: column;
        }

        .inActive{
            display: none;
        }
        .error_message{
            color: red;
            font-size: .9rem;
        }

        .isActive {
            /* background-color: rgb(207 250 254); */
            background-color:rgb(255, 240, 221);

        }

</style>