import { createRouter, createWebHistory } from "vue-router";

// import LoginView from '../views/LoginView.vue'
// import HomeView from '../views/HomeView.vue'
// import Form1View from '../components/forms/form1.vue'

import Home from "../Views/Home.vue";
import Dashboard from "../Views/Planning/Dashboard.vue";
import Dataset from "../Views/Planning/Dataset.vue";
import PBB from "../Views/Planning/PBB.vue";

import PPB_Higher from "../Views/Planning/PBB/PPB_Higher.vue";
import PPB_Adv from "../Views/Planning/PBB/PPB_Adv.vue";
// import PBB_Summary from '../Views/Planning/PBB/PBB_Summary.vue'
// import PBB3 from '../Views/Planning/PBB3.vue'
import PBB_Research from "../Views/Planning/PBB/PBB_Research.vue";

import Login from "../Views/Login.vue";

import Offices from "../Views/Planning/Offices.vue";

// Deans
import Dean from "../Views/Dean/Dean.vue";
import deanDashboard from "../Views/Dean/dashboard.vue";

import Profile from "../Views/Planning//Profile/Profile.vue";
// import FormA from '../components/Form/ModifiedFormA.vue'
// import FormA_1 from '../components/Form/ModifiedFormA_1.vue'

import FormA_1 from "../Views/VC/Form_A1.vue";
import FormA from "../Views/VC/Form_A.vue";

import fydp from "../Views/FYDP/fydp.vue";
import fydp_ques from "../Views/FYDP/questionnaire.vue";
import Registrar from "../Views/Registrar/registrar.vue";
import Qam from "../Views/QAM/Qam.vue";
import TechnicalExtension from "../Views/Extension/extension.vue";

import Research from "../Views/Research/Research.vue";
// import Advanced from '../Views/Planning/Indicators/AdvanceEd.vue'
// import Higher from '../Views/Planning/Indicators/HigherEd.vue'
// import ResearchServices from '../Views/Planning/Indicators/ResearchServices.vue'

import VCs from "../Views/VC/vcs.vue";
import v_FormA from "../Views/VC/Form_A.vue";
import v_FormA1 from "../Views/VC/Form_A1.vue";
import VCAA from "../Views/VC/VCAA/vcaa.vue";

import Chancellor from "../Views/Chancellor/chancellor_vue.vue";

import VCRDES from "../Views/VCRDES/vcrdes.vue";

import deanRouter from "./Dean";
import registrarRouter from "./Registar";
import profileRouter from "./Profile";
import dashboardRouter from "./Dashboard";
import datasetRouter from './Dataset'
import PBBRouter from "./PBB";
import officeRouter from "./Office";
import researchRouter from "./Research";
import QAMRouter from "./QAM";
import ipdoRouter from "./IPDO";
import chancellorRouter from "./Chancellor";
import vcaaRouter from "./VCAA";
import fydpRouter from "./FYDP";
import vcrdesRouter from "./vcrdes";
import TechnicalExtensionRouter from "./TechnicalExtension";

const commonRoute = [
        {
            path: "/",
            name: "login",
            component: () => import('../Views/Login.vue'),
        },
        {
            path: "/home",
            name: "home",
            component: () => import('../Views/Home.vue'),
        },
];

const allRoutes = [
        ...commonRoute,
        ...deanRouter,
        ...registrarRouter,
        ...profileRouter,
        ...dashboardRouter,
        ...datasetRouter,
        ...PBBRouter,
        ...officeRouter,
        ...researchRouter,
        ...QAMRouter,
        ...ipdoRouter,
        ...chancellorRouter,
        ...vcaaRouter,
        ...fydpRouter,
        ...vcrdesRouter,
        ...TechnicalExtensionRouter,
    ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "vue-school-active-link",
  routes: allRoutes,
 

});

export default router;
