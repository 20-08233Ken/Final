import VCRDES from "../Views/VCRDES/vcrdes.vue";


const vcrdesRouter = [
      {
          path:'/vcrdes',
          name:'vcrdes',
          component: () => import('../Views/VCRDES/vcrdes.vue')
      }
]

export default vcrdesRouter