<script src="../../../Scripts/VCs/HighEd/v_OCI_1.js">


</script>

<template>
    <h1 class="font-Header text-2xl text-Red-Rose">Higher Education Program</h1>
    <h2 class="font-Subheader text-lg text-Red-Rose">Outcome Indicator 1</h2>
    <h2 class="font-Subheader text-gray-700 text-0.9">Percentage of first-time licensure exam takers that pass the licensure
        exams</h2>



    <span class=" w-full overflow-x-auto mt-4">
        <span class="w-full flex items-center justify-end my-4 gap-2">
            <v-btn size="small"  elevation="0" class="bg-teal-darken-3">
                <v-icon>mdi-refresh</v-icon>
                <p class="ml-3">Reload Table</p>
            </v-btn>
        </span>
        <v-data-table   loading-text="Loading... Please wait" :loading="myLoading" :headers="headers" :items="hepData" class="elevation-1 " items-per-page="10"
            style="width:100%; overflow-x: scroll;">


            <template v-slot:item.supported_file="{item}">
                <span class="flex w-full  gap-2 py-4">
                    <v-btn size="x-small" class="bg-light-blue-darken-3" @click="viewFile(item.hep_one_id)">View PDF</v-btn>

                </span>
            </template>
            <template v-slot:item.actions="{item}">
                <span class="flex w-full flex-col  gap-2 py-4">
                    <v-btn size="x-small" class="bg-teal-darken-3" onclick="showApproval.showModal()"
                        @click="approvedHEP(item.hep_one_id)"
                        :disabled="(item.status != 'For IPDO Approval' && this.user == 'IPDO') || (this.user == 'VPRDES' || this.user == 'VCRDES' || this.user == 'VPDEA' || this.user == 'OUP' || this.user == 'System Administrator')"> Approved</v-btn>

                        <v-btn size="x-small" class="bg-red-darken-3" onclick="showRejection.showModal()"
                        @click="rejectedHEP(item.hep_one_id)"
                        :disabled="(item.status != 'For IPDO Approval' && this.user == 'IPDO') || (this.user == 'VPRDES' || this.user == 'VCRDES' || this.user == 'VPDEA' || this.user == 'OUP' || this.user == 'System Administrator') "> Reject</v-btn>

                    <v-dialog max-width="700">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn  block size="x-small" v-bind="activatorProps" color="surface-variant" text="View"
                                variant="flat" @click="ViewHistory(item.hep_one_id)"></v-btn>
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
                    <!-- :disabled="item.status != 'For IPDO Approval' && this.user == 'IPDO'" -->
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


            <Form @submit="RejectRequest">
                <p class="py-4 text-0.9">Reasons </p>
                <Field as="select" placeholder="Type here" name="reason" class="select w-full" v-model="reasons"
                    style="border:  1px solid #d2d2d2;" :rules="validateInput">
                    <option v-for=" x in reasonOpt" :value="x.reason">{{ x.reason }}</option>
                </Field>
                <ErrorMessage name="reason" class="error_message" />

                <p class="py-4 text-0.9">If others, please specify </p>
                <Field type="text" placeholder="Type here" name="otherReason" class="input  input-bordered w-full" v-model="remarks"
                    style="border:  1px solid #d2d2d2;" :rules="validateInput" />
                <ErrorMessage name="otherReason" class="error_message" />
                <span class="w-full flex justify-end gap-4 mt-4">
                    <form method="dialog">

                        <button class="btn bg-white border-0 shadow-0">
                            Cancel
                        </button>
                    </form>
                    <button class="btn btn-success text-white">
                        Submit
                    </button>
                </span>

            </Form>




        </div>
    </dialog>


</template>


<style scoped>

.error_message{
    color: red;
    font-size: .9rem;
}
.isApproved{
    color: rgb(21 128 61);
}

.isReject{
    color: red;

}

</style>