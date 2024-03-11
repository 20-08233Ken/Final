<script>
    import Extension_nav from '../../components/Others/Navigation/Extension_nav.vue'
    import Navigation from '../../components/Others/Navigation.vue'
    import activityList from '../../components/Others/activityList.vue';
    import EP_1 from './EP_1.vue'
    import EP_2 from './EP_2.vue'
    import EP_3 from './EP_3.vue'
    import { userPosition } from '../../Scripts/cookies';
    import { useCookies } from 'vue3-cookies';
    import {markRaw} from 'vue'

    const  markRaw_EP_1 = markRaw(EP_1)

    export default{

        data(){
            return{
                activeComponent:EP_1,
                activeBtn:1,
                user:userPosition

            }
        },
        components:{
            Extension_nav,
            Navigation,
            EP_1,
            EP_2,
            EP_3,
            activityList
        },
        methods:{
            showComponent(currentComponent,btnNo){
                this.activeComponent = currentComponent
                this.activeBtn = btnNo
            }
        },

    }
</script>

<template>
    <main class="w-full flex flex-col items-center">
        <Extension_nav v-if="user === 'Extension'"/>

        <section class="w-full flex justify-between gap-8" v-if="user === 'Extension'">
            
            <div class="flex flex-col w-3/12  pl-8 h-dvh">

                    <h3 class="w-full flex  py-3 font-Subheader mt-8" >Performace Indicator</h3>

                    <h4 class="w-full text-white  bg-Red-Darken px-4 py-1">Technical Advisory Extension</h4>

                    <ul class="nav-list mt-2 flex flex-col gap-1">
                    <li class="px-4 py-2" :class="{'active':activeBtn === 1, 'notActive':activeBtn !== 1}" @click="showComponent('EP_1',1)" >Extension Program (0P1 and OP3) </li>
                    <li class="px-4 py-2" :class="{'active':activeBtn === 2, 'notActive':activeBtn !== 2}" @click="showComponent('EP_2',2)" >Extension Program (0P2)</li>
                    <li class="px-4 py-2" :class="{'active':activeBtn === 3, 'notActive':activeBtn !== 3}" @click="showComponent('EP_3',3)" >Extension Program (Oc)</li>

                    </ul>
            </div>
                
            <div class="w-7/12 flex flex-col shadow-card2  px-6vw py-3vw">

                <component :is="activeComponent"></component>
            </div>

            <activityList/>

        </section>
        
    </main>
</template>

<style scoped>
    li:hover{
        background-color:rgb(255, 240, 221);
    }

    .active{
        background-color:rgb(255, 240, 221);
    }
    .notActive{
        background-color: white;
    }
</style>