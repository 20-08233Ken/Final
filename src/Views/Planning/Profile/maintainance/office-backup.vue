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
          title: "Office ",
          value: "office",
        },
        {
          title: "Action",
          value: "action",
        },
      ],
      OfficeData: [
      
      ],

      forUpdate:[
      ],

      deleteOffice: [],
      };
  },

  components: {
    Form,
    Field,
    ErrorMessage,
  },

  
  methods: {

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
          })
          .catch((error) => {
            console.error("Error fetching office data", error);
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
          })
          .then((response) => {
            if (response.data.message == "Office Successfully Updated") {
              
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
            console.error("Error fetching Office", error);
          });
      } catch (error) {}
    },

    async submitDelete() {
      console.log("Deleters:", this.deleteOffice);
      try {
        let userCookies = this.cookies.get("userCookies");
          await axios.post(import.meta.env.VITE_API_REMOVE_OFFICE,{
            'id' : this.deleteOffice.office_id,
            'user_id' : userCookies['id'],
          })
          .then((response) => {
            console.log("wews");
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

    },

    // watch:{
    //     hepData(){
    //         if(this.hepData.length === 0){
    //           this.myLoading = true
    //         }else{
    //           this.myLoading = false
    //         }
    //     }
    // }

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
    }
};
</script>

<template>
  <v-data-table :headers="headers" :items="OfficeData">


    <template v-slot:item.action="{ item }">
      <!-- Edit -->
      <span class="w-full flex items-center justify-center gap-3" @click="openUpdate(item)">
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn icon="mdi-pencil" size="xs" elevation="0" v-bind="activatorProps">
              <v-icon color="light-blue-darken-2"></v-icon>
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card class="px-3 py-3">
              <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4">
                Edit Record
              </h3>

              <Form class="mt-4 px-3" @submit="submitUpdate">
                <p class="text-0.9 font-Subheader text-gray-500">Office</p>
                <Field type="text" name="Office" placeholder="Type here" class="input mt-2 input-bordered w-full" style="border: 1px solid #d2d2d2" v-model="forUpdate.office" />
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <span class="w-full flex justify-end mt-4">
                    <v-btn  text="Cancel" @click="isActive.value = false" ></v-btn>

                    <v-btn  class=" bg-teal-darken-3"  type="submit"   @click="isActive.value = false" >Submit</v-btn>
                  </span>
                </v-card-actions>
              </Form>
            </v-card>
          </template>
        </v-dialog>

        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              icon="mdi-delete"
              size="xs"
              elevation="0"
              v-bind="activatorProps"   @click="forDelete(item)"
            >
              <v-icon color="red-darken-3"></v-icon>
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card class="px-3 py-3">
              <h3
                class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4"
              >
                Delete Record
              </h3>

              <p class="py-3 px-3">Are you sure you want to delete this record?</p>

              <v-card-actions>
                  <v-spacer></v-spacer>
                  <span class="w-full flex justify-end mt-4">
                    <v-btn
                      text="Cancel"
                      @click="isActive.value = false"
                    ></v-btn>

                    <v-btn  class=" bg-teal-darken-3" >Delete</v-btn>
                  </span>
                </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </span>
    </template>
  </v-data-table>
</template>
