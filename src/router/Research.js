import Research from "../Views/Research/Research.vue";

const researchRouter = [
      {
          path:'/research',
          name:'researh',
          component: () => import('../Views/Research/Research.vue')

      },
]

export default researchRouter