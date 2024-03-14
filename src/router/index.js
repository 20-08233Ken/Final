import { createRouter,createWebHistory } from "vue-router";

// import LoginView from '../views/LoginView.vue'
// import HomeView from '../views/HomeView.vue'
// import Form1View from '../components/forms/form1.vue'

import Home from '../Views/Home.vue'
import Dashboard from '../Views/Planning/Dashboard.vue'
import Dataset from '../Views/Planning/Dataset.vue'
import PBB from '../Views/Planning/PBB.vue'

import PPB_Higher from '../Views/Planning/PBB/PPB_Higher.vue'
import PPB_Adv from '../Views/Planning/PBB/PPB_Adv.vue'
// import PBB_Summary from '../Views/Planning/PBB/PBB_Summary.vue'
// import PBB3 from '../Views/Planning/PBB3.vue'
import PBB_Research from '../Views/Planning/PBB/PBB_Research.vue'


import Login from '../Views/Login.vue'

import Offices from '../Views/Planning/Offices.vue'
import Dean from '../Views/Dean/Dean.vue'
import Profile from '../Views/Planning//Profile/Profile.vue'
import FormA from '../components/Form/ModifiedFormA.vue'
import FormA_1 from '../components/Form/ModifiedFormA_1.vue'

import fydp from '../Views/FYDP/fydp.vue'
import fydp_ques from '../Views/FYDP/questionnaire.vue'
import Registrar from '../Views/Registrar/registrar.vue'
import Qam from '../Views/QAM/Qam.vue'
import TechnicalExtension from '../Views/Extension/extension.vue'

import Research from "../Views/Research/Research.vue";
// import Advanced from '../Views/Planning/Indicators/AdvanceEd.vue'
// import Higher from '../Views/Planning/Indicators/HigherEd.vue'
// import ResearchServices from '../Views/Planning/Indicators/ResearchServices.vue'

import VCs from '../Views/VC/vcs.vue'
import v_FormA from '../Views/VC/Form_A.vue'
import v_FormA1 from '../Views/VC/Form_A1.vue'


import Chancellor from '../Views/Chancellor/chancellor_vue.vue'

const router = createRouter ({

    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass:'vue-school-active-link',

    routes:[
        {
            path:'/',
            name:'login',
            component:Login,
         

        },  
        {
            path:'/home',
            name:'home',
            component:Home,
        


        },  
        {
            path:'/dean',
            name:'dean',
            component:Dean

        },
        {
            path:'/registrar',
            name:'registrar',
            component:Registrar
        },
        {
            path:'/qam',
            name:'qam',
            component:Qam
        },
        {
            path:'/profile',
            name:'profile',
            component:Profile

        },
        {
            path:'/research',
            name:'researh',
            component:Research

        },
        {
            path:'/dashboard',
            name:'dashboard',
            component:Dashboard

        },
        {
            path:'/dataset',
            name:'dataset',
            component:Dataset

        },
        {
            path:'/pbb',
            name:'pbb',
            component:PBB

        },        
                {
                    path:'/PPB_Higher',
                    name:'PPB_Higher',
                    component:PPB_Higher

                },
                {
                    path:'/PPB_Adv',
                    name:'PPB_Adv',
                    component:PPB_Adv

                }
                ,
                // {
                //     path:'/PBB_Summary',
                //     name:'PBB_Summary',
                //     component:PBB_Summary

                // },
                // {
                //     path:'/pbb3',
                //     name:'pbb3',
                //     component:PBB3

                // },
                {
                    path:'/PBB_Research',
                    name:'PBB_Research',
                    component:PBB_Research

                },
                // {
                //     path:'/ResearchServices',
                //     name:'ResearchServices',
                //     component:ResearchServices

                // },
        {
            path:'/offices',
            name:'offices',
            component:Offices

        },
        {
            path:'/formA',
            name:'formA',
            component:FormA
              
        },      
        {
            path:'/formA_1',
            name:'formA_1',
            component:FormA_1
              
        },
        {
            path:'/fydp',
            name:'fydp',
            component:fydp
              
        },
                {
                    path:'/fydp_ques',
                    name:'fydp_ques',
                    component:fydp_ques
                    
                },
        {
            path:'/TechnicalExtension',
            name:'TechnicalExtension',
            component:TechnicalExtension
                  
        },


        // {
        //     path:'/advancedEd',
        //     name:'advancedEd',
        //     component:Advanced

        // },
        // {
        //     path:'/higherEd',
        //     name:'higherEd',
        //     component:Higher

        // },
       
        {
            path:'/VCs',
            name:'VCs',
            component:VCs
        },
        {
            path:'/Chancellor',
            name:'Chancellor',
            component:Chancellor
        },
        
        {
            path:'/v_FormA',
            name:'v_FormA',
            component:v_FormA
        }
        ,
        {
            path:'/v_FormA1',
            name:'v_FormA1',
            component:v_FormA1
        }
     

        
        // }
    ]

    

})

export default router