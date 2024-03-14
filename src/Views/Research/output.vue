<script src="../../Scripts/Research/output.js">

</script>

<template>
    <div class="w-full flex justify-center  gap-2 mt-8">
        <button class="btn   w-6/12" :class="{ 'isDataActive': isDataActive === 1 }" @click="changeData(1)">
            Form
        </button>

        <button class="btn   w-6/12" :class="{ 'isDataNotActive': isDataActive === 2 }" @click="changeData(2)">
            Table
        </button>
    </div>


    <Form class="w-full" v-if="isDataActive === 1">
        <h4 class="font-Subheader text-Red-Rose  mt-4">Details of Research Outputs</h4>
        <p class="text-0.9 font-Subheader text-gray-500 ">Research Title</p>
        <Field type="text" name="research_title" placeholder="Type here" class="input mt-2 input-bordered w-full "
            :rules="validateData" style="border: 1px solid #d2d2d2;" />
        <ErrorMessage name="research_title" class="error_message" />

        <p class="text-0.9 font-Subheader text-gray-500 mt-6">Researcher's Lastname</p>
        <Field type="text" name="lname" placeholder="Type here" class="input mt-2 input-bordered w-full "
            :rules="validateData" style="border: 1px solid #d2d2d2;" />
        <ErrorMessage name="lname" class="error_message" />

        <p class="text-0.9 font-Subheader text-gray-500 mt-6">Researcher's Firstname</p>
        <Field type="text" name="fname" placeholder="Type here" class="input mt-2 input-bordered w-full "
            :rules="validateData" style="border: 1px solid #d2d2d2;" />
        <ErrorMessage name="fname" class="error_message" />

        <p class="text-0.9 font-Subheader text-gray-500 mt-6">Researcher's Middlename</p>
        <Field type="text" name="mname" placeholder="Type here" class="input mt-2 input-bordered w-full "
            :rules="validateData" style="border: 1px solid #d2d2d2;" />
        <ErrorMessage name="mname" class="error_message" />

        <p class="text-0.9 font-Subheader text-gray-500 mt-6">Status of Research</p>
        <Field as="select" name="status" class="select select-bordered w-full mt-2" :rules="validateData"
            style="border: 1px solid #d2d2d2;">
            <option disabled selected>Select Status ...</option>
            <option value="Completed"> Completed</option>
            <!-- <option v-for="x in collegeProgram" :value="x.program">{{ x.program }}</option> -->
        </Field>
        <ErrorMessage name="status" class="error_message" />

        <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date Started</p>
        <Field type="date" name="date_started" placeholder="Type here" class="input mt-2 input-bordered w-full "
            :rules="validateData" style="border: 1px solid #d2d2d2;" />
        <ErrorMessage name="date_started" class="error_message" />

        <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date Completed</p>
        <Field type="date" name="date_completed" placeholder="Type here" class="input mt-2 input-bordered w-full "
            :rules="validateData" style="border: 1px solid #d2d2d2;" />
        <ErrorMessage name="date_completed" class="error_message" />

    </Form>

    <div class="w-full mt-8" v-if="isDataActive === 2">
        <table class="table-zebra table-sm w-full">
            <tr class="bg-gray-700 text-white border">
                <th rowspan="2" class="text-0.8 text-white border-t-2 "></th>
                <th rowspan="2" class="text-0.8 text-white font-Subheader  border-t-2 border-r-2 border-white">Research
                    Title</th>
                <th rowspan="2" class="text-0.8 text-white font-Subheader  border-t-2 border-r-2 border-white">Name of
                    Faculty Researcher / Author</th>
                <th rowspan="2" class="text-0.8 text-white font-Subheader  border-t-2 border-r-2 border-white">Status
                </th>
                <th class="text-0.8 text-white font-Subheader text-center border-r-2 border-white border-t-2 "
                    colspan="2">Duration</th>

                <th class="text-0.8 text-white font-Subheader text-center border-r-2 border-white border-t-2 "
                    rowspan="2">Action</th>
            </tr>
            <tr class="bg-gray-700 text-white border">
                <th class="text-0.8 text-white font-Subheader bg-gray-700  border-t-2 border-r-2 border-white">Date
                    Started</th>
                <th class="text-0.8 text-white font-Subheader bg-gray-700  border-t-2 border-r-2 border-white">Date
                    Completed</th>
            </tr>

            <tr v-for="(item, index) in researchOutputs">
                <td class="text-0.8">{{item.ro_id}}</td>
                <td class="text-0.8">{{item.ro_title}}</td>
                <td class="text-0.8">{{item.ro_author}}</td>
                <td class="text-0.8">{{item.ro_status}}</td>
                <td class="text-0.8">{{item.ro_started}}</td>
                <td class="text-0.8">{{item.ro_completed}}</td>
                <td class="flex flex-col items-center gap-2 px-2">

                    <!-- Edit -->
                    <v-dialog max-width="700">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn size="x-small" block v-bind="activatorProps" color="surface-variant" text="Edit"
                                variant="flat" :disabled='item.tb_approval === `Deans`'></v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                            <v-card class="px-8 py-8">
                                <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4 ">
                                    Edit Record</h3>
                                <p>{{ item.tb_id }}</p>

                                <Form class="w-full">
                                    <h4 class="font-Subheader text-Red-Rose  mt-4">Details of Research Outputs</h4>
                                    <p class="text-0.9 font-Subheader text-gray-500 ">Research Title</p>
                                    <Field type="text" name="research_title" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData"
                                        style="border: 1px solid #d2d2d2;" />
                                    <ErrorMessage name="research_title" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Researcher's Lastname</p>
                                    <Field type="text" name="lname" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData"
                                        style="border: 1px solid #d2d2d2;" />
                                    <ErrorMessage name="lname" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Researcher's Firstname</p>
                                    <Field type="text" name="fname" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData"
                                        style="border: 1px solid #d2d2d2;" />
                                    <ErrorMessage name="fname" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Researcher's Middlename</p>
                                    <Field type="text" name="mname" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData"
                                        style="border: 1px solid #d2d2d2;" />
                                    <ErrorMessage name="mname" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Status of Research</p>
                                    <Field as="select" name="status" class="select select-bordered w-full mt-2"
                                        :rules="validateData" style="border: 1px solid #d2d2d2;">
                                        <option disabled selected>Select Status ...</option>
                                        <option value="Completed"> Completed</option>
                                        <!-- <option v-for="x in collegeProgram" :value="x.program">{{ x.program }}</option> -->
                                    </Field>
                                    <ErrorMessage name="status" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date Started</p>
                                    <Field type="date" name="date_started" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData"
                                        style="border: 1px solid #d2d2d2;" />
                                    <ErrorMessage name="date_started" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date Completed</p>
                                    <Field type="date" name="date_completed" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData"
                                        style="border: 1px solid #d2d2d2;" />
                                    <ErrorMessage name="date_completed" class="error_message" />

                                </Form>
                                <v-card-actions class="flex gap-2 mt-4">
                                    <v-spacer></v-spacer>
                                
                                    <v-btn text="Close" @click="isActive.value = false"></v-btn>
                                    <button class="btn bg-emerald-700  w-2/12 text-white border-0">Update</button>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>

                    <!-- Delete -->
                    <v-dialog max-width="700">

                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn block size="x-small" v-bind="activatorProps" color="surface-variant" text="Delete"
                                variant="flat" :disabled='item.tb_approval === `Approved`'></v-btn>
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

                                        <v-btn class="bg-red-darken-4" @click="deleteData(item.ro_id,isActive.value = false)"> Confirm</v-btn>
                                    </v-card-actions>
                                </form>
                            </v-card>
                        </template>
                    </v-dialog>

                    <!-- View -->
                    <v-dialog max-width="700">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn block size="x-small" v-bind="activatorProps" color="surface-variant" text="View"
                                variant="flat"></v-btn>
                        </template>

                        <template v-slot:default="{ isActive }" class="w-full">
                            <v-card>
                                <div class="w-full px-4 py-4">
                                    <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4">
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
        </table>
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
</style>