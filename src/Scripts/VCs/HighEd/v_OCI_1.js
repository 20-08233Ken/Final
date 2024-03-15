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
      selectedIds: []

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
          this.hepData = response.data;
          console.log(this.hepData)
        }

      }).
      catch(function(error){
          if(error.response){
              
              console.log(error.response.data)
              console.log(error.response.status)

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

        // console.log(this.selectedIds)
      } else {
       
        this.selectedIds.splice(index, 1);
        // console.log(this.selectedIds)
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

                console.log("response:",response);
            })
            .catch(error => {
                console.error('Error fetching hep data', error);
            });

        }catch (error){
            // add actions here
        }
    },

  },



  components: {
    Form,
    Field,
    ErrorMessage,
  },

  mounted() {

    let userCookies = this.cookies.get('userCookies');
    // console.log(userCookies);
    let accesstoken = this.cookies.get('userAccessToken');
    // console.log(accesstoken);
    let userPosition = this.cookies.get('userPosition');
    // console.log(userPosition);
    let userCollege = this.cookies.get('userCollege');
    // console.log(userCollege);
    let userCampus = this.cookies.get('userCampus'); 
    // console.log(userCampus);
    this.user = userPosition;
    this.userCookies = userCookies;

    if (this.user == null && this.userCookies == null){
        this.$router.push('/');
    }
    this.GetHEPData();
    // this.approved(userCookies);

    // const holdCookies = userPosition();

    const holdCookies =userPosition;

  },
};
