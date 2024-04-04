import { Form, Field, ErrorMessage } from "vee-validate";
import { userPosition } from "../../cookies";
import { useCookies } from "vue3-cookies";
import axios from "axios";
export default {
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },

  data() {
    return {
      sampleData: [
        {
          campus: "Alangilan Campus",
          department: "College of Engineering",
          program: "Bachelor of Science in Civil Engineering",
          year_io: "2012",
          status: "status",
          pov_from: "pov_from",
          pov_to: "pov to",
          sup_doc: "",
          v_status: "Not validated",
        },
        {
          campus: "Alangilan Campus",
          department: "College of Engineering",
          program: "Bachelor of Science in Civil Engineering",
          year_io: "2012",
          status: "status",
          pov_from: "pov_from",
          pov_to: "pov to",
          sup_doc: "",
          v_status: "Not validated",
        },
        {
          campus: "Alangilan Campus",
          department: "College of Engineering",
          program: "Bachelor of Science in Civil Engineering",
          year_io: "2012",
          status: "status",
          pov_from: "pov_from",
          pov_to: "pov to",
          sup_doc: "",
          v_status: "Not validated",
        },
        {
          campus: "Alangilan Campus",
          department: "College of Engineering",
          program: "Bachelor of Science in Civil Engineering",
          year_io: "2012",
          status: "status",
          pov_from: "pov_from",
          pov_to: "pov to",
          sup_doc: "",
          v_status: "Not validated",
        },
        {
          campus: "Alangilan Campus",
          department: "College of Engineering",
          program: "Bachelor of Science in Civil Engineering",
          year_io: "2012",
          status: "status",
          pov_from: "pov_from",
          pov_to: "pov to",
          sup_doc: "",
          v_status: "Not validated",
        },
        {
          campus: "Alangilan Campus",
          department: "College of Engineering",
          program: "Bachelor of Science in Civil Engineering",
          year_io: "2012",
          status: "status",
          pov_from: "pov_from",
          pov_to: "pov to",
          sup_doc: "",
          v_status: "Not validated",
        },
        {
          campus: "Alangilan Campus",
          department: "College of Engineering",
          program: "Bachelor of Science in Civil Engineering",
          year_io: "2012",
          status: "status",
          pov_from: "pov_from",
          pov_to: "pov to",
          sup_doc: "",
          v_status: "Not validated",
        },
        {
          campus: "Alangilan Campus",
          department: "College of Engineering",
          program: "Bachelor of Science in Civil Engineering",
          year_io: "2012",
          status: "status",
          pov_from: "pov_from",
          pov_to: "pov to",
          sup_doc: "",
          v_status: "Not validated",
        },
        {
          campus: "Alangilan Campus",
          department: "College of Engineering",
          program: "Bachelor of Science in Civil Engineering",
          year_io: "2012",
          status: "status",
          pov_from: "pov_from",
          pov_to: "pov to",
          sup_doc: "",
          v_status: "Not validated",
        },
        {
          campus: "Alangilan Campus",
          department: "College of Engineering",
          program: "Bachelor of Science in Civil Engineering",
          year_io: "2012",
          status: "status",
          pov_from: "pov_from",
          pov_to: "pov to",
          sup_doc: "",
          v_status: "Not validated",
        },
        {
          campus: "Alangilan Campus",
          department: "College of Engineering",
          program: "Bachelor of Science in Civil Engineering",
          year_io: "2012",
          status: "status",
          pov_from: "pov_from",
          pov_to: "pov to",
          sup_doc: "",
          v_status: "Not validated",
        },
      ],

    //   headers:[
    //     {
    //         title:'',
    //         value:'check_box'
    //     },
    //     {
    //         title: "HEP Code",
    //         key: "hep_code",
    //     },
    //     {
    //         title: "Campus",
    //         value: "campus",
    //     },
    //     {
    //         title: "Department",
    //         value: "college",
    //     },
    //     {
    //         title: "Undergraduate Program",
    //         value: "program",
    //     },
    //     {
    //         title: "Name",
    //         value: "student_fullname",
    //     },
    //     {
    //         title: "Status",
    //         value: "graduate_tracer_status",
    //     },
    //     {
    //         title: "Companys Business / Type of Business",
    //         value: "business",
    //     },
    //     {
    //         title: "Graduate Tracer Study",
    //         value: "graduate_files",
    //     },
    //     {
    //         title: "Official List of Graduate",
    //         value: "official_list",
    //     },
    //     {
    //         title: "Validation Status",
    //         value: "status",
    //     },
    //     {
    //         title: "Actions",
    //         value: "actions",
    //     },
    // ],
    headersDean: [
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
    reasonOpt: [
        {
          reason: "Lack of Supporting Documents",
        },
        {
          reason: "Inconsistent Data",
        },
      ],
      hepData: [],
      selectedID: "",
      remarks: "",
      reasons: "",
      user: null,
      selectedIds: [],
      approvedLogs:[]
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  methods: {
    validateInput(value) {
      if (!value) {
        return "This field is required";
      }

      return true;
    },
    async GetHEPData() {
      let userCookies = this.cookies.get("userCookies");
      await axios
        .post(import.meta.env.VITE_API_APPROVE_DISPLAY_TWO_HEP, {
          position: userCookies["position"],
          campus_id: userCookies["campus_id"],
          user_id: userCookies["id"],
        })
        .then((response) => {
          if (response.data) {
            this.hepData = response.data;
          }
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.data) {
              // call the modal
              //  this.loginError =false
              //  this.addTimeout()
              //  $("errorMessage").val();

              alert(JSON.stringify(error.response.data.message));
            }
            // called modal
            //this.login =false'
            // this.addTimeout();
          } else if (error.request) {
            console.log(error.request);
            // called modal
            //this.login =false'
            // this.addTimeout();
          } else {
            console.log("Error", error.message);
            // called modal
            //this.login =false'
            // this.addTimeout();
          }
          // console.log(error.config);
          // called modal
          //this.login =false'
          // this.addTimeout();
        });
    },
    approvedHEP(id) {
      this.selectedID = id;
    },

    rejectedHEP(id) {
      this.selectedID = id;
    },

    toogleCheckBox(id) {
      const index = this.selectedIds.indexOf(id);
      if (index === -1) {
        this.selectedIds.push(id);
        console.log(this.selectedIds)
      } else {
        this.selectedIds.splice(index, 1);
        console.log(this.selectedIds)
      }
    },

    async ApprovedRequest() {
      try {
        let users_list = this.cookies.get("userCookies");
        const response = await axios
          .post(import.meta.env.VITE_API_CHANCELLOR_APPROVE_HEP_TWO, {
            position: users_list.position,
            campus_id: users_list.campus_id,
            user_id: users_list.id,
            id: this.selectedIds,
          })
          .then((response) => {
            location.reload();

            if (response.data == "This request is already approved by VCAA!") {
              this.$router.push("/VCs");
            }
          })
          .catch((error) => {
            console.error("Error fetching hep data", error);
          });
      } catch (error) {
        // add actions here
      }
    },

    async RejectRequest() {
      try {
        let users_list = this.cookies.get("userCookies");
        const response = await axios
          .post(import.meta.env.VITE_API_CHANCELLOR_APPROVE_HEP_TWO, {
            position: users_list.position,
            campus_id: users_list.campus_id,
            user_id: users_list.id,
            id: this.selectedID,
            reasons: this.reasons,
            remarks: this.remarks,
          })
          .then((response) => {
            location.reload();
          })
          .catch((error) => {
            console.error("Error fetching hep data", error);
          });
      } catch (error) {
        // add actions here
      }
    },

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
        })
        .catch((error) => {
          console.error("Error history not found", error);
        });
    },

    async viewFilePDF(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      await axios
        .post(import.meta.env.VITE_API_FETCH_GRADUATE_FILE, {
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
    async viewFileXLS(id, filename) {
      console.log(filename);
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      await axios
        .post(import.meta.env.VITE_API_FETCH_OFFICIAL_LIST, {
          id: id,
          user_id: userCookies["id"],
          responseType: "arraybuffer", // Set the response type to arraybuffer
        })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          let parts = url.split("/");
          // console.log(parts[3]);
          link.href = url;
          link.setAttribute("download", filename);
          document.body.appendChild(link);
          link.click();
        })
        .catch((error) => {
          console.error("Error fetching PDF:", error);
        });
    },
  },
  mounted() {
    let userCookies = this.cookies.get('userCookies');

    let accesstoken = this.cookies.get('userAccessToken');

    let userPosition = this.cookies.get('userPosition');

    let userCollege = this.cookies.get('userCollege');

    let userCampus = this.cookies.get('userCampus'); 

    this.user = userPosition;
    this.userCookies = userCookies;

    if (this.user == null && this.userCookies == null){
        this.$router.push('/');
    }
    this.GetHEPData();

    const holdCookies =userPosition;
  },
};
