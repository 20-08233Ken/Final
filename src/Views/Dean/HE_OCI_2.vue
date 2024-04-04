<script src="../../Scripts/Dean/HE_OCI_2.js" >
</script>

<template>


    <div class="w-full flex shadow-card2 py-5 px-8 gap-4 bg-gray-700 mt-8">

        <span class="flex flex-col justify-center w-9/12">
            <h1 class="w-full font-Header text-white">
                Percentage of graduates (2 years prior) that are employed
            </h1>

            <p class="w-full text-sm text-gray-400">
                Higher Education Program: Outcome Indicator 2
            </p>
            <p class="w-full text-sm text-gray-400">College of Engineering</p>
        </span>

        <span class="flex w-3/12 items-center justify-end gap-3">

            <button class=" btn btn-sm w-4/12 font-Subheader text-xs" @click="changeData(1)"
                :class="{ isBtnActive: isDataActive === 1 , notBtnActive:isDataActive !=1 }">
                <v-icon>mdi-form-select</v-icon> Registrar
            </button>

            <button class="btn btn-sm w-4/12 font-Subheader text-xs" @click="changeData(2)"
                :class="{ isBtnActive: isDataActive === 2, notBtnActive:isDataActive !=2}">
                <v-icon>mdi-form-select</v-icon> Form
            </button>

            <button class="btn btn-sm w-4/12 font-Subheader text-xs" @click="changeData(3)"
                :class="{ isBtnActive: isDataActive === 3, notBtnActive:isDataActive !=3}">
                <v-icon>mdi-table</v-icon>Table
            </button>

        </span>
    </div>

    <!-- <h1 class="self-center w-9/12 w-full text-center font-Header text-xl text-Red-Rose">Percentage of graduates (2 years prior) that are employed</h1>
    <p class="w-full text-center text-gray-400">Higher Education Program: Outcome Indicator 2</p>
    <p class="w-full text-center text-gray-400">College of Engineering</p> -->




    <div class="w-full overflow-x-auto shadow-card2 px-8 py-4 ">

        <!-- Registrar -->
        <div class="table_cont w-full flex flex-col mt-3 overflow-x-auto" v-if="isDataActive === 1">
            <h1 class="font-Subheader mb-4 text-0.9 text-teal-darken-3">PRC: List of Graduates by Institution, Program,
                and Sex</h1>


            <v-data-table-server :headers="headersRegistrar" :items="registrarData" class="elevation-1 "
                items-per-page="10" :items-length="0" :loading="myLoading" loading-text="Loading... Please wait"
                style="width:100%;">
            </v-data-table-server>
        </div>

        <!-- Form -->
        <div class="w-full flex flex-col mt-8" v-if="isDataActive === 2">
            <Form @submit="addData">

                <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                <Field type="text" name='campus' placeholder="Type here" disabled
                    class="input mt-2 input-bordered w-full " v-model="data[0].in_campus" :rules="validateData" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
                <Field type="text" name='department' placeholder="Type here" disabled
                    class="input mt-2 input-bordered w-full " v-model="data[0].in_department" :rules="validateData" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Program</p>
                <Field as="select" name="program" class="select select-bordered w-full mt-2"
                    style="border:  1px solid #d2d2d2;" v-model="in_program" :rules="validateData">
                    <option disabled selected>Select Program ...</option>
                    <option v-for="x in collegeProgram" :value="x.id">{{ x.program }}</option>
                </Field>
                <ErrorMessage name="program" class="error_message" />


                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Firstname</p>
                <Field type="text" name="firstname" placeholder="Type here" class="input mt-2 input-bordered w-full "
                    style="border:  1px solid #d2d2d2;" v-model="in_fname" :rules="validateData" />
                <ErrorMessage name="firstname" class="error_message" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Lastname</p>
                <Field type="text" name="lastname" placeholder="Type here" class="input mt-2 input-bordered w-full "
                    style="border:  1px solid #d2d2d2;" v-model="in_lname" :rules="validateData" />
                <ErrorMessage name="lastname" class="error_message" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Middle Initial</p>
                <Field type="text" name="m_initial" placeholder="Type here" class="input mt-2 input-bordered w-full "
                    style="border:  1px solid #d2d2d2;" v-model="in_mname" :rules="validateData" />
                <ErrorMessage name="m_initial" class="error_message" />


                <span class="flex items-center mt-6 gap-2">
                    <p class="text-0.9 font-Subheader text-gray-500 ">Graduate Tracer Status</p>
                    <i class="tooltip tooltip-right"
                        data-tip="List down all the 1st semester FY 2021-2022 graduates per degree program and then provide the status for each graduate.">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </i>
                </span>

                <Field as="select" name="statuses" class="select select-bordered w-full mt-2"
                    style="border:  1px solid #d2d2d2;" v-model="in_status" :rules="validateData">
                    <option disabled selected> ...</option>
                    <option value="Employed">Employed</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Not Tracked">Not Tracked</option>
                </Field>
                <ErrorMessage name="statuses" class="error_message" />


                <span class="flex items-center mt-6 gap-2">
                    <p class="text-0.9 font-Subheader text-gray-500 ">Company's Business / Type of Business</p>
                    <i class="tooltip tooltip-right"
                        data-tip="Input the employment, business, or company of the graduate. For this purpose, Employment refers to any mode or form of employment regardless of status, including self-employment">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </i>
                </span>
                <Field type="text" name="business" placeholder="Type here" class="input mt-2 input-bordered w-full "
                    style="border:  1px solid #d2d2d2;" v-model="in_business" :rules="validateData" />
                <ErrorMessage name="business" class="error_message" />


                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Upload Supported File</p>

                <table class="w-full mt-4">
                    <thead>
                        <tr class="bg-gray-700 text-white">
                            <th class="border-2 py-2 text-white"></th>
                            <th class="border-2 py-2 text-white text-center text-0.9 font-Subheader">
                                Required Files</th>
                            <th class="border-2 py-2 text-white text-center text-0.9 font-Subheader ">
                                Upload Files
                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td class="w-2/12 py-2 text-center border-2 text-0.9 text-Subheader text-gray-700 ">1
                            </td>
                            <td class="w-7/12 py-2  px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                Graduate Tracer Study <span class="text-Red-Rose font-Header">(.pdf)</span></td>
                            <td class="w-3/12 py-2  border-2 text-0.9 text-Subheader text-gray-700 ">
                                <input type="file" class="ml-5" @change="handleFileUpload">
                            </td>
                        </tr>
                        <tr>
                            <td class="w-2/12 py-2 text-center border-2 text-0.9 text-Subheader text-gray-700 ">2
                            </td>
                            <td class="w-7/12 py-2  px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                Official list of FY 2021 Graduates <span
                                    class="text-Red-Rose font-Header">(.xlsx)</span></td>
                            <td class="w-3/12 py-2  border-2 text-0.9 text-Subheader text-gray-700 ">
                                <input type="file" class="ml-5" @change="handleFileUpload2">
                            </td>
                        </tr>

                    </tbody>
                </table>

                <span class="w-full flex items-center justify-end gap-2 mt-5">
                    <button class="btn bg-emerald-600 text-white w-2/12" type="submit"
                        :disabled="disableSubmit">Add</button>
                </span>
            </Form>
        </div>

        <!-- Table -->
        <div class="w-full flex flex-col mt-3 overflow-x-auto" v-if="isDataActive === 3">
            <v-card class='table_cont'>
                <template v-slot:text>

                    <div class='w-full flex items-center gap-12'>
                        <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify"
                            variant="outlined" hide-details single-line></v-text-field>

                        <v-btn elevation="0" ize="small" class="bg-teal-darken-3 flex ">
                            <v-icon>mdi-refresh</v-icon>
                            <p class="ml-3">Reload Table</p>
                        </v-btn>

                    </div>
                </template>



                <v-data-table :headers="headersDean" :items="deansData" class="elevation-1 " items-per-page="10"
                    :loading="myLoading2" loading-text="Loading... Please wait" :search="search"
                    style="width:100%; overflow-x: scroll;">

                    <template v-slot:item.graduate_files="{ item }">
                        <span class="flex w-full flex-col  gap-2 py-4">
                            <!-- <v-btn size="x-small" class="bg-light-blue-darken-3"><a :href=item.supported_file
                                    target="_blank">View PDF</a> </v-btn> -->
                            <!-- <v-btn size="x-small" class="bg-light-blue-darken-3" @click="viewFilePDF(item.hep_two_id)">
                                    View PDF
                                </v-btn> -->
                            <v-dialog max-width="1700">
                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn size="x-small" class="bg-light-blue-darken-3" v-bind="activatorProps"
                                        text="View PDF" variant="flat" @click="viewFile(item.hep_two_id)"></v-btn>
                                </template>

                                <template v-slot:default="{ isActive }">
                                    <v-card title="View PDF">

                                        <div>
                                            <!-- <pdf-viewer :src="pdfUrl" :show-toolbar="true"></pdf-viewer> -->
                                            <PDFViewer :source="pdfBase64" style="height: 100vh; width: 100vw">
                                            </PDFViewer>
                                        </div>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>

                                            <v-btn text="Close " @click="isActive.value = false"></v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </v-dialog>

                            <v-btn size="x-small" class="bg-light-blue-darken-3"
                                @click="viewFileXLS(item.hep_two_id, item.official_list)">View Excel</v-btn>

                        </span>
                    </template>

                    <template v-slot:item.actions="{ item }">
                        <span class="flex w-full flex-col  gap-2 py-4">

                            <!-- Edit -->
                            <v-dialog max-width="700">
                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn size="x-small" block v-bind="activatorProps" color="surface-variant"
                                        text="Edit" variant="flat" @click="openUpdate(item)"
                                        :disabled='item.status != `Returned to Dean`'></v-btn>

                                    <!-- ></v-btn> -->
                                </template>
                                <template v-slot:default="{ isActive }">
                                    <v-card class="px-8 py-8">
                                        <h3
                                            class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4 ">
                                            Edit Record</h3>
                                        <p>{{ item.tb_id }}</p>

                                        <Form @submit="submitUpdate(item.hep_two_id)">

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Campus</p>
                                            <Field type="text" name='campus' placeholder="Type here" disabled
                                                class="input mt-2 input-bordered w-full " v-model="data[0].in_campus"
                                                :rules="validateData" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
                                            <Field type="text" name='department' placeholder="Type here" disabled
                                                class="input mt-2 input-bordered w-full "
                                                v-model="data[0].in_department" :rules="validateData" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Program</p>
                                            <Field as="select" name="program" class="select select-bordered w-full mt-2"
                                                style="border:  1px solid #d2d2d2;" v-model="forUpdate.program_id"
                                                :rules="validateData">
                                                <option disabled selected>Select Program ...</option>
                                                <option v-for="x in collegeProgram" :value="x.id">{{ x.program }}
                                                </option>
                                            </Field>
                                            <ErrorMessage name="program" class="error_message" />


                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Firstname</p>
                                            <Field type="text" name="firstname" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;"
                                                v-model="forUpdate.student_firstname" :rules="validateData" />
                                            <ErrorMessage name="firstname" class="error_message" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Lastname</p>
                                            <Field type="text" name="lastname" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" v-model="forUpdate.student_lastname"
                                                :rules="validateData" />
                                            <ErrorMessage name="lastname" class="error_message" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Middle Initial</p>
                                            <Field type="text" name="m_initial" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;"
                                                v-model="forUpdate.student_middlename" :rules="validateData" />
                                            <ErrorMessage name="m_initial" class="error_message" />


                                            <span class="flex items-center mt-6 gap-2">
                                                <p class="text-0.9 font-Subheader text-gray-500 ">Graduate Tracer Status
                                                </p>
                                                <i class="tooltip tooltip-right"
                                                    data-tip="List down all the 1st semester FY 2021-2022 graduates per degree program and then provide the status for each graduate.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                                    </svg>
                                                </i>
                                            </span>

                                            <Field as="select" name="statuses"
                                                class="select select-bordered w-full mt-2"
                                                style="border:  1px solid #d2d2d2;"
                                                v-model="forUpdate.graduate_tracer_status" :rules="validateData">
                                                <option disabled selected> ...</option>
                                                <option value="Employed">Employed</option>
                                                <option value="Unemployed">Unemployed</option>
                                                <option value="Not Tracked">Not Tracked</option>
                                            </Field>
                                            <ErrorMessage name="statuses" class="error_message" />


                                            <span class="flex items-center mt-6 gap-2">
                                                <p class="text-0.9 font-Subheader text-gray-500 ">Company's Business /
                                                    Type of Business</p>
                                                <i class="tooltip tooltip-right"
                                                    data-tip="Input the employment, business, or company of the graduate. For this purpose, Employment refers to any mode or form of employment regardless of status, including self-employment">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                                    </svg>
                                                </i>
                                            </span>
                                            <Field type="text" name="business" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" v-model="forUpdate.business"
                                                :rules="validateData" />
                                            <ErrorMessage name="business" class="error_message" />


                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Upload Supported File
                                            </p>

                                            <table class="w-full mt-4">
                                                <thead>
                                                    <tr class="bg-gray-700 text-white">
                                                        <th class="border-2 py-2  text-white"></th>
                                                        <th
                                                            class="border-2 py-2  text-white text-center text-0.9 font-Subheader">
                                                            Required Files</th>
                                                        <th
                                                            class="border-2 py-2  text-white text-center text-0.9 font-Subheader ">
                                                            Upload Files
                                                        </th>
                                                        <th>

                                                        </th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td
                                                            class="w-2/12 py-2  border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            1
                                                        </td>
                                                        <td
                                                            class="w-7/12  py-2 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                            Graduate Tracer Study</td>
                                                        <td
                                                            class="w-3/12 py-2  border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            <input type="file" class="ml-5" @change="updateFile1">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            class="w-2/12 py-2  border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            2
                                                        </td>
                                                        <td
                                                            class="w-7/12 py-2  px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                            Official list of FY 2021 Graduates</td>
                                                        <td
                                                            class="w-3/12 py-2  border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            <input type="file" class="ml-5" @change="updateFile2">
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <span class="w-full flex items-center justify-end gap-4 mt-5">


                                                    <v-btn text="Close" @click="isActive.value = false"></v-btn>
                                                    <button class="btn btn-accent  w-2/12 text-white border-0"
                                                        type="submit">Update</button>
                                                </span>
                                            </v-card-actions>

                                        </Form>


                                    </v-card>
                                </template>
                            </v-dialog>

                            <!-- Delete -->
                            <v-dialog max-width="700">

                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn block size="x-small" v-bind="activatorProps" color="surface-variant"
                                        text="Delete" variant="flat"
                                        :disabled='item.status != `Returned to Dean`'></v-btn>

                                    <!-- :disabled='item.status != `Returned to Dean`' -->
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

                                                <v-btn class="bg-red-darken-4" @click="deleteData(item.hep_two_id)">
                                                    Confirm</v-btn>
                                            </v-card-actions>
                                        </form>
                                    </v-card>
                                </template>
                            </v-dialog>

                            <!-- View -->
                            <v-dialog max-width="800">
                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn block size="x-small" v-bind="activatorProps" color="surface-variant"
                                        text="View" variant="flat" @click="ViewHistory(item.hep_two_id)"></v-btn>
                                </template>

                                <template v-slot:default="{ isActive }" class="w-full">
                                    <v-card>
                                        <div class="view-table w-full px-4 py-4 ">
                                            <h3
                                                class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4">
                                                Approval History</h3>

                                            <div class="w-full px-4">
                                                <table class="view-table mt-4 w-full border-0" id="notifTable">

                                                    <tr v-for="(items, index) in approvedLogs">

                                                        <td class=" py-3">
                                                            <v-icon
                                                                :class="{ 'isApproved': items.status === 'Approved', 'isReject': items.status === 'Returned' }">mdi-history</v-icon>
                                                        </td>
                                                        <td class="py-3">
                                                            <h1 class="text-sm"
                                                                :class="{ 'isApproved': items.status === 'Approved', 'isReject': items.status === 'Returned' }">
                                                                {{ items.status }} by {{ items.role }}</h1>
                                                        </td>
                                                        <td class="py-3">
                                                            <p class="text-sm">{{ items.reasons }}<br><i>{{
                                                                    items.remarks }}</i> </p>

                                                        </td>
                                                        <td class="py-3">
                                                            <p class="text-sm">{{ items.created_at }}</p>

                                                        </td>

                                                    </tr>


                                                </table>
                                            </div>

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

    </div>


</template>

<style scoped>
    @import url('../../style/Dean/HE_OCI_2_style.css');

    :deep(.v-table > .v-table__wrapper > table > tbody > tr > th, .v-table > .v-table__wrapper > table > thead > tr > th, .v-table > .v-table__wrapper > table > tfoot > tr > th){
        border: 1px solid white;
    }

    .isBtnActive {
        background-color: #6b7280;
        color: white;
    }

    .isBtnActive {
        background-color: white;
        color: #111827;
    }

    .notBtnActive{
        background-color: #6b7280;
        color: white;
    }

    .table_cont ::v-deep(.v-table .v-table__wrapper > table > thead > tr > th){
            border: 1px solid white;
    }

    
    .view-table >tr:nth-child(even) {background-color: #f2f2f2;}

</style>