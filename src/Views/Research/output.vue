<script src="../../Scripts/Research/output.js">

</script>

<template>

    <div class="w-full flex shadow-card2 py-5 px-8 gap-4 bg-gray-700 mt-8">

        <span class="flex flex-col justify-center w-9/12">
            <h1 class="w-full font-Header text-white">
                Research Program
            </h1>
<p class="w-full text-sm text-gray-400">College of Engineering</p>
            <p class="w-full text-xs text-gray-400">

            <ul>
                <li>Outcome Indicator 1: Number of research outputs in the last three years (FY 2021-2023) utilized by
                    the industry or by other beneficiaries
                </li>
                <li>Output Indicator 1: Number of research outputs completed within the year
                </li>
                <li>Output Indicator 2 (For State Universities): Percentage of researches published within the year (FY
                    2023) in internationally-refereed journal
                </li>
                <li>Output Indicator 2 (For State Colleges and Professional Institutes): Percentage of researches
                    presented within the year (FY 2023) in national, regional, and international fora
                </li>
            </ul>
            </p>
            
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

    <div class="w-full flex flex-col " v-if="isDataActive === 1">
        <v-data-table :headers="headers" :items="sampleData" class="elevation-1 " items-per-page="10"
            loading-text="Loading... Please wait" :loading="myLoading" :search="search"
            style="width: 100%; overflow-x: scroll">

            <template v-slot:item.actions="{ item }">
                <span class="flex w-full flex-col  gap-2 py-4">
                    <v-dialog max-width="700">

                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn size="x-small" block v-bind="activatorProps" color="surface-variant" text="Edit"
                                variant="flat" @click="openUpdate(item)"></v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                            <v-card class="px-8 py-8">
                                <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4 ">
                                    Edit Record</h3>

                                <!-- EDIT FORM -->
                                <Form class="mt-6" @submit="submitData">
                                    <!-- Researchers Profile -->
                                    <h6 class="font-Subheader text-red-darken-1 bg-gray-100 py-2 px-2">Researchers
                                        Profile</h6>
                                    <div class="w-full px-4 flex flex-col">
                                        <div class="w-full flex gap-8 mt-2">
                                            <span class="w-2/4 flex-col ">
                                                <p class="text-0.9 font-Subheader text-gray-500">Campus</p>
                                                <Field as="select" name="researcher_campus" placeholder="Type here"
                                                    class=" w-full input mt-2 input-bordered"
                                                    style="border: 1px solid #d2d2d2" v-model="researcher_campus"
                                                    :rules="validateInput">

                                                    <option disabled selected>Select Campus ....</option>
                                                    <option v-for="(item, index) in campusData" :value="item.campus_id">
                                                        {{ item.campusName }}
                                                    </option>
                                                </Field>
                                            </span>

                                            <span class="w-2/4 flex-col">
                                                <p class="text-0.9 font-Subheader text-gray-500">College</p>
                                                <Field as="select" name="researcher_college" placeholder="Type here"
                                                    class=" w-full input mt-2 input-bordered"
                                                    style="border: 1px solid #d2d2d2" v-model="researcher_college"
                                                    :rules="validateInput">

                                                    <option disabled selected>Select Campus ....</option>
                                                    <option v-for="(item, index) in collegeData"
                                                        :value="item.college_id">{{ item.collegeName
                                                        }}
                                                    </option>

                                                </Field>
                                            </span>
                                        </div>


                                        <!-- Researchers Name -->

                                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">Firstname</p>
                                        <Field type="text" name="researcher_fname" placeholder="Type here"
                                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                                            v-model="researcher_fname" :rules="validateInput" />

                                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">Lastname</p>
                                        <Field type="text" name="researcher_lname" placeholder="Type here"
                                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                                            v-model="researcher_lname" :rules="validateInput" />

                                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">Middle Name</p>
                                        <Field type="text" name="researcher_mname" placeholder="Type here"
                                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                                            v-model="researcher_mname" :rules="validateInput" />

                                        <div class="w-full flex justify-between items-center">

                                            <span class="flex flex-wrap gap-2 w-8/12 ">
                                                <div class="badge gap-2 shadow-md"
                                                    v-for='(item, index) in forUpdate.researchers'>
                                                    <button @click="deleteName_update(item.id)">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24"
                                                            class="inline-block w-4 h-4 stroke-current text-red-700">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2" d="M6 18L18 6M6 6l12 12">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                    <p class="font-Subheader text-0.8 text-gray-600">{{ item.fname }} {{
                                                        item.mname }} {{
                                                        item.lname }}</p>
                                                </div>
                                            </span>

                                            <v-btn class=" flex bg-teal-darken-3 btn-sm mt-2   text-gray-500" size="sm"
                                                type="button" @click="addField()"
                                                :disabled="researcher_fname === '' || researcher_lname === '' || researcher_mname === '' || researcher_campus === '' || researcher_college === ''"><v-icon
                                                    color="" size='sm' class="mr-1">mdi-plus-circle-outline</v-icon>
                                                <p class="normal-case text-0.7 font-Subheader">Add Researcher</p>
                                            </v-btn>

                                        </div>


                                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">SDG</p>
                                        <Field as="select" name="sdg" placeholder="Type here"
                                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                                            v-model="forUpdate.sdg" :rules="validateInput">

                                            <option selected disabled>Select SDG ...</option>
                                            <option v-for="(item, index) in SDGs" :value="item.id">{{ item.name }}
                                            </option>
                                        </Field>
                                    </div>

                                    <!-- Details of Research Outputs -->
                                    <h6 class="font-Subheader text-red-darken-1 bg-gray-100 py-2 px-2 mt-12">Details of
                                        Research Outputs </h6>

                                    <div class="w-full px-4 flex flex-col">
                                        <p class="text-0.9 font-Subheader text-gray-500 mt-2">Research Title</p>
                                        <Field type="text" name="research_title" placeholder="Type here"
                                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                                            v-model="input[0].research_title" :rules="validateInput" />

                                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">Name of Faculty
                                            Researcher/Author</p>
                                        <Field type="text" name="faculty_researcher" placeholder="Type here"
                                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                                            v-model="input[0].faculty_researcher" :rules="validateInput" />

                                        <h6 class="font-Subheader text-sm text-teal-darken-3 mt-8">Duration of Research
                                        </h6>

                                        <div class="w-full flex gap-8 mt-2">
                                            <span class="w-2/4 flex-col ">
                                                <p class="text-0.9 font-Subheader text-gray-500">Date Started</p>
                                                <Field type="date" name="date_started" placeholder="Type here"
                                                    class=" w-full input mt-2 input-bordered"
                                                    style="border: 1px solid #d2d2d2" v-model="input[0].date_started"
                                                    :rules="validateInput" />
                                            </span>

                                            <span class="w-2/4 flex-col">
                                                <p class="text-0.9 font-Subheader text-gray-500">Date of Completion</p>
                                                <Field type="date" name="date_completion" placeholder="Type here"
                                                    class=" w-full input mt-2 input-bordered"
                                                    style="border: 1px solid #d2d2d2" v-model="input[0].date_completion"
                                                    :rules="validateInput" />
                                            </span>
                                        </div>
                                    </div>

                                    <!-- Details of Publication -->
                                    <h6 class="font-Subheader text-red-darken-1 bg-gray-100 py-2 px-2 mt-12">Details of
                                        Publication </h6>

                                    <div class="w-full px-4 flex flex-col">
                                        <p class="text-0.9 font-Subheader text-gray-500 mt-2">Published Title</p>
                                        <Field type="text" name="published_title" placeholder="Type here"
                                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                                            v-model="input[0].published_title" :rules="validateInput" />


                                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">Date of Publication</p>
                                        <Field type="text" name="date_publication" placeholder="Type here"
                                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                                            v-model="input[0].date_publication" :rules="validateInput" />


                                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">Title of Journal /
                                            Publication</p>
                                        <Field type="text" name="journal_title" placeholder="Type here"
                                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                                            v-model="input[0].journal_title" :rules="validateInput" />

                                        <div class="w-full flex gap-8 mt-4">
                                            <span class="w-2/4 flex-col ">
                                                <p class="text-0.9 font-Subheader text-gray-500">Volume & Issue</p>
                                                <Field type="text" name="volume" placeholder="Type here"
                                                    class=" w-full input mt-2 input-bordered"
                                                    style="border: 1px solid #d2d2d2" v-model="input[0].volume"
                                                    :rules="validateInput" />
                                            </span>

                                            <span class="w-2/4 flex-col">
                                                <p class="text-0.9 font-Subheader text-gray-500">ISSN/ISBN</p>
                                                <Field type="text" name="issn" placeholder="Type here"
                                                    class=" w-full input mt-2 input-bordered"
                                                    style="border: 1px solid #d2d2d2" v-model="input[0].issn"
                                                    :rules="validateInput" />
                                            </span>
                                        </div>

                                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">Index</p>
                                        <Field type="text" name="index" placeholder="Type here"
                                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                                            v-model="input[0].index" :rules="validateInput" />

                                    </div>

                                    <!-- Details of Utilized Output -->
                                    <h6 class="font-Subheader text-red-darken-1 bg-gray-100 py-2 px-2 mt-12">Details of
                                        Utilized Output </h6>
                                    <div class="w-full px-4 flex flex-col">
                                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">Product Name / Methods /
                                            Process/ Technology</p>
                                        <Field type="text" name="product_name" placeholder="Type here"
                                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                                            v-model="input[0].product_name" :rules="validateInput" />

                                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">Patent Number / Product
                                            Description</p>
                                        <textarea class="textarea border-2 w-full mt-2" name="product_desc"
                                            v-model="input[0].product_desc" placeholder="Bio"
                                            style="border: 1px solid rgb(209 213 219);"></textarea>

                                        <p class="text-0.9 font-Subheader text-gray-500 mt-4">Benefiting Industry</p>
                                        <Field type="text" name="benefits" placeholder="Type here"
                                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                                            v-model="input[0].benefits" :rules="validateInput" />

                                    </div>
                                    <span class="w-full flex justify-end">

                                        <button class="btn bg-teal-darken-3 color white font-Subheader w-32 mt-8"
                                            type="submit" @click="submitData()">Submit</button>

                                    </span>
                                </Form>

                            </v-card>
                        </template>
                    </v-dialog>
                </span>
            </template>


        </v-data-table>
    </div>


    <div class="w-full flex flex-col px-8 py-2 shadow-xl" v-if="isDataActive === 2">

        <Form class="mt-6" @submit="submitData">
            <!-- Researchers Profile -->
            <h6 class="font-Subheader text-red-darken-1 bg-gray-100 py-2 px-2">Researchers Profile</h6>
            <div class="w-full px-4 flex flex-col">
                <div class="w-full flex gap-8 mt-2">
                    <span class="w-2/4 flex-col ">
                        <p class="text-0.9 font-Subheader text-gray-500">Campus</p>
                        <Field as="select" name="researcher_campus" placeholder="Type here"
                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                            v-model="researcher_campus" :rules="validateInput">

                            <option disabled selected>Select Campus ....</option>
                            <option v-for="(item, index) in campusData" :value="item.campus_id">{{ item.campusName }}
                            </option>
                        </Field>
                    </span>

                    <span class="w-2/4 flex-col">
                        <p class="text-0.9 font-Subheader text-gray-500">College</p>
                        <Field as="select" name="researcher_college" placeholder="Type here"
                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                            v-model="researcher_college" :rules="validateInput">

                            <option disabled selected>Select Campus ....</option>
                            <option v-for="(item, index) in collegeData" :value="item.college_id">{{ item.collegeName
                                }}
                            </option>

                        </Field>
                    </span>
                </div>


                <!-- Researchers Name -->

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Firstname</p>
                <Field type="text" name="researcher_fname" placeholder="Type here"
                    class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                    v-model="researcher_fname" :rules="validateInput" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Lastname</p>
                <Field type="text" name="researcher_lname" placeholder="Type here"
                    class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                    v-model="researcher_lname" :rules="validateInput" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Middle Name</p>
                <Field type="text" name="researcher_mname" placeholder="Type here"
                    class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                    v-model="researcher_mname" :rules="validateInput" />

                <div class="w-full flex justify-between items-center">

                    <span class="flex flex-wrap gap-2 w-8/12 ">
                        <div class="badge gap-2 shadow-md" v-for='(item, index) in input[0].researchers'>
                            <button @click="deleteName(item.id)">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    class="inline-block w-4 h-4 stroke-current text-red-700">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12">
                                    </path>
                                </svg>
                            </button>
                            <p class="font-Subheader text-0.8 text-gray-600">{{ item.fname }} {{ item.mname }} {{
                                item.lname }}</p>
                        </div>
                    </span>

                    <v-btn class=" flex bg-teal-darken-3 btn-sm mt-2   text-gray-500" size="sm" type="button"
                        @click="addField()"
                        :disabled="researcher_fname === '' || researcher_lname === ''|| researcher_mname === '' || researcher_campus === '' || researcher_college === ''"><v-icon
                            color="" size='sm' class="mr-1">mdi-plus-circle-outline</v-icon>
                        <p class="normal-case text-0.7 font-Subheader">Add Researcher</p>
                    </v-btn>

                </div>


                <p class="text-0.9 font-Subheader text-gray-500 mt-4">SDG</p>
                <Field as="select" name="sdg" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                    style="border: 1px solid #d2d2d2" v-model="input[0].sdg" :rules="validateInput">

                    <option selected disabled>Select SDG ...</option>
                    <option v-for="(item, index) in SDGs" :value="item.id">{{ item.name }}</option>
                </Field>
            </div>

            <!-- Details of Research Outputs -->
            <h6 class="font-Subheader text-red-darken-1 bg-gray-100 py-2 px-2 mt-12">Details of Research Outputs </h6>

            <div class="w-full px-4 flex flex-col">
                <p class="text-0.9 font-Subheader text-gray-500 mt-2">Research Title</p>
                <Field type="text" name="research_title" placeholder="Type here"
                    class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                    v-model="input[0].research_title" :rules="validateInput" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Name of Faculty Researcher/Author</p>
                <Field type="text" name="faculty_researcher" placeholder="Type here"
                    class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                    v-model="input[0].faculty_researcher" :rules="validateInput" />

                <h6 class="font-Subheader text-sm text-teal-darken-3 mt-8">Duration of Research </h6>

                <div class="w-full flex gap-8 mt-2">
                    <span class="w-2/4 flex-col ">
                        <p class="text-0.9 font-Subheader text-gray-500">Date Started</p>
                        <Field type="date" name="date_started" placeholder="Type here"
                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                            v-model="input[0].date_started" :rules="validateInput" />
                    </span>

                    <span class="w-2/4 flex-col">
                        <p class="text-0.9 font-Subheader text-gray-500">Date of Completion</p>
                        <Field type="date" name="date_completion" placeholder="Type here"
                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                            v-model="input[0].date_completion" :rules="validateInput" />
                    </span>
                </div>
            </div>

            <!-- Details of Publication -->
            <h6 class="font-Subheader text-red-darken-1 bg-gray-100 py-2 px-2 mt-12">Details of Publication </h6>

            <div class="w-full px-4 flex flex-col">
                <p class="text-0.9 font-Subheader text-gray-500 mt-2">Published Title</p>
                <Field type="text" name="published_title" placeholder="Type here"
                    class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                    v-model="input[0].published_title" :rules="validateInput" />


                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Date of Publication</p>
                <Field type="text" name="date_publication" placeholder="Type here"
                    class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                    v-model="input[0].date_publication" :rules="validateInput" />


                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Title of Journal / Publication</p>
                <Field type="text" name="journal_title" placeholder="Type here"
                    class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                    v-model="input[0].journal_title" :rules="validateInput" />

                <div class="w-full flex gap-8 mt-4">
                    <span class="w-2/4 flex-col ">
                        <p class="text-0.9 font-Subheader text-gray-500">Volume & Issue</p>
                        <Field type="text" name="volume" placeholder="Type here"
                            class=" w-full input mt-2 input-bordered" style="border: 1px solid #d2d2d2"
                            v-model="input[0].volume" :rules="validateInput" />
                    </span>

                    <span class="w-2/4 flex-col">
                        <p class="text-0.9 font-Subheader text-gray-500">ISSN/ISBN</p>
                        <Field type="text" name="issn" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                            style="border: 1px solid #d2d2d2" v-model="input[0].issn" :rules="validateInput" />
                    </span>
                </div>

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Index</p>
                <Field type="text" name="index" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                    style="border: 1px solid #d2d2d2" v-model="input[0].index" :rules="validateInput" />

            </div>

            <!-- Details of Utilized Output -->
            <h6 class="font-Subheader text-red-darken-1 bg-gray-100 py-2 px-2 mt-12">Details of Utilized Output </h6>
            <div class="w-full px-4 flex flex-col">
                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Product Name / Methods / Process/ Technology</p>
                <Field type="text" name="product_name" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                    style="border: 1px solid #d2d2d2" v-model="input[0].product_name" :rules="validateInput" />

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Patent Number / Product Description</p>
                <textarea class="textarea border-2 w-full mt-2" name="product_desc" v-model="input[0].product_desc"
                    placeholder="Bio" style="border: 1px solid rgb(209 213 219);"></textarea>

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Benefiting Industry</p>
                <Field type="text" name="benefits" placeholder="Type here" class=" w-full input mt-2 input-bordered"
                    style="border: 1px solid #d2d2d2" v-model="input[0].benefits" :rules="validateInput" />

            </div>
            <span class="w-full flex justify-end">

                <button class="btn bg-teal-darken-3 color white font-Subheader w-32 mt-8" type="submit"
                    @click="submitData()">Submit</button>

            </span>
        </Form>
    </div>
</template>


<style scoped>
.isDataNotActive {
    background-color: #94080D;
    color: white;
}


.isDataActive {
    background-color: #94080D;
    color: white;
}


.isBtnActive {
  background-color: #6b7280;
  color: white;
}

:deep(.v-table .v-table__wrapper > table > thead > tr > th){
    background-color: #4b5563;
  border: 1px solid #e5e7e9;
  font-size: 13px;
  color: white;
}

.hideDel{
    display: none;
}

.showDel{
    display: flex;
}
</style>