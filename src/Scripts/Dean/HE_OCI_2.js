import { Form, Field, ErrorMessage } from "vee-validate";
import notification from "../../components/Others/notification.vue";
import axios from "axios";
import { useCookies } from "vue3-cookies";
import Swal from 'sweetalert2'
export default {
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
    notification,
  },
  data() {
    return {
      // in_campus:'',
      // in_department:'',
      in_program: "",
      in_fname: "",
      in_mname: "",
      in_lname: "",
      in_status: "",
      in_business: "",
      graduate_tracer_study_file:null,
      official_list_file:null,

      isAdd: false,
      count: true,
      isIcon: false,
      isActive: false,
      id: 1,
      disableSubmit: false,
      search: "",
      myLoading: false,
      headersRegistrar: [
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
      registrarData: [],

      headersDean: [
        {
          title: "HEP Code",
          key: "hep_code",
        },
        {
          title: "Campus",
          value: "campus",
        },
        {
          title: "Department",
          value: "college",
        },
        {
          title: "Undergraduate Program",
          value: "program",
        },
        {
          title: "Name",
          value: "student_fullname",
        },
        {
          title: "Status",
          value: "graduate_tracer_status",
        },
        {
          title: "Companys Business / Type of Business",
          value: "business",
        },
        {
          title: "Supporting Documents",
          value: "graduate_files",
        },
        {
          title: "Validation Status",
          value: "status",
        },
        {
          title: "Actions",
          value: "actions",
        },
      ],
      deansData: [],

      sampleDeansData: [
        // {
        //   hep_code:'1',
        //   campus:'2',
        //   department:'3',
        //   program:'4',
        //   name:'5',
        //   status:'6',
        //   business:'7',
        //   sup_doc:'8',
        //   v_status:'9'
        // }
      ],

      // Data base from the Account Info of Dean
      data: [
        {
          in_campus: "Alangilan Campus",
          in_department: "College of Engineering",
        },
      ],

      // Options of Select Program Input
      collegeProgram: [
        {
          program: "Bachelor of Science in Computer Engineer",
        },
        {
          program: "Bachelor of Science in Civil Engineer",
        },
        {
          program: "Bachelor of Science in Chemical Engineer",
        },
        {
          program: "Bachelor of Science in Electrical Engineer",
        },
      ],

      selectedFile1: null,
      selectedFile2: null,
      isDataActive: 1,

      // For view
      approvedLogs: [
        {
          status: "Approved ",
          role: "VCAA",
          remarks: "remarks",
          reason: "Comment",
        },
        {
          status: "Approved ",
          role: "VCAA",
          remarks: "remarks",
          reason: "Comment",
        },
      ],
    };
  },
  methods: {
    validateData(value) {
      if (!value) {
        return "This field is required";
      }

      return true;
    },
    submitData() {
      if (this.count === true) {
        this.isActive = true;
        this.count = false;
        this.isIcon = true;
      } else {
        this.isActive = false;
      }
    },
    onClose() {
      this.isActive = false;
    },

    // ADDING DATA
    async addData() {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      let userCookies = this.cookies.get("userCookies");
      // Form Data
      const formData = new FormData();
      formData.append("official_list_file", this.official_list_file);
      formData.append("graduate_tracer_study_file", this.graduate_tracer_study_file);
      formData.append("program_id", this.in_program);
      formData.append("lastname", this.in_lname);
      formData.append("middlename", this.in_mname);
      formData.append("firstname", this.in_fname);
      formData.append("graduate_tracer_status", this.in_status);
      formData.append("business", this.in_business);
      formData.append("campus_id", userCookies["campus_id"]);
      formData.append("college_id", userCookies["college_id"]);
      formData.append("user_id", userCookies["id"]);

      try {
        const response = await axios
          .post(import.meta.env.VITE_API_APPROVE_CREATE_TWO_HEP, formData, {
            headers,
          })
          .then((response) => {
            // this.collegeProgram = response.data;
         
            if (response.data == "Student Not Found ") {

              Swal.fire({
                title: 'Error ',
                text: "Student not found",
                icon: 'error',
                confirmButtonText: 'OK'
              })
              // this.FetchData(userCookies["userPosition"],userCookies['campus_id'],userCookies['id']);
            }else if(response.data == "Existing Data Already"){

                Swal.fire({
                  title: 'Error ',
                  text: "Existing Data Already",
                  icon: 'error',
                  confirmButtonText: 'OK'
                })
                this.clearCredits();
            }
            else if(response.data == "HEP Successfully Added"){

                Swal.fire({
                  title: 'Success ',
                  text: "Date Added Successfully",
                  icon: 'success',
                  confirmButtonText: 'OK'
                })
                this.isDataActive = 3;
                this.clearCredits();
              }
            else {
           
    
              Swal.fire({
                title: 'Invalid ',
                text: "Please upload needed file/s",
                icon: 'error',
                confirmButtonText: 'OK'
              })
           
      
            }
          })
          .catch((error) => {
            console.error("Error fetching campus", error);

            console.log(formData)
            
          });
      } catch (error) {

        console.log('test')
      }

      
      this.clearCredits();

      // }, 2000)
    },

    clearCredits(){
      this.in_program = "";
      this.in_fname = "";
      this.in_mname = "";
      this.in_lname = "";
      this.in_status = "";
      this.in_business = "";
      this.selecteofficial_list_filedFile = null;
      this.graduate_tracer_study_file = null;
    },
    // FETCHING REGISTRAR
    async FetchRegistrarhepData() {
      try {
        let userCookies = this.cookies.get("userCookies");
        const response = await axios
          .post(import.meta.env.VITE_API_DISPLAY_REGISTRAR_DATA, {
            user_id: userCookies["id"],
            campus_id: userCookies["campus_id"],
          })
          .then((response) => {
            this.registrarData = response.data;
            this.myLoading = true;

            if (this.registrarData.length === 0) {
              console.log("Empty");
              this.disableSubmit = true;
            } else {
              console.log("Not empty");
              this.disableSubmit = false;
            }
          })
          .catch((error) => {
            console.error("Error fetching hep Data", error);
          })

          .finally(() => {
            this.myLoading = false;
          });
      } catch (error) {
        // add actions here
      }
    },

    // FETCHING DEANS DATA
    async FetchData(office, campus, user_id) {
      try {
        const response = await axios
          .post(import.meta.env.VITE_API_APPROVE_DISPLAY_TWO_HEP, {
            office: office,
            campus_id: campus,
            user_id: user_id,
          })
          .then((response) => {
            this.deansData = response.data;
            console.log("Deans: ",response.data);
            // if (response.data == "Successfully HEP added!"){
            //     this.isDataActive = false;
            // }
          })
          .catch((error) => {
            console.error("Error fetching hep data", error);
          });
      } catch (error) {}
    },

  
    // College Program

    async fetchProgram_Data(college_id) {
      try {
        const response = await axios
          .post(import.meta.env.VITE_API_GET_PROGRAM, {
            college_id: college_id,
          })
          .then((response) => {
            this.collegeProgram = response.data;
          })
          .catch((error) => {
            console.error("Error fetching campus", error);
          });
        this.collegeProgram = response.data;
      } catch (error) {
        // add actions here
      }
    },

    //   async fecthHEPData() {

    //     try {

    //       let userCookies = this.cookies.get("userCookies");
    //       const response = await axios
    //         .post(import.meta.env.VITE_API_DISPLAY_REGISTRAR_DATA, {
    //           user_id: userCookies["id"],
    //           campus_id: userCookies["campus_id"],
    //         })
    //         .then((response) => {
    //           console.log("fecthHEPData:", response.data);

    //           this.myLoading = true
    //           this.registrarData = response.data;

    //             if(this.registrarData.length === 0){
    //               console.log("Empty")
    //               this.disableSubmit = true;
    //             }else{
    //               console.log('Not empty')
    //               this.disableSubmit = false;
    //             }
    //         })
    //         .catch((error) => {
    //           console.error("Error fetching hep Data", error);
    //         })

    //         .finally(() =>{
    //           this.myLoading = false
    //         })
    //         ;
    //     } catch (error) {
    //       // add actions here
    //     }
    // },

    handleFileUpload(event) {
      this.graduate_tracer_study_file = event.target.files[0];
    },
    handleFileUpload2(event) {
      this.official_list_file = event.target.files[0];
    },


    changeData(isActive) {
      this.isDataActive = isActive;

      console.log(this.isDataActive);
    },
    validateInput(value) {
      if (!value) {
        return "This field is required";
      }

      return true;
    },

    checkNegative(value) {
      if (value < 0) {
        return "Negative numbers is not allowed";
      } else if (value > -1) {
        return true;
      } else if (!value) {
        return "This field is required";
      }
    },

    deleteData(id) {
      console.log(id);
    },
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
    this.data[0].in_campus = userCampus;
    this.data[0].in_department = userCollege;

    if (this.user == null && this.userCookies == null) {
      this.$router.push("/");
    }
    this.overlay = false;
    this.FetchRegistrarhepData();
    this.fetchProgram_Data(userCookies["college_id"]);
    this.FetchData(
      userCookies["office"],
      userCookies["campus_id"],
      userCookies["id"],
    );
  },
};
