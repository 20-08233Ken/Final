import {Form, Field, ErrorMessage} from 'vee-validate'
import { userPosition } from '../../cookies'
import axios from "axios";
import { useCookies } from "vue3-cookies";
export default{
    setup() {
        const { cookies } = useCookies();
        return { cookies };
    },
    data(){
        return{
            headers: [
                {
                  title: "",
                  value: "check_box",
                },
                {
                  title: "Advance Education Code",
                  key: "advanced_ed_code",
                },
                {
                  title: "Campus",
                  value: "campus",
                  class: "table_header",
                },
                {
                  title: "Department",
                  value: "college",
                },
                {
                  title: "Name",
                  value: "fullname",
                },
                {
                  title: "Position",
                  value: "research_position",
                },
                {
                  title: "Category",
                  value: "research_category",
                },
                {
                  title: "Scanned copy of Enrollment Form",
                  value: "copy_of_enrollment_form",
                  align: "center",
                },
                {
                  title: "Scanned copy of latest research conducted",
                  value: "research_conducted",
                  align: "center",
                },
                {
                  title: "Documentation of utilized technology",
                  value: "utilized_technology",
                  align: "center",
                },
                {
                  title: "Activity report of extension program	",
                  value: "report_of_extension_program",
                  align: "center",
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
            AdvanceEducationData: [
            ],
            reasonOpt:[
                {
                    reason:'Lack of Supporting Documents'
                },{
                    reason:'Inconsistent Data'
                }
            ],
            selectedID: "",
            remarks: "",
            reasons: "",
            user:null,
            selectedIds: [],
            approvedLogs:[],
            myLoading:true
        }
    },
    components:{
        Form, Field, ErrorMessage
    },
    methods:{
        validateInput(value) {
            if (!value) {
              return "This field is required";
            }
      
            return true;
          },
            // Fetch Data
            async FetchData(position, campus, user_id) {
                try {
                  await axios.post(import.meta.env.VITE_API_DISPLAY_ADVANCED_EDUCATION, {
                    position: position,
                    campus_id: campus,
                    user_id: user_id,
                  })
                  .then((response) => {
                    // console.log("advance education:",response.data);
                    // this.myLoading = true;
                      this.AdvanceEducationData = response.data;
                  })
                  .catch((error) => {
                    console.error("Error fetching AE data", error);
                  })
        
                  .finally(() => {
                    this.myLoading = false;
                  });
                } catch (error) {}
            },
            
            // View Research PDF
            async viewResearchPDF(id) {
              this.selectedID = id;
              let userCookies = this.cookies.get("userCookies");
              await axios
                .post(import.meta.env.VITE_API_DISPLAY_RESEARCH_PDF, {
                  id: id,
                  user_id: userCookies["id"],
                  responseType: 'arraybuffer' // Set the response type to arraybuffer
                })
                .then(response => {
                  // Create a Blob object from the response data
                  const blob = new Blob([response.data], { type: 'application/pdf' });
                
                  // Create a URL for the Blob object
                  const url = URL.createObjectURL(blob);
                
                  // Open the URL in a new tab
                  window.open(url, '_blank');
                })
                .catch(error => {
                  console.error('Error fetching PDF:', error);
                });
          
            },
    
            // View Utilized Tech PDF
            async viewUtilizedTechPDF(id) {
              this.selectedID = id;
              let userCookies = this.cookies.get("userCookies");
              await axios
                .post(import.meta.env.VITE_API_DISPLAY_UTILIZED_TECHNOLOGY, {
                  id: id,
                  user_id: userCookies["id"],
                  responseType: 'arraybuffer' // Set the response type to arraybuffer
                })
                .then(response => {
                  // Create a Blob object from the response data
                  const blob = new Blob([response.data], { type: 'application/pdf' });
                
                  // Create a URL for the Blob object
                  const url = URL.createObjectURL(blob);
                
                  // Open the URL in a new tab
                  window.open(url, '_blank');
                })
                .catch(error => {
                  console.error('Error fetching PDF:', error);
                });
            },
            
            // View Enrollment Form PDF
            async viewEnrollmentFormPDF(id) {
              this.selectedID = id;
              let userCookies = this.cookies.get("userCookies");
              await axios
                .post(import.meta.env.VITE_API_DISPLAY_ENROLLMENT_FORM, {
                  id: id,
                  user_id: userCookies["id"],
                  responseType: 'arraybuffer' // Set the response type to arraybuffer
                })
                .then(response => {
                  // Create a Blob object from the response data
                  const blob = new Blob([response.data], { type: 'application/pdf' });
                
                  // Create a URL for the Blob object
                  const url = URL.createObjectURL(blob);
                
                  // Open the URL in a new tab
                  window.open(url, '_blank');
                })
                .catch(error => {
                  console.error('Error fetching PDF:', error);
                });
            },
            
            // View Extension Program PDF
            async viewDisplayExtensionProgram(id) {
              this.selectedID = id;
              let userCookies = this.cookies.get("userCookies");
              await axios
                .post(import.meta.env.VITE_API_DISPLAY_EXTENSION_PROGRAM, {
                  id: id,
                  user_id: userCookies["id"],
                  responseType: 'arraybuffer' // Set the response type to arraybuffer
                })
                .then(response => {
                  // Create a Blob object from the response data
                  const blob = new Blob([response.data], { type: 'application/pdf' });
                
                  // Create a URL for the Blob object
                  const url = URL.createObjectURL(blob);
                
                  // Open the URL in a new tab
                  window.open(url, '_blank');
                })
                .catch(error => {
                  console.error('Error fetching PDF:', error);
                });
            },

            approvedAE(id) {
            this.selectedID = id;
            // console.log(this.selectedID);
            },
            
            rejectedAE(id) {
            this.selectedID = id;
            // console.log(this.selectedID);
            },

            async ApprovedRequest(){
              try{
                  let users_list = this.cookies.get('userCookies');
                  const response = await axios.post(import.meta.env.VITE_API_CHANCELLOR_APPROVE_AE, {
                      "position": users_list.position,
                      "campus_id": users_list.campus_id,
                      "user_id": users_list.id,
                      "id":   this.selectedIds
                  })
                  .then(response => {
                      // console.log(response);
                      if (response.data == "This request is already approved by Chancellor!"){
                        this.$router.push('/VCs');
                      }
                      
                      location.reload();
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
                    const response = await axios.post(import.meta.env.VITE_API_DISAPPROVE_AE, {
                        "position": users_list.position,
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
                        console.error('Error fetching AE data', error);
                    });
      
                }catch (error){
                    // add actions here
                }
            },

            async ViewHistory(id) {
                this.selectedID = id;
                let userCookies = this.cookies.get("userCookies");
                const response = await axios
                    .post(import.meta.env.VITE_API_AE_HISTORY, {
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

            toogleCheckBox(id){
                const index = this.selectedIds.indexOf(id);
                if (index === -1) {
                  
                  this.selectedIds.push(id);
          
          
                } else {
                
                  this.selectedIds.splice(index, 1);
          
                }
            },
          
    },
    mounted(){

        let userCookies = this.cookies.get("userCookies");
        let userPosition = this.cookies.get("userPosition");
        this.user = userPosition;
        this.userCookies = userCookies;

        if (this.user == null && this.userCookies == null) {
          this.$router.push("/");
        }
    
        this.FetchData(userCookies["position"],userCookies["campus_id"],userCookies["id"]);
   
    }
    
}
