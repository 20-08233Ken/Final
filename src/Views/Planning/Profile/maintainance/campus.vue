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
</script>

<template>
  <div class="w-full">
    <v-dialog max-width="500">
      <template v-slot:activator="{ props: activatorProps }">
        <span class="w-full flex justify-end">
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

            <p class="text-0.9 font-Subheader text-gray-500">Campus</p>
            <Field type="text" name="campus" placeholder="Type here" class="input mt-2 input-bordered w-full"
              style="border: 1px solid #d2d2d2" v-model="newCampus.campus" />

            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Location</p>
            <Field type="text" name="campus_name" placeholder="Type here" class="input mt-2 input-bordered w-full"
              style="border: 1px solid #d2d2d2" v-model="newCampus.campus_name" />

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

  <v-data-table :headers="headers" :items="CampusData"  loading-text="Loading... Please wait" :loading="myLoading">
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

              <Form class="mt-4 px-3" @submit="submitUpdate">

                <p class="text-0.9 font-Subheader text-gray-500">Location</p>
                <Field type="text" name="campus_name" placeholder="Type here" class="input mt-2 input-bordered w-full"
                  style="border: 1px solid #d2d2d2" v-model="forUpdate.campus_name" />


                <p class="text-0.9 font-Subheader text-gray-500">Campus</p>
                <Field type="text" name="campus" placeholder="Type here" class="input mt-2 input-bordered w-full"
                  style="border: 1px solid #d2d2d2" v-model="forUpdate.campus" />

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <span class="w-full flex justify-end mt-4">
                    <v-btn text="Cancel" @click="isActive.value = false"></v-btn>
                    <v-btn class="bg-teal-darken-3" type="submit" @click="isActive.value = false">
                      Submit
                    </v-btn>
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
                <p class="py-3 px-3">
                  Are you sure you want to delete this record?
                </p>

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
