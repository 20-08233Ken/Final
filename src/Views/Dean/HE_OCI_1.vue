<script src="../../Scripts/Dean/HE_OCI_1.js"></script>

<template>
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
      <button class="btn btn-sm w-4/12 font-Subheader text-xs" @click="changeData(1)"
        :class="{ isBtnActive: isDataActive === 2 }">
        <v-icon>mdi-table</v-icon>Table
      </button>
      <button class="btn btn-sm w-4/12 font-Subheader text-xs" @click="changeData(2)"
        :class="{ isBtnActive: isDataActive === 1 }">
        <v-icon>mdi-form-select</v-icon> Form
      </button>
    </span>
  </div>

  <div class="w-full overflow-x-auto shadow-card2 px-8">
    <div class="w-full flex flex-col overflow-x-auto" v-if="isDataActive === 1">
      <v-card class="overflow-x-auto">
        <template v-slot:text>
          <div class="w-full flex items-center gap-12">

            <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
              hide-details single-line></v-text-field>

            <v-btn elevation="0" size="small" class="bg-teal-darken-3 flex"
              @click="FetchData(userOffice, userCampus, userID)">
              <v-icon>mdi-refresh</v-icon>
              <p class="ml-3">Reload Table</p>
            </v-btn>

          </div>
        </template>

        <v-data-table :headers="headers" :items="hepData" class="elevation-1" items-per-page="10"
          loading-text="Loading... Please wait" :loading="myLoading" :search="search"
          style="width: 100%; overflow-x: scroll">
          <template v-slot:item.supported_file="{ item }">

            <span class="flex w-full gap-2 py-4">
              <!-- <v-btn size="x-small" class="bg-light-blue-darken-3" @click="viewFile(item.hep_one_id)">View PDF</v-btn> -->
              <v-dialog max-width="1700">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn size="x-small" class="bg-light-blue-darken-3" v-bind="activatorProps" text="View PDF" variant="flat"  @click="viewFile(item.hep_one_id)"></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card title="View PDF">

                    <div>
                      <!-- <pdf-viewer :src="pdfUrl" :show-toolbar="true"></pdf-viewer> -->
                      <PDFViewer :source="pdfBase64" style="height: 100vh; width: 100vw"> </PDFViewer>
                    </div>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn text="Close " @click="isActive.value = false"></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </span>

          </template>
          <template v-slot:item.actions="{ item }">
            <span class="flex w-full flex-col gap-2 py-4">

              <!-- Edit -->
              <v-dialog max-width="700">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn size="x-small" block v-bind="activatorProps" color="surface-variant" text="Edit" variant="flat"
                    :disabled="item.status != `Returned to Dean`" @click="openUpdate(item)"></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card class="px-8 py-8">
                    <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4">
                      Edit Record
                    </h3>
                    <p>{{ item.tb_id }}</p>

                    <Form class="mt-4" @submit="submitUpdate">
                      <p class="text-0.9 font-Subheader text-gray-500">
                        Campus
                      </p>
                      <Field type="text" name="campus" placeholder="Type here" disabled
                        class="input mt-2 input-bordered w-full" style="border: 1px solid #d2d2d2"
                        v-model="data[0].in_campus" :rules="validateInput" />

                      <p class="text-0.9 font-Subheader text-gray-500 mt-6">
                        Department
                      </p>
                      <Field type="text" placeholder="Type here" name="department" disabled
                        class="input mt-2 input-bordered w-full" style="border: 1px solid #d2d2d2"
                        v-model="data[0].in_department" :rules="validateInput" />

                      <p class="text-0.9 font-Subheader text-gray-500 mt-6">
                        Program
                      </p>
                      <Field as="select" class="select select-bordered w-full mt-2" style="border: 1px solid #d2d2d2"
                        name="program" :rules="validateInput" v-model="forUpdate.program_id">
                        <option disabled selected>Select Program ...</option>
                        <option v-for="x in collegeProgram" :value="x.id">
                          {{ x.program }}
                        </option>
                      </Field>
                      <ErrorMessage name="program" class="error_message" />

                      <p class="text-0.9 font-Subheader text-gray-500 mt-6">
                        Exam Date
                      </p>
                      <Field type="date" placeholder="Type here" class="input mt-2 input-bordered w-full"
                        name="exam_date" style="border: 1px solid #d2d2d2" v-model="forUpdate.exam_date"
                        :rules="validateInput" />
                      <ErrorMessage name="exam_date" class="error_message" />

                      <p class="text-0.9 font-Subheader text-gray-500 mt-6">
                        Number of First-time Takers
                      </p>
                      <Field type="number" placeholder="Type here" class="input mt-2 input-bordered w-full" defa
                        style="border: 1px solid #d2d2d2" v-model="forUpdate.number_of_takers" name="no_takers"
                        :rules="checkNegative" />
                      <ErrorMessage name="no_takers" class="error_message" />

                      <p class="text-0.9 font-Subheader text-gray-500 mt-6">
                        Number of First-time Passers
                      </p>
                      <Field type="number" placeholder="Type here" class="input mt-2 input-bordered w-full"
                        style="border: 1px solid #d2d2d2" v-model="forUpdate.number_of_passers" name="no_passers"
                        :rules="checkNegative" />
                      <ErrorMessage name="no_passers" class="error_message" />

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

                      <table class="w-full mt-4">
                        <thead>
                          <tr>
                            <th class="border-2 py-2  bg-gray-700 text-white font-Subheader"></th>
                            <th
                              class="border-2 py-2  text-center text-0.9 text-Subheader bg-gray-700 text-white font-Subheader">
                              Required Files
                            </th>
                            <th
                              class="border-2 py-2  text-center text-0.9 text-Subheader bg-gray-700 text-white font-Subheader">
                              Upload Files
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td class="w-2/12 py-2  border-2 text-0.9 text-Subheader text-gray-700">
                              1
                            </td>
                            <td class="w-7/12 py-2  px-3 border-2 text-0.9 text-Subheader text-gray-700">
                              PRC Official Results
                            </td>
                            <td class="w-3/12 py-2  border-2 text-0.9 text-Subheader text-gray-700">
                              <input type="file" class="ml-5" accept=".pdf" @change="EdithandleFileUpload" />
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <span class="w-full flex items-center justify-end gap-4 mt-5">
                          <v-btn text="Close" @click="isActive.value = false"></v-btn>
                          <button class="btn btn-accent w-2/12 text-white border-0" type="submit"
                            @click="isActive.value = false">
                            Update
                          </button>
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
                    variant="flat" :disabled="item.status != ` `"></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card class="px-4">
                    <form>
                      <v-card-title class="bg-Red-Darken flex text-white font-Subheader mt-4">
                        Confirm Delete
                      </v-card-title>
                      <v-card-text class="mt-4">
                        Do you want to delete this record?
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text="Cancel" @click="isActive.value = false"></v-btn>

                        <v-btn class="bg-red-darken-4" @click="
                            deleteData(
                              item.hep_one_id,
                              (isActive.value = false)
                            )
                          ">
                          Confirm</v-btn>
                      </v-card-actions>
                    </form>
                  </v-card>
                </template>
              </v-dialog>

              <!-- View -->
              <v-dialog max-width="800">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn block size="x-small" v-bind="activatorProps" color="surface-variant" text="View" variant="flat"
                    @click="ViewHistory(item.hep_one_id)"></v-btn>
                </template>

                <template v-slot:default="{ isActive }" class="w-full">
                  <v-card>
                    <div class="w-full px-4 py-4 flex flex-col items-center">
                      <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4">
                        Approval History
                      </h3>

                      <span class="w-full px-4">

                        <table class="view-table mt-4 w-full border-0" id="notifTable">
                          <tr v-for="(items, index) in approvedLogs">

                            <td class="py-3">
                              <v-icon
                                :class="{isApproved: items.status === 'Approved', isReject: items.status === 'Returned',}">mdi-history</v-icon>
                            </td>

                            <td>
                              <h1 class="text-sm"
                                :class="{ isApproved: items.status === 'Approved', isReject: items.status === 'Returned',}">
                                {{ items.status }} by {{ items.role }}
                              </h1>

                          


                            </td>

                            <td>
                              <p class="text-sm"> {{ items.reasons }}<br /><i>{{ items.remarks}}</i> </p>
                            </td>
                            <td>
                              <p class="text-sm">{{ items.created_at }}</p>
                            </td>
                          </tr>
                        </table>
                      </span>
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
      </v-card>
    </div>
    <div class="w-full flex flex-col mt-8 pb-8" v-if="isDataActive === 2">
      <Form @submit="addData">
        <p class="text-0.9 font-Subheader text-gray-500">Campus</p>
        <Field type="text" name="campus" placeholder="Type here" disabled class="input mt-2 input-bordered w-full"
          style="border: 1px solid #d2d2d2" v-model="data[0].in_campus" :rules="validateInput" />

        <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
        <Field type="text" placeholder="Type here" name="department" disabled class="input mt-2 input-bordered w-full"
          style="border: 1px solid #d2d2d2" v-model="data[0].in_department" :rules="validateInput" />

        <p class="text-0.9 font-Subheader text-gray-500 mt-6">Program</p>
        <Field as="select" class="select select-bordered w-full mt-2" style="border: 1px solid #d2d2d2"
          v-model="in_program" name="program" :rules="validateInput">
          <option disabled selected>Select Program ...</option>
          <option v-for="x in collegeProgram" :value="x.id">
            {{ x.program }}
          </option>
        </Field>
        <ErrorMessage name="program" class="error_message" />

        <p class="text-0.9 font-Subheader text-gray-500 mt-6">Exam Date</p>
        <Field type="date" placeholder="Type here" class="input mt-2 input-bordered w-full" name="exam_date"
          style="border: 1px solid #d2d2d2" v-model="in_examDate" :rules="validateInput" />
        <ErrorMessage name="exam_date" class="error_message" />

        <p class="text-0.9 font-Subheader text-gray-500 mt-6">
          Number of First-time Takers
        </p>
        <Field type="number" placeholder="Type here" class="input mt-2 input-bordered w-full" defa
          style="border: 1px solid #d2d2d2" v-model="in_takers" name="no_takers" :rules="checkNegative" />
        <ErrorMessage name="no_takers" class="error_message" />

        <p class="text-0.9 font-Subheader text-gray-500 mt-6">
          Number of First-time Passers
        </p>
        <Field type="number" placeholder="Type here" class="input mt-2 input-bordered w-full"
          style="border: 1px solid #d2d2d2" v-model="in_passers" name="no_passers" :rules="checkNegative" />
        <ErrorMessage name="no_passers" class="error_message" />

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
                <th class="border-2 py-2 text-white"></th>
                <th class="border-2 py-2 text-white text-center text-0.9 font-Subheader">
                  Required Files
                </th>
                <th class="border-2 py-2 text-white text-center text-0.9 font-Subheader" colspan="2">
                  Upload Files
                </th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td class="w-1/12 text-center py-2 border-2 text-0.9 text-Subheader text-gray-700">
                  1
                </td>
                <td class="w-7/12 py-2 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                  PRC Official Results
                  <span class="text-Red-Rose font-Header">(.pdf)</span>
                </td>
                <td class="flex-1 py-2 border-2 text-0.9 text-Subheader text-gray-700 px-4">
                  <input type="file" class="ml-5" accept=".pdf" @change="handleFileUpload" />
                </td>
                <!-- <td class="px-4" v-if="selectedFileName != null">                  
                                    <v-btn class="rounded-full font-Subheader bg-red-darken-4 text-0.8" size="small" @click="removeFiles" >Remove file</v-btn>
                                </td> -->
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
    </div>
  </div>
</template>

<style scoped>
@import url("../../style/Dean/HE_OCI_1_style.css");
.isBtnActive {
  background-color: #6b7280;
  color: white;

}
</style>
