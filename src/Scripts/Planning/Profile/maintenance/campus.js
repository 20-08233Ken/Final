
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
          title: "Location",
          value: "campus_name",
          sortable: true,
        },
        {
          title: "Campus",
          value: "campus",
          sortable: true,
        },
        {
          title: "Action",
          value: "action",
        },
      ],

      CampusData: [],

      forUpdate: [],

      campus: null,
      myLoading: true,

      newCampus: [],
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
    
    openUpdate(item) {
      this.forUpdate = item;
    },

    forDelete(item) {
      this.deleteCampus = item;
    },
    
    async submitUpdate() {
    
      try {
        let userCookies = this.cookies.get("userCookies");
        await axios
          .post(import.meta.env.VITE_API_UPDATE_CAMPUS,{
            'id' : this.forUpdate.campus_id,
            'campus_name' : this.forUpdate.campus_name,
            'campus': this.forUpdate.campus,
            'user_id' : userCookies['id'],
          })
          .then((response) => {
            if (response.data.message == "Campus Successfully Updated") {
              
              Swal.fire({
                title: "Success",
                text: "Data updated successfully. Please reload the table",
                icon: "success",
                confirmButtonText: "OK",
              });
              this.$router.go();
            }
          })
          .catch((error) => {
            console.error("Error fetching campus", error);
          });
      } catch (error) {}
    },

    async submitDelete() {
      try {
        let userCookies = this.cookies.get("userCookies");
          await axios.post(import.meta.env.VITE_API_REMOVE_CAMPUS,{
            'id' : this.deleteCampus.campus_id,
            'user_id' : userCookies['id'],
          })
          .then((response) => {
            if (response.data.message == "Campus Successfully Deleted") {
              
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
            console.error("Error fetching campus", error);
          });
      } catch (error) {}
    },

    async AddData(){
      try {
        let userCookies = this.cookies.get("userCookies");
          await axios.post(import.meta.env.VITE_API_CREATE_CAMPUS,{
            'campus' : this.newCampus.campus,
            'campus_name' : this.newCampus.campus_name,
            'user_id' : userCookies['id'],
          })
          .then((response) => {
            if (response.data.message == "Campus Successfully Created") {
              
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
            console.error("Error fetching Campus", error);
          });
      } catch (error) {}
    }

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
  }
};
