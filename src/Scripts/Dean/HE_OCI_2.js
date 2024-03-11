import { Form, Field, ErrorMessage } from 'vee-validate'
import notification from '../../components/Others/notification.vue';

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
        notification
    },
    data() {
        return {
            // in_campus:'',
            // in_department:'',
            in_program: '',
            in_fname: '',
            in_mname: '',
            in_lname: '',
            in_status: '',
            in_business: '',
            isAdd: false,
            count: true,
            isIcon: false,
            isActive: false,
            id: 1,

            // Data base from the Account Info of Dean
            data: [
                {
                    in_campus: "Alangilan Campus",
                    in_department: "College of Engineering"
                }
            ],

            // Options of Select Program Input
            collegeProgram: [
                {
                    program: "Bachelor of Science in Computer Engineer",
                }, {
                    program: "Bachelor of Science in Civil Engineer",
                }, {
                    program: "Bachelor of Science in Chemical Engineer",
                }, {
                    program: "Bachelor of Science in Electrical Engineer",
                }
            ],
            sampleData: [

            ],
            selectedFile1:null,
            selectedFile2:null,
            isDataActive:1,

        }
    },
    methods: {

        validateData(value) {
            if (!value) {
                return 'This field is required';
            }

            return true

        },
        addData() {


            this.sampleData.push(
                {
                    tb_id: this.id,
                    tb_campus: this.data[0].in_campus,
                    tb_department: this.data[0].in_department,
                    tb_program: this.in_program,
                    tb_fname: this.in_fname,
                    tb_mname: this.in_mname,
                    tb_lname: this.in_lname,
                    tb_status: this.in_status,
                    tb_company: this.in_business,

                }
            )

            this.id++;
            console.log(this.sampleData[0])

            this.in_program = ''
            this.in_fname = ''
            this.in_mname = ''
            this.in_lname = ''
            this.in_status = ''
            this.in_business = ''

            this.isAdd = true;
            setTimeout(() => {
                this.isAdd = false;
            }, 2000)

        },
        submitData() {
            if (this.count === true) {
                this.isActive = true
                this.count = false
                this.isIcon = true

            } else {
                this.isActive = false
            }

        },
        onClose() {
            this.isActive = false
        },
        async fetchProgram_Data(){
            try{
                const response = await axios.get('');
                // remove first the data from college program 
                this.collegeProgram = response.data
            }catch (error){
                // add actions here
            }
        },
        handleFileUpload(event){
            this.selectedFile1 = event.target.files[0]
        },
        handleFileUpload2(event){
            this.selectedFile2 = event.target.files[0]
        },
        showFile(){
            console.log(this.selectedFile1)
            console.log(this.selectedFile2)
        },

        changeData(isActive ){
            this.isDataActive = isActive
            console.log(this.isDataActive)
        },

    },

    mount(){
        // call here
        // this.fetchProgram_Data()
    }
}
