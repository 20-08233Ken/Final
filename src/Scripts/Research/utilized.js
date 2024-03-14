import { Form, Field, ErrorMessage } from 'vee-validate'

export default {
    data() {
        return {
            isDataActive:1,

            utilized:[
                {
                    ut_id:'id',
                    ut_name:'name',
                    ut_number:'number',
                    ut_benefits:'benefits',
                    ut_supp:'supp',
                    ut_status:'status',
                    

                }
            ],
            approvedLogs:[
                {
                    approvedBy:'Approved By ',
                    comment:"Comment"
                },
                {
                    approvedBy:'Approved By ',
                    comment:"Comment"
                },
            ],
        }
    },
    components: {
        Form,
        Field,
        ErrorMessage,

    },
    
    methods:{
        validateData(value){
                if(!value){
                   return 'This field is required';
                }

                return true

            },
            changeData(isActive) {
                this.isDataActive = isActive
    
            },
            deleteData(id,isActive){
                console.log(id)
                return isActive
            }
    }
}