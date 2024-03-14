<script src="../../Scripts/QAM/HE_OPI_2.js">


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
            <h1 class="w-full  font-Header text-lg text-white">Percentage of undergraduate programs with accreditation
            </h1>
        </span>

        <span class="flex w-3/12 items-center justify-end">
            <notification />
        </span>
    </div>

    <div class="w-full overflow-x-auto shadow-card2 mt-4 px-8 py-4 rounded-lg">
        <p class="w-full text-center text-gray-400">Higher Education Program: Output Indicator 2</p>
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
            <Form @submit="addData">
                <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                <Field name="campus" type="text" placeholder="Type here" disabled
                    class="input mt-2 input-bordered w-full " v-model="data[0].in_campus" :rules="validateData" />


                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Department</p>
                <Field name="department" type="text" placeholder="Type here" class="input mt-2 input-bordered w-full "
                    style="border:  1px solid #d2d2d2;" v-model="data[0].in_department" :rules="validateData" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Undergraduate Programs Offered</p>
                <Field as="select" name="program" class="select select-bordered w-full mt-2"
                    style="border:  1px solid #d2d2d2;" v-model="in_program" :rules="validateData">
                    <option disabled selected>Select Program ...</option>
                    <option v-for="x in collegeProgram" :value="x.program">{{ x.program }}</option>
                </Field>
                <ErrorMessage name="program" class="error_message" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Year of Initial Operation</p>
                <Field name="operation" type="number" placeholder="Type here" class="input mt-2 input-bordered w-full "
                    style="border:  1px solid #d2d2d2;" v-model="in_operation" :rules="validateData" />
                <ErrorMessage name="operation" class="error_message" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Program Accreditation Status</p>
                <Field as="select" name="status" class="select select-bordered w-full mt-2"
                    style="border:  1px solid #d2d2d2;" v-model="in_status" :rules="validateData">
                    <option disabled selected>Level Status ...</option>
                    <option value="Candidate">Candidate</option>
                    <option value="Level 1">Level 1</option>
                    <option value="Level 2">Level 2</option>
                    <option value="Level 3">Level 3</option>
                    <option value="Level 4<">Level 4</option>
                    <option value="Not Accreditable">Not Accreditable</option>

                </Field>
                <ErrorMessage name="status" class="error_message" />


                <span class="flex items-center mt-6 gap-2">
                    <p class="text-0.9 font-Subheader text-Red-Rose text-lg "> Validity of Accreditation</p>
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
                            <th class="border-2 text-white "></th>
                            <th class="border-2 text-white text-center text-0.9 font-Subheader text-gray-700">Required
                                Files
                            </th>
                            <th class="border-2 text-white text-center text-0.9 font-Subheader text-gray-700">Upload
                                Files
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td class="w-2/12 border-2 text-0.9 text-Subheader text-gray-700 ">1</td>
                            <td class="w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700">Supporting
                                documentation</td>
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

        <div class="w-full flex flex-col mt-8 overflow-x-auto " v-if="isDataActive === false">.
            <table class="table-zebra table-sm">
                <thead>
                    <tr class="bg-gray-700 ">
                        <th rowspan="2"></th>
                        <th class="text-0.8 text-white font-Subheader border-r-1 border-white text-center" rowspan="2">Campus
                        </th>
                        <th class="text-0.8 text-white font-Subheader border-r-1 border-white text-center" rowspan="2">
                            Department</th>
                        <th class="text-0.8 text-white font-Subheader border-r-1 border-white text-center" rowspan="2">Program
                        </th>
                        <th class="text-0.8 text-white font-Subheader border-r-1 border-white text-center" rowspan="2">Year of
                            Initial Operation</th>
                        <th class="text-0.8 text-white font-Subheader border-r-1 border-white text-center" rowspan="2">Program
                            Accreditation Status</th>
                        <th class="text-0.8 text-white font-Subheader border-r-1 border-white text-center" colspan="2">Validity
                            of Accreditation</th>

                        <th class="text-0.8 text-white font-Subheader border-r-1 border-white" rowspan="2">Action
                        </th>
                    </tr>
                    <tr class="bg-gray-700 ">
                        <th
                            class="border-r-1 border-t-1 border-white text-0.8 text-center text-white font-Subheader border-r-1 border-white">
                            Period of Validity (From)</th>
                        <th
                            class="border-r-1 border-t-1 border-white text-0.8 text-center  text-white font-Subheader border-r-1 border-white">
                            Period of Validity (To)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index ) in sampleData">
                        <th class="text-0.8">{{ item.tb_id }}</th>
                        <td class="text-0.8">{{ item.tb_campus }}</td>
                        <td class="text-0.8">{{ item.tb_department }}</td>
                        <td class="text-0.8">{{ item.tb_program }}</td>
                        <td class="text-0.8">{{ item.tb_yearOperation }}</td>
                        <td class="text-0.8">{{ item.tb_status }}</td>
                        <td class="text-0.8">{{ item.tb_from }}</td>
                        <td class="text-0.8">{{ item.tb_to }}</td>

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

                                        <Form>
                                            <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                                            <Field name="campus" type="text" placeholder="Type here" disabled
                                                class="input mt-2 input-bordered w-full " v-model="data[0].in_campus"
                                                :rules="validateData" />


                                            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Department</p>
                                            <Field name="department" type="text" placeholder="Type here"
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
                                            <Field name="operation" type="number" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" v-model="in_operation"
                                                :rules="validateData" />
                                            <ErrorMessage name="operation" class="error_message" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Program Accreditation
                                                Status</p>
                                            <Field as="select" name="status" class="select select-bordered w-full mt-2"
                                                style="border:  1px solid #d2d2d2;" v-model="in_status"
                                                :rules="validateData">
                                                <option disabled selected>Level Status ...</option>
                                                <option value="Candidate">Candidate</option>
                                                <option value="Level 1">Level 1</option>
                                                <option value="Level 2">Level 2</option>
                                                <option value="Level 3">Level 3</option>
                                                <option value="Level 4<">Level 4</option>
                                                <option value="Not Accreditable">Not Accreditable</option>

                                            </Field>
                                            <ErrorMessage name="status" class="error_message" />


                                            <span class="flex items-center mt-6 gap-2">
                                                <p class="text-0.9 font-Subheader text-Red-Rose text-lg "> Validity of
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
                                                        <th class="border-2 text-white "></th>
                                                        <th
                                                            class="border-2 text-white text-center text-0.9 font-Subheader text-gray-700">
                                                            Required
                                                            Files
                                                        </th>
                                                        <th
                                                            class="border-2 text-white text-center text-0.9 font-Subheader text-gray-700">
                                                            Upload
                                                            Files
                                                        </th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td
                                                            class="w-2/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            1</td>
                                                        <td
                                                            class="w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                            Supporting
                                                            documentation</td>
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
                                                <button class="btn bg-emerald-600 text-white w-2/12">Add</button>
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

                                                <v-btn class="bg-red-darken-4" @click="deleteData(item.tb_id ,isActive)">
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
    </div>




    <!-- <div class="w-full overflow-x-auto shadow-card2 mt-4 px-4 py-4 rounded-lg">
        <p class="w-full text-center text-gray-400">Higher Education Program: Output Indicator 2</p>
        <p class="w-full text-center text-gray-400">College of Engineering</p>

        <div role="tablist" class="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" class="tab  font-Subheader text-base text-Red-Rose"
                aria-label="Form" checked />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">

                
            </div>

            <input type="radio" name="my_tabs_2" role="tab" class="tab font-Subheader text-base text-Red-Rose"
                aria-label="Table" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 overflow-x-auto">

                

            </div>


        </div>

    </div> -->
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