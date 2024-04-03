<script>
import VCRDES_vue from "../../components/Others/Navigation/VCRDES_nav.vue";
import activityList from "../../components/Others/activityList.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import axios from "axios";
import { useCookies } from "vue3-cookies";

export default {
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
    VCRDES_vue,
    activityList,
  },

  data() {
    return {
      a: false,
      headers: [
        {
          title: "",
          value: "check_box",
        },
        {
          title: "Advance Education Code",
          key: "advanced_ed_code",
        },
        {
          title: "Campus",
          value: "campus",
          class: "table_header",
        },
        {
          title: "Department",
          value: "college",
        },
        {
          title: "Name",
          value: "fullname",
        },
        {
          title: "Position",
          value: "research_position",
        },
        {
          title: "Category",
          value: "research_category",
        },
        {
          title: "Supported Documents",
          align: "center",
          children: [
            {
              title: "Scanned copy of Enrollment Form",
              value: "copy_of_enrollment_form",
              align: "center",
            },
            {
              title: "Scanned copy of latest research conducted",
              value: "research_conducted",
              align: "center",
            },
            {
              title: "Documentation of utilized technology",
              value: "utilized_technology",
              align: "center",
            },
            {
              title: "Activity report of extension program	",
              value: "report_of_extension_program",
              align: "center",
            },
          ],
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
      sampleData: [
        {
          advanced_ed_code: "1",
          campus: "1",
          college: "1",
          fullname: "1",
          research_position: "1",
          copy_of_enrollment_form: "1",
          research_conducted: "1",
          utilized_technology: "1",
          report_of_extension_program: "1",
          status: "1",
          actions: "1",
        },
      ],
      data: [
        {
          in_campus: "",
          in_department: "",
        },
      ],
      facultyEngagement: [
        {
          key: "A",
          engagement: "A. Pursuing advanced research degree program (Ph.D.)",
        },
        {
          key: "B",
          engagement: "B. Actively pursuing research within the last (3) years",
        },
        {
          key: "C",
          engagement:
            "C. Producing technologies for commercialization or livelihood improvement",
        },
        {
          key: "D",
          engagement: "D. Research work resulted in an extension program",
        },
        {
          key: "E",
          engagement: "E. None of the above",
        },
      ],

      inputData: [
        {
          firstname: "",
          middlename: "",
          lastname: "",
          research_position: "",
          category: "",
          in_duration: "",
        },
      ],

      files: [
        {
          file1: null,
          file2: null,
          file3: null,
          file4: null,
        },
      ],
      forUpdate: [],

      isDataActive: 1,
      myLoading: false,
      search: "",
      x: null,
      approvedLogs:[]
    };
  },

  methods: {
    openUpdate(item) {
      this.forUpdate = item;
    },
    validateData(value) {
      if (!value) {
        return "This field is required";
      }

      return true;
    },

    changeData(isActive) {
      this.isDataActive = isActive;
    },

    addData() {},

    async addData() {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      let userCookies = this.cookies.get("userCookies");

      const formData = new FormData();
      formData.append("campus_id", userCookies["campus_id"]);
      formData.append("college_id", userCookies["college_id"]);
      formData.append("firstname", this.inputData[0].firstname);
      formData.append("middlename", this.inputData[0].middlename);
      formData.append("lastname", this.inputData[0].lastname);
      formData.append("research_position", this.inputData[0].research_position);
      formData.append("category", this.inputData[0].category);
      formData.append("copy_of_enrollment_form", this.files[0].file1);
      formData.append("research_conducted", this.files[0].file2);
      formData.append("utilized_technology", this.files[0].file3);
      formData.append("report_of_extension_program", this.files[0].file4);
      formData.append("user_id", userCookies["id"]);

      try {
        const response = await axios
          .post(import.meta.env.VITE_API_CREATE_ADVANCED_EDUCATION, formData, {
            headers,
          })
          .then((response) => {
            // if (response.data == "Successfully Advanced Education added!") {
            //   location.reload();
            // }
          })
          .catch((error) => {
            console.error("Error fetching campus", error);
          });
      } catch (error) {}

      this.isDataActive = false;
      //   (this.in_examDate = ""),
      //   (this.in_takers = 0),
      //   (this.in_passers = 0),
      //   (this.selectedFile = null);

      // }, 2000)
    },

    handleFileUpload1(event) {
      this.files[0].file1 = event.target.files[0];
    },
    handleFileUpload2(event) {
      this.files[0].file2 = event.target.files[0];
    },
    handleFileUpload3(event) {
      this.files[0].file3 = event.target.files[0];
    },
    handleFileUpload4(event) {
      this.files[0].file4 = event.target.files[0];
    },

    ViewHistory(){

    }
  },

  mounted() {
    let userCookies = this.cookies.get("userCookies");
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
  },
};
</script>
<template>
  <main class="w-full flex flex-col">
    <VCRDES_vue />

    <section class="w-full flex justify-between gap-1 pl-3vw">
      <div class="w-9/12 flex flex-col shadow-xl">
        <!-- Header -->

        <div class="w-full flex shadow-card2 py-5 px-8 gap-4 bg-gray-700 mt-8">
          <span class="flex flex-col justify-center w-9/12">
            <h1 class="w-full font-Header text-white">
              Graduate school faculty engaged in research work
            </h1>

            <p class="w-full text-sm text-gray-400">
              Higher Education Program: Outcome Indicator 1
            </p>
            <p class="w-full text-sm text-gray-400">College of Engineering</p>
          </span>

          <span class="flex w-3/12 items-center justify-end gap-3">
            <!-- <notification /> -->
            <button
              class="btn btn-sm w-4/12 font-Subheader text-xs"
              @click="changeData(1)"
              :class="{ isBtnActive: isDataActive === 1 }"
            >
              <v-icon>mdi-table</v-icon>Table
            </button>
            <button
              class="btn btn-sm w-4/12 font-Subheader text-xs"
              @click="changeData(2)"
              :class="{ isBtnActive: isDataActive === 2 }"
            >
              <v-icon>mdi-form-select</v-icon> Form
            </button>
          </span>
        </div>

        <!-- Table -->

        <div class="table-cont w-full flex flex-col" v-if="isDataActive === 1">
          <v-data-table
            :headers="headers"
            :items="sampleData"
            class="elevation-1"
            items-per-page="10"
            loading-text="Loading... Please wait"
            :loading="myLoading"
            :search="search"
            style="width: 100%; overflow-x: scroll"
          >
            <template v-slot:item.copy_of_enrollment_form="{ item }">
              <span class="flex w-full gap-2 py-4">
                <v-btn
                  size="x-small"
                  class="bg-light-blue-darken-3"
                  @click="viewEnrollmentFormPDF(item.advance_ed_id)"
                  >View PDF</v-btn
                >
              </span>
            </template>

            <template v-slot:item.research_conducted="{ item }">
              <span class="flex w-full gap-2 py-4">
                <v-btn
                  size="x-small"
                  class="bg-light-blue-darken-3"
                  @click="viewResearchPDF(item.advance_ed_id)"
                  >View PDF</v-btn
                >
              </span>
            </template>

            <template v-slot:item.utilized_technology="{ item }">
              <span class="flex w-full gap-2 py-4">
                <v-btn
                  size="x-small"
                  class="bg-light-blue-darken-3"
                  @click="viewUtilizedTechPDF(item.advance_ed_id)"
                  >View PDF</v-btn
                >
              </span>
            </template>
            <template v-slot:item.report_of_extension_program="{ item }">
              <span class="flex w-full gap-2 py-4">
                <v-btn
                  size="x-small"
                  class="bg-light-blue-darken-3"
                  @click="viewDisplayExtensionProgram(item.advance_ed_id)"
                  >View PDF</v-btn
                >
              </span>
            </template>

            <template v-slot:item.actions="{ item }">
              <span class="flex w-full flex-col gap-2 py-4">

                <!-- Edit -->
                <v-dialog max-width="800">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn
                      size="x-small"
                      block
                      v-bind="activatorProps"
                      color="surface-variant"
                      text="Edit"
                      variant="flat"
                      @click="openUpdate(item)"
                    ></v-btn>
                  </template>

                  <template v-slot:default="{ isActive }">
                    <v-card class="px-8 py-8">
                      <h3
                        class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4"
                      >
                        Edit Record
                      </h3>

                      <Form>
                        <p class="text-0.9 font-Subheader text-gray-500 mt-6">
                          Advanced Ed Code
                        </p>
                        <Field
                          type="text"
                          name="advanced_ed_code"
                          placeholder="Type here"
                          class="input mt-2 input-bordered w-full"
                          style="border: 1px solid #d2d2d2"
                          v-model="forUpdate.advanced_ed_code"
                          disabled
                        />

                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">
                          Campus
                        </p>
                        <Field
                          type="text"
                          name="campus"
                          placeholder="Type here"
                          disabled
                          class="input mt-2 input-bordered w-full"
                          v-model="forUpdate.campus"
                          :rules="validateData"
                        />

                        <p class="text-0.9 font-Subheader text-gray-500 mt-6">
                          Department
                        </p>
                        <Field
                          type="text"
                          name="department"
                          placeholder="Type here"
                          disabled
                          class="input mt-2 input-bordered w-full"
                          v-model="forUpdate.college"
                          :rules="validateData"
                        />

                        <p class="text-0.9 font-Subheader text-gray-500 mt-6">
                          Firstname
                        </p>
                        <Field
                          type="text"
                          name="fname"
                          placeholder="Type here"
                          class="input mt-2 input-bordered w-full"
                          style="border: 1px solid #d2d2d2"
                          v-model="forUpdate.ad_firstname"
                          :rules="validateData"
                        />
                        <ErrorMessage name="fname" class="error_message" />

                        <p class="text-0.9 font-Subheader text-gray-500 mt-6">
                          Lastname
                        </p>
                        <Field
                          type="text"
                          name="lname"
                          placeholder="Type here"
                          class="input mt-2 input-bordered w-full"
                          style="border: 1px solid #d2d2d2"
                          v-model="forUpdate.ad_lastname"
                          :rules="validateData"
                        />
                        <ErrorMessage name="lname" class="error_message" />

                        <p class="text-0.9 font-Subheader text-gray-500 mt-6">
                          Middle Initial
                        </p>
                        <Field
                          type="text"
                          name="m_initial"
                          placeholder="Type here"
                          class="input mt-2 input-bordered w-full"
                          style="border: 1px solid #d2d2d2"
                          v-model="forUpdate.ad_middlename"
                          :rules="validateData"
                        />
                        <ErrorMessage name="m_initial" class="error_message" />

                        <p class="text-0.9 font-Subheader text-gray-500 mt-6">
                          Position
                        </p>
                        <Field
                          type="text"
                          name="position"
                          placeholder="Type here"
                          class="input mt-2 input-bordered w-full"
                          style="border: 1px solid #d2d2d2"
                          v-model="forUpdate.research_position"
                          :rules="validateData"
                        />
                        <ErrorMessage name="position" class="error_message" />

                        <span class="flex items-center mt-6 gap-2">
                          <p class="text-0.9 font-Subheader text-gray-500">
                            Category
                          </p>
                          <i
                            class="tooltip tooltip-right"
                            data-tip="Category of engagement of each listed faculty member"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                              />
                            </svg>
                          </i>
                        </span>
                        <Field
                          as="select"
                          name="engagement"
                          class="select select-bordered w-full mt-2"
                          style="border: 1px solid #d2d2d2"
                          v-model="forUpdate.research_category"
                          :rules="validateData"
                        >
                          <option disabled selected>
                            Select Engagement ...
                          </option>
                          <option v-for="x in facultyEngagement" :value="x.key">
                            {{ x.engagement }}
                          </option>
                        </Field>
                        <ErrorMessage name="engagement" class="error_message" />

                        <span class="flex items-center mt-6 gap-2">
                          <p class="text-0.9 font-Subheader text-gray-500">
                            Upload Supported File
                          </p>
                          <i
                            class="tooltip tooltip-right"
                            data-tip="Submit relevant documents to verify the information provided"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                              />
                            </svg>
                          </i>
                        </span>

                        <table class="w-full mt-4">
                          <thead>
                            <tr class="bg-gray-700 text-white">
                              <th class="border-2 py-3 text-white"></th>
                              <th
                                class="border-2 py-3 text-white text-center text-0.9 font-Subheader"
                              >
                                Required Files
                              </th>
                              <th
                                class="border-2 py-3 text-white text-center text-0.9 font-Subheader"
                              >
                                Upload Files
                              </th>
                              <th></th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td
                                class="w-2/12 text-center py-3 border-2 text-0.9 text-Subheader text-gray-700"
                              >
                                1
                              </td>
                              <td
                                class="w-7/12 py-3 px-3 border-2 text-0.9 text-Subheader text-gray-700"
                              >
                                Scanned copy of enrollment form
                              </td>
                              <td
                                class="w-3/12 py-3 border-2 text-0.9 text-Subheader text-gray-700"
                              >
                                <input
                                  type="file"
                                  class="ml-5"
                                  @change="editHandleFileUpload1"
                                  accept=".pdf"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td
                                class="border-2 text-center py-3 text-0.9 text-Subheader text-gray-700"
                              >
                                2
                              </td>
                              <td
                                class="px-3 border-2 py-3 text-0.9 text-Subheader text-gray-700"
                              >
                                Scanned copy of latest research conducted
                              </td>
                              <td
                                class="w-3/12 border-2 py-3 text-0.9 text-Subheader text-gray-700"
                              >
                                <input
                                  type="file"
                                  class="ml-5"
                                  @change="editHandleFileUpload2"
                                  accept=".pdf"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td
                                class="border-2 text-center text-0.9 py-3 text-Subheader text-gray-700"
                              >
                                3
                              </td>
                              <td
                                class="px-3 border-2 py-3 text-0.9 text-Subheader text-gray-700"
                              >
                                Documentation of utilized technlogy
                              </td>
                              <td
                                class="w-3/12 border-2 py-3 text-0.9 text-Subheader text-gray-700"
                              >
                                <input
                                  type="file"
                                  class="ml-5"
                                  @change="editHandleFileUpload3"
                                  accept=".pdf"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td
                                class="border-2 text-center text-0.9 py-3 text-Subheader text-gray-700"
                              >
                                4
                              </td>
                              <td
                                class="px-3 border-2 text-0.9 py-3 text-Subheader text-gray-700"
                              >
                                Activity report of extension program
                              </td>
                              <td
                                class="w-3/12 border-2 text-0.9 py-3 text-Subheader text-gray-700"
                              >
                                <input
                                  type="file"
                                  class="ml-5"
                                  @change="editHandleFileUpload4"
                                  accept=".pdf"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <span
                            class="w-full flex items-center justify-end gap-4 mt-5"
                          >
                            <v-btn
                              text="Close"
                              @click="isActive.value = false"
                            ></v-btn>
                            <button
                              class="btn btn-accent w-2/12 text-white border-0"
                              type="submit"
                              @click="isActive.value = false"
                            >
                              Update
                            </button>
                          </span>
                        </v-card-actions>
                      </Form>
                    </v-card>
                  </template>
                </v-dialog>

                <!-- Delete -->
                <v-dialog max-width="800">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn
                      block
                      size="x-small"
                      v-bind="activatorProps"
                      color="surface-variant"
                      text="Delete"
                      variant="flat"
                    ></v-btn>
                  </template>

                  <template v-slot:default="{ isActive }">
                    <v-card class="px-4">
                      <form>
                        <v-card-title
                          class="bg-Red-Darken flex text-white font-Subheader mt-4"
                        >
                          Confirm Delete
                        </v-card-title>
                        <v-card-text class="mt-4">
                          Do you want to delete this record?
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            text="Cancel"
                            @click="isActive.value = false"
                          ></v-btn>

                          <v-btn
                            class="bg-red-darken-4"
                            @click="deleteData(item.advance_ed_id)"
                          >
                            Confirm</v-btn
                          >
                        </v-card-actions>
                      </form>
                    </v-card>
                  </template>
                </v-dialog>

                <!-- View -->
                <v-dialog max-width="700">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn
                      block
                      size="x-small"
                      v-bind="activatorProps"
                      color="surface-variant"
                      text="View"
                      variant="flat"
                      @click="ViewHistory(item.advance_ed_id)"
                    ></v-btn>
                  </template>

                  <template v-slot:default="{ isActive }" class="w-full">
                    <v-card>
                      <div class="w-full px-4 py-4">
                        <h3
                          class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4"
                        >
                          Approval History
                        </h3>

                        <table
                          class="view-table mt-4 w-full border-0"
                          id="notifTable"
                        >
                          <tr v-for="(items, index) in approvedLogs">
                            <td class="w-1/12">
                              <v-icon
                                :class="{
                                  isApproved: items.status === 'Approved',
                                  isReject: items.status === 'Returned',
                                }"
                              >
                                mdi-history</v-icon
                              >
                            </td>
                            <td>
                              <h1
                                :class="{
                                  isApproved: items.status === 'Approved',
                                  isReject: items.status === 'Returned',
                                }"
                              >
                                {{ items.status }} by {{ items.role }}
                              </h1>
                            </td>
                            <td>
                              <p>
                                {{ items.reasons }}<br /><i>{{
                                  items.remarks
                                }}</i>
                              </p>
                            </td>
                            <td>
                              <p>{{ items.created_at }}</p>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                          text="Close"
                          @click="isActive.value = false"
                        ></v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>

              </span>
            </template>
          </v-data-table>
        </div>

        <!-- Form -->
        <div class="w-full flex flex-col mt-8" v-if="isDataActive === 2">
          <Form @submit="addData" class="px-12">
            <p class="text-0.9 font-Subheader text-gray-500">Campus</p>
            <Field
              type="text"
              name="campus"
              placeholder="Type here"
              disabled
              class="input mt-2 input-bordered w-full"
              v-model="data[0].in_campus"
              :rules="validateData"
            />

            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
            <Field
              type="text"
              name="department"
              placeholder="Type here"
              disabled
              class="input mt-2 input-bordered w-full"
              v-model="data[0].in_department"
              :rules="validateData"
            />

            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Firstname</p>
            <Field
              type="text"
              name="fname"
              placeholder="Type here"
              class="input mt-2 input-bordered w-full"
              style="border: 1px solid #d2d2d2"
              v-model="inputData[0].firstname"
              :rules="validateData"
            />
            <ErrorMessage name="fname" class="error_message" />

            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Lastname</p>
            <Field
              type="text"
              name="lname"
              placeholder="Type here"
              class="input mt-2 input-bordered w-full"
              style="border: 1px solid #d2d2d2"
              v-model="inputData[0].lastname"
              :rules="validateData"
            />
            <ErrorMessage name="lname" class="error_message" />

            <p class="text-0.9 font-Subheader text-gray-500 mt-6">
              Middle Initial
            </p>
            <Field
              type="text"
              name="m_initial"
              placeholder="Type here"
              class="input mt-2 input-bordered w-full"
              style="border: 1px solid #d2d2d2"
              v-model="inputData[0].middlename"
              :rules="validateData"
            />
            <ErrorMessage name="m_initial" class="error_message" />

            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Position</p>
            <Field
              type="text"
              name="position"
              placeholder="Type here"
              class="input mt-2 input-bordered w-full"
              style="border: 1px solid #d2d2d2"
              v-model="inputData[0].research_position"
              :rules="validateData"
            />
            <ErrorMessage name="position" class="error_message" />

            <span class="flex items-center mt-6 gap-2">
              <p class="text-0.9 font-Subheader text-gray-500">Category</p>
              <i
                class="tooltip tooltip-right"
                data-tip="Category of engagement of each listed faculty member"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </i>
            </span>
            <Field
              as="select"
              name="engagement"
              class="select select-bordered w-full mt-2"
              style="border: 1px solid #d2d2d2"
              v-model="inputData[0].category"
              :rules="validateData"
            >
              <option disabled selected>Select Engagement ...</option>
              <option v-for="x in facultyEngagement" :value="x.key">
                {{ x.engagement }}
              </option>
            </Field>
            <ErrorMessage name="engagement" class="error_message" />

            <span class="flex items-center mt-6 gap-2">
              <p class="text-0.9 font-Subheader text-gray-500">
                Upload Supported File
              </p>
              <i
                class="tooltip tooltip-right"
                data-tip="Submit relevant documents to verify the information provided"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </i>
            </span>

            <table class="w-full mt-4">
              <thead>
                <tr class="bg-gray-700 text-white">
                  <th class="border-2 text-white py-3"></th>
                  <th
                    class="py-3 border-2 text-white text-center text-0.9 font-Subheader"
                  >
                    Required Files
                  </th>
                  <th
                    class="py-3 border-2 text-white text-center text-0.9 font-Subheader"
                  >
                    Upload Files
                  </th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td
                    class="py-3 text-center w-2/12 border-2 text-0.9 text-Subheader text-gray-700"
                  >
                    1
                  </td>
                  <td
                    class="py-3 w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700"
                  >
                    Scanned copy of enrollment form
                  </td>
                  <td
                    class="py-3 w-3/12 border-2 text-0.9 text-Subheader text-gray-700"
                  >
                    <input
                      type="file"
                      class="ml-5"
                      @change="handleFileUpload1"
                      accept=".pdf"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    class="py-3 text-center border-2 text-0.9 text-Subheader text-gray-700"
                  >
                    2
                  </td>
                  <td
                    class="py-3 px-3 border-2 text-0.9 text-Subheader text-gray-700"
                  >
                    Scanned copy of latest research conducted
                  </td>
                  <td
                    class="py-3 w-3/12 border-2 text-0.9 text-Subheader text-gray-700"
                  >
                    <input
                      type="file"
                      class="ml-5"
                      @change="handleFileUpload2"
                      accept=".pdf"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    class="py-3 text-center border-2 text-0.9 text-Subheader text-gray-700"
                  >
                    3
                  </td>
                  <td
                    class="py-3 px-3 border-2 text-0.9 text-Subheader text-gray-700"
                  >
                    Documentation of utilized technlogy
                  </td>
                  <td
                    class="py-3 w-3/12 border-2 text-0.9 text-Subheader text-gray-700"
                  >
                    <input
                      type="file"
                      class="ml-5"
                      @change="handleFileUpload3"
                      accept=".pdf"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    class="py-3 text-center border-2 text-0.9 text-Subheader text-gray-700"
                  >
                    4
                  </td>
                  <td
                    class="py-3 px-3 border-2 text-0.9 text-Subheader text-gray-700"
                  >
                    Activity report of extension program
                  </td>
                  <td
                    class="py-3 w-3/12 border-2 text-0.9 text-Subheader text-gray-700"
                  >
                    <input
                      type="file"
                      class="ml-5"
                      @change="handleFileUpload4"
                      accept=".pdf"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <span class="w-full flex items-center justify-end gap-2 mt-5">
              <button class="btn bg-emerald-600 w-2/12 text-white border-0">
                Add
              </button>
            </span>
          </Form>
        </div>
      </div>

      <activityList />
    </section>
  </main>
</template>

<style scoped>
.isBtnActive {
  background-color: #6b7280;
  color: white;
}

.table-cont
  ::v-deep(
    .v-data-table .v-table__wrapper > table > thead > tr > th,
    .v-data-table .v-table__wrapper > table tbody > tr > th
  ) {
  background-color: #4b5563;
  border: 1px solid white;
  color: white;
  font-size: 13px;
}

.error_message {
  color: red;
  font-size: 0.8rem;
}
</style>
