<script src="../../Scripts/Dean/HE_OCI_1.js">
</script>

<template>
    <div v-if="isAdd" role="alert" class="alert alert-success w-5/12 text-white fixed top-20 z-50 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="text-white">Data Addedd Successfully!</span>
    </div>

    <div class="flex  shadow-card2 py-8 px-8 rounded-lg gap-4 bg-gray-700">

        <i class="mt-4" style="color: #BEFFF7;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
            </svg>
        </i>
        <span class="flex flex-col justify-center  w-9/12">
            <h1 class="w-full  font-Header text-lg text-white">Percentage of first-time licensure exam takers that pass
                the licensure exams</h1>
        </span>

        <span class="flex w-3/12 items-center justify-end">
            <notification />
        </span>
    </div>


    <div class="w-full overflow-x-auto shadow-card2 mt-4 px-8 py-4 rounded-lg">
        <p class="w-full text-center text-gray-400">Higher Education Program: Outcome Indicator 1</p>
        <p class="w-full text-center text-gray-400">College of Engineering</p>

        <div class="w-full flex justify-center   gap-2 mt-10">
            <button class="btn   w-6/12" :class="{ 'isDataActive': isDataActive === true }" @click="changeData(true)">
                Table
            </button>

            <button class="btn   w-6/12" :class="{ 'isDataNotActive': isDataActive === false }"
                @click="changeData(false)">
                Form
            </button>
        </div>

        <div class="w-full flex flex-col mt-8" v-if="isDataActive === false">
            <Form @submit="addData">

                <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                <Field type="text" name="campus" placeholder="Type here" disabled
                    class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                    v-model="data[0].in_campus" :rules="validateInput" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
                <Field type="text" placeholder="Type here" name="department" disabled
                    class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                    v-model="data[0].in_department" :rules="validateInput" />


                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Program</p>
                <Field as="select" class="select select-bordered w-full mt-2" style="border:  1px solid #d2d2d2;"
                    v-model="in_program" name="program" :rules="validateInput">
                    <option disabled selected>Select Program ...</option>
                    <option v-for="x in collegeProgram" :value="x.id">{{ x.program }}</option>
                </Field>
                <ErrorMessage name="program" class="error_message" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Exam Date</p>
                <Field type="date" placeholder="Type here" class="input mt-2 input-bordered w-full" name="exam_date"
                    style="border:  1px solid #d2d2d2;" v-model="in_examDate" :rules="validateInput" />
                <ErrorMessage name="exam_date" class="error_message" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Number of First-time Takers</p>
                <Field type="number" placeholder="Type here" class="input mt-2 input-bordered w-full" defa
                    style="border:  1px solid #d2d2d2;" v-model="in_takers" name="no_takers" :rules="checkNegative" />
                <ErrorMessage name="no_takers" class="error_message" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Number of First-time Passers</p>
                <Field type="number" placeholder="Type here" class="input mt-2 input-bordered w-full"
                    style="border:  1px solid #d2d2d2;" v-model="in_passers" name="no_passers" :rules="checkNegative" />
                <ErrorMessage name="no_passers" class="error_message" />



                <span class="flex items-center mt-6 gap-2">
                    <p class="text-0.9 font-Subheader text-gray-500 ">Upload Supported File</p>
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
                                <th class="border-2 text-white"></th>
                                <th class="border-2 text-white text-center text-0.9 font-Subheader ">
                                    Required Files</th>
                                <th class="border-2 text-white text-center text-0.9 font-Subheader ">
                                    Upload Files
                                </th>
                                <th>

                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td class="w-2/12 border-2 text-0.9 text-Subheader text-gray-700 ">1
                                </td>
                                <td class="w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                    PRC Official Results</td>
                                <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                    <input type="file" class="ml-5" accept=".pdf" @change="handleFileUpload">
                                </td>
                                <td>

                                </td>
                            </tr>

                        </tbody>
                    </table>

                </span>



                <span class="w-full flex items-center justify-end gap-2 mt-5">
                    <button class="btn bg-emerald-600 text-white w-2/12 " type="submit">Add</button>
                </span>
            </Form>
        </div>

        <div class="w-full flex flex-col mt-8 overflow-x-auto " v-if="isDataActive === true">
            <table class="table-zebra table-sm" >
                <thead>
                    <tr class="bg-gray-700 ">
                        <th class="text-0.8 text-center text-white font-Subheader border-r-1 border-white">H</th>
                        <th class="text-0.8 text-center text-white font-Subheader border-r-1 border-white">Campus</th>
                        <th class="text-0.8 text-center text-white font-Subheader border-r-1 border-white">Department
                        </th>
                        <th class="text-0.8 text-center text-white font-Subheader border-r-1 border-white">Program</th>
                        <th class="text-0.8 text-center text-white font-Subheader border-r-1 border-white">Exam Date
                        </th>
                        <th class="text-0.8 text-center text-white font-Subheader border-r-1 border-white">Number of
                            Passers
                        </th>
                        <th class="text-0.8 text-center  text-white font-Subheader border-r-1 border-white">Number of
                            Takers</th>
                        <th class="text-0.8 text-center  text-white font-Subheader border-r-1 border-white">Supported
                            Documents</th>
                        <th class="text-0.8 text-center text-white font-Subheader border-r-1 border-white">Approval
                            Status</th>
                        <th class="text-0.8 text-center text-white font-Subheader border-r-1 border-white">Action</th>


                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in hepData">
                        <td class="text-0.8">{{ item.hep_code }}</td>
                        <td class="text-0.8">{{ item.campus }}</td>
                        <td class="text-0.8">{{ item.college }}</td>
                        <td class="text-0.8">{{ item.program }}</td>
                        <td class="text-0.8">{{ item.exam_date }}</td>
                        <td class="text-0.8">{{ item.number_of_passers }}</td>
                        <td class="text-0.8">{{ item.number_of_takers }}</td>
                        <td> <v-btn size="x-small" class="bg-teal-darken-1">  <a :href=item.docs target="_blank">View PDF</a></v-btn></td>
                        <td class="text-0.8">{{ item.status }}</td>
                        <td class="flex flex-col items-center gap-2 px-2">

                            <!-- Edit -->
                            <v-dialog max-width="700">
                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn size="x-small" block v-bind="activatorProps" color="surface-variant"
                                        text="Edit" variant="flat" :disabled='item.approval != `Returned`' @click="openUpdate(item)"></v-btn>
                                </template>

                                <template v-slot:default="{ isActive }">
                                    <v-card class="px-8 py-8">
                                        <h3
                                            class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4 ">
                                            Edit Record</h3>
                                        <p>{{ item.tb_id }}</p>
                                        
                                        <Form class="mt-4">

                                            <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                                            <Field type="text" name="campus" placeholder="Type here" disabled
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" v-model="data[0].in_campus"
                                                :rules="validateInput" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
                                            <Field type="text" placeholder="Type here" name="department" disabled
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" v-model="data[0].in_department"
                                                :rules="validateInput" />


                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Program</p>
                                            <Field as="select" class="select select-bordered w-full mt-2"
                                                style="border:  1px solid #d2d2d2;"  name="program"
                                                :rules="validateInput" v-model="forUpdate.program_id">
                                                <option disabled selected>Select Program ...</option>
                                                <option v-for="x in collegeProgram" :value="x.id">{{ x.program }}
                                                </option>
                                            </Field>
                                            <ErrorMessage name="program" class="error_message" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Exam Date</p>
                                            <Field type="date" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full" name="exam_date"
                                                style="border:  1px solid #d2d2d2;" v-model="forUpdate.exam_date"
                                                :rules="validateInput" />
                                            <ErrorMessage name="exam_date" class="error_message" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Number of First-time
                                                Takers</p>
                                            <Field type="number" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full" defa
                                                style="border:  1px solid #d2d2d2;" v-model="forUpdate.number_of_takers" name="no_takers"
                                                :rules="checkNegative" />
                                            <ErrorMessage name="no_takers" class="error_message" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Number of First-time
                                                Passers</p>
                                            <Field type="number" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full"
                                                style="border:  1px solid #d2d2d2;" v-model="forUpdate.number_of_passers"
                                                name="no_passers" :rules="checkNegative" />
                                            <ErrorMessage name="no_passers" class="error_message" />



                                            <span class="flex items-center mt-6 gap-2">
                                                <p class="text-0.9 font-Subheader text-gray-500 ">Upload Supported File
                                                </p>
                                                <i class="tooltip" tooltip-right
                                                    data-tip=" Provide the supporting documentation used in reference to the information. You may also provide links to the scanned copies for easier reference">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-5 h-5">
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
                                                        <td
                                                            class="w-2/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            1
                                                        </td>
                                                        <td
                                                            class="w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                            PRC Official Results</td>
                                                        <td
                                                            class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            <input type="file" class="ml-5" accept=".pdf">
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>




                                            <span class="w-full flex items-center justify-end gap-2 mt-5">
                                                <button
                                                    class="btn btn-accent  w-2/12 text-white border-0">Update</button>
                                            </span>
                                        </Form>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>

                                            <v-btn text="Close" @click="isActive.value = false"></v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </v-dialog>

                            <!-- Delete -->
                            <v-dialog max-width="700">

                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn block size="x-small" v-bind="activatorProps" color="surface-variant"
                                        text="Delete" variant="flat"
                                        :disabled='item.approval != ``'></v-btn>
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

                                                <v-btn class="bg-red-darken-4" @click="deleteData(item.hep_one_id)"> Confirm</v-btn>
                                            </v-card-actions>
                                        </form>
                                    </v-card>
                                </template>
                            </v-dialog>

                            <!-- View -->
                            <v-dialog max-width="700">
                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn block size="x-small" v-bind="activatorProps" color="surface-variant"
                                        text="View" variant="flat"></v-btn>
                                </template>

                                <template v-slot:default="{ isActive }" class="w-full">
                                    <v-card>
                                        <div class="w-full px-4 py-4">
                                            <h3
                                                class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4">
                                                Approval History</h3>

                                            <table class="mt-4 w-full border-0" id="notifTable">

                                                <tr v-for="(items, index) in approvedLogs">
                                                    <td class="w-1/12">
                                                        <v-icon class="text-green-700">mdi-history</v-icon>
                                                    </td>
                                                    <td>
                                                        <h1>{{ items.status }} by {{ items.role }}</h1>
                                                    </td>
                                                    <td>
                                                        <p>{{ items.reasons }}<br><i>{{ items.remarks }}</i> </p>
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

                        </td>
                    </tr>


                </tbody>
            </table>
        </div>

    </div>
</template>

<style scoped>
@import url('../../style/Dean/HE_OCI_1_style.css');
</style>