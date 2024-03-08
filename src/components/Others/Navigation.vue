<script >
    import drawer from './drawer.vue';
    import { ref} from 'vue'

    export default{


        data(){
            return{

            }
        },

        components:{
            drawer
        },



    }
</script>

<template>
    <nav class="w-full bg-red-700 flex items-center px-20 h-auto sticky top-0 z-40 ">
        <ul class="flex text-white gap-2 w-full items-center">
            <li class="py-6 ">

                <drawer/>

            </li>
            

      

            <li class="flex items-center justify-center w-1/12  md:hidden sm:hidden xm:hidden"><img src="../../assets/img/school.png" style="width: 4rem;" alt=""></li>

            <li 
                class="w-1/12 py-6 hover:bg-red-800 text-center md:hidden sm:hidden xm:hidden" 
                style="font-size: clamp(14px , 2vw , 16px);"

              
                >
                <router-link to="/home"> MIS</router-link>
            </li>

             <li 
                class="w-1/12 py-6 hover:bg-red-800 text-center md:hidden sm:hidden xm:hidden"
                style="font-size: clamp(14px , 2vw , 16px);"
            >
                <router-link to="/dean">Dean</router-link>
            </li>

            <li 
                class="w-1/12 py-6 hover:bg-red-800 text-center md:hidden sm:hidden xm:hidden" 
                style="font-size: clamp(14px , 2vw , 16px);"
            >
                <router-link to="/profile">Profile</router-link>
            </li>

            <li 
                class="w-1/12 py-6 hover:bg-red-800 text-center md:hidden sm:hidden xm:hidden"
                style="font-size: clamp(14px , 2vw , 16px);"
            >
                <router-link to="/dashboard">Dahsboard</router-link>
            </li>

            <li 
                class="w-1/12 py-6 hover:bg-red-800 text-center md:hidden sm:hidden xm:hidden"
                style="font-size: clamp(14px , 2vw , 16px);"
            >
                <router-link to="/dataset">Dataset</router-link>
            </li>

            <li 
                class="w-1/12 py-6 hover:bg-red-800 text-center md:hidden sm:hidden xm:hidden"  
                style="font-size: clamp(14px , 2vw , 16px);"
            >
                <router-link to="/pbb">PBB</router-link>
            </li>

            <li 
                class="w-1/12 py-6 hover:bg-red-800 text-center md:hidden sm:hidden xm:hidden"
                style="font-size: clamp(14px , 2vw , 16px);"
            >
                <router-link to="/offices">Offices</router-link>
            </li>

            <li 
                class="w-1/12 py-6 hover:bg-red-800 text-center md:hidden sm:hidden xm:hidden"
                style="font-size: clamp(14px , 2vw , 16px);"
            >
                <router-link to="/FormA">Form A</router-link>
            </li>

            <li 
                class="w-1/12 py-6 hover:bg-red-800 text-center md:hidden sm:hidden xm:hidden"
                style="font-size: clamp(14px , 2vw , 16px);"
            >
                <router-link to="/FormA_1">Form A-1</router-link>
            </li>

            <li 
                class="w-1/12 py-6 hover:bg-red-800 text-center md:hidden sm:hidden xm:hidden"
                style="font-size: clamp(14px , 2vw , 16px);"
            >
                <router-link to="/fydp">FYDP</router-link>
            </li>

            
            <li 
                class="w-1/12 py-6 hover:bg-red-800 text-center md:hidden sm:hidden xm:hidden"
                style="font-size: clamp(14px , 2vw , 16px);"
            >
                <router-link to="/TechnicalExtension">Extension</router-link>
            </li>

        </ul>
    </nav>
</template>