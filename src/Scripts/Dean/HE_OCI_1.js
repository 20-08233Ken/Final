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
                    in_campus:" ",
                    in_department:" "
                }
            ],
            sampleData:[],

            // Options of Select Program Input
            // Based from API callback
            collegeProgram:[
                // {
                //     id:1312,
                //     program:"Bachelor of Science in Computer Engineer",
                // },{
                //     program:"Bachelor of Science in Civil Engineer",
                // },{
                //     program:"Bachelor of Science in Chemical Engineer",
                // },{
                //     program:"Bachelor of Science in Electrical Engineer",
                // }
            ],



        }
    },
    methods:{
        handleFileChange(event) {
            this.file = event.target.files[0];
        },
        // Sample Data Entry that will display in table
        async addData(){
            let userCookies = this.cookies.get('userCookies');
           
            console.log("campus_id:", this.data[0].in_campus);
            console.log("college_id:",this.data[0].in_department);
            console.log("program_id:",this.in_program);
            console.log("exam_date:", this.in_examDate);
            console.log("takers:", this.in_takers);
            console.log("passers:",this.in_passers);
            console.log("file:" ,this.file);
            console.log("campus_id:",userCookies['campus_id']);
            console.log("college_id:", userCookies['college_id']);
          
        
            // try {
            //     const response = await axios.post('http://127.0.0.1:8000/api/create_hep',{
                    // "campus_id": this.data[0].in_campus,
                    // "college_id":this.data[0].in_department,
                    // "program_id":this.in_program,
                    // "exam_date": this.in_examDate,
                    // "number_of_takers": this.in_takers,
                    // "number_of_passers":this.in_passers,
                    // "user_id":userCookies['id'],
                    // "supported_file:":this.file
            //     })
            //     .then(response => {
            //         this.collegeProgram = response.data;
            //     })
            //     .catch(error => {
            //         console.error('Error fetching campus', error);
            //     });

            // } catch (error) {
                
            // }
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
                    console.log("program response: ", response.data);
                    this.collegeProgram = response.data;
                })
                .catch(error => {
                    console.error('Error fetching campus', error);
                });

                // remove first the data from college program 
                // this.collegeProgram = response.data;
                // console.log(response.data);
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
        // console.log("userCampus:",userCampus);
        // console.log("userCookies:", userCookies);
        // console.log("userCollege:", userCollege);
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