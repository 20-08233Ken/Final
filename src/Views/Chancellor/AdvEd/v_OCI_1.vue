<script src="../../../Scripts/Chancellor/AdvEd/v_OCI_1.js">

</script>

<template>
            <h1 class="font-Header text-3xl text-Red-Rose">Higher Education Program</h1>
            <h2 class="font-Subheader text-lg text-Red-Rose">Outcome Indicator 1 </h2>
            <h2 class="font-Subheader text-1gray-700"> Percentage of graduate school faculty engaged in research work</h2>


    <span class=" w-full overflow-x-auto">

        <span class="w-full flex items-center justify-end my-4 gap-2">
            <v-btn size="small"  elevation="0" class="bg-grey-lighten-3">
                <v-icon>mdi-refresh</v-icon>
                <p class="ml-3">Reload Table</p>
            </v-btn>
            <v-btn size="small" class="bg-teal-darken-3" onclick="showApproval.showModal()"
                :disabled="selectedIds == ''"> Approved</v-btn>
        </span>
<!-- 
        <div class="w-full flex justify-end">

        </div> -->
        <v-data-table :headers="headers" :items="AdvanceEducationData" loading-text="Loading... Please wait" :loading="myLoading"
            class="elevation-1 " items-per-page="10" style="width:100%; overflow-x: scroll;">
            <template v-slot:item.check_box="{ item }" v-if="user === 'Chancellor'">
                <input type='checkbox' :id="item.advance_ed_id" :value="item.advance_ed_id"
                    @change="toogleCheckBox(item.advance_ed_id)">
            </template>
         
            <template v-slot:item.copy_of_enrollment_form="{ item }">
                <span class="flex w-full  gap-2 py-4">
                        <v-btn size="x-small" class="bg-light-blue-darken-3" @click="viewEnrollmentFormPDF(item.advance_ed_id)">View PDF</v-btn>
                </span>
            </template>
            <template v-slot:item.research_conducted="{ item }">
                <span class="flex w-full  gap-2 py-4">
                        <v-btn size="x-small" class="bg-light-blue-darken-3" @click="viewResearchPDF(item.advance_ed_id)">View PDF</v-btn>
                </span>
            </template>
            <template v-slot:item.utilized_technology="{ item }">
                <span class="flex w-full  gap-2 py-4">
                        <v-btn size="x-small" class="bg-light-blue-darken-3" @click="viewUtilizedTechPDF(item.advance_ed_id)">View PDF</v-btn>
                </span>
            </template>
            <template v-slot:item.report_of_extension_program="{ item }">
                <span class="flex w-full  gap-2 py-4">
                        <v-btn size="x-small" class="bg-light-blue-darken-3" @click="viewDisplayExtensionProgram(item.advance_ed_id)">View PDF</v-btn>
                </span>
            </template>
            <template v-slot:item.actions="{ item }">
                <span class="flex w-full flex-col  gap-2 py-4">
                    <v-btn size="x-small" class="bg-teal-darken-3" onclick="showApproval.showModal()"
                        @click="approvedAE(item.advance_ed_id)" v-if="user != 'Chancellor'"> Approved</v-btn>
                    <v-btn size="x-small" class="bg-red-darken-3" onclick="showRejection.showModal()"
                        @click="rejectedAE(item.advance_ed_id)"> Reject</v-btn>

                    <v-dialog max-width="700">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn block size="x-small" v-bind="activatorProps" color="surface-variant" text="View"
                                variant="flat" @click="ViewHistory(item.advance_ed_id)"></v-btn>
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

                    <button class="btn btn-success text-white"  @click="ApprovedRequest">
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