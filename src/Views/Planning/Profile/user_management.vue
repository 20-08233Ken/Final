<script >
    import addUser from './addUser.vue';
    import confirmDelete from './confirmDelete.vue';
    import {Form, ErrorMessage, Field} from 'vee-validate'

    export default{
        components:{
            addUser,
            confirmDelete,
            Form, ErrorMessage, Field
        },
        data(){
            return{
                userData:[
                    {
                        id:1,
                        fname:' Doe',
                        lname:'Joe',
                        mname:'Z.',
                        email:'email@gmai.com',
                        campus:"Campus 1",
                        office:"Office 1",
                        role:"Role 1",
                    },
                    {
                        id:2,
                        fname:'Henry',
                        lname:'Joe',
                        mname:'S.',
                        email:'email@gmai.com',
                        campus:"Campus 2",
                        office:"Office 2",
                        role:"Role 2",
                    },
                ],

                campuses:[
                    {
                        id:1,
                        campus:'Campus 1'
                    },
                    {
                        id:2,
                        campus:'Campus 2'
                    }
                ],

                offices:[
                    {
                        id:1,
                        office:'Office 1'
                    },
                    {
                        id:2,
                        office:'Office 2'
                    }
                ],
                roles:[
                    {
                        id:1,
                        role:'Role 1'
                    },
                    {
                        id:2,
                        role:'Role 2'
                    }
                ],
                selectedUser:''
            }
        },

        methods:{
            showChange(id){
                this.selectedUser= id
            },
            
      
            validateData(value){
                if(!value){
                    return 'This field is required'
                }

                return true
            }
        }
    }
</script>

<template>
    <div class="w-10/12 flex flex-col px-3vw py-3vw  bg-white shadow-card2">

        <h1 class="font-Header text-4xl text-Red-Rose"> User Management</h1>
        <p class="w-6/12 text-0.9 text-gray-500">Contains a comprehensive suite of tools for seamless user account management, permissions configuration, and access control.</p>
        
        <span class="flex mt-16 justify-between"> 
            <addUser/>

            <!-- <confirmDelete/> -->
        </span>

 
        <table class="mt-8 table-zebra">
            <thead>
                <tr class="bg-gray-700">
                    <th></th>
                    <th class="text-white font-Subheader text-0.9">Name</th>
                    <th class="text-white font-Subheader text-0.9">Campus</th>
                    <th class="text-white font-Subheader text-0.9">Office</th>
                    <th class="text-white font-Subheader text-0.9">Role/s</th>
                    <th class="text-white font-Subheader text-0.9">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(x, index) in userData">
                    <!-- <td>
                        <input type="checkbox" :value="x.id" @change="showChange(x)">
                    </td> -->
                    <td></td>
                    <td class="flex items-center gap-4">
                        <i class="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </i>
                        <span class="flex flex-col">
                            <p class=" text-0.9 font-Subheader">{{x.fname}} {{ x.mname }} {{ x.lname }}</p>
                            <p class="text-0.8">{{x.email}}</p>
                        </span>
                    </td>

                    <td class="text-0.9">{{x.campus}}</td>
                    <td class="text-0.9">{{ x.office }}</td>
                    <td class="text-0.9">{{ x.role }}</td>

                    <td class="flex gap-2">
                        
                        <button class="flex gap-2 items-center" :value="x.id" @click="showChange(x)">
                        <i class="text-sky-500" onclick="modifyUser.showModal()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </i>
                        </button>

                        <button class="flex gap-2 items-center" :value="x.id" @click="showChange(x)">
                        <i class="text-Red-Rose" onclick="showDelete.showModal()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </i>
                        </button>
                    </td>
                </tr>

            </tbody>
        </table>


       
        <dialog id="modifyUser" class="modal">
        <div class="modal-box">
            <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="font-bold  font-Subheader bg-gray-700 text-white py-4 px-4 mt-4">Modify User Profile</h3>
          
            <Form class="mt-4">
                <p class="flex items-center gap-2 text-Red-Darken font-Subheader"> 

                    Personal Information
                </p>

            
                    <p class="text-0.9 font-Subheader text-gray-500 mt-4 " >First Name</p>
                    <Field type="text" name="fname" placeholder="Type here"  class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;" :rules="validateData" v-model="selectedUser.fname"/>
                    <ErrorMessage name="fname" class="error_message"/>


                    <p class="text-0.9 font-Subheader text-gray-500 mt-4 ">Middle Initial</p>
                    <Field type="text" name="mname " placeholder="Type here"  class="input mt-2 input-bordered w-full "style="border:  1px solid #d2d2d2;" :rules="validateData" v-model="selectedUser.mname"/>
                    <ErrorMessage name="mname" class="error_message"/>

                    <p class="text-0.9 font-Subheader text-gray-500 mt-4 ">Last Name</p>
                    <Field type="text" name="lname" placeholder="Type here"  class="input mt-2 input-bordered w-full "style="border:  1px solid #d2d2d2;" :rules="validateData" v-model="selectedUser.lname"/>
                    <ErrorMessage name="lname" class="error_message"/>

                    <p class="flex items-center gap-2 text-Red-Darken font-Subheader mt-8"> 

                        Designation
                    </p>


                <span class="w-full flex items-center mt-4 gap-8">
                    
                    <span class="flex flex-col w-2/4">  
                        <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                        <Field as="select"  name="campus" class="select select-bordered  mt-2" style="border:  1px solid #d2d2d2;" :rules="validateData" v-model="selectedUser.campus">
                            <option v-for="item in campuses" :key="item.id" :value="item.campus">{{ item.campus }}</option>
                        </Field>
                        <ErrorMessage name="campus" class="error_message"/>

                    </span>  

                    <span class="flex flex-col w-2/4">  
                        <p class="text-0.9 font-Subheader text-gray-500 ">Office {{ selectedUser.office }}</p>
                        <Field as="select"  name="office" class="select select-bordered mt-2"  style="border:  1px solid #d2d2d2;" v-model="selectedUser.office">
                            <option v-for="item in offices" :key="item.id" :value="item.office">{{ item.office }}</option>
                        </Field>
                        <ErrorMessage name="office" class="error_message"/>

                    </span>  

                </span>


                    <p class="text-0.9 font-Subheader text-gray-500 mt-4 " >Position</p>
                    <Field as="select"  name="postion" class="select select-bordered mt-2 w-full" style="border:  1px solid #d2d2d2;" :rules="validateData"  v-model="selectedUser.role">
                            <option v-for="item in roles" :key="item.id" :value="item.role" >{{ item.role }}</option>
                    </Field>
                    <ErrorMessage name="postion" class="error_message"/>

                    <span class="w-full flex justify-end mt-4 gap-4">
                        <button class="btn w-3/12 text-black">Cancel</button>
                        <button class="btn btn-success text-white w-3/12">Update</button>
                    </span>
    
            </Form>
            
        </div>
        </dialog>

      
        <dialog id="showDelete" class="modal">
        <div class="modal-box">
            <form method="dialog">
            <!-- <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> -->
            </form>
            <h3 class="w-full bg-Red-Darken text-white px-4 py-2 rounded-sm text-lg font-Subheader rounded-lg">Warning!!</h3>
            <p class="py-4 ml-4">Do you want to delete user {{ selectedUser.fname }}</p>


          
            <form method="dialog" class="mt-8 flex justify-end gap-4">
            <!-- if there is a button, it will close the modal -->
                <button class="btn font-Subheader w-2/12 ">No</button>
                <button class="btn btn-error text-white font-Subheader w-2/12 ">Yes</button>
            </form>
        </div>
        </dialog>
    
    </div>
</template>

<style setup>
    table{
        border: 1px solid gainsboro;
    }
    th{
        padding: 1em 0;
        text-align: left;
        color: #98040D;
    }
    td{
       padding: 1em 0;
    }

    th:first-child,td:first-child{
        padding: .5em;
        text-align: center;
    }

    /* td:first-child{
        width:5%;

    }
    td:nth-child(2){
        width:90%;
        background-color: red;

    } */


</style>