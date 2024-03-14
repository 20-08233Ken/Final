<script >
import { userPosition } from '../../Scripts/cookies';

import {Form, Field, ErrorMessage} from 'vee-validate'
import { ref } from 'vue';
import { useCookies } from 'vue3-cookies';
export default {
    setup() {
        const { cookies } = useCookies();
        return { cookies }
    },
    data() {
        return {
            currentDateTime:null,
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            ph_month:null,
            ph_date:null,
            ph_year:null,
            ph_fullDate:null,
            ph_hour:null,
            ph_minutes:null,
            ph_seconds:null,
            ph_millisec:null,
            ph_time:null,
            ph_convention:null,

            change_hour:null,
            user:null

        }
    },
    mounted(){
        setInterval(() => {
                this.currentDateTime = new Date();
                this.ph_month = this.currentDateTime.getMonth();
                this.ph_date = this.currentDateTime.getDate();
                this.ph_year = this.currentDateTime.getFullYear() 
                
                this.ph_fullDate = this.months[this.ph_month]+ " " +this.ph_date+" "+this.ph_year

                this.ph_hour = this.currentDateTime.getHours();
                this.change_hour = this.ph_hour
                this.ph_minutes = this.currentDateTime.getMinutes();
                this.ph_seconds = this.currentDateTime.getSeconds();
           
                if(this.ph_hour < 12){
                    this.ph_convention = "am"
                }else{
                    this.change_hour = this.ph_hour % 12;
                    this.ph_convention ='pm'
                }
                
                this.ph_time  = this.change_hour+":"+this.ph_minutes+":"+this.ph_seconds+" "+this.ph_convention

    }, 1000);

        const holdCookies = userPosition();
        this.user = holdCookies();
    },

    components:{
        Field,
        Form,
        ErrorMessage
    },  
    methods: {
        logout() {
            this.cookies.remove('userCookies')
            this.cookies.remove('userPosition')
            this.$router.push('/')

        console.log(this.cookies.get('userPosition'))
            
        },

        validateData(value){
            if(!value){
                return 'This Field is Required'
            }

            return true
        },
        currentTime(){

        }
    }
}
</script>

<template>


    <div class="drawer">
        <input id="myDrawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          
            <label for="myDrawer" class="btn drawer-button bg-red-700 text-white border-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </label>
        </div>
        
        <div class="drawer-side">
            <label for="myDrawer" aria-label="close sidebar" class="drawer-overlay"></label>

            <ul class="menu w-96 min-h-full bg-base-200 text-base-content">

                <span class="flex w-full items-center gap-4 bg-gray-700 px-2 py-4">
                    <div class="avatar w-2/12 ">
                        <div class="w-full rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>

                    <span class="flex flex-col w-7/12 text-white">
                        <h2>Name of User</h2>
                        <p>{{user}}</p>
                    </span>

                    <button class="  p-4 text-white" onclick="my_modal_3.showModal()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>

              
                    <dialog id="my_modal_3" class="modal ">
                        <div class="modal-box w-full w-dvw h-dvh ">
                            <form method="dialog">
                            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 class="font-bold text-lg">Account</h3>
                            
                            <Form>
                                <p class="text-0.9 font-Subheader text-gray-500  mt-4">Current Password</p>
                                <Field type="password" name="current_pass" placeholder="Type here"  class="input mt-2 input-bordered w-full " :rules="validateData"/>
                                <ErrorMessage name="current_pass" class="error_message"/>

                                <p class="text-0.9 font-Subheader text-gray-500  mt-4">Current Password</p>
                                <Field type="password" name="new_pass" placeholder="Type here"  class="input mt-2 input-bordered w-full " :rules="validateData"/>
                                <ErrorMessage name="new_pass" class="error_message"/>

                                <p class="text-0.9 font-Subheader text-gray-500  mt-4">Current Password</p>
                                <Field type="password" name="re_newpass" placeholder="Type here"  class="input mt-2 input-bordered w-full " :rules="validateData"/>
                                <ErrorMessage name="re_newpass" class="error_message"/>

                                <span class="w-full flex justify-end mt-5">
                                    <button class="btn btn-success text-white">Confirm</button>
                                </span>
                            </Form>
                            

                        </div>
                    </dialog>
                </span>

                <span class="w-full flex items-center gap-4 bg-Red-Darken text-white mt-4 px-4 py-4 rounded-lg">
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    </i>
                    {{ ph_fullDate }}
                    {{ ph_time }}
                </span>

                <span class="flex w-full items-center mt-4 gap-4 px-4">

                    <i class="text-Red-Darken">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                        </svg>
                    </i>

                    <p class="text-gray-500"> Alangilan Campus I - TNEU</p>
                </span>

                <span class="flex w-full items-center mt-2 gap-4 px-4 ">

                    <i class="text-Red-Darken">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                        </svg>
                    </i>

                    <p class="text-gray-500">College of Engineering</p>
                </span>

                <span class="flex w-full items-center mt-2 gap-4 px-4 ">

                    <i class="text-Red-Darken">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                    </i>

                    <p class="text-gray-500">192.168.1.32</p>
                </span>

    

                <button @click="logout"
                    class="border-2 flex items-center justify-center border-1 bg-Red-Darken text-white w-11/12 py-2 rounded-md gap-2"
                    style="position: absolute; bottom: 0;">


                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                    Logout
                </button>

              
                <li class="flex items-center justify-center w-1/12  "><img src="../../assets/img/school.png"
                        style="width: 4rem;" alt=""></li>

                <li class="w-full py-2 hover:bg-red-800 hover:text-white hover:rounded lg:hidden xl:hidden 2xl:hidden"
                    style="font-size: clamp(14px , 2vw , 16px);">
                    <router-link to="/">
                        MIS
                    </router-link>
                </li>


                <li class="w-full py-2 hover:bg-red-800 hover:text-white hover:rounded  lg:hidden xl:hidden 2xl:hidden"
                    style="font-size: clamp(14px , 2vw , 16px);">
                    <router-link to="/dean">Dean</router-link>
                </li>

                <li class="w-full py-2 hover:bg-red-800 hover:text-white hover:rounded  lg:hidden xl:hidden 2xl:hidden"
                    style="font-size: clamp(14px , 2vw , 16px);">
                    <router-link to="/profile">Profile</router-link>
                </li>

                <li class="w-full py-2 hover:bg-red-800 hover:text-white hover:rounded  lg:hidden xl:hidden 2xl:hidden"
                    style="font-size: clamp(14px , 2vw , 16px);">
                    <router-link to="/dashboard">Dahsboard</router-link>
                </li>

                <li class="w-full py-2 hover:bg-red-800 hover:text-white hover:rounded  lg:hidden xl:hidden 2xl:hidden"
                    style="font-size: clamp(14px , 2vw , 16px);">
                    <router-link to="/dataset">Dataset</router-link>
                </li>

                <li class="w-full py-2 hover:bg-red-800 hover:text-white hover:rounded  lg:hidden xl:hidden 2xl:hidden"
                    style="font-size: clamp(14px , 2vw , 16px);">
                    <router-link to="/pbb">PBB</router-link>
                </li>

                <li class="w-full py-2 hover:bg-red-800 hover:text-white hover:rounded  lg:hidden xl:hidden 2xl:hidden"
                    style="font-size: clamp(14px , 2vw , 16px);">
                    <router-link to="/offices">Offices</router-link>
                </li>

            </ul>
            <nav class="w-full bg-red-700 flex items-center px-20 h-auto sticky top-0 z-50">
                <ul class="flex text-white gap-2 w-full items-center">

                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>
       .error_message{
            color: red;
            font-size: .9rem;
        }
</style>