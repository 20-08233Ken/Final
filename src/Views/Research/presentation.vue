<script src="../../Scripts/Research/presentation.js">

</script>

<template>
    <div class="w-full flex justify-center   gap-2 mt-8">
        <button class="btn   w-6/12" :class="{ 'isDataActive': isDataActive === 1 }" @click="changeData(1)">
            Form
        </button>

        <button class="btn   w-6/12" :class="{ 'isDataNotActive': isDataActive === 2 }" @click="changeData(2)">
            Table
        </button>
    </div>

    <Form class="w-full" v-if="isDataActive === 1">
        <h4 class="font-Subheader text-Red-Rose mt-4">Details of Presentation</h4>

        <p class="text-0.9 font-Subheader text-gray-500 ">Article</p>
        <Field type="text" name="article1" placeholder="Type here" class="input mt-2 input-bordered w-full "
            :rules="validateData" style="border: 1px solid #d2d2d2;" />
        <ErrorMessage name="article1" class="error_message" />

        <p class="text-0.9 font-Subheader text-gray-500 mt-6">Title of Forum</p>
        <Field type="text" name="forum" placeholder="Type here" class="input mt-2 input-bordered w-full "
            :rules="validateData" style="border: 1px solid #d2d2d2;" />
        <ErrorMessage name="forum" class="error_message" />

        <p class="text-0.9 font-Subheader text-gray-500 mt-6">Venue</p>
        <Field type="text" name="venue" placeholder="Type here" class="input mt-2 input-bordered w-full "
            :rules="validateData" style="border: 1px solid #d2d2d2;" />
        <ErrorMessage name="venue" class="error_message" />

        <p class="text-0.9 font-Subheader text-gray-500 mt-6">Forum Type</p>
        <Field type="text" name="forumType" placeholder="Type here" class="input mt-2 input-bordered w-full "
            :rules="validateData" style="border: 1px solid #d2d2d2;" />
        <ErrorMessage name="forumType" class="error_message" />


        <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date of Presentation</p>
        <Field type="date" name="date" placeholder="Type here" class="input mt-2 input-bordered w-full "
            :rules="validateData" style="border: 1px solid #d2d2d2;" />
        <ErrorMessage name="date" class="error_message" />
    </Form>

    <div class="w-full mt-8" v-if="isDataActive === 2">
        <table class="table-zebra table-sm w-full">

            <tr class="bg-gray-700 text-white border">
                <th class="text-0.8 text-center text-white font-Subheader border-t-2 border-r-2 border-white">Title of
                    Forum</th>
                <th class="text-0.8 text-center text-white font-Subheader border-t-2 border-r-2 border-white">Venue</th>
                <th class="text-0.8 text-center text-white font-Subheader border-t-2 border-r-2 border-white">Forum Type
                </th>
                <th class="text-0.8  text-center text-white font-Subheader border-t-2 border-r-2 border-white">Date of
                    Presentation</th>
                <th class="text-0.8  text-center text-white font-Subheader border-t-2 border-r-2 border-white">
                    Actions</th>
            </tr>

            <tr v-for="(item, index) in researchPresentation">
                <td class="text-0.8">{{item.pre_id}}</td>
                <td class="text-0.8">{{item.pre_venue}}</td>
                <td class="text-0.8">{{item.pre_type}}</td>
                <td class="text-0.8">{{item.pre_date}}</td>
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

                                <Form class="w-full" >
                                    <h4 class="font-Subheader text-Red-Rose mt-4">Details of Presentation</h4>

                                    <p class="text-0.9 font-Subheader text-gray-500 ">Article</p>
                                    <Field type="text" name="article1" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData"
                                        style="border: 1px solid #d2d2d2;" />
                                    <ErrorMessage name="article1" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Title of Forum</p>
                                    <Field type="text" name="forum" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData"
                                        style="border: 1px solid #d2d2d2;" />
                                    <ErrorMessage name="forum" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Venue</p>
                                    <Field type="text" name="venue" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData"
                                        style="border: 1px solid #d2d2d2;" />
                                    <ErrorMessage name="venue" class="error_message" />

                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Forum Type</p>
                                    <Field type="text" name="forumType" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData"
                                        style="border: 1px solid #d2d2d2;" />
                                    <ErrorMessage name="forumType" class="error_message" />


                                    <p class="text-0.9 font-Subheader text-gray-500 mt-6">Date of Presentation</p>
                                    <Field type="date" name="date" placeholder="Type here"
                                        class="input mt-2 input-bordered w-full " :rules="validateData"
                                        style="border: 1px solid #d2d2d2;" />
                                    <ErrorMessage name="date" class="error_message" />
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

                                        <v-btn class="bg-red-darken-4" @click="deleteData(item.pre_id,isActive.value = false)"> Confirm</v-btn>
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