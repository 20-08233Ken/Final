<script >
    import Navigation from '../../components/Others/Navigation.vue';
    import Graph1 from '../../components/graph/FYDP/graph1.vue'
    import Graph2 from '../../components/graph/FYDP/graph2.vue'
    import Graph3 from '../../components/graph/FYDP/graph3.vue'
    import Graph4 from '../../components/graph/FYDP/graph4.vue'
    import Graph5 from '../../components/graph/FYDP/graph5.vue'
    import Graph6 from '../../components/graph/FYDP/graph6.vue'

    export default{
        data(){
            return{
                active_Circle:2023,
                active_Year:2023,
                active_Graph:2023
                
            }
        },
        components:{
            Navigation,
            Graph1,
            Graph2,
            Graph3,
            Graph4,
            Graph5,
            Graph6

        },

        methods:{
            showComponent(circle, year){
                this.active_Circle = circle
                this.active_Year = year
                this.active_Graph = year
              
            }
        }
    
    }
</script>

<template>
        <main class="w-full flex flex-col">
            <Navigation/>

            <section class="section-1 w-full flex flex-col justify-center items-center pb-8" >

                <div class="w-full flex justify-center items-center py-24">
                    <div class="flex flex-col justify-center items-center ">
                        <h5 :class="{'active_year':active_Year===2023, 'in_year': active_Year !== 2023}">2023</h5>
                        <button :class="{'active':active_Circle===2023, 'not_active': active_Circle !== 2023}" @click="showComponent(2023,2023)">
                        </button>
                    </div>
                    <span></span>

                    <div class="flex flex-col justify-center items-center">
                        <h5 :class="{'active_year':active_Year===2024, 'in_year': active_Year !== 2024}">2024</h5>
                        <button :class="{'active':active_Circle===2024, 'not_active': active_Circle !== 2024}" @click="showComponent(2024,2024)"></button>
                    </div>
                    <span></span>


                    <div class="flex flex-col justify-center items-center">
                        <h5 :class="{'active_year':active_Year===2025, 'in_year': active_Year !== 2025}">2025</h5>
                        <button :class="{'active':active_Circle===2025, 'not_active': active_Circle !== 2025}" @click="showComponent(2025,2025)"></button>
                    </div>
                    <span></span>

                    <div class="flex flex-col justify-center items-center">
                        <h5 :class="{'active_year':active_Year===2026, 'in_year': active_Year !== 2026}">2026</h5>
                        <button :class="{'active':active_Circle===2026, 'not_active': active_Circle !== 2026}" @click="showComponent(2026,2026)"></button>
                    </div>
                    <span></span>

                    <div class="flex flex-col justify-center items-center">
                        <h5 :class="{'active_year':active_Year===2027, 'in_year': active_Year !== 2027}">2027</h5>
                        <button :class="{'active':active_Circle===2027, 'not_active': active_Circle !== 2027}" @click="showComponent(2027,2027)"></button>
                    </div>

                </div>

                <div class="w-full flex justify-end">
                        <button class="w-1/12 mr-8"> 
                            <router-link to="/fydp_ques" class="w-full flex items-center justify-center text-sm gap-2 px-4 py-3 rounded-lg bg-Red-Rose text-white ">
                            Questionnaires 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </router-link>

                        </button>
                </div>

            </section>


            <section class="w-full flex  bg-orange">

                <div class="w-4/12 flex flex-col height 30vh bg-orange-50">
                    <h1 
                        class="w-full  px-3vw py-6 text-Red-Rose font-Header text-3xl bg-white "
                       
                    >
                    ACADEMIC LEADERSHIP</h1>

                    <ul class="w-full pl-16 py-16 flex flex-col gap-10 text-0.9 bg-orange-50" style="list-style-type: decimal;">
                        <li>Improve physical infrastructure and other support facilities for optimum student interactions, collaborations, and learning.</li>
                        <li>Deliver proactive academic support, peer mentoring, and counseling to students.</li>
                        <li>Ensure that all faculty have undergone training workshops on enhancing the academic, social, emotional, and physical well-being of students and their learning experience in the campus.</li>
                        <li>Establish seamless technology-enabled student services.</li>
                        <li>Empower student groups to become an active partner in student development programs.</li>
                    </ul>


                </div>
               
                <div  class="w-8/12  bg-orange-50 flex flex-col items-center" style="clip-path: polygon(5% 0, 99% 0, 100% 100%, 0 100%, 0 14%);">
                    <div class="w-full flex flex-col items-center"  :class="{'isGraph':active_Graph === 2023, 'notGraph':active_Graph !== 2023}">
                        <div role="tablist" class="tabs tabs-bordered w-10/12 mt-8" >
                            <input type="radio" name="my_tabs_1" role="tab" class="tab1 tab" aria-label="Outcome 1" checked style="width: 10rem;"/>
                            <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>

                            <input type="radio" name="my_tabs_1" role="tab" class="tab1 tab" aria-label="Outcome 2"  style="width: 10rem;" />
                            <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>

                            <input type="radio" name="my_tabs_1" role="tab" class="tab1 tab" aria-label="Outcome 3"  style="width: 10rem;"/>
                            <div role="tabpanel" class="tab-content p-10 w-full"><Graph1/></div>
                        </div>
                    </div>

                    <div class="w-full items-center justify-center hidden " :class="{'isGraph':active_Graph === 2024, 'notGraph':active_Graph !== 2024}">
                        <p>No Data 2024</p>
                    </div>

                    <div class="w-full items-center justify-center hidden " :class="{'isGraph':active_Graph === 2025, 'notGraph':active_Graph !== 2025}">
                        <p>No Data 2025</p>
                    </div>
                    <div class="w-full items-center justify-center hidden " :class="{'isGraph':active_Graph === 2026, 'notGraph':active_Graph !== 2026}">
                        <p>No Data 2026</p>
                    </div>
                    <div class="w-full items-center justify-center hidden " :class="{'isGraph':active_Graph === 2027, 'notGraph':active_Graph !== 2027}">
                        <p>No Data 2027</p>
                    </div>
                </div>
        
                
            </section>

            <section class="w-full flex ">

                <div class="w-4/12 flex flex-col height  bg-white">
                    <h1 
                        class="w-full px-3vw py-6 text-Red-Rose bg-orange-50    font-Header text-3xl "
                        style="clip-path: polygon(0% 0%, 100% 0, 90% 100%, 0% 100%);"
                       
                    >
                    RESEARCH AND INNOVATION</h1>

                    <ul class="w-full pl-16 py-16 flex flex-col gap-10 text-0.9 " style="list-style-type: decimal;">
                        <li>Establish enabling policies and environment.</li>
                        <li>Develop R&D Management Information System (MIS).</li>
                        <li>Promote cross-disciplinary and interdisciplinary research collaborations.</li>
                        <li>Upgrade the existing research laboratories.</li>
                        <li>Strengthen capability-building programs for researchers.</li>
                    </ul>


                </div>
       

                <div class="w-8/12  bg-white-50 flex flex-col items-center" >
                    <div class="w-full flex flex-col items-center"  :class="{'isGraph':active_Graph === 2023, 'notGraph':active_Graph !== 2023}">
                        <div role="tablist" class="tabs tabs-bordered w-10/12 mt-8">
                            <input type="radio" name="my_tabs_2" role="tab" class="tab1 tab" aria-label="Outcome 1" checked  style="width: 10rem;"/>
                            <div role="tabpanel" class="tab-content p-10 w-full"><Graph2/></div>

                            <input type="radio" name="my_tabs_2" role="tab" class="tab1 tab" aria-label="Outcome 2"  style="width: 10rem;" />
                            <div role="tabpanel" class="tab-content p-10 w-full"><Graph2/></div>

                            <input type="radio" name="my_tabs_2" role="tab" class="tab1 tab" aria-label="Outcome 3"  style="width: 10rem;"/>
                            <div role="tabpanel" class="tab-content p-10 w-full"><Graph2/></div>
                        </div>
                    </div>
                </div>
                
            </section>
            
            <section class="w-full flex  bg-orange">

                <div class="w-4/12 flex flex-col height 30vh bg-orange-50">
                    <h1 
                        class="w-full  px-3vw py-6 text-Red-Rose font-Header text-3xl bg-white "
                    
                    >
                    SOCIAL RESPONSIBILITY</h1>

                    <ul class="w-full pl-16 py-16 flex flex-col gap-10 text-0.9 bg-orange-50" style="list-style-type: decimal;">
                        <li>Inculcate the culture of volunteerism among the University community and other stakeholders</li>
                        <li>Improve critical awareness among families and communities on relevant social issues.</li>
                        <li>Accelerate inclusive social innovations and social enterprises for families  and communities.</li>
                        <li>Strengthen institutional partnerships.</li>

                    </ul>


                </div>

                <div class="w-8/12  bg-orange-50 flex flex-col items-center" style="clip-path: polygon(5% 0, 99% 0, 100% 100%, 0 100%, 0 14%);">
                    <div class="w-full flex flex-col items-center"  :class="{'isGraph':active_Graph === 2023, 'notGraph':active_Graph !== 2023}">
                    <div role="tablist" class="tabs tabs-bordered w-10/12 mt-8">
                        <input type="radio" name="my_tabs_3" role="tab" class="tab1 tab" aria-label="Outcome 1" checked style="width: 10rem;"/>
                        <div role="tabpanel" class="tab-content p-10 w-full"><Graph3/></div>

                        <input type="radio" name="my_tabs_3" role="tab" class="tab1 tab" aria-label="Outcome 2"  style="width: 10rem;" />
                        <div role="tabpanel" class="tab-content p-10 w-full"><Graph3/></div>

                        <input type="radio" name="my_tabs_3" role="tab" class="tab1 tab" aria-label="Outcome 3"  style="width: 10rem;"/>
                        <div role="tabpanel" class="tab-content p-10 w-full"><Graph3/></div>
                    </div>
                    </div>


                </div>


            </section>

            <section class="w-full flex ">

                <div class="w-4/12 flex flex-col height  bg-white">
                    <h1 
                        class="w-full px-3vw py-6 text-Red-Rose bg-orange-50    font-Header text-3xl "
                        style="clip-path: polygon(0% 0%, 100% 0, 90% 100%, 0% 100%);"
                    
                    >
                    INTERNATIONALIZATION</h1>

                    <ul class="w-full pl-16 py-16 flex flex-col gap-10 text-0.9 " style="list-style-type: decimal;">
                        <li>Intensify international linkages and memberships.</li>
                        <li>Spearhead international collaborations on the advancement of engineering and technology education.</li>
                        <li>Organize and participate in international scholarly events.</li>
                        <li>Establish a strong global network among alumni worldwide.</li>
                    </ul>


                </div>


                <div class="w-8/12  bg-white-50 flex flex-col items-center" >
                    <div class="w-full flex flex-col items-center"  :class="{'isGraph':active_Graph === 2023, 'notGraph':active_Graph !== 2023}">
                    <div role="tablist" class="tabs tabs-bordered w-10/12 mt-8">
                        <input type="radio" name="my_tabs_8" role="tab" class="tab1 tab" aria-label="Outcome 1" checked  style="width: 10rem;"/>
                        <div role="tabpanel" class="tab-content p-10 w-full"><Graph4/></div>

                        <input type="radio" name="my_tabs_8" role="tab" class="tab1 tab" aria-label="Outcome 2"  style="width: 10rem;" />
                        <div role="tabpanel" class="tab-content p-10 w-full"><Graph4/></div>

                        <input type="radio" name="my_tabs_8" role="tab" class="tab1 tab" aria-label="Outcome 3"  style="width: 10rem;"/>
                        <div role="tabpanel" class="tab-content p-10 w-full"><Graph4/></div>
                    </div>
                    </div>

                </div>

            </section>
        
            <section class="w-full flex  bg-orange">

                <div class="w-4/12 flex flex-col height 30vh bg-orange-50">
                    <h1 
                        class="w-full  px-3vw py-6 text-Red-Rose font-Header text-3xl bg-white "
                    
                    >
                    ADVANCING  INTERDISCIPLINARITY</h1>

                    <ul class="w-full pl-16 py-16 flex flex-col gap-10 text-0.9 bg-orange-50" style="list-style-type: decimal;">
                        <li>Design and implement a comprehensive sports development program.</li>
                        <li>Adopt engineering innovations in sports.</li>
                        <li>Provide high-grade sports facilities and amenities.</li>
                        <li>Inculcate the value of sports and healthy lifestyles among students, teaching, and non-teaching personnel.</li>
                    </ul>


                </div>

                <div class="w-8/12  bg-orange-50 flex flex-col items-center" style="clip-path: polygon(5% 0, 99% 0, 100% 100%, 0 100%, 0 14%);">
                    <div class="w-full flex flex-col items-center"  :class="{'isGraph':active_Graph === 2023, 'notGraph':active_Graph !== 2023}">
                    <div role="tablist" class="tabs tabs-bordered w-10/12 mt-8">
                        <input type="radio" name="my_tabs_5" role="tab" class="tab1 tab" aria-label="Outcome 1" checked style="width: 10rem;"/>
                        <div role="tabpanel" class="tab-content p-10 w-full"><Graph5/></div>

                        <input type="radio" name="my_tabs_5" role="tab" class="tab1 tab" aria-label="Outcome 2"  style="width: 10rem;" />
                        <div role="tabpanel" class="tab-content p-10 w-full"><Graph5/></div>

                        <input type="radio" name="my_tabs_5" role="tab" class="tab1 tab" aria-label="Outcome 3"  style="width: 10rem;"/>
                        <div role="tabpanel" class="tab-content p-10 w-full"><Graph5/></div>
                    </div>
                    </div>
                </div>


            </section>

            <section class="w-full flex ">

            <div class="w-4/12 flex flex-col height  bg-white">
                <h1 
                    class="w-full px-3vw py-6 text-Red-Rose bg-orange-50    font-Header text-3xl "
                    style="clip-path: polygon(0% 0%, 100% 0, 90% 100%, 0% 100%);"
                
                >
                SUSTAINABILITY</h1>

                <ul class="w-full pl-16 py-16 flex flex-col gap-10 text-0.9 " style="list-style-type: decimal;">
                    <li>Leverage university expertise and resources in the conduct of collaborative or joint research with private companies.</li>
                    <li>Improve the administrative and other ancillary support to university faculty and researchers.</li>
                    <li>Aggressively seek partnerships with the private sector and industry to supplement university infrastructure development, advance joint R&D, and bolster human capital needed in the workplace.The</li>
                </ul>


            </div>


            <div class="w-8/12  bg-white-50 flex flex-col items-center" >
                <div class="w-full flex flex-col items-center"  :class="{'isGraph':active_Graph === 2023, 'notGraph':active_Graph !== 2023}">
                <div role="tablist" class="tabs tabs-bordered w-10/12 mt-8">
                    <input type="radio" name="my_tabs_6" role="tab" class="tab1 tab" aria-label="Outcome 1" checked  style="width: 10rem;"/>
                    <div role="tabpanel" class="tab-content p-10 w-full"><Graph6/></div>

                    <input type="radio" name="my_tabs_6" role="tab" class="tab1 tab" aria-label="Outcome 2"  style="width: 10rem;" />
                    <div role="tabpanel" class="tab-content p-10 w-full"><Graph6/></div>

                    <input type="radio" name="my_tabs_6" role="tab" class="tab1 tab" aria-label="Outcome 3"  style="width: 10rem;"/>
                    <div role="tabpanel" class="tab-content p-10 w-full"><Graph6/></div>
                </div>
                </div>

            </div>

            </section>
        






        </main>
</template>

<style scoped>
    .not_active{
        display: flex;
        height: 4rem;
        width: 4rem;
        /* background-color: #d00412; */
        background-color: #d9d9d9;
        border-radius: 50%;
    }


   .active{
    display: flex;
        height: 4rem;
        width: 4rem;
        /* background-color: #d00412; */

        border-radius: 50%;
        background-color: #d00412;

    }

    .active_year{
        font-family: Inter-Bold;
        color: #d00412;
    }
    .in_year{
        font-family: Inter-Bold;
        color: #d9d9d9;

    }
    .section-1 > div >div + span{
        margin-top: 1%;
        display: flex;
        width: 8%;
        height: 0.3rem;
        background-color: #d9d9d9;
    }

    .isGraph{
        display: flex;
    }
    .notGraph{
        display: none;
    }


</style>