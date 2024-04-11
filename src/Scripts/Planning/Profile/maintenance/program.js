
import { Form, Field, ErrorMessage } from "vee-validate";
import axios from "axios";
import { useCookies } from "vue3-cookies";
import Swal from "sweetalert2";

export default {
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  data() {
    return {
      headers: [
        {
          title: "Campus",
          value: "campus",
          sortable: true,
        },
        {
          title: "College",
          value: "college",
          sortable: true,
        },
        {
          title: "Program",
          value: "program",
          sortable: true,
        },
        {
          title: "Action",
          value: "action",
        },
      ],

      CampusData: [],
      CollegeData: [],
      ProgramData: [],
      EditCollegeData: [],
      EditProgramData: [],
      forUpdate:[],
      program:null,
      myLoading: true,
      newProgram: [],
      selectedValue: null,
      deleteProgram : [],
      search: '',
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

    // Add Program
    async AddData(){
      try {
        
        let userCookies = this.cookies.get("userCookies");
          await axios.post(import.meta.env.VITE_API_CREATE_PROGRAM,{
            'program' : this.newProgram.program,
            'college_id' : this.newProgram.college_id,
            'user_id' : userCookies['id'],
          })
          .then((response) => {
            if (response.data.message == "Program Successfully Created") {
              
              Swal.fire({
                title: "Success",
                text: "Data Created successfully.",
                icon: "success",
                confirmButtonText: "OK",
              }).then(function() {
                  this.$router.go();
              });
            }
          })
          .catch((error) => {
            console.error("Error fetching Office", error);
          });
      } catch (error) {}
    },

    // Fetch Campus
    async FetchCampus() {
      try {
        let userCookies = this.cookies.get("userCookies");
        await axios.post(import.meta.env.VITE_API_GET_CAMPUS, {
            user_id: userCookies["id"],
          })
          .then((response) => {
            // this.myLoading2 = true;
            this.CampusData = response.data;
            this.myLoading = false
          })
          .catch((error) => {
            console.error("Error fetching data", error);
          })

          .finally(() => {
            this.myLoading2 = false;
          });
      } catch (error) {}
    },  

    // Fetch Program
    async FetchProgram() {
      try {
        let userCookies = this.cookies.get("userCookies");
        await axios.post(import.meta.env.VITE_API_PROGRAM_LIST, {
            user_id: userCookies["id"],
            position: userCookies["position"],
          })
          .then((response) => {
            // this.myLoading2 = true;
            this.ProgramData = response.data;
            this.myLoading = false
          })
          .catch((error) => {
            console.error("Error fetching data", error);
          })

          .finally(() => {
            this.myLoading2 = false;
          });
      } catch (error) {}
    },  

    // Fetch College
    async FetchCollege() {
      try {
        let userCookies = this.cookies.get("userCookies");
        await axios.post(import.meta.env.VITE_API_COLLEGE_LIST, {
            user_id: userCookies["id"],
            position: userCookies["position"],
          })
          .then((response) => {
            // this.myLoading2 = true;
            this.CollegeData = response.data;
            this.myLoading = false
          })
          .catch((error) => {
            console.error("Error fetching data", error);
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
            this.EditCollegeData = response.data;
          })
          .catch((error) => {
            console.error("Error fetching data", error);
          })

          .finally(() => {
            this.myLoading2 = false;
          });
      } catch (error) {}
    },

    // Get College
    async GetCollege(campus_id) {
      try {
        let userCookies = this.cookies.get("userCookies");
        await axios
          .post(import.meta.env.VITE_API_GET_COLLEGE, {
            // user_id: userCookies["id"],
            campus_id: campus_id,
          })
          .then((response) => {
            // this.myLoading2 = true;
            this.EditCollegeData = response.data;
          })
          .catch((error) => {
            console.error("Error fetching data", error);
          })

          .finally(() => {
            this.myLoading2 = false;
          });
      } catch (error) {}
    },
    
    openUpdate(item) {
      this.forUpdate = item;
      this.GetCollege(item.college_id);
    },

    forDelete(item) {
      this.deleteProgram = item;
    },

    async submitUpdate() {

      try {
        let userCookies = this.cookies.get("userCookies");
        await axios
          .post(import.meta.env.VITE_API_UPDATE_PROGRAM,{
            'id' : this.forUpdate.college_id,
            'college_id': this.forUpdate.college_id,
            'program': this.forUpdate.program,
            'user_id' : userCookies['id'],
          })
          .then((response) => {
            if (response.data.message == "Program Successfully Updated") {
              
              Swal.fire({
                title: "Success",
                text: "Data updated successfully.",
                icon: "success",
                confirmButtonText: "OK",
              }).then(function() {
                  this.$router.go();
              });
             
            }
          })
          .catch((error) => {
            console.error("Error fetching College", error);
          });
      } catch (error) {}
    },

    async submitDelete() {
      try {
        console.log(this.deleteProgram.program_id)
        let userCookies = this.cookies.get("userCookies");
          await axios.post(import.meta.env.VITE_API_REMOVE_PROGRAM,{
            'id' : this.deleteProgram.program_id,
            'user_id' : userCookies['id'],
          })
          .then((response) => {
            if (response.data.message == "Program Successfully Deleted") {
              
              Swal.fire({
                title: "Success",
                text: "Data Deleted successfully. Please reload the table",
                icon: "success",
                confirmButtonText: "OK",
              });
              this.$router.go();
            }
          })
          .catch((error) => {
            console.error("Error fetching Office", error);
          });
      } catch (error) {}
    },

    async addChangeCollege() {
      try {
        let userCookies = this.cookies.get("userCookies");
        await axios
          .post(import.meta.env.VITE_API_GET_COLLEGE, {
            user_id: userCookies["id"],
            campus_id: this.newProgram.campus_id,
          })
          .then((response) => {
            // this.myLoading2 = true;
            this.EditCollegeData = response.data;
          })
          .catch((error) => {
            console.error("Error fetching data", error);
          })

          .finally(() => {
            this.myLoading2 = false;
          });
      } catch (error) {}
    },
  
  },

  mounted() {
    let userCookies = this.cookies.get("userCookies");
    let accesstoken =  localStorage.getItem('token');
    let userPosition = this.cookies.get("userPosition");
    this.user = userPosition;
    this.userCookies = userCookies;

    if (this.user == null && this.userCookies == null) {
      this.$router.push("/");
    }
  
    this.FetchCampus();
    this.FetchCollege();
    this.FetchProgram();
  }
};
