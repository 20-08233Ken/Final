
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
          title: "Office ",
          value: "office",
          sortable: true ,
        },
        {
          title: "Action",
          value: "action",
        },
      ],

      CampusData: [],
      OfficeData: [],

      forUpdate:[],

      deleteOffice: [],
      
      newOffice:[], 
      myLoading:true
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
    // Fetch Office
    async FetchOffice() {
      try {
        let userCookies = this.cookies.get("userCookies");
        await axios.post(import.meta.env.VITE_API_OFFICE_LIST, {
            user_id: userCookies["id"],
          })
          .then((response) => {
            // this.myLoading2 = true;
            this.OfficeData = response.data;
            this.myLoading = false
          })
          .catch((error) => {
            console.error("Error fetching office data", error);
          })

          .finally(() => {
      
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
      console.log(this.forUpdate);
    },

    forDelete(item) {
      this.deleteOffice = item;
    },

    async submitUpdate() {
      
      try {
        let userCookies = this.cookies.get("userCookies");
        await axios
          .post(import.meta.env.VITE_API_UPDATE_OFFICE,{
            'id' : this.forUpdate.office_id,
            'office': this.forUpdate.office,
            'user_id' : userCookies['id'],
            'campus_id': this.forUpdate.campus_id,
          })
          .then((response) => {
            if (response.data.message == "Office Successfully Updated") {
              
              Swal.fire({
                title: "Success",
                text: "Data updated successfully. Please reload the table",
                icon: "success",
                confirmButtonText: "OK",
              });
              // this.$router.go();
            }
          })
          .catch((error) => {
            console.error("Error fetching Office", error);
          });
      } catch (error) {}
    },

    async submitDelete() {
      try {
        let userCookies = this.cookies.get("userCookies");
          await axios.post(import.meta.env.VITE_API_REMOVE_OFFICE,{
            'id' : this.deleteOffice.office_id,
            'user_id' : userCookies['id'],
          })
          .then((response) => {
            if (response.data.message == "Office Successfully Deleted") {
              
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

    async AddData(){
      try {
        
        let userCookies = this.cookies.get("userCookies");
          await axios.post(import.meta.env.VITE_API_CREATE_OFFICE,{
            'office' : this.newOffice.office,
            'campus_id' : this.newOffice.campus_id,
            'user_id' : userCookies['id'],
          })
          .then((response) => {
            if (response.data.message == "Office Successfully Created") {
              
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
    this.FetchOffice();
    this.FetchCampus();
  }
};
