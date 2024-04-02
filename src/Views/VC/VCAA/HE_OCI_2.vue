<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import Swal from "sweetalert2";
import axios from "axios";
import { useCookies } from "vue3-cookies";

export default {
    setup() {
        const { cookies } = useCookies();
        return { cookies };
    },
    data() {
        return {
            isActive: 1,
            isDataActive: 0,
            search: "",
            myLoading: false,
            in_program: "",
            in_fname: "",
            in_mname: "",
            in_lname: "",
            in_status: "",
            in_business: "",
            graduate_tracer_study_file: null,
            official_list_file: null,
            isAdd: false,
            count: true,
            isIcon: false,
            isActive: false,
            disableSubmit: false,
            up_selectedFile1: null,
            up_selectedFile2: null,
            selectedFile1: null,
            selectedFile2: null,


            headersDean: [
                {
                    title: "HEP Code",
                    key: "hep_code",
                },
                {
                    title: "Campus",
                    key: "campus",
                },
                {
                    title: "Department",
                    key: "college",
                },
                {
                    title: "Undergraduate Program",
                    key: "program",
                },
                {
                    title: "Name",
                    key: "student_fullname",
                },
                {
                    title: "Status",
                    key: "graduate_tracer_status",
                },
                {
                    title: "Companys Business / Type of Business",
                    key: "business",
                },
                {
                    title: "Supporting Documents",
                    key: "graduate_files",
                },
                {
                    title: "Validation Status",
                    key: "status",
                },
                {
                    title: "Actions",
                    key: "actions",
                },
            ],
            deansData: [],
            data: [
                {
                    in_campus: null,
                    in_department: null,
                },
            ],
            headersRegistrar: [
                {
                    title: "Student Profile",
                    align: "center",
                    children: [
                        {
                            title: "ID",
                            value: "id",
                        },
                        {
                            title: "Student ID",
                            value: "student_id",
                        },
                        {
                            title: "Date of Birth",
                            value: "birthday",
                        },
                        {
                            title: "Last Name",
                            value: "lastname",
                        },
                        {
                            title: "First Name",
                            value: "firstname",
                        },
                        {
                            title: "Middle Name",
                            value: "middlename",
                        },
                        {
                            title: "Sex",
                            value: "gender",
                        },
                        {
                            title: "Date Graduated",
                            value: "date_graduated",
                        },
                    ],
                },
                {
                    title: "Program Name",
                    value: "program",
                },
                {
                    title: "Program Major",
                    value: "program_major",
                },
                {
                    title: "Program Authority to Operate/Graduate",
                    align:'center',
                    children: [
                        {
                            title: "Authority Number",
                            value: "authority_number",
                        },
                        {
                            title: "Year Granted",
                            value: "granted_year",
                        },
                    ],
                },
            ],
            registrarData: [],
        }
    },

    components: {
        Form,
        Field,
        ErrorMessage,
        Swal,

    },

    methods: {
        openUpdate(item) {
            this.forUpdate = item

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

        updateFile1(event) {
            this.up_selectedFile1 = event.target.files[0];
        },

        updateFile2(event) {
            this.up_selectedFile2 = event.target.files[0];
        },

        // HISTORY
        async ViewHistory(id) {
            this.selectedID = id;
            let userCookies = this.cookies.get("userCookies");
            const response = await axios
                .post(import.meta.env.VITE_API_HEP_HISTORY_TWO, {
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

        async FetchData(position, campus, user_id) {
            try {
                const response = await axios
                    .post(import.meta.env.VITE_API_APPROVE_DISPLAY_TWO_HEP, {
                        position: position,
                        campus_id: campus,
                        user_id: user_id,
                    })
                    .then((response) => {
                        
                        this.deansData = response.data;
                     
                        // if (response.data == "Successfully HEP added!"){
                        //     this.isDataActive = false;
                        // }
                    })
                    .catch((error) => {
                        console.error("Error fetching hep data", error);
                    })

                    .finally(() => {
                      
                    });
            } catch (error) { }
        },

        async FetchRegistrarhepData() {
            try {
                let userCookies = this.cookies.get("userCookies");
                const response = await axios
                    .post(import.meta.env.VITE_API_DISPLAY_REGISTRAR_DATA, {
                        user_id: userCookies["id"],
                        campus_id: userCookies["campus_id"],
                    })
                    .then((response) => {
                        this.registrarData = response.data;
                        this.myLoading = true;

                        if (this.registrarData.length === 0) {
                            this.disableSubmit = true;
                        } else {
                            this.disableSubmit = false;
                        }
                    })
                    .catch((error) => {
                        console.error("Error fetching hep Data", error);
                    })

                    .finally(() => {
                        this.myLoading = false;
                    });
            } catch (error) {
                // add actions here
            }
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

        async addData() {
            const headers = {
                "Content-Type": "multipart/form-data",
            };
            let userCookies = this.cookies.get("userCookies");
            // Form Data
            const formData = new FormData();
            formData.append("official_list_file", this.official_list_file);
            formData.append("graduate_tracer_study_file", this.graduate_tracer_study_file);
            formData.append("program_id", this.in_program);
            formData.append("lastname", this.in_lname);
            formData.append("middlename", this.in_mname);
            formData.append("firstname", this.in_fname);
            formData.append("graduate_tracer_status", this.in_status);
            formData.append("business", this.in_business);
            formData.append("campus_id", userCookies["campus_id"]);
            formData.append("college_id", userCookies["college_id"]);
            formData.append("user_id", userCookies["position"]);

            try {
                const response = await axios
                    .post(import.meta.env.VITE_API_APPROVE_CREATE_TWO_HEP, formData, {
                        headers,
                    })
                    .then((response) => {
                        // this.collegeProgram = response.data;

                        if (response.data == "Student Not Found ") {

                            Swal.fire({
                                title: 'Error ',
                                text: "Student not found",
                                icon: 'error',
                                confirmButtonText: 'OK'
                            })
                            // this.FetchData(userCookies["userPosition"],userCookies['campus_id'],userCookies['id']);
                        } else if (response.data == "Existing Data Already") {

                            Swal.fire({
                                title: 'Error ',
                                text: "Existing Data Already",
                                icon: 'error',
                                confirmButtonText: 'OK'
                            })
                            this.clearCredits();
                        }
                        else if (response.data == "HEP Successfully Added") {

                            Swal.fire({
                                title: 'Success ',
                                text: "Date Added Successfully",
                                icon: 'success',
                                confirmButtonText: 'OK'
                            })
                            this.isDataActive = 3;
                            this.$router.go();
                            this.clearCredits();
                        }
                        else {


                            Swal.fire({
                                title: 'Invalid ',
                                text: "Please upload needed file/s",
                                icon: 'error',
                                confirmButtonText: 'OK'
                            })


                        }
                    })
                    .catch((error) => {
                        console.error("Error fetching campus", error);



                    });
            } catch (error) {


            }


            this.clearCredits();

            // }, 2000)
        },

        clearCredits() {
            this.in_program = "";
            this.in_fname = "";
            this.in_mname = "";
            this.in_lname = "";
            this.in_status = "";
            this.in_business = "";
            this.selecteofficial_list_filedFile = null;
            this.graduate_tracer_study_file = null;
        },

        // Uploading File
        handleFileUpload(event) {
            // this.graduate_tracer_study_file = event.target.files[0];

            const filename = event.target.files[0].name
            const fileExtension = filename.split('.').pop().toLowerCase()
            if (fileExtension != 'pdf') {

                Swal.fire({
                    title: 'Error ',
                    text: "Invalid File Type",
                    icon: 'error',
                    confirmButtonText: 'OK'
                })

                event.target.value = ''
            } else {
                this.graduate_tracer_study_file = event.target.files[0];

            }


        },
        handleFileUpload2(event) {
            // this.official_list_file = event.target.files[0];
            const filename = event.target.files[0].name
            const fileExtension = filename.split('.').pop().toLowerCase()
            if (fileExtension != 'xlsx') {

                Swal.fire({
                    title: 'Error ',
                    text: "Invalid File Type",
                    icon: 'error',
                    confirmButtonText: 'OK'
                })

                event.target.value = ''
            } else {
                this.official_list_file = event.target.files[0];

            }

        },


        //Viewing File PDF
        async viewFilePDF(id) {
            this.selectedID = id;
            let userCookies = this.cookies.get("userCookies");
            await axios
                .post(import.meta.env.VITE_API_FETCH_PDF, {
                    id: id,
                    user_id: userCookies["id"],
                    responseType: 'arraybuffer' // Set the response type to arraybuffer
                })
                .then(response => {
                    // Create a Blob object from the response data
                    const blob = new Blob([response.data], { type: 'application/pdf' });

                    // Create a URL for the Blob object
                    const url = URL.createObjectURL(blob);

                    // Open the URL in a new tab
                    window.open(url, '_blank');
                })
                .catch(error => {
                    console.error('Error fetching PDF:', error);
                });

        },

        //Viewing File xls
        async viewFileXLS(id, filename) {
          
            this.selectedID = id;
            let userCookies = this.cookies.get("userCookies");
            await axios
                .post(import.meta.env.VITE_API_FETCH_OFFICIAL_LIST, {
                    id: id,
                    user_id: userCookies["id"],
                    responseType: 'arraybuffer' // Set the response type to arraybuffer
                })
                .then(response => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    let parts = url.split("/");
                    // console.log(parts[3]);
                    link.href = url;
                    link.setAttribute('download', filename);
                    document.body.appendChild(link);
                    link.click();
                })
                .catch(error => {
                    console.error('Error fetching PDF:', error);
                });

        },

        async deleteData(id) {
            this.selectedID = id;
            let userCookies = this.cookies.get("userCookies");
            const response = await axios
                .post(import.meta.env.VITE_API_REMOVE_TWO_HEP, {
                    id: id,
                    user_id: userCookies["id"],


                })
                .then((response) => {

                    this.isDataActive = 3;

                })
                .catch((error) => {
                    console.error("Error history not found", error);
                });
        },
        
        async submitUpdate(id) {

            const headers = {
                "Content-Type": "multipart/form-data",
            };
            let userCookies = this.cookies.get("userCookies");
            // Form Data
            const formEditData = new FormData();
            formEditData.append("official_list_file", this.up_selectedFile1);
            formEditData.append("graduate_tracer_study_file", this.up_selectedFile2);
            formEditData.append("program_id", this.forUpdate.in_program);
            formEditData.append("lastname", this.forUpdate.student_lastname);
            formEditData.append("middlename", this.forUpdate.student_middlename);
            formEditData.append("firstname", this.forUpdate.student_firstname);
            formEditData.append("graduate_tracer_status", this.forUpdate.graduate_tracer_status);
            formEditData.append("business", this.forUpdate.business);
            formEditData.append("campus_id", userCookies["campus_id"]);
            formEditData.append("college_id", userCookies["college_id"]);
            formEditData.append("user_id", userCookies["id"]);
            try {
                const response = await axios
                    .post(import.meta.env.VITE_API_UPDATE_TWO_HEP, formEditData, {
                        headers,
                    })
                    .then((response) => {
                        // this.collegeProgram = response.data;

                        if (response.data == "Student Not Found ") {

                            Swal.fire({
                                title: 'Error ',
                                text: "Student not found",
                                icon: 'error',
                                confirmButtonText: 'OK'

                            })

                            // this.FetchData(userCookies["userPosition"],userCookies['campus_id'],userCookies['id']);
                        }
                        else if (response.data == "Successfully HEP updated!") {
                            Swal.fire({
                                title: 'Success ',
                                text: "Date Updated Successfully",
                                icon: 'success',
                            })

                            this.isDataActive = 3;
                            // this.FetchData(userCookies["userPosition"],userCookies['campus_id'],userCookies['id']);
                        }
                        // if (response.data == "Successfully HEP updated!") {
                        //   location.reload();
                        //   // this.FetchData(userCookies["userPosition"],userCookies['campus_id'],userCookies['id']);
                        // }
                    })
                    .catch((error) => {
                        console.error("Error fetching campus", error);
                    });
            } catch (error) { }

        },

    },

    mounted() {
        // call here
        // this.fetchProgram_Data()
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
        this.overlay = false;
        this.FetchRegistrarhepData();
        this.fetchProgram_Data(userCookies["college_id"]);
        this.FetchData(
            userCookies["position"],
            userCookies["campus_id"],
            userCookies["id"],
        );
    },
}
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
            <button class="btn btn-sm w-5/12 font-Subheader text-xs" @click="changeData(0)"
                :class="{ isBtnActive: isDataActive === 0 }">
                <v-icon>mdi-account</v-icon>Registrar
            </button>
            <button class="btn btn-sm w-5/12 font-Subheader text-xs" @click="changeData(1)"
                :class="{ isBtnActive: isDataActive === 1 }">
                <v-icon>mdi-table</v-icon>Table
            </button>
            <button class="btn btn-sm w-5/12 font-Subheader text-xs" @click="changeData(2)"
                :class="{ isBtnActive: isDataActive === 2 }">
                <v-icon>mdi-form-select</v-icon> Form
            </button>
        </span>
    </span>


    <!-- Table Registrar -->
    <span class="w-full flex flex-col" v-if="isDataActive === 0">
        <h1 class="w-full text-center  font-Subheader my-8  text-sm text-gray-700 text-teal-darken-3">PRC: List of
            Graduates by Institution, Program, and Sex</h1>

        <v-data-table-server :headers="headersRegistrar" :items="registrarData" class="elevation-1 " items-per-page="10"
            :items-length="0" :loading="myLoading" loading-text="Loading... Please wait" style="width:100%;">
        </v-data-table-server>
    </span>


    <!-- Table Deans -->
    <span class="w-full flex flex-col" v-if="isDataActive === 1">

        <v-data-table :headers="headersDean" :items="deansData" class="elevation-1 " items-per-page="10"
            :loading="myLoading" loading-text="Loading... Please wait" :search="search"
            style="width:100%; overflow-x: scroll;">

            <template v-slot:item.graduate_files="{ item }">
                <span class="flex w-full flex-col  gap-2 py-4">
                    <!-- <v-btn size="x-small" class="bg-light-blue-darken-3"><a :href=item.supported_file
                                target="_blank">View PDF</a> </v-btn> -->
                    <v-btn size="x-small" class="bg-light-blue-darken-3" @click="viewFilePDF(item.hep_two_id)">
                        View PDF
                    </v-btn>

                    <v-btn size="x-small" class="bg-light-blue-darken-3"
                        @click="viewFileXLS(item.hep_two_id, item.official_list)">View Excel</v-btn>

                </span>
            </template>


            <template v-slot:item.actions="{ item }">
                <span class="flex w-full flex-col  gap-2 py-4">

                    <!-- Edit -->
                    <v-dialog max-width="700">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn size="x-small" block v-bind="activatorProps" color="surface-variant" text="Edit"
                                variant="flat" @click="openUpdate(item)"
                                :disabled='item.status != `Returned to Dean`'></v-btn>

                            <!-- ></v-btn> -->
                        </template>
                        <template v-slot:default="{ isActive }">
                            <v-card class="px-8 py-8">
                                <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4 ">
                                    Edit Record</h3>
                                <p>{{ item.tb_id }}</p>

                                <Form @submit="submitUpdate(item.hep_two_id)">

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-4">Campus</p>
                                    <Field type="text" name='campus' placeholder="Type here" disabled
                                        class="input mt-2 input-bordered w-full " v-model="data[0].in_campus"
                                        :rules="validateData" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
                                    <Field type="text" name='department' placeholder="Type here" disabled
                                        class="input mt-2 input-bordered w-full " v-model="data[0].in_department"
                                        :rules="validateData" />

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
                                        class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                                        v-model="forUpdate.student_firstname" :rules="validateData" />
                                    <ErrorMessage name="firstname" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Lastname</p>
                                    <Field type="text" name="lastname" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                                        v-model="forUpdate.student_lastname" :rules="validateData" />
                                    <ErrorMessage name="lastname" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Middle Initial</p>
                                    <Field type="text" name="m_initial" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                                        v-model="forUpdate.student_middlename" :rules="validateData" />
                                    <ErrorMessage name="m_initial" class="error_message" />


                                    <span class="flex items-center mt-6 gap-2">
                                        <p class="text-0.9 font-Subheader text-gray-500 ">Graduate Tracer Status
                                        </p>
                                        <i class="tooltip tooltip-right"
                                            data-tip="List down all the 1st semester FY 2021-2022 graduates per degree program and then provide the status for each graduate.">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                            </svg>
                                        </i>
                                    </span>

                                    <Field as="select" name="statuses" class="select select-bordered w-full mt-2"
                                        style="border:  1px solid #d2d2d2;" v-model="forUpdate.graduate_tracer_status"
                                        :rules="validateData">
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
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                            </svg>
                                        </i>
                                    </span>
                                    <Field type="text" name="business" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " style="border:  1px solid #d2d2d2;"
                                        v-model="forUpdate.business" :rules="validateData" />
                                    <ErrorMessage name="business" class="error_message" />


                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Upload Supported File
                                    </p>

                                    <table class="w-full mt-4">
                                        <thead>
                                            <tr class="bg-gray-700 text-white">
                                                <th class="border-2 text-white"></th>
                                                <th class="border-2 text-white text-center text-0.9 font-Subheader">
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
                                                <td class="w-2/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                    1
                                                </td>
                                                <td class="w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                    Graduate Tracer Study</td>
                                                <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                    <input type="file" class="ml-5" @change="updateFile1">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="w-2/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                    2
                                                </td>
                                                <td class="w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                    Official list of FY 2021 Graduates</td>
                                                <td class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
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
                            <v-btn block size="x-small" v-bind="activatorProps" color="surface-variant" text="Delete"
                                variant="flat" :disabled='item.status != `Returned to Dean`'></v-btn>

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
                    <v-dialog max-width="700">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn block size="x-small" v-bind="activatorProps" color="surface-variant" text="View"
                                variant="flat" @click="ViewHistory(item.hep_two_id)"></v-btn>
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

            <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
            <Field type="text" name='campus' placeholder="Type here" disabled class="input mt-2 input-bordered w-full "
                v-model="data[0].in_campus" :rules="validateData" />

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
                        <th class="border-2 py-2  text-white"></th>
                        <th class="border-2 py-2  text-white text-center text-0.9 font-Subheader">
                            Required Files</th>
                        <th class="border-2 py-2  text-white text-center text-0.9 font-Subheader ">
                            Upload Files
                        </th>
                        <th>

                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td class="w-2/12 border-2 py-2 text-center text-0.9 text-Subheader text-gray-700 ">1
                        </td>
                        <td class="w-7/12 px-3 border-2 py-2  text-0.9 text-Subheader text-gray-700">
                            Graduate Tracer Study <span class="text-Red-Rose font-Header">(.pdf)</span></td>
                        <td class="w-3/12 border-2 text-0.9 py-2 text-Subheader text-gray-700 ">
                            <input type="file" class="ml-5" @change="handleFileUpload">
                        </td>
                    </tr>
                    <tr>
                        <td class="w-2/12 py-2 text-center border-2 text-0.9 text-Subheader text-gray-700 ">2
                        </td>
                        <td class="w-7/12 px-3 py-2  border-2 text-0.9 text-Subheader text-gray-700">
                            Official list of FY 2021 Graduates <span class="text-Red-Rose font-Header">(.xlsx)</span>
                        </td>
                        <td class="w-3/12 border-2 py-2  text-0.9 text-Subheader text-gray-700 ">
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
    border: 0px;
}

:deep(.v-table .v-table__wrapper > table > thead > tr > th) {
    background-color: #4b5563;
    border: 1px solid #e5e7e9;
    font-size: 13px;
    color: white;

}

:deep(.v-table .v-table__wrapper > table > thead) {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.isBtnActive {
    background-color: #6b7280;
    color: white;
}

.error_message {
    color: red;
    font-size: .8rem;
}

:deep(.v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td) {
    padding: 1rem .8rem;
    font-size: 13px;
}

:deep(.v-data-table-footer) {
    /* background-color: #e5e7eb; */
}

:deep(.v-table .v-table__wrapper > table > thead > tr > th > div ){
    width: 100%;
   display: flex;
   justify-content: center;

}

:deep(.v-table .v-table__wrapper > table > thead > tr > th > div > span ){
    width: 100%;
   display: flex;
   justify-content: center;
   text-align: center;

}


</style>