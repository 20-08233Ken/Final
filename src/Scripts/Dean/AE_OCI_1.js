import { Form, Field,ErrorMessage } from 'vee-validate';
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
    notification,
  },
  data() {
    return {
      // in_campus:'',
      // in_department:'',
      firstname: "",
      middlename: "",
      lastname: "",
      research_position: "",
      category: "",
      in_duration: "",
      isIcon: false,
      count: true,
      isActive: 1,
      isAdd: false,
      search: "",
      headers: [
        {
          title: "",
          value: "check_box",
        },
        {
          title: "Advance Education Code",
          key: "advanced_ed_code",
        },
        {
          title: "Campus",
          value: "campus",
          class: "table_header",
        },
        {
          title: "Department",
          value: "college",
        },
        {
          title: "Name",
          value: "fullname",
        },
        {
          title: "Position",
          value: "research_position",
        },
        {
          title: "Category",
          value: "research_category",
        },
        {
          title:'Supported Documents',
          align:'center',
          children:[
            {
              title: "Scanned copy of Enrollment Form",
              value: "copy_of_enrollment_form",
              align: "center",
            },
            {
              title: "Scanned copy of latest research conducted",
              value: "research_conducted",
              align: "center",
            },
            {
              title: "Documentation of utilized technology",
              value: "utilized_technology",
              align: "center",
            },
            {
              title: "Activity report of extension program	",
              value: "report_of_extension_program",
              align: "center",
            },
          ]
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
      AdvanceEducationData: [
      ],
      // Data base from the Account Info of Dean
      data: [
        {
          in_campus: "",
          in_department: "",
        },
      ],

      // Options of Select Program Input
      collegeProgram: [
 
      ],

      facultyEngagement: [
        {
          key: "A",
          engagement: "A. Pursuing advanced research degree program (Ph.D.)",
        },
        {
          key: "B",
          engagement: "B. Actively pursuing research within the last (3) years",
        },
        {
          key: "C",
          engagement:
            "C. Producing technologies for commercialization or livelihood improvement",
        },
        {
          key: "D",
          engagement: "D. Research work resulted in an extension program",
        },
        {
          key: "E",
          engagement: "E. None of the above",
        },
      ],

      forUpdate: [
        {
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
          f: "",
        },
      ],

      // selectedFile: [
      //   {
          File1: null,
          File2: null,
          File3: null,
          File4: null,
          File5: null,
        // },
      // ],

      // updateFile: [
      //   {
          UpdatedFile1: null,
          UpdatedFile2: null,
          UpdatedFile3: null,
          UpdatedFile4: null,
          UpdatedFile5: null,
      //   },
      // ],

      isDataActive: 1,

      // For View
      approvedLogs: [

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
    
      
    handleFileUpload1(event) {
      this.File1 = event.target.files[0];
    },
    handleFileUpload2(event) {
      this.File2 = event.target.files[0];
    },
    handleFileUpload3(event) {
      this.File3 = event.target.files[0];
    },
    handleFileUpload4(event) {
      this.File4 = event.target.files[0];
    },

    changeData(isActive) {
      this.isDataActive = isActive;
    },

    openUpdate(item) {
      this.forUpdate = item;
    },

    editHandleFileUpload1(event) {
      this.UpdatedFile1 = event.target.files[0];
    },
    editHandleFileUpload2(event) {
      this.UpdatedFile2 = event.target.files[0];
    },
    editHandleFileUpload3(event) {
      this.UpdatedFile3 = event.target.files[0];
    },
    editHandleFileUpload4(event) {
      this.UpdatedFile4 = event.target.files[0];
    },
  
    // ADD data
    async addData() {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      let userCookies = this.cookies.get("userCookies");
  
      const formData = new FormData();
      formData.append("campus_id", userCookies["campus_id"]);
      formData.append("college_id", userCookies["college_id"]);
      formData.append("firstname", this.firstname);
      formData.append("middlename", this.middlename);
      formData.append("lastname", this.lastname);
      formData.append("research_position", this.research_position);
      formData.append("category", this.category);
      formData.append("copy_of_enrollment_form", this.File1);
      formData.append("research_conducted", this.File2);
      formData.append("utilized_technology", this.File3);
      formData.append("report_of_extension_program", this.File4);
      formData.append("user_id", userCookies["id"]);

      try {
        const response = await axios
          .post(import.meta.env.VITE_API_CREATE_ADVANCED_EDUCATION, formData, {
            headers,
          })
          .then((response) => {
            // if (response.data == "Successfully Advanced Education added!") {
            //   location.reload();
            // }
          })
          .catch((error) => {
            console.error("Error fetching campus", error);
          });
      } catch (error) {}

      this.isDataActive = false;
      //   (this.in_examDate = ""),
      //   (this.in_takers = 0),
      //   (this.in_passers = 0),
      //   (this.selectedFile = null);

      // }, 2000)
    },

    // Delete Data
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

    // Edit
    async submitUpdate() {
      console.log("zwq");
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      let userCookies = this.cookies.get("userCookies");
      // Form Data
      const formEditData = new FormData();
  

      formEditData.append("campus_id", userCookies["campus_id"]);
      formEditData.append("college_id", userCookies["college_id"]);
      formEditData.append("firstname", this.forUpdate.firstname);
      formEditData.append("middlename", this.forUpdate.middlename);
      formEditData.append("lastname", this.forUpdate.lastname);
      formEditData.append("position", this.forUpdate.research_position);
      formEditData.append("category", this.forUpdate.research_category);
      formEditData.append("copy_of_enrollment_form", this.UpdatedFile1);
      formEditData.append("research_conducted", this.UpdatedFile2);
      formEditData.append("utilized_technology", this.UpdatedFile3);
      formEditData.append("report_of_extension_program", this.UpdatedFile4);
      formEditData.append("user_id", userCookies["id"]);
      formEditData.append("id", this.forUpdate.id);

      try {
        const response = await axios
          .post(import.meta.env.VITE_API_UPDATE_AE, formEditData, {
            headers,
          })
          .then((response) => {
            // this.collegeProgram = response.data;

            if (response.data == "Successfully HEP updated!") {
              location.reload();
            }
          })
          .catch((error) => {
            console.error("Error fetching campus", error);
          });
      } catch (error) {}
    },

    // Fetch Data
    async FetchData(position, campus, user_id) {
      try {
       await axios.post(import.meta.env.VITE_API_DISPLAY_ADVANCED_EDUCATION, {
            position: position,
            campus_id: campus,
            user_id: user_id,
          })
          .then((response) => {
            // console.log("advance education:",response.data);
            // this.myLoading = true;
            this.AdvanceEducationData = response.data;
          })
          .catch((error) => {
            console.error("Error fetching hep data", error);
          })

          .finally(() => {
            this.myLoading = false;
          });
      } catch (error) {}
    },

 
    onClose() {
      this.isActive = false;
    },

  
    // View Research PDF
    async viewResearchPDF(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      await axios
        .post(import.meta.env.VITE_API_DISPLAY_RESEARCH_PDF, {
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

    // View Utilized Tech PDF
    async viewUtilizedTechPDF(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      await axios
        .post(import.meta.env.VITE_API_DISPLAY_UTILIZED_TECHNOLOGY, {
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
    
    // View Enrollment Form PDF
    async viewEnrollmentFormPDF(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      await axios
        .post(import.meta.env.VITE_API_DISPLAY_ENROLLMENT_FORM, {
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
    
    // View Extension Program PDF
    async viewDisplayExtensionProgram(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      await axios
        .post(import.meta.env.VITE_API_DISPLAY_EXTENSION_PROGRAM, {
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
    
    
    async ViewHistory(id) {
      this.selectedID = id;
      console.log("id:", id);
      let userCookies = this.cookies.get("userCookies");
      const response = await axios
          .post(import.meta.env.VITE_API_AE_HISTORY, {
          id: id,
          user_id: userCookies["id"],
          })
          .then((response) => {
            console.log(response);
          this.approvedLogs = response.data;
          })
          .catch((error) => {
          console.error("Error history not found", error);
      });
    },    
  },
  mounted() {
    // call here
    // this.fetchProgram_Data()

    let userCookies = this.cookies.get("userCookies");
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

    this.FetchData(userCookies["position"],userCookies["campus_id"],userCookies["id"]);
  },
};