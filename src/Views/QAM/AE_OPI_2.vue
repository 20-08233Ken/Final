<script src="../../Scripts/QAM/AE_OPI_2.js">

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
        <span class="flex flex-col justify-center w-9/12">
            <h1 class="w-full  font-Header text-lg text-white">Percentage of accredited graduate programs</h1>
        </span>

        <span class="flex w-3/12 items-center justify-end">
            <notification />
        </span>
    </div>



    <div class="w-full overflow-x-auto shadow-card2 mt-4 px-8 py-4 rounded-lg">

        <p class="w-full text-center text-gray-400">Advanced Education Program: Output Indicator 2</p>
        <p class="w-full text-center text-gray-400">College of Engineering</p>

        <div class="w-full flex justify-center   gap-2 mt-10">
            <button class="btn   w-6/12" :class="{ 'isDataActive': isDataActive === true }" @click="changeData(true)">
                Form
            </button>

            <button class="btn   w-6/12" :class="{ 'isDataNotActive': isDataActive === false }"
                @click="changeData(false)">
                Table
            </button>
        </div>

        <div class="w-full flex flex-col mt-8" v-if="isDataActive === true">
            <Form>
                <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                <Field type="text" name="campus" placeholder="Type here" disabled
                    class="input mt-2 input-bordered w-full " v-model="data[0].in_campus" :rules="validateData" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Department</p>
                <Field type="text" name="department" placeholder="Type here" class="input mt-2 input-bordered w-full "
                    style="border:  1px solid #d2d2d2;" v-model="data[0].in_department" :rules="validateData" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Undergraduate Programs Offered</p>
                <Field as="select" name="program" class="select select-bordered w-full mt-2"
                    style="border:  1px solid #d2d2d2;" v-model="in_program" :rules="validateData">
                    <option disabled selected>Select Program ...</option>
                    <option v-for="x in collegeProgram" :value="x.program">{{ x.program }}</option>
                </Field>
                <ErrorMessage name="program" class="error_message" />


                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Year of Initial Operation</p>
                <Field type="number" min="0" name="operation" placeholder="Type here"
                    class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;" v-model="in_operation"
                    :rules="validateData" />
                <ErrorMessage name="operation" class="error_message" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Program Accreditation Status</p>
                <Field as="select" name="status" class="select select-bordered w-full mt-2"
                    style="border:  1px solid #d2d2d2;" v-model="in_status" :rules="validateData">
                    <option disabled selected>Select Status...</option>
                    <option value="Candidate">Candidate</option>
                    <option value="Level 1">Level 1</option>
                    <option value="Level 2">Level 2</option>
                    <option value="Level 3">Level 3</option>
                    <option value="Level 4<">Level 4</option>
                    <option value="Not Accreditable">Not Accreditable</option>

                </Field>
                <ErrorMessage name="status" class="error_message" />


                <span class="flex items-center mt-6 gap-2">
                    <p class="text-0.9 font-Subheader text-Red-Rose text-lg ">Validity of Accreditation</p>
                    <i class="tooltip tooltip-right"
                        data-tip="Provide the Validity of Accreditation of each program. Refer to the issued accreditation certificate">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </i>
                </span>
                <span class="w-full flex gap-2">
                    <span class="w-2/4">
                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">Start Date</p>
                        <Field type="date" name="validity_from" placeholder=" "
                            class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                            v-model="in_from" :rules="validateData" />
                        <ErrorMessage name="validity_from" class="error_message" />
                    </span>
                    <span class="w-2/4">
                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">End Date</p>
                        <Field type="date" name="validity_to" placeholder="" class="input mt-2 input-bordered w-full "
                            style="border:  1px solid #d2d2d2;" v-model="in_to" :rules="validateData" />
                        <ErrorMessage name="validity_to" class="error_message" />
                    </span>
                </span>


                <span class="flex items-center mt-6 gap-2">
                    <p class="text-0.9 font-Subheader text-gray-500 ">Upload Supported File</p>
                    <i class="tooltip tooltip-right"
                        data-tip="Submit relevant documents to verify the information provided">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </i>
                </span>

                <table class="w-full mt-4">
                    <thead>
                        <tr class="bg-gray-700">
                            <th class="border-2 text-white"></th>
                            <th
                                class="border-2 text-white font-Subheader text-center text-0.9 text-Subheader text-gray-700">
                                Required Files</th>
                            <th
                                class="border-2 text-white font-Subheader text-center text-0.9 text-Subheader text-gray-700">
                                Upload Files</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td class="w-2/12 border-2 text-0.9 text-Subheader text-gray-700 ">1</td>
                            <td class="w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                Supporting documentation</td>
                            <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                <input type="file" class="ml-5" @change="handleFileUpload">
                            </td>
                        </tr>


                    </tbody>
                </table>

                <span class="w-full flex items-center justify-end gap-2 mt-5">
                    <button class="btn bg-emerald-600 text-white w-2/12">Add</button>
                </span>
            </Form>
        </div>

        <div class="w-full flex flex-col mt-8 overflow-x-auto " v-if="isDataActive === false">
            <table class="table-zebra table-sm">
                <thead>
                    <tr class="bg-gray-700 ">
                        <th rowspan="2"></th>
                        <th class="text-0.8 text-white text-center font-Subheader border-r-1 border-white" rowspan="2">
                            Campus</th>
                        <th class="text-0.8 text-white text-center font-Subheader border-r-1 border-white" rowspan="2">
                            Department
                        </th>
                        <th class="text-0.8 text-white text-center font-Subheader border-r-1 border-white" rowspan="2">
                            Undergraduate
                            Programs Offered</th>
                        <th class="text-0.8 text-white text-center font-Subheader border-r-1 border-white" rowspan="2">
                            Year of
                            Initial Operation</th>
                        <th class="text-0.8 text-white text-center font-Subheader border-r-1 border-white" rowspan="2">
                            Program
                            Accreditation Status</th>
                        <th class="text-0.8 text-white text-center font-Subheader border-r-1 border-white" colspan="2">
                            Validity of
                            Accreditation</th>
                        <th class="text-0.8 text-white text-center font-Subheader border-r-1 border-white" rowspan="2">
                            Action</th>


                    </tr>

                    <tr class="bg-gray-700 ">
                        <th class="border-t-1 text-0.8 text-center text-white font-Subheader border-r-1 border-white">
                            Period of
                            Validity (From)</th>
                        <th class="border-t-1 text-0.8 text-center text-white font-Subheader border-r-1 border-white">
                            Period of
                            Validity (To)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in sampleData">
                        <th>{{ item.tb_id }}</th>
                        <td>{{ item.tb_campus }}</td>
                        <td>{{ item.tb_department }}</td>
                        <td>{{ item.tb_program }}</td>
                        <td>{{ item.tb_yearOperation }}</td>

                        <td>{{ item.tb_status }}</td>
                        <td>{{ item.tb_from }}</td>
                        <td>{{ item.tb_to }}</td>

                        <td class="flex flex-col items-center gap-2 px-2">

                            <!-- Edit -->
                            <v-dialog max-width="700">
                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn size="x-small" block v-bind="activatorProps" color="surface-variant"
                                        text="Edit" variant="flat" :disabled='item.tb_approval === `Deans`'></v-btn>
                                </template>

                                <template v-slot:default="{ isActive }">
                                    <v-card class="px-8 py-8">
                                        <h3
                                            class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4 ">
                                            Edit Record</h3>

                                        <Form class="mt-4">
                                            <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                                            <Field type="text" name="campus" placeholder="Type here" disabled
                                                class="input mt-2 input-bordered w-full " v-model="data[0].in_campus"
                                                :rules="validateData" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Department</p>
                                            <Field type="text" name="department" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" v-model="data[0].in_department"
                                                :rules="validateData" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Undergraduate Programs
                                                Offered</p>
                                            <Field as="select" name="program" class="select select-bordered w-full mt-2"
                                                style="border:  1px solid #d2d2d2;" v-model="in_program"
                                                :rules="validateData">
                                                <option disabled selected>Select Program ...</option>
                                                <option v-for="x in collegeProgram" :value="x.program">{{ x.program }}
                                                </option>
                                            </Field>
                                            <ErrorMessage name="program" class="error_message" />


                                            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Year of Initial
                                                Operation</p>
                                            <Field type="number" min="0" name="operation" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" v-model="in_operation"
                                                :rules="validateData" />
                                            <ErrorMessage name="operation" class="error_message" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Program Accreditation
                                                Status</p>
                                            <Field as="select" name="status" class="select select-bordered w-full mt-2"
                                                style="border:  1px solid #d2d2d2;" v-model="in_status"
                                                :rules="validateData">
                                                <option disabled selected>Select Status...</option>
                                                <option value="Candidate">Candidate</option>
                                                <option value="Level 1">Level 1</option>
                                                <option value="Level 2">Level 2</option>
                                                <option value="Level 3">Level 3</option>
                                                <option value="Level 4<">Level 4</option>
                                                <option value="Not Accreditable">Not Accreditable</option>

                                            </Field>
                                            <ErrorMessage name="status" class="error_message" />


                                            <span class="flex items-center mt-6 gap-2">
                                                <p class="text-0.9 font-Subheader text-Red-Rose text-lg ">Validity of
                                                    Accreditation</p>
                                                <i class="tooltip tooltip-right"
                                                    data-tip="Provide the Validity of Accreditation of each program. Refer to the issued accreditation certificate">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                                    </svg>
                                                </i>
                                            </span>
                                            <span class="w-full flex gap-2">
                                                <span class="w-2/4">
                                                    <p class="text-0.9 font-Subheader text-gray-500 mt-4">Start Date</p>
                                                    <Field type="date" name="validity_from" placeholder=" "
                                                        class="input mt-2 input-bordered w-full "
                                                        style="border:  1px solid #d2d2d2;" v-model="in_from"
                                                        :rules="validateData" />
                                                    <ErrorMessage name="validity_from" class="error_message" />
                                                </span>
                                                <span class="w-2/4">
                                                    <p class="text-0.9 font-Subheader text-gray-500 mt-4">End Date</p>
                                                    <Field type="date" name="validity_to" placeholder=""
                                                        class="input mt-2 input-bordered w-full "
                                                        style="border:  1px solid #d2d2d2;" v-model="in_to"
                                                        :rules="validateData" />
                                                    <ErrorMessage name="validity_to" class="error_message" />
                                                </span>
                                            </span>


                                            <span class="flex items-center mt-6 gap-2">
                                                <p class="text-0.9 font-Subheader text-gray-500 ">Upload Supported File
                                                </p>
                                                <i class="tooltip tooltip-right"
                                                    data-tip="Submit relevant documents to verify the information provided">
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
                                                    <tr class="bg-gray-700">
                                                        <th class="border-2 text-white"></th>
                                                        <th
                                                            class="border-2 text-white font-Subheader text-center text-0.9 text-Subheader text-gray-700">
                                                            Required Files</th>
                                                        <th
                                                            class="border-2 text-white font-Subheader text-center text-0.9 text-Subheader text-gray-700">
                                                            Upload Files</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td
                                                            class="w-2/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            1</td>
                                                        <td
                                                            class="w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                            Supporting documentation</td>
                                                        <td
                                                            class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            <input type="file" class="ml-5" @change="handleFileUpload">
                                                        </td>
                                                    </tr>


                                                </tbody>
                                            </table>

                                            <span class="w-full flex items-center justify-end gap-2 mt-5">
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn text="Close" @click="isActive.value = false"></v-btn>
                                                </v-card-actions>
                                                <button class="btn bg-emerald-600 text-white w-2/12 font-Subheader">Add</button>
                                            </span>
                                        </Form>
                                    </v-card>
                                </template>
                            </v-dialog>

                            <!-- Delete -->
                            <v-dialog max-width="700">

                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn block size="x-small" v-bind="activatorProps" color="surface-variant"
                                        text="Delete" variant="flat"
                                        :disabled='item.tb_approval === `Approved`'></v-btn>
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
                                                    @click="deleteData(item.tb_id, isActive)">
                                                    Confirm</v-btn>
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
                                                        <h1>{{ items.approvedBy }}</h1>
                                                    </td>
                                                    <td>
                                                        <p><i>{{ items.comment }}</i></p>
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

        <!-- <div role="tablist" class="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" class="tab font-Subheader text-base text-Red-Rose" aria-label="Form" checked/>
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                
                
            </div>
            

            <input type="radio" name="my_tabs_2" role="tab" class="tab font-Subheader text-base text-Red-Rose" aria-label="Table"  />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 overflow-x-auto">
                
                <table class="table-zebra table-md">
                    <thead>
                    <tr class ="bg-gray-700 ">
                        <th rowspan="2"></th> 
                        <th class="text-0.9 text-white font-Subheader border-r-1 border-white" rowspan="2">Campus</th> 
                        <th class="text-0.9 text-white font-Subheader border-r-1 border-white" rowspan="2">Department</th> 
                        <th class="text-0.9 text-white font-Subheader border-r-1 border-white" rowspan="2">Undergraduate Programs Offered</th> 
                        <th class="text-0.9 text-white font-Subheader border-r-1 border-white" rowspan="2">Year of Initial Operation</th> 
                        <th class="text-0.9 text-white font-Subheader border-r-1 border-white" rowspan="2">Program Accreditation Status</th> 
                        <th class="text-0.9 text-white font-Subheader border-r-1 border-white" colspan="2">Validity of Accreditation</th> 
                        <th class="text-0.9 text-white font-Subheader border-r-1 border-white" rowspan="2">Remarks</th> 
                        <th class="text-0.9 text-white font-Subheader border-r-1 border-white" rowspan="2">Action</th>

 
                    </tr>

                    <tr class ="bg-gray-700 ">
                        <th class="border-t-1 text-0.9 text-white font-Subheader border-r-1 border-white">Period of Validity (From)</th> 
                        <th class="border-t-1 text-0.9 text-white font-Subheader border-r-1 border-white">Period of Validity (To)</th> 
                    </tr>
                    </thead> 
                    <tbody>
                    <tr v-for="(item,index) in sampleData">
                        <th>{{item.tb_id}}</th> 
                        <td>{{item.tb_campus}}</td> 
                        <td>{{item.tb_department}}</td> 
                        <td>{{item.tb_program}}</td> 
                        <td>{{item.tb_yearOperation}}</td> 
                        <td>{{item.tb_fBatch_Grad}}</td> 
                        <td>{{item.tb_status}}</td> 
                        <td>{{item.tb_from}}</td> 
                        <td>{{item.tb_to}}</td>
                        <td>{{item.tb_remarks}}</td>
                        <td class="flex items-center gap-4 "> 
                            <button class="mt-2">
                                <i class="text-sky-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                </i>    
                            </button>
                            <button class="mt-2">
                                <i  class="text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>

                                </i>    
                            </button>
                        </td>
                    </tr>


                </tbody>
                </table>
                <span class="w-full flex items-center justify-end gap-2 mt-5">
                    <button class="btn btn-accent w-2/12 bg-white hover:bg-white " @click="submitData">
                        <i class="text-teal-400" :class="{'iconInActive':isIcon === false, 'iconActive': isIcon ===true}">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                        </i>
                        <p>Submit</p>
                        
                    </button>
                    <span class="flex justify-center items-center w-dvw h-svh fixed top-0 left-0" style="background: rgb(0,0,0,0.6);" :class="{'active':isActive == true, 'inActive':isActive == false}">
                        
                        <div class="modal-box" >
                            <h3 class="font-bold text-lg">Reminder</h3>
                            <p class="py-4 text-lg">Please review the information you've provided before proceeding with submission.</p>
                            <h1>After reviewing, please click the <b> "Submit" </b>" button</h1>
                            <div class="modal-action">
                            <form method="dialog">
                                <button class="btn" @click="onClose">Close</button>
                            </form>
                            </div>
                        </div>
                    </span>
                </span>
            </div>

          
        </div> -->

    </div>
</template>

<style scoped>
        .active{
            display: flex;
            flex-direction: column;
        }

        .inActive{
            display: none;
        }

        .iconActive{
            display: flex;

        }
        .iconInActive{
            display: none;
        }
        .error_message{
            color: red;
            font-size: .9rem;
        }
        .isDataNotActive{
            background-color: #94080D;
            color: white;
        }


        .isDataActive{
            background-color: #94080D;
            color: white;
        }
</style>