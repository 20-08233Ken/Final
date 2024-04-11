import Profile from "../Views/Planning//Profile/Profile.vue";


const profileRouter = [
      {
          path:'/profile',
          name:'profile',
          component: () => import('../Views/Planning//Profile/Profile.vue')

      },

]

export default profileRouter