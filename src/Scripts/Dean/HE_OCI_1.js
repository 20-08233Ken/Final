import { Form, Field,ErrorMessage } from 'vee-validate';
import notification from '../../components/Others/notification.vue';
import axios from 'axios';
import { useCookies } from 'vue3-cookies';
import {userPosition} from '../cookies.js'

export default{
    setup(){
        const {cookies} =useCookies();
        return {cookies}
    },
    components:{
        Form,
        Field,
        ErrorMessage,
        notification
    },
    data(){
        return{
            in_program:'',
            in_examDate:'',
            in_takers:0,
            in_passers:0,
            count:true,
            id:1,
            isActive:false,
            isIcon:false,
            isAdd:false,

            receivedProgam:null,
            
             // Data base from the Account Info of Dean 
            data:[
                {
                    in_campus:"",
                    in_department:""
                }
            ],
            sampleData:[],

            // Options of Select Program Input
            // Based from API callback
            collegeProgram:[
            ],

            selectedFile:null,



        }
    },
    methods:{
        handleFileUpload(event){
            this.selectedFile = event.target.files[0]

        },

        showFile(){
            console.log(this.selectedFile)
        },

        // Add Data
        async addData(){
            const headers = { 'Content-Type': 'multipart/form-data' };
            let userCookies = this.cookies.get('userCookies');
            // Form Data
            const formData = new FormData()
            formData.append('supported_file', this.file);
            // formData.append('campus_id', this.data[0].in_campus);
            // formData.append('college_id',this.data[0].in_department);
            formData.append('program_id',this.in_program);
            formData.append('exam_date', this.in_examDate);
            formData.append('takers', this.in_takers);
            formData.append('passers',this.in_passers);
            formData.append('campus_id',userCookies['campus_id']);
            formData.append('college_id', userCookies['college_id']);
            formData.append('user_id', userCookies['id']);

             
            try {

                const response = await axios.post('http://127.0.0.1:8000/api/create_hep', formData, { headers })
                
                // const response = await axios.post('http://127.0.0.1:8000/api/create_hep',{
                //     "campus_id": userCookies['campus_id'],
                //     "college_id":userCookies['college_id'],
                //     "program_id":this.in_program,
                //     "exam_date": this.in_examDate,
                //     "number_of_takers": this.in_takers,
                //     "number_of_passers":this.in_passers,
                //     "user_id":userCookies['id'],
                //     "supported_file:":formData,
                // })
                .then(response => {
                    // this.collegeProgram = response.data;
                    console.log(response);
                })
                .catch(error => {
                    console.error('Error fetching campus', error);
                });

            } catch (error) {
                
            }
             
        },
        // Validate if the input field is empty
        validateInput(value){
            if (!value) {
                 return 'This field is required';
             }

             return true
             
           
        },
        submitData(){
                console.log(this.in_takers)
                if(this.count === true ){
                    this.isActive = true
                    this.count = false
                    this.isIcon = true
                }else{
                    this.isActive = false
                }
               
        },
        onClose(){
            this.isActive = false
        },

        checkNegative(value){
            if(value < 0){
                return 'Negative numbers is not allowed'
            }
            else if(value > -1){
                return true
            }else if(!value){
                return 'This field is required'
            }
            
        },

        async fetchProgram_Data(college_id,campus,college){
            try{
                this.data[0].in_campus = campus;
                this.data[0].in_department = college;

                const response = await axios.post('http://127.0.0.1:8000/api/get_program',{
                    "college_id": college_id
                })
                .then(response => {
                    this.collegeProgram = response.data;
                })
                .catch(error => {
                    console.error('Error fetching campus', error);
                });
            }catch (error){
                // add actions here
            }
        }


    },
    mounted(){
        // call here
        let userCookies = this.cookies.get('userCookies');
        let accesstoken = this.cookies.get('userAccessToken');
        let userPosition = this.cookies.get('userPosition');
        let userCollege = this.cookies.get('userCollege');
        let userCampus = this.cookies.get('userCampus'); 
        this.user = userPosition;
        this.userCookies = userCookies;
        this.data.in_campus = userCampus;
        this.data.in_department = userCollege;

        if (this.user == null && this.userCookies == null){
            this.$router.push('/');
        }

        this.fetchProgram_Data(userCookies['college_id'], userCampus, userCollege);
    }


}