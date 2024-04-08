<script>

    import QAM_nav from '../../components/Others/Navigation/QAM_nav.vue';
    import HE_OPI_2 from './HE_OPI_2.vue';
    import AE_OPI_2 from './AE_OPI_2.vue';

    import activityList from '../../components/Others/activityList.vue'
    import { useCookies } from 'vue3-cookies';
    import { markRaw } from "vue"
    import { userPosition } from '../../Scripts/cookies';

    const hold_oc_1 = markRaw(HE_OPI_2);

    export default{

        components:{
            QAM_nav,
            HE_OPI_2,
            AE_OPI_2,
            activityList
            
        },

        data(){
            return{
                currentComponent:HE_OPI_2,
                activeBtn:1,
                user:userPosition
            }
        },
        methods:{
        showComponent(componentName, btnNumber){
            this.currentComponent = componentName
            this.activeBtn = btnNumber
        }
    },

    }

</script>

<template>
    <main class="w-full flex flex-col">
    
        
    
    <QAM_nav v-if="user == 'QAM'"/>

    <section class="w-full flex gap-8" v-if="user == 'QAM'">
        <div class="flex flex-col w-3/12  pl-8 h-dvh">

            <h3 class="w-full flex  py-3 font-Subheader mt-8" >Performace Indicator</h3>

            <h4 class="w-full text-white  bg-Red-Darken px-4 py-1">Higher Education</h4>

            <ul class="nav-list mt-2 flex flex-col gap-1">

                <li class="px-4 py-2" :class="{'active':activeBtn===1}" @click="showComponent('HE_OPI_2',1)">Undergraduate programs with accreditation</li>            </ul>

            <h4 class="w-full text-white  bg-Red-Darken px-4 py-1 mt-8">Advanced Education</h4>

            <ul class="mt-2 flex flex-col gap-1">
                <li class="px-4 py-2" :class="{'active':activeBtn===2}" @click="showComponent('AE_OPI_2',2)">Graduate programs with accreditation</li>
            </ul>
        </div>

        <div class="w-7/12 flex justify-end gap-4">

            <div class="w-full flex  px-16 py-16 mt-4">
                <span class="flex w-full flex-col   ">
                    <component :is="currentComponent"></component>
                </span>

            </div>

        </div>

        <activityList/>


    </section>

    </main>
</template>

<style scoped>
    .indicator_title{
        max-width: 13rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .active {
        /* background-color: rgb(207 250 254); */
        background-color:rgb(255, 240, 221);
    
    }

    .nav-list > li:hover{
        background-color:rgb(255, 240, 221);
        

    }

</style>