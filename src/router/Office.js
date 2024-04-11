import Offices from "../Views/Planning/Offices.vue";

const officeRouter = [
      {
          path:'/offices',
          name:'offices',
          component: () => import('../Views/Planning/Offices.vue')

      },

]

export default officeRouter