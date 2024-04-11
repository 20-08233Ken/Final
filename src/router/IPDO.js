
import FormA_1 from "../Views/VC/Form_A1.vue";
import FormA from "../Views/VC/Form_A.vue";
import VCs from "../Views/VC/vcs.vue";

const ipdoRouter = [
  {
    path: "/VCs",
    name: "VCs",
    component: () => import('../Views/VC/vcs.vue')
  },
  {
    path: "/formA",
    name: "formA",
    component: () => import('../Views/VC/Form_A.vue')
  },
  {
    path: "/formA_1",
    name: "formA_1",
    component: () => import('../Views/VC/Form_A1.vue')
  },
];

export default ipdoRouter