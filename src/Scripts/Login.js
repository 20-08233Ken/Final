import AuthenticationModal from '../components/Others/AuthenticationModal.vue'
import {Form, Field, ErrorMessage} from 'vee-validate'
import axios from 'axios';
import { useCookies } from 'vue3-cookies';

export default{
    setup(){
        const {cookies} =useCookies();
        return {cookies}
    },
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

        addTimeout(){
            setTimeout( ()=>{
                this.loginError =true
            },1500)
        },


        // Modify this Part for API callback
        async submitData(){

            await axios.post(import.meta.env.VITE_API_LOGIN,this.form).

            then(response =>{

                // Handle the response data and cookies from the server
                this.cookies.set('userCookies',response.data.user,'1hr');
                localStorage.setItem('token', response.data.access_token);
                this.cookies.set('userPosition',response.data.position[0].role,'1hr');
                this.cookies.set('userCampus',response.data.campus[0].campus,'1hr');

                if (response.data.college.length !== 0){
                    this.cookies.set('userCollege',response.data.college[0].college,'1hr');
                }
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

                       alert(JSON.stringify(error.response.data.message));
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