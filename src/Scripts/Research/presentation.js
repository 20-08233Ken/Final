import { Form, Field, ErrorMessage } from 'vee-validate'

export default {
    data() {
        return {
            isDataActive:1,
            researchPresentation:[
                {
                    pre_id:1,
                    pre_venue:'title',
                    pre_type:'author',
                    pre_date:'status',

                },
                {
                    pre_id:2,
                    pre_venue:'title',
                    pre_type:'author',
                    pre_date:'status',

                },
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

    methods: {
        validateData(value) {
            if (!value) {
                return 'This field is required';
            }

            return true

        },
        changeData(isActive) {
            this.isDataActive = isActive

        },
        deleteData(id){
            console.log(id)
        }
    }
}