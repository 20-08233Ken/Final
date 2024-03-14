import { Form, Field, ErrorMessage } from 'vee-validate'

export default {
    data() {
        return {
            isDataActive:1,
            publication:[
                {
                    pub_id:'id',
                    pub_title:'title',
                    pub_date:'date',
                    pub_journal:'journal',
                    pub_vol:'vol',
                    pub_issn:'issn',
                    pub_index:'index'
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
        deleteData(id,isActive){
            console.log(id)
            return isActive
        }
  
    }
}