<script>

    import Dean_nav from '../../components/Others/Navigation/Dean_nav.vue';
    import {userCampus }from '../../Scripts/cookies';
    import { userPosition } from '../../Scripts/cookies';
    import {userCollege }from '../../Scripts/cookies';
    import { useCookies } from 'vue3-cookies';

    import Dashboard_tracer from '../../components/graph/Dean/tracer.vue'
    import Dashboard_takers from '../../components/graph/Dean/takers.vue'

    const myArray = [1, 2, 3, 4, 5]; // Array data
    export default{
        setup() {
            const { cookies } = useCookies();
            return { cookies }
        },
        components:{
            Dean_nav,
            Dashboard_tracer,
            Dashboard_takers
        },

        data(){
            return{
                campus:null,
                college:null,
                
            }
        },

        mounted(){
            const holdCookies = userPosition();
            this.user = holdCookies();

            const holdcampus = userCampus();
            this.campus = holdcampus();

            const holdCollege = userCollege();
            this.college = holdCollege();
        }
    }
</script>

<template>
    <main class="w-full flex-col bg-white">

        <Dean_nav/>

        <section class="w-full flex flex-col px-3vw ">

            <div class="w-5/12  mt-12 flex  gap-4 items-center">
                <v-icon size="large">mdi-school-outline</v-icon>
                <h1 class="text-red-darken-3 font-Header text-xl" v-html="college"></h1>
            </div>

            <div class="w-full flex flex-col mt-8 ml-11 shadow-card2 pt-8 items-center gap-12 ">
                    <h1 class="font-Subheader text-teal-darken-3 ">Graduate Tracer Status</h1>
                    <Dashboard_tracer/>
            </div>

            <div class="w-full flex flex-col mt-8 ml-11 shadow-card2 pt-8 items-center gap-12 ">
                    <h1 class="font-Subheader text-teal-darken-3 ">Licensure Exam First Time Takers</h1>
                    <Dashboard_takers />
            </div>

      

        </section>

    </main>

</template>