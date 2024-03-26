import {Form, Field, ErrorMessage} from 'vee-validate'
// import { userPosition } from '../../cookies'
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
            ]
        }
    },
    components:{
        Form, Field, ErrorMessage
    },
    methods: {

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
                console.error("Error fetching hep data", error);
                })
    
                .finally(() => {
                this.myLoading = false;
                });
            } catch (error) {}
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
