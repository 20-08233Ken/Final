import Qam from "../Views/QAM/Qam.vue";

const QAMRouter = [
      {
          path:'/qam',
          name:'qam',
          component: () => import('../Views/QAM/Qam.vue')
      },

]

export default QAMRouter