import Dashboard from "../Views/Planning/Dashboard.vue";


const dashboardRouter = [
      {
          path:'/dashboard',
          name:'dashboard',
          component: () => import('../Views/Planning/Dashboard.vue')

      },

]

export default dashboardRouter