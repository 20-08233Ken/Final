import { Form, Field, ErrorMessage } from "vee-validate";
import notification from "../../components/Others/notification.vue";
import edit_1 from "../../Views/Dean/edit/edit_1.vue";
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
    notification,
    edit_1
  },
  data() {
    return {
      in_program: "",
      in_examDate: "",
      in_takers: 0,
      in_passers: 0,
      count: true,
      id: 1,
      isActive: false,
      isIcon: false,
      isAdd: false,
      receivedProgam: null,    
      search: '',  
      myLoading:false,
      headers: [
        {
          title:'',
          value:'check_box'
        },
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
          width:'500'
         
        
        },
        {
          title: "Undergraduate Program",
          value: "program",
          width:'200px'
        },
        {
          title: "Exam date",
          value: "exam_date",
          width:'200px'
        },
        {
          title: "No. of 1st Time takers",
          value: "number_of_takers",
          width:'200px'
        },
        {
          title: "No. of 1st Time Passers",
          value: "number_of_passers",
        },
        {
          title: "Supporting Documents",
          value: "supported_file",

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

      // Data base from the Account Info of Dean
      data: [
        {
          in_campus: "Alangilan Campus",
          in_department: "College of Engineering",
        },
      ],
      hepData: [],
      updateData: [
        {  

            hep_code: null,
            campus:null,
            college:null,
            program: null,
            exam_date: null,
            number_of_passers: null,
            number_of_takers: null,
        }
    ],

      // Options of Select Program Input
      // Based from API callback
      collegeProgram: [],
      college: [],
      campus: [],
      selectedFile: null,
      isDataActive: true,
      // For View Button
      approvedLogs: [],
      editData: [],
      viewHistory: [],
      selectedID: "",
      forUpdate:[],
      editselectedFile: null,
    };
  },
  methods: {
    // fetch data
    async FetchData(office, campus, user_id) {
      try {
        const response = await axios
          .post(import.meta.env.VITE_API_HEPLIST, {
            office: office,
            campus_id: campus,
            user_id: user_id,
          })
          .then((response) => {
            this.myLoading = true
            this.hepData = response.data;
            // if (response.data == "Successfully HEP added!"){
            //     this.isDataActive = false;
            // }
          })
          .catch((error) => {
            console.error("Error fetching hep data", error);
          })

          .finally(() => {
            this.myLoading = false
          });
          
          
      } catch (error) {}
    },
    async deleteData(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      const response = await axios
        .post(import.meta.env.VITE_API_DELETE_HEP, {
          id: id,
          user_id: userCookies["id"],
        })
        .then((response) => {
          location.reload();
        })
        .catch((error) => {
          console.error("Error history not found", error);
        });
    },
    // Sample Data Entry that will display in table
    async addData() {
      this.loading = true;
      setTimeout(() => {
        // Simulated data fetching completion
        // Once data is fetched, set loading to false
        this.loading = false;
      }, 8000);
      console.log(this.loading)
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      let userCookies = this.cookies.get("userCookies");
      // Form Data
      const formData = new FormData();
      formData.append("supported_file", this.selectedFile);
      // formData.append('campus_id', this.data[0].in_campus);
      // formData.append('college_id',this.data[0].in_department);
      formData.append("program_id", this.in_program);
      formData.append("exam_date", this.in_examDate);
      formData.append("number_of_takers", this.in_takers);
      formData.append("number_of_passers", this.in_passers);
      formData.append("campus_id", userCookies["campus_id"]);
      formData.append("college_id", userCookies["college_id"]);
      formData.append("user_id", userCookies["id"]);

      try {
        const response = await axios
          .post(import.meta.env.VITE_API_CREATE_HEP, formData, {
            headers,
          })
          .then((response) => {
            // this.collegeProgram = response.data;

            if (response.data == "Successfully HEP added!") {
              location.reload();
              // this.FetchData(userCookies["userPosition"],userCookies['campus_id'],userCookies['id']);
            }
          })
          .catch((error) => {
            console.error("Error fetching campus", error);
          });
      } catch (error) {}

      this.isDataActive = false;
      (this.in_program = ""),
        (this.in_examDate = ""),
        (this.in_takers = 0),
        (this.in_passers = 0),
        (this.selectedFile = null);

      // }, 2000)
    },

    openUpdate(item){
      this.forUpdate = item

    },
    async submitUpdate(){

      const headers = {
        "Content-Type": "multipart/form-data",
      };
      let userCookies = this.cookies.get("userCookies");
      // Form Data
      const formEditData = new FormData();
      formEditData.append("supported_file", this.editselectedFile);
      formEditData.append("program_id", this.forUpdate.program_id);
      formEditData.append("exam_date", this.forUpdate.exam_date);
      formEditData.append("number_of_takers",this.forUpdate.number_of_takers);
      formEditData.append("number_of_passers", this.forUpdate.number_of_passers);
      formEditData.append("campus_id", userCookies["campus_id"]);
      formEditData.append("college_id", userCookies["college_id"]);
      formEditData.append("user_id", userCookies["id"]);
      formEditData.append("id", this.forUpdate.id);

      try {
        const response = await axios
          .post(import.meta.env.VITE_API_UPDATE_HEP, formEditData, {
            headers,
          })
          .then((response) => {
            // this.collegeProgram = response.data;

            if (response.data == "Successfully HEP updated!") {
              location.reload();
              // this.FetchData(userCookies["userPosition"],userCookies['campus_id'],userCookies['id']);
            }
          })
          .catch((error) => {
            console.error("Error fetching campus", error);
          });
      } catch (error) {}

    },
    // Validate if the input field is empty
    validateInput(value) {
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

    checkNegative(value) {
      if (value < 0) {
        return "Negative numbers is not allowed";
      } else if (value > -1) {
        return true;
      } else if (!value) {
        return "This field is required";
      }
    },

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

    async fetchCollege_Data(campus_id){
      try{
          const response = await axios.post(import.meta.env.VITE_API_GET_COLLEGE,{
              "campus_id": campus_id
          })
          .then(response => {
           
              this.college = response.data;
          })
          .catch(error => {
              console.error('Error fetching program', error);
          });
      }catch (error){
          // add actions here
      }
  },

    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },

    // showFile() {
    //   this.isDataActive = false;
    // },
    changeData(isActive) {
      this.isDataActive = isActive;
    },


    // async ViewHistory(id) {
    //   this.selectedID = id;
    //   let userCookies = this.cookies.get("userCookies");
    //   const response = await axios
    //     .post(import.meta.env.VITE_API_HEP_HISTORY, {
    //       id: id,
    //       user_id: userCookies["id"],
    //     })
    //     .then((response) => {
   
    //       this.viewHistory = response.data;
    //     })
    //     .catch((error) => {
    //       console.error("Error history not found", error);
    //     });
    // },

    async ViewHistory(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      const response = await axios
        .post(import.meta.env.VITE_API_HEP_HISTORY, {
          id: id,
          user_id: userCookies["id"],
        })
        .then((response) => {
   
          this.approvedLogs = response.data;
        })
        .catch((error) => {
          console.error("Error history not found", error);
        });
    },
    EdithandleFileUpload(event) {
      this.EditselectedFile = event.target.files[0];
    },

    async DownloadFile(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      const response = await axios
        .post(import.meta.env.VITE_API_FETCH_PDF, {
          id: id,
          user_id: userCookies["id"],
          responseType: 'blob',
          
        })
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          // window.open(url, '_blank');
        })
        // .then(response => response.blob())
        // .then(blob => {
        //     const url = window.URL.createObjectURL(new Blob([response.data]));
        //     window.open(url, '_blank');
        //     // If you want to embed the PDF in your page, you can use an <iframe> instead:
        //     // document.getElementById('pdfViewer').src = url;
        // })
        .catch(error => {
          console.error('Error fetching PDF:', error);
        });
    },

  },
  
  // watch:{
  //     hepData(){
  //         if(this.hepData.length === 0){
  //           this.myLoading = true
  //         }else{
  //           this.myLoading = false
  //         }
  //     }
  // }
  
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

    this.fetchProgram_Data(userCookies["college_id"], userCampus, userCollege);
    this.FetchData(
      userCookies["office"],
      userCookies["campus_id"],
      userCookies["id"],
      userCollege,
      userCampus
    );
  },
};
