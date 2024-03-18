import { Form, Field, ErrorMessage } from 'vee-validate'
import notification from '../../components/Others/notification.vue';
import axios from "axios";
import { useCookies } from "vue3-cookies";

export default {
    setup() {
        const { cookies } = useCookies();
        return { cookies };
      },
    components: {
        Form,
        Field,
        ErrorMessage,
        notification
    },
    data() {
        return {
            // in_campus:'',
            // in_department:'',
            in_program: '',
            in_fname: '',
            in_mname: '',
            in_lname: '',
            in_status: '',
            in_business: '',
            isAdd: false,
            count: true,
            isIcon: false,
            isActive: false,
            id: 1,
            headers: [
                {
                  title: "Student Profile",
                  align: "center",
                  children: [
                    {
                      title: "ID",
                      value: "id",
                    },
                    {
                      title: "Student ID",
                      value: "student_id",
                    },
                    {
                      title: "Date of Birth",
                      value: "birthday",
                    },
                    {
                      title: "Last Name",
                      value: "lastname",
                    },
                    {
                      title: "First Name",
                      value: "firstname",
                    },
                    {
                      title: "Middle Name",
                      value: "middlename",
                    },
                    {
                      title: "Sex",
                      value: "gender",
                    },
                    {
                      title: "Date Graduated",
                      value: "date_graduated",
                    },
                  ],
                },
                {
                  title: "Program Name",
                  value: "program",
                },
                {
                  title: "Program Major",
                  value: "program_major",
                },
                {
                  title: "Program Authority to Operate/Graduate",
                  children: [
                    {
                      title: "Authority Number",
                      value: "authority_number",
                    },
                    {
                      title: "Year Granted",
                      value: "granted_year",
                    },
                  ],
                },
              ],
            hepData:[],
            // Data base from the Account Info of Dean
            data: [
                {
                    in_campus: "Alangilan Campus",
                    in_department: "College of Engineering"
                }
            ],

            // Options of Select Program Input
            collegeProgram: [
                {
                    program: "Bachelor of Science in Computer Engineer",
                }, {
                    program: "Bachelor of Science in Civil Engineer",
                }, {
                    program: "Bachelor of Science in Chemical Engineer",
                }, {
                    program: "Bachelor of Science in Electrical Engineer",
                }
            ],

            selectedFile1:null,
            selectedFile2:null,
            isDataActive:1,

            // For view
            approvedLogs:[
                {
                    status:'Approved ',
                    role:'VCAA',
                    remarks:'remarks',
                    reason:"Comment"
                },
                {
                    status:'Approved ',
                    role:'VCAA',
                    remarks:'remarks',
                    reason:"Comment"
                    
                },
            ],

        }
    },
    methods: {

        validateData(value) {
            if (!value) {
                return 'This field is required';
            }

            return true

        },
        addData() {


            this.sampleData.push(
                {
                    tb_id: this.id,
                    tb_campus: this.data[0].in_campus,
                    tb_department: this.data[0].in_department,
                    tb_program: this.in_program,
                    tb_fname: this.in_fname,
                    tb_mname: this.in_mname,
                    tb_lname: this.in_lname,
                    tb_status: this.in_status,
                    tb_company: this.in_business,

                }
            )

            this.id++;
            console.log(this.sampleData[0])

            this.in_program = ''
            this.in_fname = ''
            this.in_mname = ''
            this.in_lname = ''
            this.in_status = ''
            this.in_business = ''

            this.isAdd = true;
            setTimeout(() => {
                this.isAdd = false;
            }, 2000)

        },
        submitData() {
            if (this.count === true) {
                this.isActive = true
                this.count = false
                this.isIcon = true

            } else {
                this.isActive = false
            }

        },
        onClose() {
            this.isActive = false
        },


        async fecthHEPData() {
            console.log("fecthHEPData");
            try {
              let userCookies = this.cookies.get("userCookies");
              const response = await axios
                .post(import.meta.env.VITE_API_DISPLAY_HEP_TWO, {
                  user_id: userCookies["id"],
                })
                .then((response) => {
                  console.log("fecthHEPData:", response.data);
                  this.hepData = response.data;
                })
                .catch((error) => {
                  console.error("Error fetching hep Data", error);
                });
            } catch (error) {
              // add actions here
            }
          },
        handleFileUpload(event){
            this.selectedFile1 = event.target.files[0]
        },
        handleFileUpload2(event){
            this.selectedFile2 = event.target.files[0]
        },
        showFile(){
            console.log(this.selectedFile1)
            console.log(this.selectedFile2)
        },

        changeData(isActive ){
            this.isDataActive = isActive
            console.log(this.isDataActive)
        },
        validateInput(value){
            if (!value) {
                 return 'This field is required';
             }

             return true
             
           
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
        
        deleteData(id){
            console.log(id)
        }

    },

    mounted(){
        // call here
        // this.fetchProgram_Data()
        let userCookies = this.cookies.get("userCookies");
        let accesstoken = this.cookies.get("userAccessToken");
        let userPosition = this.cookies.get("userPosition");
        let userCollege = this.cookies.get("userCollege");
        let userCampus = this.cookies.get("userCampus");
        this.user = userPosition;
        this.userCookies = userCookies;
        this.data[0].in_campus = userCampus;
        this.data[0].in_department = userCollege;

        if (this.user == null && this.userCookies == null) {
        this.$router.push("/");
        }

        this.fecthHEPData();

    }
}
