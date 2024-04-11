import PBB from "../Views/Planning/PBB.vue";
import PPB_Higher from "../Views/Planning/PBB/PPB_Higher.vue";
import PPB_Adv from "../Views/Planning/PBB/PPB_Adv.vue";
// import PBB_Summary from '../Views/Planning/PBB/PBB_Summary.vue'
// import PBB3 from '../Views/Planning/PBB3.vue'
// import ResearchServices from '../Views/Planning/Indicators/ResearchServices.vue'
import PBB_Research from "../Views/Planning/PBB/PBB_Research.vue";
const PBBRouter = [
  {
    path: "/pbb",
    name: "pbb",
    component: () => import('../Views/Planning/PBB.vue')
  },
  {
    path: "/PPB_Higher",
    name: "PPB_Higher",
    component: () => import('../Views/Planning/PBB/PPB_Higher.vue')
  },
  {
    path: "/PPB_Adv",
    name: "PPB_Adv",
    component: () => import('../Views/Planning/PBB/PPB_Adv.vue')
  },
//   {
//       path:'/PBB_Summary',
//       name:'PBB_Summary',
//       component:PBB_Summary

//   },
//   {
//       path:'/pbb3',
//       name:'pbb3',
//       component:PBB3

//   },
  {
    path: "/PBB_Research",
    name: "PBB_Research",
    component: () => import('../Views/Planning/PBB/PBB_Research.vue')
  },
//   {
//       path:'/ResearchServices',
//       name:'ResearchServices',
//       component:ResearchServices

//   },
];

export default PBBRouter;
