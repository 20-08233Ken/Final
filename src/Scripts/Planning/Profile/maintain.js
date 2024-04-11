
import campus from '../../../Views/Planning/Profile/maintainance/campus.vue';
import office from '../../../Views/Planning/Profile/maintainance/office.vue'
import program from '../../../Views/Planning/Profile/maintainance/program.vue'
import college from '../../../Views/Planning/Profile/maintainance/college.vue'

export default {
data() {
    return {
    headers: [
        {
        title: "Campus Name",
        },
        {
        title: "Action",
        },
    ],
    
        currentComponent:campus,
        isActive:1
    };
},

components:{
    campus,
    office,
    program,
    college
},

methods:{
    showComponent(getComponent,myBtn){
        this.currentComponent =getComponent
        this.isActive = myBtn
    }
}
};