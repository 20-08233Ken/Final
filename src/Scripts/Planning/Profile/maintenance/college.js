
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
          title: "Campus ",
          value: "campus",
          sortable: true,
        },
        {
          title: "College ",
          value: "college",
          sortable: true,
        },
        {
          title: "College Code",
          value: "collegecode",
          sortable: true,
        },
        {
          title: "Action",
          value: "action",
        },
      ],

      CollegeData: [],
      EditCollegeData: [],
      CampusData: [],
      forUpdate:[],
      deleteCollege: [],
      newCollege: [],
      college:null,
      myLoading: true,
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

    // Add College
    async AddData(){
      try {
        
        let userCookies = this.cookies.get("userCookies");
          await axios.post(import.meta.env.VITE_API_CREATE_COLLEGE,{
            'college' : this.newCollege.college,
            'collegecode' : this.newCollege.collegecode,
            'campus_id' : this.newCollege.campus_id,
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

    openUpdate(item) {
      this.forUpdate = item;
    },

    forDelete(item) {
      this.deleteCollege = item;
    },

    async submitUpdate() {

      try {
        let userCookies = this.cookies.get("userCookies");
        await axios
          .post(import.meta.env.VITE_API_UPDATE_COLLEGE,{
            'id' : this.forUpdate.college_id,
            'campus_id': this.forUpdate.campus_id,
            'college': this.forUpdate.college,
            'collegecode': this.forUpdate.collegecode,
            'user_id' : userCookies['id'],
          })
          .then((response) => {
            if (response.data.message == "College Successfully Updated") {
              
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
        let userCookies = this.cookies.get("userCookies");
          await axios.post(import.meta.env.VITE_API_REMOVE_COLLEGE,{
            'id' : this.deleteCollege.college_id,
            'user_id' : userCookies['id'],
          })
          .then((response) => {
            console.log("wews");
            if (response.data.message == "College Successfully Deleted") {
              
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
            console.error("Error fetching College", error);
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
    this.FetchCollege();
    this.FetchCampus();
  }
};
