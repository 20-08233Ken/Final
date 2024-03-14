import { Form, Field, ErrorMessage } from 'vee-validate'

export default {
    data() {
        return {
            isDataActive: 1,

            researchOutputs:[
                {
                    ro_id:1,
                    ro_title:'title',
                    ro_author:'author',
                    ro_status:'status',
                    ro_started:'started',
                    ro_completed:'completed'
                },
                {
                    ro_id:1,
                    ro_title:'title',
                    ro_author:'author',
                    ro_status:'status',
                    ro_started:'started',
                    ro_completed:'completed'
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