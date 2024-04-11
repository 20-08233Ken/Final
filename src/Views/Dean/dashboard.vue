<script src="../../Scripts/Dean/dashboard/"></script>

<template>
    <main class="w-full flex-col bg-white">

        <Dean_nav />

        <section class="w-full flex flex-col px-3vw items-center ">

            <div class="w-10/12  mt-12 flex  gap-4 items-center">
                <v-icon size="large">mdi-school-outline</v-icon>
                <h1 class="text-red-darken-3 font-Header text-xl" v-html="college"></h1>
            </div>


            <div class="w-11/12 flex gap-4">
                <div class="w-10/12 flex flex-col mt-8  shadow-card2 pt-8 items-center gap-12 ">
                    <h1 class="font-Subheader text-teal-darken-3 ">Graduate Tracer Status</h1>
                    <Dashboard_tracer />
                </div>

                <div class="w-10/12 flex flex-col mt-8 shadow-card2 pt-8 items-center gap-12 ">
                    <h1 class="font-Subheader text-teal-darken-3 ">Licensure Exam First Time Takers</h1>
                    <Dashboard_takers />
                </div>

            </div>



        </section>

    </main>

</template>