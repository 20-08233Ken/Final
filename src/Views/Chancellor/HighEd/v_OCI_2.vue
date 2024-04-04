<script src="../../../Scripts/Chancellor/HighEd/v_OCI_2.js">

</script>

<template>
    <h1 class="font-Header text-3xl text-Red-Rose">Higher Education Program</h1>
    <h2 class="font-Subheader text-lg text-Red-Rose">Outcome Indicator 2</h2>
    <h2 class="font-Subheader text-1gray-700"> Percentage of graduates (2 years prior) that are employed</h2>

    <span>

    </span>

    <span class=" w-full">
        <span class="w-full flex items-center justify-end my-4 gap-2">
            <v-btn size="small"  elevation="0" class="bg-grey-lighten-3">
                <v-icon>mdi-refresh</v-icon>
                <p class="ml-3">Reload Table</p>
            </v-btn>
            <v-btn size="small" class="bg-teal-darken-3" onclick="showApproval.showModal()"
                :disabled="selectedIds == ''"> Approved</v-btn>
        </span>
        <v-data-table :headers="headersDean" :items="hepData" class="elevation-1" items-per-page="10">

            <template v-slot:item.check_box="{ item }" v-if="user === 'Chancellor'">
                <input type='checkbox' :id="item.hep_two_id" :value="item.hep_two_id"
                    @change="toogleCheckBox(item.hep_two_id)">


            </template>

            <template v-slot:item.graduate_files="{ item }">
                <div class="flex flex-col gap-2">
                    <v-btn size="x-small" class="bg-light-blue-darken-3" @click="viewFilePDF(item.hep_two_id)">View PDF</v-btn>
                    <v-btn size="x-small" class="bg-light-blue-darken-3" @click="viewFileXLS(item.hep_two_id, item.official_list)">View Excel</v-btn>

                </div>
            </template>

            <template v-slot:item.actions="{item}">

                <span class="flex w-full flex-col  gap-2 py-4">
                    <v-btn size="x-small" class="bg-teal-darken-3" onclick="showApproval.showModal()"
                        @click="approvedHEP(item.hep_two_id)" v-if="user != 'Chancellor'"> Approved</v-btn>
                    <v-btn size="x-small" class="bg-red-darken-3" onclick="showRejection.showModal()"
                        @click="rejectedHEP(item.hep_two_id)"> Reject</v-btn>


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

    <dialog id="showApproval" class="modal">
        <div class="modal-box">

            <h3 class="font-bold text-lg bg-gray-700 text-white px-4 py-3 font-Header">Approval</h3>
            <p class="py-4">Are you sure you want to approve this record? </p>

            <form method="dialog">
                <span class="w-full flex justify-end gap-4 mt-4">
                    <button class="btn bg-white border-0 shadow-0">
                        Cancel
                    </button>

                    <button class="btn btn-success text-white" @click="ApprovedRequest">
                        Confirm
                    </button>
                </span>
            </form>

        </div>
    </dialog>

    <dialog id="showRejection" class="modal">
        <div class="modal-box">

            <h3 class="font-bold text-lg bg-gray-700 text-white px-4 py-3 font-Header">Reason of Rejection</h3>


            <Form>
                <p class="py-4 text-0.9">Reasons </p>
                <Field as="select" placeholder="Type here" name="reason" class="select w-full" v-model="reasons"
                    style="border:  1px solid #d2d2d2;">
                    <option v-for=" x in reasonOpt" :value="x.reason">{{ x.reason }}</option>
                </Field>
                <ErrorMessage name="reason" class="error_message" />

                <p class="py-4 text-0.9">If others, please specify </p>
                <Field type="text" placeholder="Type here" name="otherReason" class="input  input-bordered w-full"
                    v-model="remarks" style="border:  1px solid #d2d2d2;" />
                <ErrorMessage name="otherReason" class="error_message" />
            </Form>


            <form method="dialog">
                <span class="w-full flex justify-end gap-4 mt-4">
                    <button class="btn bg-white border-0 shadow-0">
                        Cancel
                    </button>

                    <button class="btn btn-success text-white">
                        Submit
                    </button>
                </span>
            </form>

        </div>
    </dialog>

</template>

<style scoped>
.isApproved{
    color: rgb(21 128 61);
}

.isReject{
    color: red;

}</style>