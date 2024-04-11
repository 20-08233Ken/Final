import Dataset from "../Views/Planning/Dataset.vue";


const datasetRouter = [
      {
          path:'/dataset',
          name:'dataset',
          component: () => import('../Views/Planning/Dataset.vue')

      },

]

export default datasetRouter