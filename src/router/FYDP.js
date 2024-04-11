import fydp from "../Views/FYDP/fydp.vue";
import fydp_ques from "../Views/FYDP/questionnaire.vue";


const fydpRouter = [
  {
    path: "/fydp",
    name: "fydp",
    component: () => import('../Views/FYDP/fydp.vue')
  },
  {
    path: "/fydp_ques",
    name: "fydp_ques",
    component: () => import('../Views/FYDP/questionnaire.vue')
  },
];

export default fydpRouter