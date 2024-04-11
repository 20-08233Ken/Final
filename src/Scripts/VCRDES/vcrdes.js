
import VCRDES_vue from "../../components/Others/Navigation/VCRDES_nav.vue";
import activityList from "../../components/Others/activityList.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
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
    VCRDES_vue,
    activityList,
  },

  data() {
    return {
      a: false,
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
          title: "Supported Documents",
          align: "center",
          children: [
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
          ],
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
      // sampleData: [
      //   {
      //     advanced_ed_code: "1",
      //     campus: "1",
      //     college: "1",
      //     fullname: "1",
      //     research_position: "1",
      //     copy_of_enrollment_form: "1",
      //     research_conducted: "1",
      //     utilized_technology: "1",
      //     report_of_extension_program: "1",
      //     status: "1",
      //     actions: "1",
      //   },
      // ],
      AdvanceEducationData: [],
      data: [
        {
          in_campus: "",
          in_department: "",
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

      inputData: [
        {
          firstname: "",
          middlename: "",
          lastname: "",
          research_position: "",
          category: "",
          in_duration: "",
        },
      ],

      files: [
        {
          file1: null,
          file2: null,
          file3: null,
          file4: null,
        },
      ],
      forUpdate: [],

      isDataActive: 1,
      myLoading: false,
      search: "",
      x: null,
      approvedLogs:[]
    };
  },

  methods: {
    openUpdate(item) {
      this.forUpdate = item;
    },
    validateData(value) {
      if (!value) {
        return "This field is required";
      }

      return true;
    },

    changeData(isActive) {
      this.isDataActive = isActive;
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
          console.error("Error fetching AE data", error);
        })

        .finally(() => {
          this.myLoading = false;
        });
      } catch (error) {}
    },

    async addData() {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      let userCookies = this.cookies.get("userCookies");

      const formData = new FormData();
      formData.append("campus_id", userCookies["campus_id"]);
      formData.append("college_id", userCookies["college_id"]);
      formData.append("firstname", this.inputData[0].firstname);
      formData.append("middlename", this.inputData[0].middlename);
      formData.append("lastname", this.inputData[0].lastname);
      formData.append("research_position", this.inputData[0].research_position);
      formData.append("category", this.inputData[0].category);
      formData.append("copy_of_enrollment_form", this.files[0].file1);
      formData.append("research_conducted", this.files[0].file2);
      formData.append("utilized_technology", this.files[0].file3);
      formData.append("report_of_extension_program", this.files[0].file4);
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

    handleFileUpload1(event) {
      this.files[0].file1 = event.target.files[0];
    },
    handleFileUpload2(event) {
      this.files[0].file2 = event.target.files[0];
    },
    handleFileUpload3(event) {
      this.files[0].file3 = event.target.files[0];
    },
    handleFileUpload4(event) {
      this.files[0].file4 = event.target.files[0];
    },

    ViewHistory(){

    }
  },

  mounted() {
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
