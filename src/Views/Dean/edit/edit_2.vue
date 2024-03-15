<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
</script>

<template>
                                <v-dialog max-width="700">
                                <template v-slot:activator="{ props: activatorProps }">
                                    <v-btn size="x-small" block v-bind="activatorProps" color="surface-variant"
                                        text="Edit" variant="flat" :disabled='item.tb_approval == ``'></v-btn>
                                </template>

                                <template v-slot:default="{ isActive }">
                                    <v-card class="px-8 py-8">
                                        <h3
                                            class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4 ">

                                            Edit Record</h3>
                                        <Form class="mt-4">

                                            <p class="text-0.9 font-Subheader text-gray-500 ">Campus</p>
                                            <Field type="text" name='campus' placeholder="Type here" disabled
                                                class="input mt-2 input-bordered w-full " />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Department</p>
                                            <Field type="text" name='department' placeholder="Type here" disabled
                                                class="input mt-2 input-bordered w-full "
                                               />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Program</p>
                                            <Field as="select" name="program" class="select select-bordered w-full mt-2"
                                                style="border:  1px solid #d2d2d2;" >
                                                <option disabled selected>Select Program ...</option>
                                         
                                            </Field>
                                            <ErrorMessage name="program" class="error_message" />


                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Firstname</p>
                                            <Field type="text" name="firstname" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" />
                                            <ErrorMessage name="firstname" class="error_message" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Lastname</p>
                                            <Field type="text" name="lastname" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" />
                                            <ErrorMessage name="lastname" class="error_message" />

                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Middle Initial</p>
                                            <Field type="text" name="m_initial" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" />
                                            <ErrorMessage name="m_initial" class="error_message" />


                                            <span class="flex items-center mt-6 gap-2">
                                                <p class="text-0.9 font-Subheader text-gray-500 ">Graduate Tracer Status
                                                </p>
                                                <i class="tooltip tooltip-right"
                                                    data-tip="List down all the 1st semester FY 2021-2022 graduates per degree program and then provide the status for each graduate.">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                                    </svg>
                                                </i>
                                            </span>

                                            <Field as="select" name="statuses"
                                                class="select select-bordered w-full mt-2"
                                                style="border:  1px solid #d2d2d2;" >
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                                    </svg>
                                                </i>
                                            </span>
                                            <Field type="text" name="business" placeholder="Type here"
                                                class="input mt-2 input-bordered w-full "
                                                style="border:  1px solid #d2d2d2;" />
                                            <ErrorMessage name="business" class="error_message" />


                                            <p class="text-0.9 font-Subheader text-gray-500 mt-6">Upload Supported File
                                            </p>

                                            <table class="w-full mt-4">
                                                <thead>
                                                    <tr class="bg-gray-700 text-white">
                                                        <th class="border-2 text-white"></th>
                                                        <th
                                                            class="border-2 text-white text-center text-0.9 font-Subheader">
                                                            Required Files</th>
                                                        <th
                                                            class="border-2 text-white text-center text-0.9 font-Subheader ">
                                                            Upload Files
                                                        </th>
                                                        <th>

                                                        </th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td
                                                            class="w-2/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            1
                                                        </td>
                                                        <td
                                                            class="w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                            Graduate Tracer Study</td>
                                                        <td
                                                            class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            <input type="file" class="ml-5" >
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            class="w-2/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            2
                                                        </td>
                                                        <td
                                                            class="w-7/12 px-3 border-2 text-0.9 text-Subheader text-gray-700">
                                                            Official list of FY 2021 Graduates</td>
                                                        <td
                                                            class="w-3/12 border-2 text-0.9 text-Subheader text-gray-700 ">
                                                            <input type="file" class="ml-5">
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <span class="w-full flex items-center justify-end gap-2 mt-5">
                                                <button class="btn bg-emerald-600 text-white w-2/12">Add</button>
                                            </span>
                                        </Form>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>

                                            <v-btn text="Close" @click="isActive.value = false"></v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </v-dialog>
</template>