
import { Form, Field, ErrorMessage } from 'vee-validate'
import notification from '../../components/Others/notification.vue';
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
      in_thesis: "",
      in_noThesis: "",
      count: true,
      isActive: false,
      isIcon: false,
      isAdd: false,
      id: 0,
      uploadedFile: "",
      hepData: [],
      isDataActive:true,
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
      sampleData: [],
    };
  },
  methods: {
    changeData(isActive) {
      this.isDataActive = isActive;
    },
    validateData(value) {
      if (!value) {
        return "This field is required";
      }

      return true;
    },
    addData() {
      this.sampleData.push({
        tb_id: this.id,
        tb_campus: this.data[0].in_campus,
        tb_department: this.data[0].in_department,
        tb_program: this.in_program,
        tb_reqThesis: this.in_thesis,
        tb_notReqThesis: this.in_noThesis,
      });
      this.id++;

      this.data[0].in_campus = "";
      this.data[0].in_department = "";
      this.in_program = "";
      this.in_thesis = "";
      this.in_noThesis = "";

      this.isAdd = true;
      setTimeout(() => {
        this.isAdd = false;
      }, 2000);
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

    fileHandlePdf(event) {
      this.uploadedFile = event.target.files[0];
      console.log(this.uploadedFile);
    },

    async SaveRecord() {

      const headers = {
        "Content-Type": "multipart/form-data",
      };
      let userCookies = this.cookies.get("userCookies");
      // Form Data
      const formData = new FormData();
      formData.append("file", this.uploadedFile);
      formData.append("user_id", userCookies["id"]);

      try {
        const response = await axios
          .post(import.meta.env.VITE_API_UPLOAD_PDF, formData, {
            headers,
          })
          .then((response) => {
            // Swal.fire({
            //     title: 'Status ',
            //     text: 'Uploaded Successfully',
            //     icon: 'sucess',
            //     confirmButtonText: 'OK'
            //   })
            location.reload();
            // console.log(response.data);
            // if (response.data == "Successfully HEP added!") {
            //   location.reload();
            // }
          })
          .catch((error) => {
            console.error("Error fetching file", error);

            Swal.fire({
                title: 'Error ',
                text: 'Failed to upload file',
                icon: 'error',
                confirmButtonText: 'OK'
              })
           
          });
      } catch (error) {
        Swal.fire({
            title: 'Error ',
            text: 'Failed to upload file',
            icon: 'error',
            confirmButtonText: 'OK'
          })
      }
    },
    async fecthHEPData() {
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

    this.fecthHEPData();
  },
};


