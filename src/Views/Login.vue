

<template>
    <main class="w-full flex"> 

        <div :class="{'isCorrect':loginError===true, 'notCorrect':loginError === false}">
            <AuthenticationModal/>
        </div>
        <!-- Left Section -->  
        <section class="w-8/12 flex flex-col h-dvh px-16 justify-center" style="background-color: #f5f5f5;">

            <span class="w-full flex flex-col items-center justify-center " style="position: relative;">
          
                <img src="../assets/img/merge/img1.png" alt="image here" >

            </span>

            <h1 class="font-Header text-Red-Darken text-4xl">University Management</h1>
            <h1 class="font-Header text-Red-Darken text-4xl">
               <span class="font-Header text-Red-Rose text-4xl">Information </span>  System
            </h1>

            <p>Central System for Managing and Process of Batangas State University</p>

            <p class="mt-8 w-10/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate tortor non elit pellentesque, ac finibus ante fringilla. Maecenas nibh mauris, consequat sed elit sit amet, gravida faucibus metus. </p>
        </section>



        <!-- Login Section -->
        <section class="w-4/12 flex flex-col items-center justify-center">
            
                <img src="../assets/img/school.png" alt="" style="width: 40%;margin: -20% 0 1rem 0;">
            
                <Form class="flex flex-col w-full items-center"  >

                    <p class ="text-gray-500" style="width: 80%; font-size: 15px;">Username</p>
                    <Field type="text" name="username" id="username" v-model="form.username"  :rules="validateData"></Field>
                    <ErrorMessage name="username" class="error_message" ></ErrorMessage>

                    <p class ="text-gray-500 mt-6" style="width: 80%; font-size: 15px;">Password</p>
                    <Field type="password"  name="password" id="password" v-model="form.password" :rules="validateData"></Field>
                    <ErrorMessage name="password" class="error_message"></ErrorMessage>

          
                <!-- <button class="bg-Red-Rose text-white w-2/12 py-3 rounded mt-4 " style="width: 80%;font-size: 15px; " @click="getLoginData">  
                    Login as Dean         
                </button> -->
           
                </Form>


             

                
                <router-link to="/home"  class=" w-full flex justify-center">
                <button class="bg-Red-Rose text-white w-2/12 py-3 rounded mt-4 " style="width: 80%;font-size: 15px;">  
                    Login     
                </button>
                </router-link>
            
        </section>
    </main>
</template>

<style scoped>
    @import url('../style/Login_style.css');
</style>

<script src="../Scripts/Login.js">
</script>