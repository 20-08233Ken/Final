

    import { Form, Field, ErrorMessage } from 'vee-validate';

    export default{
        components:{
            Form,
            Field,
            ErrorMessage
        },

        methods:{
            validateData(value){
               
                if(!value){
                    return 'This field is required'
                }

                return true
            }
        }
    }
