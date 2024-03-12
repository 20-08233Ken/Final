    <script src="../../Scripts/Dean/AE_OCI_1.js" >

</script>

<template>
    <div v-if="isAdd" role="alert" class="alert alert-success w-5/12 text-white fixed top-20 z-50 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="text-white">Data Addedd Successfully!</span>
    </div>

    <!-- <h1 class="self-center w-9/12  text-center font-Header text-xl text-Red-Rose"> Percentage of graduate school faculty engaged in research work</h1>
    <p class="w-full text-center text-gray-400">Advanced Education Program: Outcome Indicator 1</p>
    <p class="w-full text-center text-gray-400">College of Engineering</p> -->

    <div class="flex  shadow-card2 py-8 px-8 rounded-lg gap-4 bg-gray-700">
        <i class="mt-4" style="color: #BEFFF7;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
            </svg>
        </i>
        <span class="flex flex-col justify-center w-9/12">
            <h1 class="w-full  font-Header text-lg text-white">Percentage of graduates (2 years prior) that are employed
            </h1>
        </span>

        <span class="flex w-3/12 items-center justify-end">
            <notification />
        </span>
    </div>


    <div class="w-full overflow-x-auto shadow-card2 mt-4 px-8 py-4 rounded-lg">
        <p class="w-full text-center text-gray-400">Higher Education Program: Outcome Indicator 1</p>
        <p class="w-full text-center text-gray-400">College of Engineering</p>

        <div class="w-full flex justify-center   gap-2 mt-8">
            <button class="btn   w-6/12" :class="{'isDataActive':isDataActive===1}" @click="changeData(1)">
                Form
            </button>

            <button class="btn   w-6/12" :class="{'isDataNotActive':isDataActive===2}" @click="changeData(2)">
                Table
            </button>


        </div>
        <div class="w-full flex flex-col mt-8" v-if="isDataActive === 1">
            <Form @submit="addData">
                <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                <Field type="text" name="campus" placeholder="Type here" disabled
                    class="input mt-2 input-bordered w-full " v-model="data[0].in_campus" :rules="validateData" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
                <Field type="text" name="department" placeholder="Type here" disabled
                    class="input mt-2 input-bordered w-full " v-model="data[0].in_department" :rules="validateData" />


                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Firstname</p>
                <Field type="text" name="fname" placeholder="Type here" class="input mt-2 input-bordered w-full "
                    style="border:  1px solid #d2d2d2;" v-model="in_fname" :rules="validateData" />
                <ErrorMessage name="fname" class="error_message" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Lastname</p>
                <Field type="text" name="lname" placeholder="Type here" class="input mt-2 input-bordered w-full "
                    style="border:  1px solid #d2d2d2;" v-model="in_lname" :rules="validateData" />
                <ErrorMessage name="lname" class="error_message" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Middle Initial</p>
                <Field type="text" name="m_initial" placeholder="Type here" class="input mt-2 input-bordered w-full "
                    style="border:  1px solid #d2d2d2;" v-model="in_mname" :rules="validateData" />
                <ErrorMessage name="m_initial" class="error_message" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6"> Position</p>
                <Field type="text" name="position" placeholder="Type here" class="input mt-2 input-bordered w-full "
                    style="border:  1px solid #d2d2d2;" v-model="in_position" :rules="validateData" />
                <ErrorMessage name="position" class="error_message" />

                <span class="flex items-center mt-6 gap-2">
                    <p class="text-0.9 font-Subheader text-gray-500 ">Category</p>
                    <i class="tooltip tooltip-right" data-tip="Category of engagement of each listed faculty member">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </i>
                </span>
                <Field as='select' name="engagement" class="select select-bordered w-full mt-2"
                    style="border:  1px solid #d2d2d2;" v-model="in_engagement" :rules="validateData">
                    <option disabled selected>Select Engagement ...</option>
                    <option v-for="x in facultyEngagement" :value="x.key"> {{ x.engagement }}</option>

                </Field>
                <ErrorMessage name="engagement" class="error_message" />

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
                                Scanned copy of enrollment form</td>
                            <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                <input type="file" class="ml-5" @change="handleFileUpload1">
                            </td>
                        </tr>
                        <tr>
                            <td class="border-2 text-0.9 text-Subheader text-gray-700">2</td>
                            <td class="px-3 border-2 text-0.9 text-Subheader text-gray-700">Scanned
                                copy of latest research conducted</td>
                            <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                <input type="file" class="ml-5" @change="handleFileUpload2">
                            </td>
                        </tr>
                        <tr>
                            <td class="border-2 text-0.9 text-Subheader text-gray-700">3</td>
                            <td class="px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                Documentation of utilized technlogy</td>
                            <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                <input type="file" class="ml-5" @change="handleFileUpload3">
                            </td>
                        </tr>
                        <tr>
                            <td class="border-2 text-0.9 text-Subheader text-gray-700">4</td>
                            <td class="px-3 border-2 text-0.9 text-Subheader text-gray-700">Activity
                                report of extension program</td>
                            <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                <input type="file" class="ml-5" @change="handleFileUpload4">
                            </td>
                        </tr>
                        <tr>
                            <td class="border-2 text-0.9 text-Subheader text-gray-700">5</td>
                            <td class="px-3 border-2 text-0.9 text-Subheader text-gray-700">Scanned
                                copy of enrollment form</td>
                            <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                <input type="file" class="ml-5" @change="handleFileUpload5">
                            </td>
                        </tr>
                    </tbody>
                </table>

                <span class="w-full flex items-center justify-end gap-2 mt-5">
                    <button class="btn  bg-emerald-600 w-2/12 text-white border-0" @click="showFiles()">Add</button>
                </span>
            </Form>
        </div>

        <div class="w-full flex flex-col mt-8 overflow-x-auto" v-if="isDataActive === 2">
            <table class="table-zebra table-md">
                <thead>
                    <tr class="bg-gray-700 ">
                        <th></th>
                        <th class="text-0.8 text-white font-Subheader border-r-1 border-white ">Campus</th>
                        <th class="text-0.8 text-white font-Subheader border-r-1 border-white ">Department</th>
                        <th class="text-0.8 text-white font-Subheader border-r-1 border-white ">Program</th>
                        <th class="text-0.8 text-white font-Subheader border-r-1 border-white ">Name</th>
                        <th class="text-0.8 text-white font-Subheader border-r-1 border-white ">PLANTILLA Position</th>
                        <th class="text-0.8 text-white font-Subheader border-r-1 border-white ">Faculty Engagement</th>
                        <th class="text-0.8 text-white font-Subheader border-r-1 border-white ">Duration</th>
                        <th class="text-0.8 text-center  text-white font-Subheader border-r-1 border-white">Supported Documents</th>

                        <th class="text-0.8 text-white font-Subheader border-r-1 border-white "> Approval Status</th>
                        <th class="text-0.8 text-white font-Subheader border-r-1 border-white "> Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in sampleData">

                        <th  class="text-0.8">{{ item.tb_id }}</th>
                        <td  class="text-0.8">{{ item.tb_campus }}</td>
                        <td  class="text-0.8">{{ item.tb_department }}</td>
                        <td  class="text-0.8">{{ item.tb_program }}</td>
                        <td  class="text-0.8">{{ item.tb_fname }} {{ item.tb_mname }} {{ item.tb_lname }}</td>
                        <td  class="text-0.8">{{ item.tb_position }}</td>
                        <td  class="text-0.8">{{ item.tb_engagement }}</td>
                        <td  class="text-0.8">{{ item.tb_duration }}</td>
                        <td></td>
                        <td  class="text-0.8">{{ item.tb_approval}}</td>
                        <td class="flex flex-col items-center gap-2">
                            <v-dialog max-width="700">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn
                               
                                size="x-small"
                                block
                                v-bind="activatorProps"
                                color="surface-variant"
                                text="Edit"
                                variant="flat"
                                :disabled='item.tb_approval === `Approved`'
                                ></v-btn>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-card class="px-8 py-8">
                                    <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4 ">
                                        Edit Record</h3>

                                        <Form @submit="addData">
                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Campus</p>
                <Field type="text" name="campus" placeholder="Type here" disabled
                    class="input mt-2 input-bordered w-full " v-model="data[0].in_campus" :rules="validateData" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
                <Field type="text" name="department" placeholder="Type here" disabled
                    class="input mt-2 input-bordered w-full " v-model="data[0].in_department" :rules="validateData" />


                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Firstname</p>
                <Field type="text" name="fname" placeholder="Type here" class="input mt-2 input-bordered w-full "
                    style="border:  1px solid #d2d2d2;" v-model="in_fname" :rules="validateData" />
                <ErrorMessage name="fname" class="error_message" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Lastname</p>
                <Field type="text" name="lname" placeholder="Type here" class="input mt-2 input-bordered w-full "
                    style="border:  1px solid #d2d2d2;" v-model="in_lname" :rules="validateData" />
                <ErrorMessage name="lname" class="error_message" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6">Middle Initial</p>
                <Field type="text" name="m_initial" placeholder="Type here" class="input mt-2 input-bordered w-full "
                    style="border:  1px solid #d2d2d2;" v-model="in_mname" :rules="validateData" />
                <ErrorMessage name="m_initial" class="error_message" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-6"> Position</p>
                <Field type="text" name="position" placeholder="Type here" class="input mt-2 input-bordered w-full "
                    style="border:  1px solid #d2d2d2;" v-model="in_position" :rules="validateData" />
                <ErrorMessage name="position" class="error_message" />

                <span class="flex items-center mt-6 gap-2">
                    <p class="text-0.9 font-Subheader text-gray-500 ">Category</p>
                    <i class="tooltip tooltip-right" data-tip="Category of engagement of each listed faculty member">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </i>
                </span>
                <Field as='select' name="engagement" class="select select-bordered w-full mt-2"
                    style="border:  1px solid #d2d2d2;" v-model="in_engagement" :rules="validateData">
                    <option disabled selected>Select Engagement ...</option>
                    <option v-for="x in facultyEngagement" :value="x.key"> {{ x.engagement }}</option>

                </Field>
                <ErrorMessage name="engagement" class="error_message" />

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
                                Scanned copy of enrollment form</td>
                            <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                <input type="file" class="ml-5" @change="handleFileUpload1">
                            </td>
                        </tr>
                        <tr>
                            <td class="border-2 text-0.9 text-Subheader text-gray-700">2</td>
                            <td class="px-3 border-2 text-0.9 text-Subheader text-gray-700">Scanned
                                copy of latest research conducted</td>
                            <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                <input type="file" class="ml-5" @change="handleFileUpload2">
                            </td>
                        </tr>
                        <tr>
                            <td class="border-2 text-0.9 text-Subheader text-gray-700">3</td>
                            <td class="px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                Documentation of utilized technlogy</td>
                            <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                <input type="file" class="ml-5" @change="handleFileUpload3">
                            </td>
                        </tr>
                        <tr>
                            <td class="border-2 text-0.9 text-Subheader text-gray-700">4</td>
                            <td class="px-3 border-2 text-0.9 text-Subheader text-gray-700">Activity
                                report of extension program</td>
                            <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                <input type="file" class="ml-5" @change="handleFileUpload4">
                            </td>
                        </tr>
                        <tr>
                            <td class="border-2 text-0.9 text-Subheader text-gray-700">5</td>
                            <td class="px-3 border-2 text-0.9 text-Subheader text-gray-700">Scanned
                                copy of enrollment form</td>
                            <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                <input type="file" class="ml-5" @change="handleFileUpload5">
                            </td>
                        </tr>
                    </tbody>
                </table>

                <span class="w-full flex items-center justify-end gap-2 mt-5">
                    <button class="btn  bg-emerald-600 w-2/12 text-white border-0" @click="showFiles()">Add</button>
                </span>
            </Form>

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

                            <v-dialog max-width="700">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn
                                block
                                size="x-small"
                                v-bind="activatorProps"
                                color="surface-variant"
                                text="Delete"
                                variant="flat"
                                :disabled='item.tb_approval === `Approved`'
                                ></v-btn>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-card title="Dialog">
                                <v-card-text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn
                                    text="Close Dialog"
                                    @click="isActive.value = false"
                                    ></v-btn>
                                </v-card-actions>
                                </v-card>
                            </template>
                            </v-dialog>

                            <v-dialog max-width="700">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn
                                block
                                size="x-small"
                                v-bind="activatorProps"
                                color="surface-variant"
                                text="View"
                                variant="flat"
                               
                                ></v-btn>
                            </template>

                            <template v-slot:default="{ isActive }" class="w-full">
                                <v-card>
                                    <div class="w-full px-4 py-4">
                                    <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4">
                                        Approval History</h3>

                                    <table class="mt-4 w-full border-0" id="notifTable">

                                        <tr>
                                            <td class="w-1/12">
                                                <v-icon class="text-green-700">mdi-history</v-icon>
                                            </td>
                                            <td>
                                                <h1>Approved by VPAA</h1>
                                            </td>
                                            <td>
                                                <p><i>No Comment</i></p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="w-1/12">
                                                <v-icon class="text-green-700">mdi-history</v-icon>
                                            </td>
                                            <td>
                                                <h1>Approved by VPAA</h1>
                                            </td>
                                            <td>
                                                <p><i>No Comment</i></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="w-1/12">
                                                <v-icon class="text-green-700">mdi-history</v-icon>
                                            </td>
                                            <td>
                                                <h1>Approved by VPAA</h1>
                                            </td>
                                            <td>
                                                <p><i>No Comment</i></p>
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
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>
    </div>


</template>

<style scoped>
    @import url('../../style//Dean/AE_OCI_1_style.css');
</style>