<script src="../../Scripts/QAM/HE_OPI_2.js">


</script>

<template>
    <div class="w-full flex shadow-card2 py-5 px-8 gap-4 bg-gray-700 mt-8">

        <span class="flex flex-col justify-center w-9/12">
            <h1 class="w-full font-Header text-white">
                Percentage of undergraduate programs with accreditation
            </h1>

            <p class="w-full text-sm text-gray-400">
                Higher Education Program: Output Indicator 1
            </p>
            <!-- <p class="w-full text-sm text-gray-400">College of Engineering</p> -->
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

                        <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify"
                            variant="outlined" hide-details single-line></v-text-field>

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



                </v-data-table>
            </v-card>
        </div>
        <div class="w-full flex flex-col mt-8 pb-8" v-if="isDataActive === 2">
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
                            <th class="border-2 py-2 text-white "></th>
                            <th class="border-2 py-2 text-white text-center text-0.9 font-Subheader text-gray-700">Required
                                Files
                            </th>
                            <th class="border-2 py-2 text-white text-center text-0.9 font-Subheader text-gray-700">Upload
                                Files
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td class="w-2/12 text-center py-2 border-2 text-0.9 text-Subheader text-gray-700 ">1</td>
                            <td class="w-7/12  text-center py-2 px-3 border-2 text-0.9 text-Subheader text-gray-700">Supporting
                                documentation</td>
                            <td class="w-3/12 text-center py-2 border-2 text-0.9 text-Subheader text-gray-700 ">
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
    </div>

</template>

<style scoped>

    @import url('../../style/QAM/HE_OPI_2.css');
    
.isBtnActive {
    background-color: #6b7280;
    color: white;
  }


    
</style>