import AuthenticationModal from '../components/Others/AuthenticationModal.vue'

import {Form, Field, ErrorMessage} from 'vee-validate'
import axios from 'axios';

export default{
    data(){
        return{
            form:{
                username:'',
                password:''
            },
            loginError:true

           

        }
    },
    components:{
        Form, Field, ErrorMessage,
        AuthenticationModal
    },  
    methods:{
        validateData(value){
            if(!value){
               return 'This field is required';
            }

            return true
            
        },

        // Get Login Data
        // getLoginData(){
        //     console.log(this.form.username);
        //     console.log(this.form.password);
        //     this.form.username=''
        //     this.form.password=''
        //     this.loginError= false
        //     this.addTimeout();

        //     // else

        // },

        addTimeout(){
            setTimeout( ()=>{
                this.loginError =true
            },1500)
        },


        // Modify this Part for API callback
        async submitData(){
            const {userData} = (await axios.post('',this.form)).
            then(response =>{

                // Handle the response data and cookies from the server
                console.log(response.data);


                // if there is cookies push the user to home
                
                this.$router.push('/home');
            }).
            catch(function(error){
                if(error.response){
                    
                    console.log(error.response.data)
                    console.log(error.response.status)

                    if (error.response.data){
                       // call the modal
                       //  this.loginError =false
                       //  this.addTimeout()
                       //  $("errorMessage").val();
                    }
                    // called modal
                    //this.login =false'
                    // this.addTimeout();
                }else if(error.request){

                    console.log(error.request)
                    // called modal
                    //this.login =false'
                    // this.addTimeout();
                }else{
                    console.log('Error', error.message)
                    // called modal
                    //this.login =false'
                    // this.addTimeout();
                }
                console.log(error.config);
                    // called modal
                    //this.login =false'
                    // this.addTimeout();
            })
        }
    }
}