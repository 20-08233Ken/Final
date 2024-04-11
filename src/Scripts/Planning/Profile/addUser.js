
import { Field, Form, ErrorMessage } from "vee-validate";
import axios from "axios";
import { useCookies } from "vue3-cookies";
import Swal from "sweetalert2";
export default {
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
    axios,
  },
  data() {
    return {
      // Header of table

      // This is for storing the data including program and office
      userData: [],
      allUserData: [], // This is for table
      ProgramData: [],
      OfficeData: [],
      CampusData: [],
      CollegeData: [],
      PositionData: [],

      enableCollege: false,
    };
  },
  methods: {
    // Validate Data
    validateData(value) {
      if (!value) {
        return "This field is required";
      }
      return true;
    },

    // Submit Data
    async submitData() {
      console.log("submit");
      let userCookies = this.cookies.get("userCookies");
      // Form Data
      try {
        console.log("this.userData:", this.userData);
        if (this.userData.password != this.userData.confirm_password) {
          Swal.fire({
            title: "Invalid Password",
            text: "The password you entered does not match the confirmation password. Please ensure that both passwords are identical to proceed",
            icon: "error",
            confirmButtonText: "OK",
          });
        } else {
          console.log("else:", this.userData);
          let college = "NULL";
          console.log(this.userData.college_id);
          if (this.userData.college_id) {
            college = this.userData.college_id;
          }
          console.log("college:", college);
          const response = axios
            .post(import.meta.env.VITE_API_CREATE_USER, {
              firstname: this.userData.firstname,
              middlename: this.userData.middlename,
              lastname: this.userData.lastname,
              username: this.userData.username,
              email: this.userData.email,
              password: this.userData.password,
              office: this.userData.office_id,
              position: this.userData.position_id,
              company_id: this.userData.company_id,
              campus_id: this.userData.campus_id,
              college_id: college,
              user_id: userCookies["id"],
            })
            .then((response) => {
              console.log("response:", response);
              if (response.data == "Successfully Registered!") {
                Swal.fire({
                  title: "Success",
                  text: "User added successfully",
                  icon: "success",
                  confirmButtonText: "OK",
                });
              }
            })
            .catch((error) => {
              console.error("Error fetching campus", error);
            });
          this.clearForm()
        }
      } catch (error) {}
    },

    // Clear form
    clearForm(){
        this.userData.company_id = null;
        this.userData.email = null;
        this.userData.firstname= null;
        this.userData.lastname= null;
        this.userData.middlename= null;
        this.userData.username= null;
        this.userData.password= null;
        this.userData.confirm_password= null;
        this.userData.campus_id= null;
        this.userData.office_id= null;
        this.userData.position_id= null;
        this.userData.college_id=null;
    },

    // Fetch Position
    async FetchPosition() {
      try {
        let userCookies = this.cookies.get("userCookies");
        await axios
          .post(import.meta.env.VITE_API_POSITION_LIST, {
            user_id: userCookies["id"],
          })
          .then((response) => {
            // this.myLoading2 = true;
            this.PositionData = response.data;
            // if (response.data == "Successfully HEP added!"){
            //     this.isDataActive = false;
            // }
          })
          .catch((error) => {
            console.error("Error fetching hep data", error);
          })

          .finally(() => {
            this.myLoading2 = false;
          });
      } catch (error) {}
    },

    // Fetch Campus
    async FetchCampus() {
      try {
        let userCookies = this.cookies.get("userCookies");
        await axios
          .post(import.meta.env.VITE_API_GET_CAMPUS, {
            user_id: userCookies["id"],
            position_id: userCookies["position_id"],
          })
          .then((response) => {
            // this.myLoading2 = true;
            this.CampusData = response.data;
          })
          .catch((error) => {
            console.error("Error fetching hep data", error);
          })

          .finally(() => {
            this.myLoading2 = false;
          });
      } catch (error) {}
    },

    // Fetch Office
    async FetchOffice() {
      try {
        let userCookies = this.cookies.get("userCookies");
        await axios
          .post(import.meta.env.VITE_API_OFFICE_LIST, {
            user_id: userCookies["id"],
          })
          .then((response) => {
            // this.myLoading2 = true;
            this.OfficeData = response.data;
          })
          .catch((error) => {
            console.error("Error fetching hep data", error);
          })

          .finally(() => {
            this.myLoading2 = false;
          });
      } catch (error) {}
    },

    // Get College
    async changeCollege(campus_id) {
      try {
        let userCookies = this.cookies.get("userCookies");
        await axios
          .post(import.meta.env.VITE_API_GET_COLLEGE, {
            user_id: userCookies["id"],
            campus_id: campus_id,
          })
          .then((response) => {
            // this.myLoading2 = true;
            this.CollegeData = response.data;
          })
          .catch((error) => {
            console.error("Error fetching hep data", error);
          })

          .finally(() => {
            this.myLoading2 = false;
          });
      } catch (error) {}
    },
  },

  mounted() {
    let userCookies = this.cookies.get("userCookies");
    let accesstoken = this.cookies.get("userAccessToken");
    let userPosition = this.cookies.get("userPosition");
    let userCollege = this.cookies.get("userCollege");
    let userCampus = this.cookies.get("userCampus");
    this.user = userPosition;
    this.userCookies = userCookies;
    if (this.user == null && this.userCookies == null) {
      this.$router.push("/");
    }
    this.overlay = false;
    this.FetchPosition();
    this.FetchCampus();
    this.FetchOffice();
  },
};
