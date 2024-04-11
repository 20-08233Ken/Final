// Deans
import Dean from '../Views/Dean/Dean.vue'
import deanDashboard from '../Views/Dean/dashboard.vue'

const deanRouter = [
    {
        path:'/dean',
        name:'dean',
        component: () => import('../Views/Dean/Dean.vue')

    },
    {
        path:'/deanDashboard',
        name:'deanDashboard',
        component: () => import('../Views/Dean/dashboard.vue')

    },

]

export default deanRouter