import {Form, Field, ErrorMessage} from 'vee-validate'
import { userPosition } from '../../cookies'
import { useCookies } from "vue3-cookies";
import axios from 'axios';
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

      // headers: [
      //   {
      //     title: "HEP Code",
      //     key: "hep_code",
      //   },
      //   {
      //     title: "Campus",
      //     value: "campus",
      //   },
      //   {
      //     title: "Department",
      //     value: "college",
      //   },
      //   {
      //     title: "Undergraduate Program",
      //     value: "program",
      //   },
      //   {
      //     title: "Name",
      //     value: "student_fullname",
      //   },
      //   {
      //     title: "Status",
      //     value: "graduate_tracer_status",
      //   },
      //   {
      //     title: "Companys Business / Type of Business",
      //     value: "business",
      //   },
      //   {
      //     title:'Supported Documents',
      //     align:'center',
      //     children:[
      //       {
      //         title: "Graduate Tracer Study",
      //         value: "graduate_files",
      //       },
      //       {
      //         title: "Official List of Graduate",
      //         value: "official_list",
      //       },
      //     ]
      //   },

      //   {
      //     title: "Validation Status",
      //     value: "status",
      //   },
      //   {
      //     title: "Actions",
      //     value: "actions",
      //   },
      // ],

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
      approvedLogs: [],
      myLoading: false,
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  methods: {
    async GetHEPData() {
      let userCookies = this.cookies.get("userCookies");
      await axios
        .post(import.meta.env.VITE_API_APPROVE_DISPLAY_TWO_HEP, {
          office: userCookies["office"],
          campus_id: userCookies["campus_id"],
          user_id: userCookies["id"],
        })
        .then((response) => {
          if (response.data) {
            this.myLoading = true;
            this.hepData = response.data;

            console.log(JSON.stringify(this.hepData));
          }
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.data) {
              alert(JSON.stringify(error.response.data.message));
            }
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        })

        .finally(() => {
          this.myLoading = false;
        });
    },
    approvedHEP(id) {
      this.selectedID = id;
    },

    rejectedHEP(id) {
      this.selectedID = id;
    },

    async ApprovedRequest() {
      try {
        let users_list = this.cookies.get("userCookies");
        const response = await axios
          .post(import.meta.env.VITE_API_APPROVE_HEP_TWO, {
            office: users_list.office,
            campus_id: users_list.campus_id,
            user_id: users_list.id,
            id: this.selectedID,
          })
          .then((response) => {
            this.$router.go();

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
          .post(import.meta.env.VITE_API_DISAPPROVE_HEP_TWO, {
            office: users_list.office,
            campus_id: users_list.campus_id,
            user_id: users_list.id,
            id: this.selectedID,
            reasons: this.reasons,
            remarks: this.remarks,
          })
          .then((response) => {
            this.$router.go();
          })
          .catch((error) => {
            console.error("Error fetching hep data", error);
          });
      } catch (error) {
        // add actions here
        console.log(error);
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
        .post(import.meta.env.VITE_API_FETCH_PDF, {
          id: id,
          user_id: userCookies["id"],
          responseType: "arraybuffer", // Set the response type to arraybuffer
        })
        .then((response) => {
          // Create a Blob object from the response data
          const blob = new Blob([response.data], { type: "application/pdf" });

          // Create a URL for the Blob object
          const url = URL.createObjectURL(blob);

          // Open the URL in a new tab
          window.open(url, "_blank");
        })
        .catch((error) => {
          console.error("Error fetching PDF:", error);
        });
    },


    //Viewing File xls
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
    let userCookies = this.cookies.get("userCookies");
    let accesstoken = this.cookies.get("userAccessToken");
    let userPosition = this.cookies.get("userPosition");
    let userCollege = this.cookies.get("userCollege");
    let userCampus = this.cookies.get("userCampus");
    const holdCookies = userPosition;
    this.user = userPosition;
    this.userCookies = userCookies;

    if (this.user == null && this.userCookies == null) {
      this.$router.push("/");
    }
    this.GetHEPData();
  },
};
