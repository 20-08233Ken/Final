<script src="../../../Scripts/VCs/AdvEd/v_OCI_1.js">

</script>

<template>
            <h1 class="font-Header text-3xl text-Red-Rose">Advance Education Program</h1>
            <h2 class="font-Subheader text-lg text-Red-Rose">Outcome Indicator 1 </h2>
            <h2 class="font-Subheader text-1gray-700"> Percentage of graduate school faculty engaged in research work</h2>



            <span class=" w-full">

                <v-data-table :headers="headers"  :items="AdvanceEducationData" class="elevation-1" items-per-page="10">
                
                <template v-slot:item.copy_of_enrollment_form="{ item }">
                    <span class="flex w-full  gap-2 py-4">
                        <v-dialog max-width="1700">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn size="x-small" class="bg-light-blue-darken-3" v-bind="activatorProps"
                                    text="View PDF" variant="flat"
                                    @click="viewEnrollmentFormPDF(item.advance_ed_id)"></v-btn>
                            </template>
        
                            <template v-slot:default="{ isActive }">
                                <v-card title="View PDF">
        
                                    <div>
                                        <!-- <pdf-viewer :src="pdfUrl" :show-toolbar="true"></pdf-viewer> -->
                                        <PDFViewer :source="pdfBase64" style="height: 100vh; width: 100vw">
                                        </PDFViewer>
                                    </div>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
        
                                        <v-btn text="Close " @click="isActive.value = false"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>
                    </span>
                </template>
                <template v-slot:item.research_conducted="{ item }">
                    <v-dialog max-width="1700">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn size="x-small" class="bg-light-blue-darken-3" v-bind="activatorProps"
                                text="View PDF" variant="flat"
                                @click="viewResearchPDF(item.advance_ed_id)"></v-btn>
                        </template>
    
                        <template v-slot:default="{ isActive }">
                            <v-card title="View PDF">
    
                                <div>
                                    <!-- <pdf-viewer :src="pdfUrl" :show-toolbar="true"></pdf-viewer> -->
                                    <PDFViewer :source="pdfBase64" style="height: 100vh; width: 100vw">
                                    </PDFViewer>
                                </div>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
    
                                    <v-btn text="Close " @click="isActive.value = false"></v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>
                </template>
                <template v-slot:item.utilized_technology="{ item }">
                    <span class="flex w-full  gap-2 py-4">
                        <v-dialog max-width="1700">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn size="x-small" class="bg-light-blue-darken-3" v-bind="activatorProps"
                                    text="View PDF" variant="flat"
                                    @click="viewUtilizedTechPDF(item.advance_ed_id)"></v-btn>
                            </template>
        
                            <template v-slot:default="{ isActive }">
                                <v-card title="View PDF">
        
                                    <div>
                                        <!-- <pdf-viewer :src="pdfUrl" :show-toolbar="true"></pdf-viewer> -->
                                        <PDFViewer :source="pdfBase64" style="height: 100vh; width: 100vw">
                                        </PDFViewer>
                                    </div>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
        
                                        <v-btn text="Close " @click="isActive.value = false"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>
                    </span>
                </template>
                <template v-slot:item.report_of_extension_program="{ item }">
                    <v-dialog max-width="1700">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn size="x-small" class="bg-light-blue-darken-3" v-bind="activatorProps"
                                text="View PDF" variant="flat"
                                @click="viewDisplayExtensionProgram(item.advance_ed_id)"></v-btn>
                        </template>
    
                        <template v-slot:default="{ isActive }">
                            <v-card title="View PDF">
    
                                <div>
                                    <!-- <pdf-viewer :src="pdfUrl" :show-toolbar="true"></pdf-viewer> -->
                                    <PDFViewer :source="pdfBase64" style="height: 100vh; width: 100vw">
                                    </PDFViewer>
                                </div>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
    
                                    <v-btn text="Close " @click="isActive.value = false"></v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>
             
                </template>

                <template v-slot:item.actions="{item}">
                
                    <span class="flex w-full  gap-2 py-4">
                        <v-btn size="x-small" class="bg-teal-darken-3" onclick="showApproval.showModal()"
                        @click="approvedAE(item.advance_ed_id)"
                        :disabled="(item.status != 'For IPDO Approval' && this.user == 'IPDO') || (item.status != 'For VPRDES Approval' && this.user == 'VPRDES') || (this.user == 'VCAA'  || this.user == 'VPAA' || this.user == 'VPDEA' || this.user == 'OUP' || this.user == 'System Administrator')"> Approved</v-btn>

                    <v-btn size="x-small" class="bg-red-darken-3" onclick="showRejection.showModal()"
                        @click="rejectedAE(item.advance_ed_id)"
                        :disabled="(item.status != 'For IPDO Approval' && this.user == 'IPDO') || (item.status != 'For VPRDES Approval' && this.user == 'VPRDES') || (this.user == 'VCAA'  || this.user == 'VPAA'|| this.user == 'VPDEA' || this.user == 'OUP' || this.user == 'System Administrator') "> Reject</v-btn>

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