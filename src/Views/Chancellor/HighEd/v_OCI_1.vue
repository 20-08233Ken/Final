<script src="../../../Scripts/VCs/HighEd/v_OCI_1.js">


</script>

<template>
    <h1 class="font-Header text-3xl text-Red-Rose">Higher Education Program</h1>
    <h2 class="font-Subheader text-lg text-Red-Rose">Outcome Indicator 1</h2>
    <h2 class="font-Subheader text-1gray-700">Percentage of first-time licensure exam takers that pass the licensure
        exams</h2>



    <span class=" w-full overflow-x-auto">

        <v-data-table :headers="headers" :items="hepData" class="elevation-1 " items-per-page="10"
            style="width:100%; overflow-x: scroll;">


            <template v-slot:item.check_box="{ item }">

                    <input type='checkbox'> 
            </template>
            <template v-slot:item.supported_file="{ item }">

                <span class="flex w-full  gap-2 py-4">
                    <v-btn size="x-small" class="bg-light-blue-darken-3"><a :href=item.supported_file
                            target="_blank">View PDF</a> </v-btn>
                </span>
            </template>
            <template v-slot:item.actions="{ item }">
                <span class="flex w-full  gap-2 py-4">
                    <v-btn size="x-small" class="bg-teal-darken-3" onclick="showApproval.showModal()"
                        @click="approvedHEP(item.hep_one_id)"> Approved</v-btn>
                    <v-btn size="x-small" class="bg-red-darken-3" onclick="showRejection.showModal()"
                        @click="rejectedHEP(item.hep_one_id)"> Reject</v-btn>
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
                <Field as="select" placeholder="Type here" name="reason" class="select w-full"
                    style="border:  1px solid #d2d2d2;">
                    <option v-for=" x in reasonOpt" :value="x.reason">{{ x.reason }}</option>
                </Field>
                <ErrorMessage name="reason" class="error_message" />

                <p class="py-4 text-0.9">If others, please specify </p>
                <Field type="text" placeholder="Type here" name="otherReason" class="input  input-bordered w-full"
                    style="border:  1px solid #d2d2d2;" />
                <ErrorMessage name="otherReason" class="error_message" />
            </Form>


            <form method="dialog">
                <span class="w-full flex justify-end gap-4 mt-4">
                    <button class="btn bg-white border-0 shadow-0">
                        Cancel
                    </button>

                    <button class="btn btn-success text-white" @click="RejectRequest">
                        Submit
                    </button>
                </span>
            </form>

        </div>
    </dialog>
</template>