import Chancellor from "../Views/Chancellor/chancellor_vue.vue";


const chancellorRouter = [
      {
          path:'/Chancellor',
          name:'Chancellor',
          component: () => import('../Views/Chancellor/chancellor_vue.vue')
      },

]

export default chancellorRouter