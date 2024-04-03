<script>
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
</script>

<template>


  <div class="w-full">
    <v-dialog max-width="500">
      <template v-slot:activator="{ props: activatorProps }">
        <span class="w-full flex justify-end">
          <v-text-field v-model="search" label="Search"></v-text-field>
          <v-btn elevation="0" class="mt-2" v-bind="activatorProps">
            <v-icon class="mr-2" color="teal-darken-3">mdi-account-plus</v-icon>
            <p class="text-0.7 text-teal-700 font-Header">Add</p>
          </v-btn>
        </span>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card class="px-3 py-3">
          <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4">
            Add Record
          </h3>
          <Form class="mt-4 px-3" @submit="AddData">
            
            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Campus</p>

            <Field as="select" name="campus_id" class="w-full select select-bordered mt-2" style="border: 1px solid #d2d2d2" :rules="validateInput" v-model="newProgram.campus_id" @change="addChangeCollege"> 
              <option disabled selected>Select Campus ...</option>
              <option v-for="items in CampusData" :value="items.campus_id">
                {{ items.campus }}
              </option>
            </Field>
            <ErrorMessage name="campus" class="error_message" />
            

            <p class="text-0.9 font-Subheader text-gray-500 mt-4">College</p>
            <Field as="select" name="college_id" class="w-full select select-bordered mt-2":rules="validateInput" v-model="newProgram.college_id" style="border: 1px solid #d2d2d2">
              <option disabled selected>Select College ...</option>
              <option v-for="items in EditCollegeData" :value="items.id">
                {{ items.college }}
              </option>
            </Field>

            <p class="text-0.9 font-Subheader text-gray-500">Program</p>
            <Field type="text" name="program" placeholder="Type here" class="input mt-2 input-bordered w-full" style="border: 1px solid #d2d2d2" v-model="newProgram.program"/>


            <v-card-actions>
            <v-spacer></v-spacer>
              <span class="w-full flex justify-end mt-4">
                <v-btn text="Cancel" @click="isActive.value = false"></v-btn>
                <v-btn class=" bg-teal-darken-3" type="submit" @click="isActive.value = false">Add</v-btn>
              </span>
            </v-card-actions>
          </Form>
        </v-card>
      </template>
    </v-dialog>
  </div>

  <v-data-table :headers="headers" :items="ProgramData" loading-text="Loading... Please wait" :loading="myLoading">
    <template v-slot:item.action="{ item }">
      <span class="w-full flex items-center justify-center gap-3">
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn icon="mdi-pencil" size="xs" elevation="0" v-bind="activatorProps" @click="openUpdate(item)">
              <v-icon color="light-blue-darken-2"></v-icon>
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card class="px-3 py-3">
              <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4">
                Edit Record
              </h3>

              <Form class="mt-4 px-3"   @submit="submitUpdate">

                <Field as="select" name="campus_id" class="w-full select select-bordered mt-2" style="border: 1px solid #d2d2d2" :rules="validateInput" v-model="forUpdate.campus_id" @change="changeCollege(item.campus_id)"> 
                  <option disabled selected>Select Campus ...</option>
                  <option v-for="items in CampusData" :value="items.id">
                    {{ items.campus }}
                  </option>
                </Field>
                <ErrorMessage name="campus" class="error_message" />
                

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">College</p>
                <Field as="select" name="college_id" class="w-full select select-bordered mt-2":rules="validateInput" v-model="forUpdate.college_id" style="border: 1px solid #d2d2d2">
                  <option disabled selected>Select College ...</option>
                  <option v-for="items in EditCollegeData" :value="items.id">
                    {{ items.college }}
                  </option>
                </Field>

                <p class="text-0.9 font-Subheader text-gray-500">Program</p>
                <Field type="text" name="program" placeholder="Type here" class="input mt-2 input-bordered w-full" style="border: 1px solid #d2d2d2" v-model="forUpdate.program"/>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <span class="w-full flex justify-end mt-4"> 
                    <v-btn text="Cancel" @click="isActive.value = false"></v-btn>
                    <v-btn class=" bg-teal-darken-3" type="submit" @click="isActive.value = false" >Submit</v-btn>
                  </span>
                </v-card-actions>
              </Form>
            </v-card>
          </template>
        </v-dialog>
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn icon="mdi-delete" size="xs" elevation="0" v-bind="activatorProps" @click="forDelete(item)">
              <v-icon color="red-darken-3"></v-icon>
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card class="px-3 py-3">
              <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4">
                Delete Record
              </h3>
              <Form class="mt-4 px-3" @submit="submitDelete">
                <p class="py-3 px-3">Are you sure you want to delete this record?</p>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <span class="w-full flex justify-end mt-4">
                    <v-btn text="Cancel" @click="isActive.value = false"></v-btn>
                    <v-btn class=" bg-teal-darken-3" type="submit" @click="isActive.value = false">Delete</v-btn>
                  </span>
                </v-card-actions>
              </Form>
            </v-card>
          </template>
        </v-dialog>
      </span>
    </template>
  </v-data-table>
</template>

<style scoped>
.error_message {
  color: red;
  font-size: 0.9rem;
}
</style>
