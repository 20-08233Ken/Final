

    import Navigation from '../../../components/Others/Navigation.vue';
    import PBB_sideNav from '../../../components/Others/PBB_sideNav.vue';

    import Target1 from '../../../components/graph/PBB/target1.vue'
    import Target2 from '../../../components/graph/PBB/target1.vue'


    import PBB_Summary2 from '../../../Views/Planning/PBB/PBB_Summary2.vue'
    import PBB_Summary3 from '../../../Views/Planning/PBB//PBB_Summary3.vue'
    import PBB_Summary4 from '../../../Views/Planning/PBB//PBB_Summary4.vue' 

    import {ref} from "vue";
    import {markRaw} from 'vue'

    const raw_PPB_Summary2 = markRaw(PBB_Summary2)
    const raw_PPB_Summary3 = markRaw(PBB_Summary3)
    const raw_PPB_Summary4= markRaw(PBB_Summary4)
    export default{
        data(){
            return{
                
                currentComponent:  null,
                selectedProgram:null
            };
        },
        components:{
            Navigation,
            PBB_sideNav,
            Target1,
            Target2,
            PBB_Summary2,
            PBB_Summary3,
            PBB_Summary4


        },
        watch:{
            selectedProgram(componentName){

                if(componentName === "Higher Education Program"){
                    this.currentComponent = PBB_Summary2
                    
                }else if(componentName === "Advanced Education Program"){
                    this.currentComponent = PBB_Summary3
                  
                }else if(componentName === "Research Program"){
                    this.currentComponent = PBB_Summary4
                  
                }

            },

            '$route.query.program':{
                handler: function (value){
                    console.log(value)
                    if(value == "PBB_Summary2"){

                        this.currentComponent = PBB_Summary2;
                        this.selectedProgram = "Higher Education Program"
                    }
                    else if(value == "PBB_Summary3"){
                        this.currentComponent = PBB_Summary3;
                        this.selectedProgram = "Advanced Education Program"
                    }
                    else if(value == "PBB_Summary4"){
                        this.currentComponent = PBB_Summary4;
                        this.selectedProgram = "Research Program"
                    }
                },
                deep:true,
                immediate:true,
            }
        },
        methods:{
            showComponent(componentName){
                this.currentComponent = componentName
            }
        },

    }

