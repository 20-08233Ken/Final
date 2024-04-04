<script>
import Swal from "sweetalert2";
import axios from "axios";
import { useCookies } from "vue3-cookies";

import { Form, Field, ErrorMessage } from "vee-validate";

export default {

  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },

  components: {
    Form,
    Field,
    ErrorMessage,


  },

  data() {
    return {
      currentComponent: null,
      currentBtn: 1,
      in_program: "",
      in_examDate: "",
      in_takers: 0,
      in_passers: 0,
      count: true,
      id: 1,
      isActive: 1,
      isIcon: false,
      isAdd: false,

      receivedProgam: null,
      search: "",
      myLoading: true,

      headers: [
        {
          title: "",
          value: "check_box",
        },
        {
          title: "HEP Code",
          key: "hep_code",
        },
        {
          title: "Campus",
          value: "campus",
        },
        {
          title: "Department",
          value: "college",
          width: "500",
        },
        {
          title: "Undergraduate Program",
          value: "program",
          width: "200px",
        },
        {
          title: "Exam date",
          value: "exam_date",
          width: "200px",
        },
        {
          title: "1st Time takers",
          value: "number_of_takers",
          width: "200px",
        },
        {
          title: "1st Time Passers",
          value: "number_of_passers",
        },
        {
          title: "Supporting Documents",
          value: "supported_file",
        },
        {
          title: "Validation Status",
          value: "status",
        },
        {
          title: "Actions",
          value: "actions",
        },
      ],

      // Data base from the Account Info of Dean
      data: [
        {
          in_campus: "",
          in_department: "",
        },
      ],
      hepData: [],
      updateData: [
        {
          hep_code: null,
          campus: null,
          college: null,
          program: null,
          exam_date: null,
          number_of_passers: null,
          number_of_takers: null,
        },
      ],

      // Options of Select Program Input
      // Based from API callback
      collegeProgram: [],
      college: [],
      campus: [],
      selectedFile: null,
      selectedFileName: null,
      isDataActive: 1,
      // For View Button
      approvedLogs: [],
      editData: [],
      viewHistory: [],
      selectedID: "",
      forUpdate: [],
      editselectedFile: null,
      userposition:null,
      userCampus:null,
      userID:null,
    };
  },

  methods: {
    validateInput(value) {
      if (!value) {
        return "This field is required";
      }

      return true;
    },

    showComponent(myComponent, myBtn1) {
      this.currentComponent = myComponent;
      this.currentBtn = myBtn1;
    },

    changeData(isActive) {
      this.isDataActive = isActive;
    },

    checkNegative(value) {
      if (value < 0) {
        return "Negative numbers is not allowed";
      } else if (value > -1) {
        return true;
      } else if (!value) {
        return "This field is required";
      }
    },

    // fetch data
    async FetchData(position, campus, user_id) {
      try {
        const response = await axios
          .post(import.meta.env.VITE_API_VCAA_HEPLIST, {
            position: position,
            campus_id: campus,
            user_id: user_id,


          })
          .then((response) => {
            this.myLoading = true;
            this.hepData = response.data;
            // if (response.data == "Successfully HEP added!"){
            //     this.isDataActive = false;
            // }
          })
          .catch((error) => {
            console.error("Error fetching hep data", error);
          })

          .finally(() => {
            this.myLoading = false;
          });
      } catch (error) { }
    },

    async deleteData(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      const response = await axios
        .post(import.meta.env.VITE_API_DELETE_HEP, {
          id: id,
          user_id: userCookies["id"],
        })
        .then((response) => {
          Swal.fire({
            title: "Success",
            text: "Data Deleted successfully. Please reload the table",
            icon: "success",
            confirmButtonText: "OK",
          });
          this.changeData(1)
        })
        .catch((error) => {
          console.error("Error history not found", error);
        });
    },

    async addData() {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      let userCookies = this.cookies.get("userCookies");
      // Form Data
      const formData = new FormData();
      formData.append("supported_file", this.selectedFile);
      formData.append("program_id", this.in_program);
      formData.append("exam_date", this.exam_date);
      formData.append("number_of_takers", this.in_takers);
      formData.append("number_of_passers", this.in_passers);
      formData.append("campus_id", userCookies["campus_id"]);
      formData.append("college_id", userCookies["college_id"]);
      formData.append("user_id", userCookies["id"]);

      try {
        const response = await axios
          .post(import.meta.env.VITE_API_CREATE_HEP, formData, {
            headers,
          })
          .then((response) => {
            // this.collegeProgram = response.data;
            
          
            if (response.data == "Successfully HEP added!") {

        
              this.isDataActive = 1
              Swal.fire({
                title: "Success",
                text: "Data added successfully. Please reload the table",
                icon: "success",
                confirmButtonText: "OK",
              });
          
       
              // this.FetchData(userCookies["userPosition"],userCookies['campus_id'],userCookies['id']);
            }
          })
          .catch((error) => {
            console.error("Error fetching campus", error);
          })
          
          .finally(() =>{
          
          })
          ;
      } catch (error) {}

  
      (this.in_program = ""),
        (this.in_examDate = ""),
        (this.in_takers = 0),
        (this.in_passers = 0),
        (this.selectedFile = null);

      // }, 2000)
    },

    openUpdate(item) {
      this.forUpdate = item;
    },

    async submitUpdate() {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      let userCookies = this.cookies.get("userCookies");
      // Form Data
      const formEditData = new FormData();
      formEditData.append("supported_file", this.editselectedFile);
      formEditData.append("program_id", this.forUpdate.program_id);
      formEditData.append("exam_date", this.forUpdate.exam_date);
      formEditData.append("number_of_takers", this.forUpdate.number_of_takers);
      formEditData.append(
        "number_of_passers",
        this.forUpdate.number_of_passers
      );
      formEditData.append("campus_id", userCookies["campus_id"]);
      formEditData.append("college_id", userCookies["college_id"]);
      formEditData.append("user_id", userCookies["id"]);
      formEditData.append("id", this.forUpdate.id);

      try {
        const response = await axios
          .post(import.meta.env.VITE_API_UPDATE_HEP, formEditData, {
            headers,
          })
          .then((response) => {
            // this.collegeProgram = response.data;

            if (response.data == "Successfully HEP updated!") {
              
              Swal.fire({
                title: "Success",
                text: "Data added successfully. Please reload the table",
                icon: "success",
                confirmButtonText: "OK",
              });
              this.changeData(1)
              // this.FetchData(userCookies["userPosition"],userCookies['campus_id'],userCookies['id']);
            }
          })
          .catch((error) => {
            console.error("Error fetching campus", error);
          });
      } catch (error) {}
    },

    async fetchProgram_Data(college_id) {
      try {
        const response = await axios
          .post(import.meta.env.VITE_API_GET_PROGRAM, {
            college_id: college_id,
          })
          .then((response) => {
            this.collegeProgram = response.data;
          })
          .catch((error) => {
            console.error("Error fetching campus", error);
          });
        this.collegeProgram = response.data;
      } catch (error) {
        // add actions here
      }
    },

    async fetchCollege_Data(campus_id) {
      try {
        const response = await axios
          .post(import.meta.env.VITE_API_GET_COLLEGE, {
            campus_id: campus_id,
          })
          .then((response) => {
            this.college = response.data;
          })
          .catch((error) => {
            console.error("Error fetching program", error);
          });
      } catch (error) {
        // add actions here
      }
    },

    // Upload PDF File
    handleFileUpload(event) {
      const filename = event.target.files[0].name;
      const fileExtension = filename.split(".").pop().toLowerCase();

      if (fileExtension != "pdf") {
        Swal.fire({
          title: "Error ",
          text: "Invalid File Type",
          icon: "error",
          confirmButtonText: "OK",
        });

        event.target.value = "";
      } else {
        this.selectedFile = event.target.files[0];

      }
    },

    // View File
    async viewFile(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      await axios
        .post(import.meta.env.VITE_API_FETCH_PDF, {
          id: id,
          user_id: userCookies["id"],
          responseType: "arraybuffer", // Set the response type to arraybuffer
        })
        .then((response) => {
          // Create a Blob object from the response data
          const blob = new Blob([response.data], { type: "application/pdf" });

          // Create a URL for the Blob object
          const url = URL.createObjectURL(blob);

          // Open the URL in a new tab
          window.open(url, "_blank");
        })
        .catch((error) => {
          console.error("Error fetching PDF:", error);
        });
    },

    removeFiles() {
      this.selectedFile = null;
    },
    // showFile() {
    //   this.isDataActive = false;
    // },
    changeData(isActive) {
      this.isDataActive = isActive;
    },

    async ViewHistory(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      const response = await axios
        .post(import.meta.env.VITE_API_HEP_HISTORY, {
          id: id,
          user_id: userCookies["id"],
        })
        .then((response) => {
          this.approvedLogs = response.data;
        })
        .catch((error) => {
          console.error("Error history not found", error);
        });
    },

    EdithandleFileUpload(event) {
      this.EditselectedFile = event.target.files[0];
    },

    async DownloadFile(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      const response = await axios
        .post(import.meta.env.VITE_API_FETCH_PDF, {
          id: id,
          user_id: userCookies["id"],
          responseType: "blob",
        })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          // window.open(url, '_blank');
        })
        // .then(response => response.blob())
        // .then(blob => {
        //     const url = window.URL.createObjectURL(new Blob([response.data]));
        //     window.open(url, '_blank');
        //     // If you want to embed the PDF in your page, you can use an <iframe> instead:
        //     // document.getElementById('pdfViewer').src = url;
        // })
        .catch((error) => {
          console.error("Error fetching PDF:", error);
        });
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
    this.data[0].in_campus = userCampus;
    this.data[0].in_department = userCollege;

    

    if (this.user == null && this.userCookies == null) {
      this.$router.push("/");
    }
    this.userposition= userCookies["position"]
    this.userCampus= userCookies["campus_id"]
    this.userID= userCookies["id"]

    this.fetchProgram_Data(userCookies["college_id"]);
    this.FetchData(userCookies["position"], userCookies["campus_id"],userCookies["id"]);
  },
};
</script>

<template>
    <span class="w-full flex shadow-card2 py-5 px-8 gap-4 bg-gray-700 mt-8">
        <span class="flex flex-col justify-center w-9/12">
            <h1 class="w-full font-Header text-white">
                Percentage of first-time licensure exam takers that pass the
                licensure exams
            </h1>

            <p class="w-full text-sm text-gray-400">
                Higher Education Program: Outcome Indicator 1
            </p>
            <p class="w-full text-sm text-gray-400">College of Engineering</p>
        </span>

        <span class="flex w-3/12 items-center justify-end gap-3">
            <!-- <notification /> -->
            <button class="btn btn-sm w-4/12 font-Subheader text-xs" @click="changeData(1)"
                :class="{ isBtnActive: isDataActive === 2 }">
                <v-icon>mdi-table</v-icon>Table
            </button>
            <button class="btn btn-sm w-4/12 font-Subheader text-xs" @click="changeData(2)" 
            v-if="(this.userCampus < 6 && this.userCampus >=1)"
                :class="{ isBtnActive: isDataActive === 1 }" >
                <v-icon>mdi-form-select</v-icon> Form
            </button>
        </span>
    </span>

    <!-- Table -->
    <span class="w-full flex flex-col" v-if="isDataActive === 1">
        <v-data-table :headers="headers" :items="hepData" class="elevation-1 " items-per-page="10"
            loading-text="Loading... Please wait" :loading="myLoading" :search="search"
            style="width: 100%; overflow-x: scroll">

            <!-- PDF -->
            <template v-slot:item.supported_file="{ item }">
                <span class="flex w-full  gap-2 py-4">
                    <v-btn size="x-small" class="bg-light-blue-darken-3" @click="viewFile(item.hep_one_id)">View
                        PDF</v-btn>
                </span>
            </template>

           <!-- Actions -->
            <template v-slot:item.actions="{ item }">
                <span class="flex w-full flex-col  gap-2 py-4">

                    <!-- Edit -->
                    <v-dialog max-width="700">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn size="x-small" block v-bind="activatorProps" color="surface-variant" text="Edit"
                                variant="flat" :disabled='item.status != `Returned to Dean`'
                                @click="openUpdate(item)"></v-btn>


                        </template>

                        <template v-slot:default="{ isActive }">
                            <v-card class="px-8 py-8">
                                <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4 ">
                                    Edit Record</h3>
                                <p>{{ item.tb_id }}</p>

                                <Form class="mt-4" @submit="submitUpdate">

                                    <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                                    <Field type="text" name="campus" placeholder="Type here" disabled
                                        class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                                        v-model="data[0].in_campus" :rules="validateInput" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
                                    <Field type="text" placeholder="Type here" name="department" disabled
                                        class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                                        v-model="data[0].in_department" :rules="validateInput" />


                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Program</p>
                                    <Field as="select" class="select select-bordered w-full mt-2"
                                        style="border:  1px solid #d2d2d2;" name="program" :rules="validateInput"
                                        v-model="forUpdate.program_id">
                                        <option disabled selected>Select Program ...</option>
                                        <option v-for="x in collegeProgram" :value="x.id">{{ x.program }}
                                        </option>
                                    </Field>
                                    <ErrorMessage name="program" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Exam Date</p>
                                    <Field type="date" placeholder="Type here" class="input mt-2 input-bordered w-full"
                                        name="exam_date" style="border:  1px solid #d2d2d2;"
                                        v-model="forUpdate.exam_date" :rules="validateInput" />
                                    <ErrorMessage name="exam_date" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Number of First-time
                                        Takers</p>
                                    <Field type="number" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full" defa
                                        style="border:  1px solid #d2d2d2;" v-model="forUpdate.number_of_takers"
                                        name="no_takers" :rules="checkNegative" />
                                    <ErrorMessage name="no_takers" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Number of First-time
                                        Passers</p>
                                    <Field type="number" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full" style="border:  1px solid #d2d2d2;"
                                        v-model="forUpdate.number_of_passers" name="no_passers"
                                        :rules="checkNegative" />
                                    <ErrorMessage name="no_passers" class="error_message" />



                                    <span class="flex items-center mt-6 gap-2">
                                        <p class="text-0.9 font-Subheader text-gray-500 ">Upload Supported File
                                        </p>
                                        <i class="tooltip" tooltip-right
                                            data-tip=" Provide the supporting documentation used in reference to the information. You may also provide links to the scanned copies for easier reference">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                            </svg>
                                        </i>
                                    </span>


                                    <table class="w-full mt-4">
                                        <thead>
                                            <tr>
                                                <th class="border-2 bg-gray-700 text-white font-Subheader"></th>
                                                <th
                                                    class="border-2 text-center text-0.9 text-Subheader bg-gray-700 text-white font-Subheader">
                                                    Required Files</th>
                                                <th
                                                    class="border-2 text-center text-0.9 text-Subheader bg-gray-700 text-white font-Subheader">
                                                    Upload Files</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td class="w-2/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                    1
                                                </td>
                                                <td class="w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                    PRC Official Results</td>
                                                <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                    <input type="file" class="ml-5" accept=".pdf"
                                                        @change="EdithandleFileUpload">
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>


                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <span class="w-full flex items-center justify-end gap-4 mt-5">


                                            <v-btn text="Close" @click="isActive.value = false"></v-btn>
                                            <button class="btn btn-accent  w-2/12 text-white border-0" type="submit"
                                                @click="isActive.value = false">Update</button>
                                        </span>
                                    </v-card-actions>


                                </Form>


                            </v-card>
                        </template>
                    </v-dialog>

                    <!-- Delete -->
                    <v-dialog max-width="700">

                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn block size="x-small" v-bind="activatorProps" color="surface-variant" text="Delete"
                                variant="flat" :disabled='item.status != ` `'></v-btn>

                        </template>

                        <template v-slot:default="{ isActive }">

                            <v-card class="px-4">
                                <form>
                                    <v-card-title class=" bg-Red-Darken flex text-white font-Subheader mt-4 ">

                                        Confirm Delete
                                    </v-card-title>
                                    <v-card-text class="mt-4">
                                        Do you want to delete this record?
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn text="Cancel" @click="isActive.value = false"></v-btn>

                                        <v-btn class="bg-red-darken-4"
                                            @click="deleteData(item.hep_one_id, isActive.value = false)">
                                            Confirm</v-btn>
                                    </v-card-actions>
                                </form>
                            </v-card>
                        </template>
                    </v-dialog>

                    <!-- View -->
                    <v-dialog max-width="700">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn block size="x-small" v-bind="activatorProps" color="surface-variant" text="View"
                                variant="flat" @click="ViewHistory(item.hep_one_id)"></v-btn>
                        </template>

                        <template v-slot:default="{ isActive }" class="w-full">
                            <v-card>
                                <div class="w-full px-4 py-4">
                                    <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4">
                                        Approval History</h3>

                                    <table class="view-table mt-4 w-full border-0" id="notifTable">

                                        <tr v-for="(items, index) in approvedLogs">

                                            <td class="w-1/12">
                                                <v-icon
                                                    :class="{ 'isApproved': items.status === 'Approved', 'isReject': items.status === 'Returned' }">mdi-history</v-icon>
                                            </td>
                                            <td>
                                                <h1
                                                    :class="{ 'isApproved': items.status === 'Approved', 'isReject': items.status === 'Returned' }">
                                                    {{ items.status }} by {{ items.role }}</h1>
                                            </td>
                                            <td>
                                                <p>{{ items.reasons }}<br><i>{{ items.remarks }}</i> </p>

                                            </td>
                                            <td>
                                                <p>{{ items.created_at }}</p>

                                            </td>

                                        </tr>


                                    </table>

                                </div>
                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn text="Close" @click="isActive.value = false"></v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>

                </span>
            </template>


        </v-data-table>
    </span>

    <!-- Form -->
    <span class="w-full flex flex-col px-4 mt-8" v-if="isDataActive === 2">
        <Form @submit="addData">
            <p class="text-0.9 font-Subheader text-gray-500">Campus</p>
            <Field type="text" name="campus_id" placeholder="Type here" disabled class="input mt-2 input-bordered w-full"
                style="border: 1px solid #d2d2d2" :rules="validateInput"   v-model="data[0].in_campus"/>

            <p class="text-0.9 font-Subheader text-gray-500 mt-6">
                Department
            </p>
            <Field type="text" placeholder="Type here" name="college_id" disabled
                class="input mt-2 input-bordered w-full" style="border: 1px solid #d2d2d2" :rules="validateInput"   v-model="data[0].in_department"/>

            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Program</p>
            <Field as="select" class="select select-bordered w-full mt-2" style="border: 1px solid #d2d2d2"
                name="in_program" :rules="validateInput"   v-model="in_program">
                <option disabled selected>Select Program ...</option>
                <option v-for="x in collegeProgram" :value="x.id">
                    {{ x.program }}
                </option>
            </Field>
            <ErrorMessage name="program" class="error_message" />

            <p class="text-0.9 font-Subheader text-gray-500 mt-6">
                Exam Date
            </p>
            <Field type="date" placeholder="Type here" class="input mt-2 input-bordered w-full" name="exam_date"
                style="border: 1px solid #d2d2d2" :rules="validateInput"  v-model="in_examDate" />
            <ErrorMessage name="exam_date" class="error_message" />

            <p class="text-0.9 font-Subheader text-gray-500 mt-6">
                Number of First-time Takers
            </p>
            <Field type="number" placeholder="Type here" class="input mt-2 input-bordered w-full" defa
                style="border: 1px solid #d2d2d2" name="in_takers" :rules="checkNegative"   v-model="in_takers"  />
            <ErrorMessage name="in_takers" class="error_message" />

            <p class="text-0.9 font-Subheader text-gray-500 mt-6">
                Number of First-time Passers
            </p>
            <Field type="number" placeholder="Type here" class="input mt-2 input-bordered w-full"
                style="border: 1px solid #d2d2d2" name="in_passers" :rules="checkNegative" v-model="in_passers"/>
            <ErrorMessage name="in_passers" class="error_message" />

            <span class="flex items-center mt-6 gap-2">
                <p class="text-0.9 font-Subheader text-gray-500">
                    Upload Supported File
                </p>
                <i class="tooltip" tooltip-right
                    data-tip=" Provide the supporting documentation used in reference to the information. You may also provide links to the scanned copies for easier reference">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                </i>
            </span>

            <span clas="w-full flex">
                <table class="w-full mt-4">
                    <thead>
                        <tr class="bg-gray-700 text-white">
                            <th class="py-2 border-2 text-white"></th>
                            <th class="border-2 text-white text-center text-0.9 font-Subheader">
                                Required Files
                            </th>
                            <th class="py-2 border-2 text-white text-center text-0.9 font-Subheader" colspan="2">
                                Upload Files
                            </th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td class="text-center py-2 w-1/12 border-2 text-0.9 text-Subheader text-gray-700">
                                1
                            </td>
                            <td class="py-2 w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                PRC Official Results
                                <span class="text-Red-Rose font-Header">(.pdf)</span>
                            </td>
                            <td class="py-2 flex-1 border-2 text-0.9 text-Subheader text-gray-700 px-4">
                                <input type="file" class="ml-5" accept=".pdf" @change="handleFileUpload" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </span>

            <span class="w-full flex items-center justify-end gap-2 mt-5">
                <button class="btn bg-emerald-600 text-white w-2/12" type="submit">
                    Add
                </button>
            </span>
        </Form>
    </span>
</template>

<style scoped>
.isActive {
  background-color: rgb(255, 240, 221);
}
.isDataNotActive {
  background-color: #94080d;
  color: white;
}

.isDataActive {
  background-color: #94080d;
  color: white;
}



.v-table {
  border: 0px ;
}

:deep(.v-table .v-table__wrapper > table > thead > tr > th) {
  background-color: #4b5563;
  border: 1px solid #e5e7e9;
  font-size: 13px;
  color: white;

}

:deep(.v-table .v-table__wrapper > table > thead ){
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.isBtnActive {
  background-color: #6b7280;
  color: white;
}

.error_message{
    color: red;
    font-size: .8rem;
}

:deep(.v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td){
    padding: 1rem .8rem;
    font-size: 13px;
}

:deep(.v-data-table-footer){
    /* background-color: #e5e7eb; */
}
</style>