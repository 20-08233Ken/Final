<script src="../../Scripts/Dean/HE_OCI_2.js" >
</script>

<template>
    <div v-if="isAdd" role="alert" class="alert alert-success w-5/12 text-white fixed top-20 z-50 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="text-white">Data Addedd Successfully!</span>
    </div>

    <!-- <h1 class="self-center w-9/12 w-full text-center font-Header text-xl text-Red-Rose">Percentage of graduates (2 years prior) that are employed</h1>
    <p class="w-full text-center text-gray-400">Higher Education Program: Outcome Indicator 2</p>
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



    <div class="w-full overflow-x-auto shadow-card2 mt-4 px-4 py-4 rounded-lg">
        <p class="w-full text-center text-gray-400">Higher Education Program: Outcome Indicator 2</p>
        <p class="w-full text-center text-gray-400">College of Engineering</p>

        <div role="tablist" class="tabs tabs-lifted mt-8">
            <input type="radio" name="my_tabs_2" role="tab" class="tab font-Subheader text-base text-Red-Rose"
                aria-label="Form" checked />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">

                <Form @submit="addData">

                    <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                    <Field type="text" name='campus' placeholder="Type here" disabled
                        class="input mt-2 input-bordered w-full " v-model="data[0].in_campus" :rules="validateData" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
                    <Field type="text" name='department' placeholder="Type here" disabled
                        class="input mt-2 input-bordered w-full " v-model="data[0].in_department"
                        :rules="validateData" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Program</p>
                    <Field as="select" name="program" class="select select-bordered w-full mt-2"
                        style="border:  1px solid #d2d2d2;" v-model="in_program" :rules="validateData">
                        <option disabled selected>Select Program ...</option>
                        <option v-for="x in collegeProgram" :value="x.program">{{ x.program }}</option>
                    </Field>
                    <ErrorMessage name="program" class="error_message" />


                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Firstname</p>
                    <Field type="text" name="firstname" placeholder="Type here"
                        class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;" v-model="in_fname"
                        :rules="validateData" />
                    <ErrorMessage name="firstname" class="error_message" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Lastname</p>
                    <Field type="text" name="lastname" placeholder="Type here" class="input mt-2 input-bordered w-full "
                        style="border:  1px solid #d2d2d2;" v-model="in_lname" :rules="validateData" />
                    <ErrorMessage name="lastname" class="error_message" />

                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Middle Initial</p>
                    <Field type="text" name="m_initial" placeholder="Type here"
                        class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;" v-model="in_mname"
                        :rules="validateData" />
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


                    <!-- <p class="text-0.9 font-Subheader text-gray-500 mt-6">Company's Business / Type of Business</p> -->
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

                    <v-dialog max-width="1000">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn v-bind="activatorProps" color="surface-variant" text="Upload File" variant="flat"
                                class="w-full mt-2 font-Subheader" size="large"></v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                            <v-card title="Upload File">

                                <v-card-text>
                                    <h1 class="font-Subheader">Higher Education Program: Outcome Indicator 2</h1>
                                    <h2 class="text-0.9 ">Percentage of graduates (2 years prior) that are employed</h2>

                                    <table class="w-full mt-4">
                                        <thead>
                                            <tr>
                                                <th class="border-2 "></th>
                                                <th class="border-2 text-center text-0.9 text-Subheader text-gray-700">
                                                    Required Files</th>
                                                <th class="border-2 text-center text-0.9 text-Subheader text-gray-700">
                                                    Upload Files</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td class="w-2/12 border-2 text-0.9 text-Subheader text-gray-700 ">1
                                                </td>
                                                <td class="w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                    Graduate Tracer Study</td>
                                                <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                    <input type="file" class="ml-5">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="w-2/12 border-2 text-0.9 text-Subheader text-gray-700 ">2
                                                </td>
                                                <td class="w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                    Official list of FY 2021 Graduates</td>
                                                <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                    <input type="file" class="ml-5">
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn text="Close " @click="isActive.value = false"></v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>

                    <span class="w-full flex items-center justify-end gap-2 mt-5">
                        <button class="btn w-2/12 bg-white border-0">Add</button>
                    </span>
                </Form>



            </div>

            <input type="radio" name="my_tabs_2" role="tab" class="tab font-Subheader text-base text-Red-Rose"
                aria-label="Table" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">

                <table class="table-zebra table-md">
                    <thead>
                        <tr class="bg-gray-700 ">
                            <th></th>
                            <th class="text-0.9 text-white font-Subheader border-r-1 border-white">Campus</th>
                            <th class="text-0.9 text-white font-Subheader border-r-1 border-white">Department</th>
                            <th class="text-0.9 text-white font-Subheader border-r-1 border-white">Program</th>
                            <th class="text-0.9 text-white font-Subheader border-r-1 border-white">Name</th>
                            <th class="text-0.9 text-white font-Subheader border-r-1 border-white">Status</th>
                            <th class="text-0.9 text-white font-Subheader border-r-1 border-white">Company's Business /
                                Type of Business</th>
                            <th class="text-0.9 text-white font-Subheader border-r-1 border-white">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in sampleData">
                            <th>{{ item.tb_id }}</th>
                            <td>{{ item.tb_campus }}</td>
                            <td>{{ item.tb_department }}</td>
                            <td>{{ item.tb_program }}</td>
                            <td>{{ item.tb_fname }} {{ item.tb_mname }} {{ item.tb_lname }}</td>
                            <td>{{ item.tb_status }}</td>
                            <td>{{ item.tb_company }}</td>
                            <td class="flex flex-col items-center gap-2 ">
                                <button class="btn btn-xs btn-ghost font-Subheader w-full text-green-700 shadow-0 "
                                    onclick="openEdit.showModal()">Edit</button>
                                <button
                                    class="btn btn-xs btn-ghost font-Subheader w-full text-Red-Rose shadow-0 ">Delete</button>
                                <button class="btn btn-xs btn-ghost font-Subheader w-full text-blue-700 shadow-0 "
                                    onclick="openHistory.showModal()">View</button>
                                <dialog id="openHistory" class="modal">
                                    <div class="modal-box w-11/12 max-w-3xl">
                                        <h3
                                            class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4">
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
                                        <div class="modal-action">
                                            <form method="dialog">
                                                <!-- if there is a button, it will close the modal -->
                                                <button class="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>


                                <dialog id="openEdit" class="modal">
                                    <div class="modal-box w-11/12 max-w-3xl px-8">
                                        <h3
                                            class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4 ">
                                            Edit Record</h3>

                                        <Form class="mt-4">

                                            <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                                            <Field type="text" name='campus' placeholder="Type here" disabled
                                                class="input mt-2 input-bordered w-full " v-model="data[0].in_campus"
                                                :rules="validateData" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
                                            <Field type="text" name='department' placeholder="Type here" disabled
                                                class="input mt-2 input-bordered w-full "
                                                v-model="data[0].in_department" :rules="validateData" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Program</p>
                                            <Field as="select" name="program" class="select select-bordered w-full mt-2"
                                                style="border:  1px solid #d2d2d2;" v-model="in_program"
                                                :rules="validateData">
                                                <option disabled selected>Select Program ...</option>
                                                <option v-for="x in collegeProgram" :value="x.program">{{ x.program }}
                                                </option>
                                            </Field>
                                            <ErrorMessage name="program" class="error_message" />


                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Firstname</p>
                                            <Field type="text" name="firstname" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" v-model="in_fname"
                                                :rules="validateData" />
                                            <ErrorMessage name="firstname" class="error_message" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Lastname</p>
                                            <Field type="text" name="lastname" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" v-model="in_lname"
                                                :rules="validateData" />
                                            <ErrorMessage name="lastname" class="error_message" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Middle Initial</p>
                                            <Field type="text" name="m_initial" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" v-model="in_mname"
                                                :rules="validateData" />
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
                                                style="border:  1px solid #d2d2d2;" v-model="in_status"
                                                :rules="validateData">
                                                <option disabled selected> ...</option>
                                                <option value="Employed">Employed</option>
                                                <option value="Unemployed">Unemployed</option>
                                                <option value="Not Tracked">Not Tracked</option>
                                            </Field>
                                            <ErrorMessage name="statuses" class="error_message" />


                                            <!-- <p class="text-0.9 font-Subheader text-gray-500 mt-6">Company's Business / Type of Business</p> -->
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
                                                style="border:  1px solid #d2d2d2;" v-model="in_business"
                                                :rules="validateData" />
                                            <ErrorMessage name="business" class="error_message" />


                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Upload Supported File
                                            </p>


                                            <table class="w-full mt-4">
                                                <thead>
                                                    <tr>
                                                        <th class="border-2 "></th>
                                                        <th
                                                            class="border-2 text-center text-0.9 text-Subheader text-gray-700">
                                                            Required Files</th>
                                                        <th
                                                            class="border-2 text-center text-0.9 text-Subheader text-gray-700">
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
                                                            Graduate Tracer Study</td>
                                                        <td
                                                            class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            <input type="file" class="ml-5">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            class="w-2/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            2</td>
                                                        <td
                                                            class="w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                            Official list of FY 2021 Graduates</td>
                                                        <td
                                                            class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            <input type="file" class="ml-5">
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>


                                            <span class="w-full flex items-center justify-end gap-2 mt-5">
                                                <button
                                                    class="btn btn-accent  w-2/12 text-white border-0">Update</button>
                                            </span>
                                        </Form>

                                    </div>
                                </dialog>
                            </td>
                        </tr>


                    </tbody>
                </table>


            </div>


        </div>

    </div>
</template>

<style scoped>
@import url('../../style//Dean/HE_OCI_2_style.css');
</style>