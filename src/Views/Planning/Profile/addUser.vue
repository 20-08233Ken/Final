<script>
    import { Field,Form, ErrorMessage } from 'vee-validate';
    import axios from 'axios';

    import { useCookies } from 'vue3-cookies';
    import Swal from 'sweetalert2'
    export default{
        setup() {
            const { cookies } = useCookies();
            return { cookies };
        },
        components:{
          
            Field,
            Form,
            ErrorMessage,
            axios
          
        },
        data(){
            return{
                userData:[
                    {
                        in_companyID:null,
                        in_companyEmail:null,
                        in_fname:null, 
                        in_lname:null,  
                        in_mname:null,  
                        in_password:null,  
                        in_confPassword:null,
                        in_designation:null,  
                        in_campusID:null,  
                        in_collegeID:null,  
                        in_officeID:null,  
                        in_positionID:null, 
                    }
                ],

                // Header of table


                // This is for storing the data including program and office
                allUserData:[], // This is for table
                programData:[],
                officeData:[],
                campusData:[],
                collegeData:[],
                positionData:[],
                

                // These are sample data for testing
                sampleProgram:[
                    {
                        id:1,
                        program:'Program 1'
                    }
                ],

                sampleOffice:[
                    {
                        id:1,
                        office:'Office 1'
                    }
                ],

                sampleCampus:[
                    {
                        id:1,
                        campus:'Campus 1'                        
                    }
                ],

                sampleCollege:[
                    {
                        id:1,
                        college:'College 1'
                    }
                ],

                samplePosition:[
                    {
                        id:1,
                        position:'Position 1'
                    },{
                        id:2,
                        position:'Dean'
                    }
                ],

                enableCollege:false
            }
        },
        methods:{
            // Validate Data
            validateData(value){
                if(!value){
                    return 'This field is required'
                }

                return true
            },


            // Submit Data
            async submitData(){

                this.confirmPassword()

                console.log(this.userData)
            },

            // Confirm Password
            confirmPassword(){

                if (this.userData.in_password != this.userData.in_confPassword){
                    Swal.fire({
                        title: 'Invalid Password',
                        text: 'The password you entered does not match the confirmation password. Please ensure that both passwords are identical to proceed',
                        icon: 'error',
                        confirmButtonText: 'OK'
                        })
                }else{
                    Swal.fire({
                        title: 'Success',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                        })

                    this.clearForm()
                }
            },

            // Clear form
            clearForm(){
                this.userData.companyID = null
                this.userData.in_companyEmail = null
                this.userData.in_fname= null 
                this.userData.in_lname= null  
                this.userData.in_mname= null  
                this.userData.in_password= null  
                this.userData.in_confPassword= null  
                this.userData.in_designation= null  
                this.userData.in_campusID= null  
                this.userData.in_officeID= null  
                this.userData.in_positionID= null
                this.userData.in_collegeID=null
            }

        },
        
        mounted() {
            // call here
            // this.fetchProgram_Data()
            let userCookies = this.cookies.get("userCookies");
            let accesstoken = this.cookies.get("userAccessToken");
            let userPosition = this.cookies.get("userPosition");
            let userCollege = this.cookies.get("userCollege");
            let userCampus = this.cookies.get("userCampus");
            this.user = userPosition;
            this.userCookies = userCookies;
            // this.data[0].in_campus = userCampus;
            // this.data[0].in_department = userCollege;

            if (this.user == null && this.userCookies == null) {
            this.$router.push("/");
            }
            this.overlay = false;
            // this.FetchRegistrarhepData();
            // this.fetchProgram_Data(userCookies["college_id"]);
            // this.FetchData(
            // userCookies["office"],
            // userCookies["campus_id"],
            // userCookies["id"],
            // );
        },
    }
</script>

<template>
    <!-- <button class="btn" onclick="addUser_modal.showModal()">open modal</button> -->





    <v-dialog max-width="800">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps"  variant="flat" 
                class="bg-teal-darken-3 text-white gap-2 font-Subheader">
                <i class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>
                </i>
                <p class="text-0.8 font-Regular ">Add User</p>
            </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Dialog">
                <v-card-text>
                    <div class="w-full">

                        <h3 class="font-bold text-lg font-Header bg-gray-700 text-white py-4 px-4 mt-4">User Profile
                        </h3>

                        <Form class="mt-4" @submit="submitData">
                            <p class="flex items-center gap-2 text-Red-Darken font-Subheader">

                                Personal Information
                            </p>

                            <p class="text-0.9 font-Subheader text-gray-500 mt-4 ">Company ID</p>
                            <Field type="text" name="company_id" placeholder="Type here"
                                class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                                :rules="validateData" v-model="userData.in_companyID" />
                            <ErrorMessage name="company_id" class="error_message" />


                            <p class="text-0.9 font-Subheader text-gray-500 mt-4 ">Company Email</p>
                            <Field type="email" name="company_email" placeholder="Type here"
                                class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                                :rules="validateData" v-model="userData.in_companyEmail" />
                            <ErrorMessage name="company_email" class="error_message" />

                            <p class="text-0.9 font-Subheader text-gray-500 mt-4 ">First Name</p>
                            <Field type="text" name="fname" placeholder="Type here"
                                class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                                :rules="validateData" v-model="userData.in_fname" />
                            <ErrorMessage name="fname" class="error_message" />



                            <p class="text-0.9 font-Subheader text-gray-500 mt-4 ">Last Name</p>
                            <Field type="text" name="lname" placeholder="Type here"
                                class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                                :rules="validateData" v-model="userData.in_lname" />
                            <ErrorMessage name="lname" class="error_message" />

                            <p class="text-0.9 font-Subheader text-gray-500 mt-4 ">Middle Name</p>
                            <Field type="text" name="mname" placeholder="Type here"
                                class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                                :rules="validateData" v-model="userData.in_mname" />
                            <ErrorMessage name="mname" class="error_message" />

                            <p class="text-0.9 font-Subheader text-gray-500 mt-4 ">Password</p>
                            <Field type="password" name="password" placeholder="Type here"
                                class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                                :rules="validateData" v-model="userData.in_password" />
                            <ErrorMessage name="password" class="error_message" />

                            <p class="text-0.9 font-Subheader text-gray-500 mt-4 ">Confirm Password</p>
                            <Field type="password" name="confirm_password" placeholder="Type here"
                                class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                                :rules="validateData" v-model="userData.in_confPassword" />
                            <ErrorMessage name="confirm_password" class="error_message" />

                            <p class="flex items-center gap-2 text-Red-Darken font-Subheader mt-8">
                                Designation
                            </p>





                            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Campus</p>
                            <Field as="select" name="campus" class="w-full select select-bordered  mt-2"
                                style="border:  1px solid #d2d2d2;" :rules="validateData"
                                v-model="userData.in_campusID">
                                <option disabled selected>Select Campus ...</option>
                                <option v-for="items in sampleCampus" :value="items.id">{{ items.campus }}</option>

                            </Field>
                            <ErrorMessage name="campus" class="error_message" />

                            <p class="text-0.9 font-Subheader text-gray-500 mt-4 ">Office</p>
                            <Field as="select" name="office" class="w-full select select-bordered mt-2"
                                v-model="userData.in_officeID" style="border:  1px solid #d2d2d2;">
                                <option disabled selected>Select Office ...</option>
                                <option v-for="items in sampleOffice" :value="items.id">{{ items.office }}</option>
                            </Field>
                            <ErrorMessage name="office" class="error_message" />


                            <p class="text-0.9 font-Subheader text-gray-500 mt-4 ">Position</p>
                            <Field as="select" name="postion" class="select select-bordered mt-2 w-full"
                                style="border:  1px solid #d2d2d2;" :rules="validateData"
                                v-model="userData.in_positionID">
                                <option disabled selected>Select Position ...</option>
                                <option v-for="items in samplePosition" :value="items.id">{{ items.position }}</option>
                            </Field>
                            <ErrorMessage name="postion" class="error_message" />

                            <p class="text-0.9 font-Subheader text-gray-500 mt-4 ">College</p>
                            <Field as="select" name="college" class="w-full select select-bordered mt-2" :disabled='userData.in_positionID != 2'
                                v-model="userData.in_collegeID" style="border:  1px solid #d2d2d2;">
                                <option disabled selected>Select College ...</option>
                                <option v-for="items in sampleCollege" :value="items.id">{{ items.college }}</option>
                            </Field>
                            <ErrorMessage name="college" class="error_message" />

          




                            <!-- <span class="w-full flex  mt-4">
                                <form method="dialog" class="w-full flex justify-end">
                                    <button class="btn btn-success text-white w-3/12" type="submit">Add</button>
                                </form>
                            </span> -->

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <span class="w-full justify-end flex gap-1 ">
                                    <v-btn text="Close" class=" w-2/12 mt-4 bg-grey-lighten-3"
                                        @click="isActive.value = false"></v-btn>
                                    <v-btn text="Submit" class="bg-teal-darken-3 w-2/12 mt-4"
                                        @click="submitData(isActive.value = false)" type="submit"></v-btn>
                                </span>
                            </v-card-actions>

                        </Form>

                    </div>

                </v-card-text>

            </v-card>
        </template>
    </v-dialog>

</template>


<style scoped>
.error_message{
    color: red;
    font-size: .9rem;
}
</style>