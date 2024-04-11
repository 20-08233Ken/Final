import TechnicalExtension from "../Views/Extension/extension.vue";


const TechnicalExtensionRouter = [
      {
          path:'/TechnicalExtension',
          name:'TechnicalExtension',
          component: () => import('../Views/Extension/extension.vue')

      },

]

export default TechnicalExtensionRouter