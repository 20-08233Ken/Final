import { Form, Field, ErrorMessage } from "vee-validate";
import { userPosition } from "../../cookies";
import { useCookies } from "vue3-cookies";
import axios from 'axios';

export default {
  
  mounted(){
    const holdCookies = userPosition();
    this.user = holdCookies();

    if (this.user == null && this.userCookies == null){
        this.$router.push('/');
    }
},
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  data() {
    return {
      sampleData: [],
      hepData: [],
      headers: [
        {
          title:'',
          value:'check_box'
        },
        {
          title: "HEP Code",
          value: "hep_code",
          width:'200px'
        },
        {
          title: "Campus",
          value: "campus",
          class: "table_header",
          width:'200px'
          
        },
        {
          title: "Department",
          value: "college",
          width:'200px'
        
        },
        {
          title: "Undergraduate Program",
          value: "program",
          width:'200px'
        },
        {
          title: "Exam date",
          value: "exam_date",
          width:'200px'
        },
        {
          title: "Number of 1st Time takers",
          value: "number_of_takers",
          width:'200px'
        },
        {
          title: "Number of 1st Time Passers",
          value: "number_of_passers",
        },
        {
          title: "Supporting Documents",
          value: "supported_file",

        },
        {
          title: "Validation Status",
          value: "status",
        },
        {
          title: "Actions",
          value: "actions",
        },
      ],
      reasonOpt: [
        {
          reason: "Lack of Supporting Documents",
        },
        {
          reason: "Inconsistent Data",
        },
      ],

      selectedID: "",
      remarks: "",
      reasons: "",
      user:null,
      selectedIds: [],
      approvedLogs:[],
      myLoading:true
    };
  },

  // METHODS 
  methods: {

    async GetHEPData(){
      let userCookies = this.cookies.get('userCookies');
      await axios.post(import.meta.env.VITE_API_HEPLIST,{
        "office": userCookies["office"],
        "campus_id": userCookies["campus_id"],
        "user_id": userCookies["id"],
      }).

      then(response =>{ 

        if(response.data){
          this.myLoading = true
          this.hepData = response.data;
        
        }

      }).
      catch(function(error){
          if(error.response){
              
              if (error.response.data){
                // call the modal
                //  this.loginError =false
                //  this.addTimeout()
                //  $("errorMessage").val();

                alert(JSON.stringify(error.response.data.message));
              }
              // called modal
              //this.login =false'
              // this.addTimeout();
          }else if(error.request){

              console.log(error.request)
              // called modal
              //this.login =false'
              // this.addTimeout();
          }else{
              console.log('Error', error.message)
              // called modal
              //this.login =false'
              // this.addTimeout();
          }
          console.log(error.config);
              // called modal
              //this.login =false'
              // this.addTimeout();
      })

      .finally(() => {
        this.myLoading = false
      });
    },

    approvedHEP(id) {
      this.selectedID = id;
    },

    rejectedHEP(id) {
      this.selectedID = id;
    },

    showID(id) {
      // console.log(id);
    },
    toogleCheckBox(id){
      const index = this.selectedIds.indexOf(id);
      if (index === -1) {
        
        this.selectedIds.push(id);

      } else {
       
        this.selectedIds.splice(index, 1);

      }
    },


    async ApprovedRequest(){
        try{
            let users_list = this.cookies.get('userCookies');
            const response = await axios.post(import.meta.env.VITE_API_APPROVE_HEP, {
                "office": users_list.office,
                "campus_id": users_list.campus_id,
                "user_id": users_list.id,
                "id":   this.selectedID
            })
            .then(response => {
              location.reload();
                console.log("response:",response);
                if (response.data == "This request is already approved by VCAA!"){
                  
                  this.$router.push('/VCs');
                }
            })
            .catch(error => {
                console.error('Error fetching hep data', error);
            });

        }catch (error){
            // add actions here
        }
    },

    async RejectRequest(){
        try{

            let users_list = this.cookies.get('userCookies');
            const response = await axios.post(import.meta.env.VITE_API_DISAPPROVE_HEP, {
                "office": users_list.office,
                "campus_id": users_list.campus_id,
                "user_id": users_list.id,
                "id":   this.selectedID,
                "reasons": this.reasons,
                "remarks":this.remarks
            })
            .then(response => {
              location.reload();
    
            })
            .catch(error => {
                console.error('Error fetching hep data', error);
            });

        }catch (error){
            // add actions here
        }
    },


    async ViewHistory(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      const response = await axios
        .post(import.meta.env.VITE_API_HEP_HISTORY, {
          id: id,
          user_id: userCookies["id"],
        })
        .then((response) => {
   
          this.approvedLogs = response.data;
        })
        .catch((error) => {
          console.error("Error history not found", error);
        });
    },
    validateInput(value) {
      if (!value) {
        return "This field is required";
      }

      return true;
    },

  },



  components: {
    Form,
    Field,
    ErrorMessage,
  },

  mounted() {

    let userCookies = this.cookies.get('userCookies');
    let accesstoken = this.cookies.get('userAccessToken');
    let userPosition = this.cookies.get('userPosition');
    let userCollege = this.cookies.get('userCollege');
    let userCampus = this.cookies.get('userCampus'); 
    this.user = userPosition;
    this.userCookies = userCookies;

    if (this.user == null && this.userCookies == null){
        this.$router.push('/');
    }
    this.GetHEPData();
    const holdCookies =userPosition;

  },
};
