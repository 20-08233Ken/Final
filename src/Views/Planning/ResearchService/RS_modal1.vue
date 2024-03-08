<template>
    <button class="btn bg-Red-Rose text-white text-sm py-2 px-4 rounded-md ml-24 shadow-card2" onclick="my_modal_1.showModal()">View</button>
    <dialog id="my_modal_1" class="modal">

    <div class="modal-box w-11/12 max-w-full">
        <h3 class="font-Header text-Red-Rose text-lg">Performance Result: Higher  Education Program</h3>
        <div class="divider"></div> 
        <h2 class="w-full font-Subheader text-center">Outcome Indicator 1: Percentage of first-time licensure exam takers that pass the licensure exams</h2>
        <div class="divider"></div> 

        <ol class="w-full px-16" style="list-style: decimal;">
            <li>List board programs in ALL campuses</li>
            <li>Values for Columns 2, 3, and 4 should only include those that fall within FY 2022</li>
            <li>Incomplete entries will be DISREGARDED</li>
        </ol>


        <div class="w-full flex flex-col mt-2 overflow-x-auto">
            
            <span class="w-full flex items-center justify-end gap-7 mb-4">

                <span class="flex flex-col items-center">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                        </svg>
                    </button>
                    <p class="text-sm font-Subheader" style="font-size: 11px;">Print</p>
                </span>

                <span class="flex flex-col items-center">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                    </button>
                    <p class=" font-Subheader" style="font-size: 11px;">Download</p>
                </span>
            </span>

            <table class="table table-lg">
                    <thead>
                    <tr class=" border">
                        <th class="text-0.9"></th> 
                        <th class="text-0.9 text-black" colspan="2"></th> 
                        <th class="text-0.9 text-black text-center bg-red-200" colspan="2">Duration</th> 
        

                        <th class="text-0.9 text-black text-center bg-orange-200" colspan="5">Presentation</th> 

                        <th class="text-0.9 text-black text-center bg-amber-200" colspan="6">Publication</th>


                        <th class="text-0.9 text-black text-center bg-lime-200" colspan="2">Output</th>

                        
                        <th class="text-0.9 text-black text-center bg-green-200 ">Utilization</th>
                    </tr>

                    <tr class="bg-cyan-50 border">
                        <th class="text-0.9"></th> 
                        <th class="text-0.9 text-black">Research Title</th> 
                        <th class="text-0.9 text-black">Status</th> 
                        <!-- <th class="text-0.9 text-black" colspan="2">Duration</th>  -->
                        <th class="text-0.9 text-black bg-red-200">Date Started</th> 
                        <th class="text-0.9 text-black bg-red-200">Date Completed</th> 

                        <th class="text-0.9 text-black bg-orange-200">Article / Title</th> 
                        <th class="text-0.9 text-black bg-orange-200">Title of Forum</th>
                        <th class="text-0.9 text-black bg-orange-200">Venue</th>
                        <th class="text-0.9 text-black bg-orange-200">Type</th>
                        <th class="text-0.9 text-black bg-orange-200">Date</th>

                        <th class="text-0.9 text-black bg-amber-200">Article / Title</th>
                        <th class="text-0.9 text-black bg-amber-200">Date of Publication </th>
                        <th class="text-0.9 text-black bg-amber-200">Title of Journal or Publication</th>
                        <th class="text-0.9 text-black bg-amber-200">Vol. No. & Issue No.</th>
                        <th class="text-0.9 text-black bg-amber-200">ISSN / ISBN</th>
                        <th class="text-0.9 text-black bg-amber-200">Index</th>

                        <th class="text-0.9 text-black bg-lime-200">Product Name / Methods/ Process / Technology</th>
                        <th class="text-0.9 text-black bg-lime-200"> Proof / Description / Documentation</th>
                        <th class="text-0.9 text-black bg-lime-200">Beneficiary</th>
                    </tr>
                    </thead> 
                    <tbody>
                    <tr>
                        <th>1</th> 
                        <td>Cy Ganderton</td> 
                        <td>Quality Control Specialist</td> 
                        <td>Littel, Schaden and Vandervort</td> 
                        <td>Canada</td> 
                        <td>12/16/2020</td> 
                        <td>Blue</td>
                    </tr>
                </tbody>
            </table>

            <div class="flex flex-col w-full gap-12 mt-4">
                <span class="flex w-full">
                    <p class="w-2/4">Prepared By</p>
                    <p class="w-2/4">Aprroved By</p>
                </span>

                <span class="flex w-full">
                    <span class="flex justify-center w-2/4 gap-8">
                        <p class="border-t-1 pt-2 border-black w-4/12 flex justify-center">Dean</p>
                        <p class="border-t-1 pt-2 border-black w-3/12 flex justify-center">Date</p>
                    </span>
                    <span class="flex justify-center w-2/4 gap-8">
                        <p class="border-t-1 pt-2 border-black w-4/12 flex justify-center">College / University President</p>
                        <p class="border-t-1 pt-2 border-black w-3/12 flex justify-center">Date</p>                 
                    </span>
                </span>
            </div>

        </div>

        <div class="modal-action">
        <form method="dialog">
            <!-- if there is a button, it will close the modal -->
            <button class="btn">Close</button>
        </form>
        </div>
    </div>

    </dialog>
</template>