<script>
    import { Field,Form, ErrorMessage } from 'vee-validate';

    export default{
        components:{
          
            Field,
            Form,
            ErrorMessage,
          
        },

        methods:{
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
    <!-- <button class="btn" onclick="addUser_modal.showModal()">open modal</button> -->

    <button class="btn btn-sm btn-success text-white gap-2 text-0.9 font-Subheader" onclick="addUser_modal.showModal()">
                <i class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>
                </i>
                Add User
    </button>
    
    <dialog id="addUser_modal" class="modal">
        <div class="modal-box">
            <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="font-bold text-lg font-Header bg-gray-700 text-white py-4 px-4 mt-4">User Profile</h3>
          
            <Form class="mt-4">
                <p class="flex items-center gap-2 text-Red-Darken font-Subheader"> 

                    Personal Information
                </p>

            
                    <p class="text-0.9 font-Subheader text-gray-500 mt-4 ">First Name</p>
                    <Field type="text" name="fname" placeholder="Type here"  class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;" :rules="validateData"/>
                    <ErrorMessage name="fname" class="error_message"/>


                    <p class="text-0.9 font-Subheader text-gray-500 mt-4 ">Last Name</p>
                    <Field type="text" name="lname" placeholder="Type here"  class="input mt-2 input-bordered w-full "style="border:  1px solid #d2d2d2;" :rules="validateData"/>
                    <ErrorMessage name="lname" class="error_message"/>

            

                    <p class="flex items-center gap-2 text-Red-Darken font-Subheader mt-8"> 
                        Designation
                    </p>


                <span class="w-full flex items-center mt-4 gap-8">
                    
                    <span class="flex flex-col w-2/4">  
                        <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                        <Field as="select"  name="campus" class="select select-bordered  mt-2" style="border:  1px solid #d2d2d2;" :rules="validateData">
                            <option disabled selected>Select Program ...</option>
                        </Field>
                        <ErrorMessage name="campus" class="error_message"/>

                    </span>  

                    <span class="flex flex-col w-2/4">  
                        <p class="text-0.9 font-Subheader text-gray-500 ">Office</p>
                        <Field as="select"  name="office" class="select select-bordered mt-2"  style="border:  1px solid #d2d2d2;">
                            <option disabled selected>Select Office ...</option>
                        </Field>
                        <ErrorMessage name="office" class="error_message"/>

                    </span>  

                </span>


                    <p class="text-0.9 font-Subheader text-gray-500 mt-4 " >Position</p>
                    <Field as="select"  name="postion" class="select select-bordered mt-2 w-full" style="border:  1px solid #d2d2d2;" :rules="validateData">
                            <option disabled selected>Select Position ...</option>
                    </Field>
                    <ErrorMessage name="postion" class="error_message"/>


    

                    <span class="w-full flex justify-end mt-4">
                        <button class="btn btn-success text-white w-3/12">Add</button>
                    </span>
    
            </Form>
            
        </div>
    </dialog>

</template>


<style scoped>
.error_message{
    color: red;
    font-size: .9rem;
}
</style>