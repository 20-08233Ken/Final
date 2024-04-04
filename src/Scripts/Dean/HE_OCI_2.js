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
      myLoading: true,

      forUpdate:[
      ],
   
      up_selectedFile1:null,
      up_selectedFile2:null,

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
          key: "campus",
        },
        {
          title: "Department",
          key: "college",
        },
        {
          title: "Undergraduate Program",
          key: "program",
        },
        {
          title: "Name",
          key: "student_fullname",
        },
        {
          title: "Status",
          key: "graduate_tracer_status",
        },
        {
          title: "Companys Business / Type of Business",
          key: "business",
        },
        {
          title: "Supporting Documents",
          key: "graduate_files",
        },
        {
          title: "Validation Status",
          key: "status",
        },
        {
          title: "Actions",
          key: "actions",
        },
      ],
      deansData: [],

      sampleDeansData: [

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

      ],
    };
  },
  methods: {
    // Updates
    openUpdate(item){
      this.forUpdate = item
   
    },

    updateFile1(event){
      this.up_selectedFile1 = event.target.files[0];
    },

    updateFile2(event){
      this.up_selectedFile2 = event.target.files[0];
    },


    updateRecord(){
      // add api call
    },


    // HISTORY
async ViewHistory(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      const response = await axios
        .post(import.meta.env.VITE_API_HEP_HISTORY_TWO, {
          id: id,
          user_id: userCookies["id"],
        })
        .then((response) => {
   
          this.approvedLogs = response.data;
          console.log(JSON.stringify(  this.approvedLogs))
        })
        .catch((error) => {
          console.error("Error history not found", error);
        });
    },
    

    // Data validation
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
                this.$router.go();
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

            
            
          });
      } catch (error) {

        
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
              this.disableSubmit = true;
            } else {        
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
    async FetchData(position, campus, user_id) {
      try {
        const response = await axios
          .post(import.meta.env.VITE_API_APPROVE_DISPLAY_TWO_HEP, {
            position: position,
            campus_id: campus,
            user_id: user_id,
          })
          .then((response) => {
            this.myLoading2 = true;
            this.deansData = response.data;
            
            // if (response.data == "Successfully HEP added!"){
            //     this.isDataActive = false;
            // }
          })
          .catch((error) => {
            console.error("Error fetching hep data", error);
          })
          
          .finally(() => {
            this.myLoading2 = false
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


    // Uploading File
    handleFileUpload(event) {
      // this.graduate_tracer_study_file = event.target.files[0];

      const filename = event.target.files[0].name
      const fileExtension = filename.split('.').pop().toLowerCase()
      if( fileExtension != 'pdf'){
        
        Swal.fire({
          title: 'Error ',
          text: "Invalid File Type",
          icon: 'error',
          confirmButtonText: 'OK'
        })

        event.target.value=''
      }else{
        this.graduate_tracer_study_file = event.target.files[0];

      }


    },
    handleFileUpload2(event) {
      // this.official_list_file = event.target.files[0];
      const filename = event.target.files[0].name
      const fileExtension = filename.split('.').pop().toLowerCase()
      if( fileExtension != 'xlsx'){
        
        Swal.fire({
          title: 'Error ',
          text: "Invalid File Type",
          icon: 'error',
          confirmButtonText: 'OK'
        })

        event.target.value=''
      }else{
        this.official_list_file = event.target.files[0];

      }

    },


    //Viewing File PDF
    async viewFilePDF(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      await axios
        .post(import.meta.env.VITE_API_FETCH_PDF, {
          id: id,
          user_id: userCookies["id"],
          responseType: 'arraybuffer' // Set the response type to arraybuffer
        })
        .then(response => {
          // Create a Blob object from the response data
          const blob = new Blob([response.data], { type: 'application/pdf' });
        
          // Create a URL for the Blob object
          const url = URL.createObjectURL(blob);
        
          // Open the URL in a new tab
          window.open(url, '_blank');
        })
        .catch(error => {
          console.error('Error fetching PDF:', error);
        });
 
    },

    //Viewing File xls
    async viewFileXLS(id,filename) {
      console.log(filename);
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      await axios
        .post(import.meta.env.VITE_API_FETCH_OFFICIAL_LIST, {
          id: id,
          user_id: userCookies["id"],
          responseType: 'arraybuffer' // Set the response type to arraybuffer
        })
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          let parts = url.split("/");
          // console.log(parts[3]);
          link.href = url;
          link.setAttribute('download', filename);
          document.body.appendChild(link);
          link.click();
        })
        .catch(error => {
          console.error('Error fetching PDF:', error);
        });
 
    },

    changeData(isActive) {
      this.isDataActive = isActive;


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

    // Delete data
    async deleteData(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      const response = await axios
        .post(import.meta.env.VITE_API_REMOVE_TWO_HEP, {
          id: id,
          user_id: userCookies["id"],


        })
        .then((response) => {

          this.isDataActive = 3;
    
        })
        .catch((error) => {
          console.error("Error history not found", error);
        });
    },

    async submitUpdate(id){

      const headers = {
        "Content-Type": "multipart/form-data",
      };
      let userCookies = this.cookies.get("userCookies");
      // Form Data
      const formEditData = new FormData();
      formEditData.append("official_list_file", this.up_selectedFile1);
      formEditData.append("graduate_tracer_study_file", this.up_selectedFile2);
      formEditData.append("program_id", this.forUpdate.in_program);
      formEditData.append("lastname", this.forUpdate.student_lastname);
      formEditData.append("middlename", this.forUpdate.student_middlename);
      formEditData.append("firstname", this.forUpdate.student_firstname);
      formEditData.append("graduate_tracer_status", this.forUpdate.graduate_tracer_status);
      formEditData.append("business", this.forUpdate.business);
      formEditData.append("campus_id", userCookies["campus_id"]);
      formEditData.append("college_id", userCookies["college_id"]);
      formEditData.append("user_id", userCookies["id"]);
      try {
        const response = await axios
          .post(import.meta.env.VITE_API_UPDATE_TWO_HEP, formEditData, {
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
            }
            else if (response.data == "Successfully HEP updated!") {
              Swal.fire({
                title: 'Success ',
                text: "Date Updated Successfully",
                icon: 'success',
              })
              
                this.isDataActive = 3;
              // this.FetchData(userCookies["userPosition"],userCookies['campus_id'],userCookies['id']);
            }
            // if (response.data == "Successfully HEP updated!") {
            //   location.reload();
            //   // this.FetchData(userCookies["userPosition"],userCookies['campus_id'],userCookies['id']);
            // }
          })
          .catch((error) => {
            console.error("Error fetching campus", error);
          });
      } catch (error) {}

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
      userCookies["position"],
      userCookies["campus_id"],
      userCookies["id"],
    );
  },
};
