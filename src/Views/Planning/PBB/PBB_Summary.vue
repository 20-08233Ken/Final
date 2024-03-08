<script src="../../../Scripts/Planning/PBB/PBB_Summary.js"></script>

<template>
    <main class="w-full flex flex-col">
        <Navigation/>
      
        <section class="w-full flex  px-6vw pt-6vw">
            <div class="w-2/4">
                <h1 class="font-Header text-4xl text-Red-Darken">Performanced-Based Bonus</h1>
            </div>

            <div class="flex gap-1 w-2/4 justify-end items-center">
                <span class="flex items-center gap-4 w-full justify-end">
                    <h2 class="font-Subheader mt-2 text-Red-Rose">Year</h2>
                    <select class="select  w-3/12 mt-2 bg-gray-100">
                        <option disabled selected>FY 2023</option>
                        <option>FY 2021</option>
                        <option>FY 2022</option>
                        <option>FY 2023</option>
                    </select>

                    <h2 class="font-Subheader mt-2 text-Red-Rose">Quarter</h2>
                    <select class="select  w-3/12 mt-2 bg-gray-100">
                        <option disabled selected>Q1</option>
                        <option>Q2</option>
                        <option>Q3</option>
                        <option>Q4</option>
                    </select>
                </span>
            </div>

        </section>

        <section class="w-full flex px-6vw py-3vw">
            <div class="flex flex-col w-4/12">
                <PBB_sideNav/>
            </div>


            <div class="flex w-8/12 flex-col">
                <div class="text-sm breadcrumbs w-full">
                    <ul>
                        <li class="text-gray-500">
                            <router-link to="/pbb">
                                <a>PBB</a>
                            </router-link>
                        </li> 
                        <li class="text-gray-500">                   
                             <router-link to="/PPB_Higher">
                                <a>PBB Logs</a>
                            </router-link></li> 
                        <li class="text-gray-500"><a>Modified Form</a></li> 
                    
                    </ul>
                </div>
            
                <h1 class="font-Header text-Red-Rose text-xl">
                    Modified Form A1: <br>State Universities and Colleges Bureaus/Office Performance Report
                </h1>
           
                <select class="select select-bordered w-full max-w-xs mt-4 bg-Red-Darken text-white " v-model="selectedProgram" >
                    <option>Higher Education Program</option>
                    <option >Advanced Education Program</option>
                    <option >Research Program</option>
                    <option >Technical Advisory Extension Program</option>
                </select>.

                <component :is="currentComponent"></component>
            </div>

            
        </section>

    </main>

</template>

<style scoped>


    li{
        display: flex;
        align-items: center;
        margin-top: 10px;
        gap: 1.5rem;
    
    }
    .green{
            display: flex;
            background-color: forestgreen;
            width: 10px;
            height: 10px;
            border-radius: 50%;
        }

    .red{
            display: flex;
            background-color: red;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-left: 50%;
    }
</style>