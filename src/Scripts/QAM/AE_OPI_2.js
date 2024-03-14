import {Form, Field, ErrorMessage} from 'vee-validate'
import notification from '../../components/Others/notification.vue';

export default{
    components:{
        Form,
        Field,
        ErrorMessage,
        notification
    }, 
    data(){
        return{
            // in_campus:'',
            // in_department:'',
            in_program:'',
            in_operation:'',
            in_graduates:'',
            in_status:'',
            in_from:'',
            in_to:'',
            in_remarks:'',
            count:true,
            isActive:false,
            isIcon:false,
            isAdd:false,
            id:0,
            isDataActive:true,
            selectedFile:null,

            // Data base from the Account Info of Dean
            data:[
                {
                    in_campus:"Alangilan Campus",
                    in_department:"College of Engineering"
                }
            ],

            // Options of Select Program Input
            collegeProgram:[
                {
                    program:"Bachelor of Science in Computer Engineer",
                },{
                    program:"Bachelor of Science in Civil Engineer",
                },{
                    program:"Bachelor of Science in Chemical Engineer",
                },{
                    program:"Bachelor of Science in Electrical Engineer",
                }
            ],
            sampleData:[
                {
                    tb_id:1,
                    tb_campus:'Campus',
                    tb_department:'Department',
                    tb_program:'Program',
                    tb_yearOperation:'Year',
                    tb_status:'Status',
                    tb_from:'From',
                    tb_to:'To'
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
    methods:{
        validateData(value){
            if(!value){
               return 'This field is required';
            }

            return true

        },
        addData(){

            this.sampleData.push({
                    tb_id:this.id,
                    tb_campus:this.data[0].in_campus,
                    tb_department:this.data[0].in_department,
                    tb_program:this.in_program,
                    tb_yearOperation:this.in_operation,
                    tb_fBatch_Grad:this.in_graduates,
                    tb_status:this.in_status,
                    tb_from:this.in_from,
                    tb_to:this.in_to,
                    tb_remarks:this.in_remarks
            })

            this.in_program =''
            this.in_operation=''
            this.in_graduates=''
            this.in_status=''
            this.in_from=''
            this.in_to=''
            this.in_remarks=''

            this.isAdd = true;
                setTimeout(() =>{
                    this.isAdd = false;
                }, 2000)
        }
        ,
        submitData(){
                if(this.count === true ){
                    this.isActive = true
                    this.count = false
                    this.isIcon = true
                }else{
                    this.isActive = false
                }
               
        },
        onClose(){
            this.isActive = false
        },
        changeData(isActive ){
            this.isDataActive = isActive
        },
        handleFileUpload(event){
            this.selectedFile = event.target.files[0]
            console.log(this.selectedFile)
        },
        deleteData(id,isActive){
            console.log(id)

            return isActive.value = false
          
        }
    }
}