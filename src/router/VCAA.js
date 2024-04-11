
import VCAA from "../Views/VC/VCAA/vcaa.vue";
import v_FormA from "../Views/VC/Form_A.vue";
import v_FormA1 from "../Views/VC/Form_A1.vue";

const vcaaRouter = [
  {
    path: "/vcaa",
    name: "vcaa",
    component: () => import('../Views/VC/VCAA/vcaa.vue')
  },
  {
    path: "/v_FormA",
    name: "v_FormA",
    component: () => import('../Views/VC/Form_A.vue')
  },
  {
    path: "/v_FormA1",
    name: "v_FormA1",
    component: () => import('../Views/VC/Form_A1.vue')
  },
];

export default vcaaRouter