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
      in_program: "",
      firstname: "",
      middlename: "",
      lastname: "",
      research_position: "",
      category: "",
      in_duration: "",
      isIcon: false,
      count: true,
      isActive: false,
      isAdd: false,
      search: "",
      headers: [
        {
          title: "",
          value: "check_box",
        },
        {
          title: "HEP Code",
          key: "hep_code",
        },
        {
          title: "Campus",
          value: "campus",
          class: "table_header",
        },
        {
          title: "Department",
          value: "department",
        },
        {
          title: "Undergraduate Program",
          value: "program",
        },
        {
          title: "Name",
          value: "name",
        },
        {
          title: "Position",
          align: "position",
        },
        {
          title: "Category",
          align: "category",
        },
        {
          title: "Supporting Documents",
          value: "supported_file",
          align: "center",
        },
        {
          title: "Validation Status",
          value: "v_status",
        },
        {
          title: "Actions",
          value: "actions",
        },
      ],
      sampleData: [
        {
          hep_code: "1",
          campus: "2",
          department: "3",
          program: "4",
          name: "5",
          position: "6",
          category: "8",
          supported_file: "9",
          v_status: "10",
        },
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
    
    
    // ADD data
    async addData() {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      let userCookies = this.cookies.get("userCookies");
  
      const formData = new FormData();
      formData.append("program_id", this.in_program);
      formData.append("campus_id", userCookies["campus_id"]);
      formData.append("college_id", userCookies["college_id"]);
      formData.append("user_id", userCookies["id"]);
      formData.append("firstname", this.firstname);
      formData.append("middlename", this.middlename);
      formData.append("lastname", this.lastname);
      formData.append("research_position", this.research_position);
      formData.append("category", this.category);
      formData.append("copy_of_enrollment_form", this.File1);
      formData.append("research_conducted", this.File2);
      formData.append("utilized_technology", this.File3);
      formData.append("report_of_extension_program", this.File4);
      formData.append("file", this.File5);

      try {
        const response = await axios
          .post(import.meta.env.VITE_API_CREATE_ADVANCED_EDUCATION, formData, {
            headers,
          })
          .then((response) => {
     // this.collegeProgram = response.data;

            if (response.data == "Successfully Advanced Education added!") {
              location.reload();
              // this.FetchData(userCookies["userPosition"],userCookies['campus_id'],userCookies['id']);
            }
          })
          .catch((error) => {
            console.error("Error fetching campus", error);
          });
      } catch (error) {}

      this.isDataActive = false;
      //  (this.in_program = ""),
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
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      let userCookies = this.cookies.get("userCookies");
      // Form Data
      const formEditData = new FormData();
      formEditData.append("supported_file", this.editselectedFile);
      formEditData.append("program_id", this.forUpdate.program_id);
      formEditData.append("exam_date", this.forUpdate.exam_date);
      formEditData.append("number_of_takers", this.forUpdate.number_of_takers);
      formEditData.append(
        "number_of_passers",
        this.forUpdate.number_of_passers
      );
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

    // Fetch Data
    async FetchData(office, campus, user_id) {
      try {
        const response = await axios
          .post(import.meta.env.VITE_API_HEPLIST, {
            office: office,
            campus_id: campus,
            user_id: user_id,
          })
          .then((response) => {
            this.myLoading = true;
            this.hepData = response.data;
            // if (response.data == "Successfully HEP added!"){
            //     this.isDataActive = false;
            // }
          })
          .catch((error) => {
            console.error("Error fetching hep data", error);
          })

          .finally(() => {
            this.myLoading = false;
          });
      } catch (error) {}
    },

    // Fetch Program data
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

    // Fetch College data
    async fetchCollege_Data(campus_id) {
      try {
        const response = await axios
          .post(import.meta.env.VITE_API_GET_COLLEGE, {
            campus_id: campus_id,
          })
          .then((response) => {
            this.college = response.data;
          })
          .catch((error) => {
            console.error("Error fetching program", error);
          });
      } catch (error) {
        // add actions here
      }
    },

    onClose() {
      this.isActive = false;
    },
    async fetchProgram_Data() {
      try {
        const response = await axios.get("");
        // remove first the data from college program
        this.collegeProgram = response.data;
      } catch (error) {
        // add actions here
      }
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
    handleFileUpload5(event) {
      this.File5 = event.target.files[0];
    },

    changeData(isActive) {
      this.isDataActive = isActive;
      console.log(this.isDataActive);
    },

    openUpdate(item) {
      // this.forUpdate = item
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
    editHandleFileUpload4(event) {
      this.UpdatedFile5 = event.target.files[0];
    },
  },
  mount() {
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

    // this.fetchProgram_Data(userCookies["college_id"], userCampus, userCollege);
    // this.FetchData(
    //   userCookies["position"],
    //   userCookies["campus_id"],
    //   userCookies["id"],
    //   userCollege,
    //   userCampus
    // );
  },
};