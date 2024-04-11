import Registrar from "../Views/Registrar/registrar.vue";


const registrarRouter = [
      {
          path:'/registrar',
          name:'registrar',
          component: () => import('../Views/Registrar/registrar.vue')
      },

]

export default registrarRouter