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
            <h1 class="w-full  font-Header text-lg text-white">Graduate school faculty engaged in research work
            </h1>
            <p class="w-full text-0.9 text-gray-400">Advanced Education Program: Outcome Indicator 1</p>
            <p class="w-full text-0.9 text-gray-400">College of Engineering</p>
        </span>

        <span class="flex w-3/12 items-center justify-end">
            <notification />
        </span>
    </div>

    <div class="w-full flex justify-center gap-2">
        <v-btn class="btn   w-6/12" :class="{ 'isDataActive': isDataActive === 1 }" @click="changeData(1)">
            Table
        </v-btn >

        <v-btn  class="btn   w-6/12" :class="{ 'isDataNotActive': isDataActive === 2 }" @click="changeData(2)">
            Form
        </v-btn >
    </div>

    <div class="w-full overflow-x-auto shadow-card2 mt-1 px-8  rounded-lg">

        <div class="w-full flex flex-col mt-8" v-if="isDataActive === 2">
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

        <div class="w-full flex flex-col mt-3 overflow-x-auto" v-if="isDataActive === 1">
            <v-card>
                <template v-slot:text>
                    <!-- <v-responsive class="mx-auto" max-width="100%"> -->
                    <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
                        hide-details single-line></v-text-field>
                    <!-- </v-responsive> -->
                </template>

                <v-data-table :headers="headers" :items="sampleData" class="elevation-1 " items-per-page="10"
                    :search="search" style="width:100%; overflow-x: scroll;">


                    <template v-slot:item.supported_file="{ item }">
                        <span class="flex w-full  gap-2 py-4">
                            <!-- <v-btn size="x-small" class="bg-light-blue-darken-3"><a :href=item.supported_file
                                target="_blank">View PDF</a> </v-btn> -->

                            <v-btn size="x-small" class="bg-light-blue-darken-3" @click="DownloadFile(item.hep_one_id)">
                            </v-btn>
                        </span>
                    </template>

                    <template v-slot:item.actions="{ item }">
                        <span class="flex w-full flex-col  gap-2 py-4">

                            <!-- Edit -->
                            <v-dialog max-width="700">
                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn size="x-small" block v-bind="activatorProps" color="surface-variant"
                                        text="Edit" variant="flat" :disabled='item.approval != `Returned`'
                                        @click="openUpdate(item)"></v-btn>
                                </template>

                                <template v-slot:default="{ isActive }">
                                    <v-card class="px-8 py-8">
                                        <h3
                                            class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4 ">
                                            Edit Record</h3>
                                        <p>{{ item.tb_id }}</p>

                                        <Form @submit="addData">
                                            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Campus</p>
                                            <Field type="text" name="campus" placeholder="Type here" disabled
                                                class="input mt-2 input-bordered w-full " v-model="data[0].in_campus"
                                                :rules="validateData" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
                                            <Field type="text" name="department" placeholder="Type here" disabled
                                                class="input mt-2 input-bordered w-full "
                                                v-model="data[0].in_department" :rules="validateData" />


                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Firstname</p>
                                            <Field type="text" name="fname" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" v-model="forUpdate.a"
                                                :rules="validateData" />
                                            <ErrorMessage name="fname" class="error_message" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Lastname</p>
                                            <Field type="text" name="lname" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" v-model="forUpdate.a"
                                                :rules="validateData" />
                                            <ErrorMessage name="lname" class="error_message" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Middle Initial</p>
                                            <Field type="text" name="m_initial" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" v-model="forUpdate.a"
                                                :rules="validateData" />
                                            <ErrorMessage name="m_initial" class="error_message" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6"> Position</p>
                                            <Field type="text" name="position" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" v-model="forUpdate.a"
                                                :rules="validateData" />
                                            <ErrorMessage name="position" class="error_message" />

                                            <span class="flex items-center mt-6 gap-2">
                                                <p class="text-0.9 font-Subheader text-gray-500 ">Category</p>
                                                <i class="tooltip tooltip-right"
                                                    data-tip="Category of engagement of each listed faculty member">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                                    </svg>
                                                </i>
                                            </span>
                                            <Field as='select' name="engagement"
                                                class="select select-bordered w-full mt-2"
                                                style="border:  1px solid #d2d2d2;" v-model="forUpdate.a"
                                                :rules="validateData">
                                                <option disabled selected>Select Engagement ...</option>
                                                <option v-for="x in facultyEngagement" :value="x.key"> {{ x.engagement
                                                    }}</option>

                                            </Field>
                                            <ErrorMessage name="engagement" class="error_message" />

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
                                                    <tr class="bg-gray-700 text-white">
                                                        <th class="border-2 text-white"></th>
                                                        <th
                                                            class="border-2 text-white text-center text-0.9 font-Subheader ">
                                                            Required Files</th>
                                                        <th
                                                            class="border-2 text-white text-center text-0.9 font-Subheader ">
                                                            Upload Files
                                                        </th>
                                                        <th>

                                                        </th>
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
                                                            Scanned copy of enrollment form</td>
                                                        <td
                                                            class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            <input type="file" class="ml-5" @change="handleFileUpload1">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="border-2 text-0.9 text-Subheader text-gray-700">2
                                                        </td>
                                                        <td class="px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                            Scanned
                                                            copy of latest research conducted</td>
                                                        <td
                                                            class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            <input type="file" class="ml-5" @change="handleFileUpload2">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="border-2 text-0.9 text-Subheader text-gray-700">3
                                                        </td>
                                                        <td class="px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                            Documentation of utilized technlogy</td>
                                                        <td
                                                            class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            <input type="file" class="ml-5" @change="handleFileUpload3">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="border-2 text-0.9 text-Subheader text-gray-700">4
                                                        </td>
                                                        <td class="px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                            Activity
                                                            report of extension program</td>
                                                        <td
                                                            class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            <input type="file" class="ml-5" @change="handleFileUpload4">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="border-2 text-0.9 text-Subheader text-gray-700">5
                                                        </td>
                                                        <td class="px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                            Scanned
                                                            copy of enrollment form</td>
                                                        <td
                                                            class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            <input type="file" class="ml-5" @change="handleFileUpload5">
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!-- <span class="w-full flex items-center justify-end gap-2 mt-5">
                                                <button class="btn  bg-emerald-600 w-2/12 text-white border-0"
                                                    @click="showFiles()">Add</button>
                                            </span> -->
                                        </Form>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <span class="w-full flex items-center justify-end gap-4 mt-5">


                                                <v-btn text="Close" @click="isActive.value = false"></v-btn>
                                                <button
                                                    class="btn btn-accent  w-2/12 text-white border-0">Update</button>
                                            </span>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </v-dialog>

                            <!-- Delete -->
                            <v-dialog max-width="700">

                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn block size="x-small" v-bind="activatorProps" color="surface-variant"
                                        text="Delete" variant="flat" :disabled='item.approval != ``'></v-btn>
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

                                                <v-btn class="bg-red-darken-4" @click="deleteData(item.hep_one_id)">
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
                                        text="View" variant="flat" @click="ViewHistory(item.hep_one_id)"></v-btn>
                                </template>

                                <template v-slot:default="{ isActive }" class="w-full">
                                    <v-card>
                                        <div class="w-full px-4 py-4">
                                            <h3
                                                class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4">
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
            </v-card>
        </div>
    </div>


</template>

<style scoped>
    @import url('../../style//Dean/AE_OCI_1_style.css');
</style>
