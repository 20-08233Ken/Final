

import addUser from "../../../Views/Planning/Profile/addUser.vue";
import manageUser from "../../../Views/Planning/Profile/manage.vue";
import confirmDelete from "../../../Views/Planning/Profile/confirmDelete.vue";
import { Form, ErrorMessage, Field } from "vee-validate";
import Swal from "sweetalert2";

import axios from "axios";
import { useCookies } from "vue3-cookies";

export default {
  setup() {
    const { cookies } = useCookies();
    return {
      cookies,
    };
  },
  components: {
    addUser,
    confirmDelete,
    Form,
    ErrorMessage,
    Field,
    manageUser,
  },
  data() {
    return {
      // Table Header
      headers: [
        {
          title: "Company ID",
          // key:'ikaw na bahala sir dito'
          key: "company_id",
        },
        {
          title: "Company Email",
          key: "email",
          // key:'ikaw na bahala sir dito'
        },
        {
          title: "Name",
          key: "fullname",
          // key:'ikaw na bahala sir dito'
        },
        {
          title: "Designation",
          children: [
            {
              title: "Campus",
              key: "campus",
              // key:'ikaw na bahala sir dito'
            },
            {
              title: "Office",
              key: "office",
              // key:'ikaw na bahala sir dito'
            },
            {
              title: "Position",
              key: "position",
              // key:'ikaw na bahala sir dito'
            },
            {
              title: "College",
              key: "college",
              // key:'ikaw na bahala sir dito'
            },
            {
              title: "Action",
              key: "action",
            },
          ],
        },
      ],

      // This is for table data
      allUserData: [],

      // This is for updateData
      updatedData: [],

      // This is for sample data program
      ProgramData: [],

      // This is for sample data office
      OfficeData: [],

      // This is for sample data campus
      CampusData: [],

      // This is for sample data college
      CollegeData: [],

      // This is for sample data position
      PositionData: [],

      enableCollege: false,
      userComponent: 1,
    };
  },

  methods: {
    showChange(id) {
        this.selectedUser = id;
      },

    validateData(value) {
      if (!value) {
        return "This field is required";
      }

      return true;
    },


    changeComponent(id) {
      this.userComponent = id;
    },

      openUser(item) {
        this.updatedData = item;
        this.FetchCollege(item.campus_id);
      },
      // FETCHING DEANS DATA
      async FetchData() {
        try {
          let userCookies = this.cookies.get("userCookies");
          await axios
            .post(
              import.meta.env.VITE_API_USER_LIST, {
                user_id: userCookies['id']
              })
            .then((response) => {
              // this.myLoading2 = true;
              this.allUserData = response.data;
            })
            .catch((error) => {
              console.error("Error fetching hep data", error);
            })

            .finally(() => {
              this.myLoading2 = false
            });
        } catch (error) {}
      },

      // Fetch Position
      async FetchPosition() {
        try {
          let userCookies = this.cookies.get("userCookies");
          const response = await axios
            .post(
              import.meta.env.VITE_API_POSITION_LIST, {
                user_id: userCookies['id']
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
              this.myLoading2 = false
            });
        } catch (error) {}
      },

      // Fetch Campus
      async FetchCampus() {
        try {
          let userCookies = this.cookies.get("userCookies");
          const response = await axios
            .post(
              import.meta.env.VITE_API_GET_CAMPUS, {
                user_id: userCookies['id'],
                position_id: userCookies['position_id']
              })
            .then((response) => {
              // this.myLoading2 = true;
              this.CampusData = response.data;
            })
            .catch((error) => {
              console.error("Error fetching hep data", error);
            })

            .finally(() => {
              this.myLoading2 = false
            });
        } catch (error) {}
      },

      async FetchOffice() {
        try {
          let userCookies = this.cookies.get("userCookies");
          const response = await axios
            .post(
              import.meta.env.VITE_API_OFFICE_LIST, {
                user_id: userCookies['id']
              })
            .then((response) => {
              // this.myLoading2 = true;
              this.OfficeData = response.data;
            })
            .catch((error) => {
              console.error("Error fetching hep data", error);
            })

            .finally(() => {
              this.myLoading2 = false
            });
        } catch (error) {}
      },

      // Fetch FetchCollege
      async FetchCollege(campus_id) {
        try {
          let userCookies = this.cookies.get("userCookies");
          const response = await axios
            .post(
              import.meta.env.VITE_API_GET_COLLEGE, {
                user_id: userCookies['id'],
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
              this.myLoading2 = false
            });
        } catch (error) {}
      },

      // Change College
      async changeCollege(campus_id) {
        try {
          let userCookies = this.cookies.get("userCookies");
          const response = await axios
            .post(
              import.meta.env.VITE_API_GET_COLLEGE, {
                user_id: userCookies['id'],
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
              this.myLoading2 = false
            });
        } catch (error) {}
      },

      async submitUpdate(id) {
        let userCookies = this.cookies.get("userCookies");
        // Form Data
        let college = "";
        if (this.updatedData.college_id != ""){
            college =  this.updatedData.college_id;
        }
        try {
          const response = await axios
            .post(
              import.meta.env.VITE_API_UPDATE_USER , {
                "email" : this.updatedData.email,
                "lastname" : this.updatedData.lastname,
                "middlename" : this.updatedData.middlename,
                "firstname" : this.updatedData.firstname,
                "username" : this.updatedData.username,
                "campus_id" : this.updatedData.campus_id,
                "company_id" : this.updatedData.company_id,
                "position_id" : this.updatedData.position_id,
                "password" : this.updatedData.password,
                "college_id" : college,
                "office" : this.updatedData.office_id,
                "user_id" : userCookies["id"],
                "id" : id,
              })
            .then((response) => {
              // this.collegeProgram = response.data;
              if (response.data == "User Account Successfully updated!") {

                Swal.fire({
                  title: 'Success ',
                  text: "User Account Successfully updated!",
                  icon: 'success',
                  confirmButtonText: 'OK'
                }).then(function(){
                 
                });
               
              }
            })
            .catch((error) => {
              console.error("Error fetching campus", error);
            });
        } catch (error) {}

      },
  },

  mounted() {
      // call here
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
      this.FetchData();
      this.FetchPosition();
      this.FetchCampus();
      this.FetchOffice();
    },
};
