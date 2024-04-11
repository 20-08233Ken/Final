import { createRouter, createWebHistory } from "vue-router";

// import LoginView from '../views/LoginView.vue'
// import HomeView from '../views/HomeView.vue'
// import Form1View from '../components/forms/form1.vue'



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
