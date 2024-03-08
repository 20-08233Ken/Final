<script>
    import OPI from '../ResearchService/RS_OPI.vue';

    import {markRaw} from 'vue'


    const hold_OPI = markRaw(OPI);
    
    export default{
        data(){
            return{
                currentComponent:OPI,
                activeBtn:1
            };
        },
        components:{

            OPI
        },
        methods:{


        }
    }
</script>

<template>
    <div class="flex flex-col w-full">
        <div class="text-sm breadcrumbs w-full">
                    <ul>
                        <li class="text-gray-500">
                            <router-link to="/pbb">
                                <a>PBB</a>
                            </router-link>
                        </li> 
                        <li class="text-gray-500">                   
                             <router-link to="/PPB_Higher">
                                <a>PBB Logs</a>
                            </router-link></li> 
                        <li class="text-gray-500">
                            <router-link 
                                :to="{
                                    name:'PBB_Summary',
                                    query:{
                                        program:'PBB_Summary4'
                                    }
                                    }"
                            >
                            
                                <a>Modified Form</a>
                            </router-link>
                        </li> 
                        <li class="text-gray-500"><a>View Data</a></li>
                    
                    </ul>
                </div>
        <p class="text-Red-Rose text-xl font-Header">Research Services</p>



        <div class="w-full">

            <component :is="currentComponent"></component>

        </div>

    </div>
    
</template>
<style scoped>
.active {
  background-color: #D00412;
  color: white;
 
}
</style>