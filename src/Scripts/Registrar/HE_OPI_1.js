import { Form, Field, ErrorMessage } from "vee-validate";
import notification from "../../components/Others/notification.vue";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    notification,
  },
  data() {
    return {
      // in_campus:'',
      // in_department:'',
      in_program: "",
      in_priority: "",
      in_nonprio: "",
      count: true,
      isActive: false,
      isIcon: false,
      isAdd: false,
      id: 1,
      isDataActive: true,

      // Data base from the Account Info of Dean
      data: [
        {
          in_campus: "Alangilan Campus",
          in_department: "College of Engineering",
        },
      ],

      // Options of Select Program Input
      collegeProgram: [
        {
          program: "Bachelor of Science in Computer Engineer",
        },
        {
          program: "Bachelor of Science in Civil Engineer",
        },
        {
          program: "Bachelor of Science in Chemical Engineer",
        },
        {
          program: "Bachelor of Science in Electrical Engineer",
        },
      ],
      sampleData: [],
      headers:[
        {
            title:'Campus',
            value:'campus',
        },
        {
            title:'Department',
            value:'department',
        },
        {
            title:'Program',
            value:'program',
        },
        {
            title:'No. of Enrolles for 1st Semester',
            align:'center',

            children:[
                {
                    title:'Priority Program',
                    value:'priority_prog',
                },
                {
                    title:'Non-priority program',
                    value:'nonprio_prog',
                }
            ]
        },
        {
            title:'Supporting documents Documents',
            value:'sup_doc',
            align:'center'
        },
        {
            title:'Validation Status',
            value:'v_status',
        },{
            title:"Actions",
            value:'actions'
        }
        
    ],

      hepData: [],
      selectedID: null,
    };
  },
  methods: {
    validateData(value) {
      if (!value) {
        return "This field is required";
      }
      return true;
    },
    changeData(isActive) {
      this.isDataActive = isActive;
    },
    // addData() {
    //   this.sampleData.push({
    //     tb_id: this.id,
    //     tb_campus: this.data[0].in_campus,
    //     tb_department: this.data[0].in_department,
    //     tb_program: this.in_program,
    //     tb_ched: this.in_ched,
    //     tb_neither: this.in_neither,
    //   });
    //   this.id++;
    //   this.in_program = "";
    //   this.in_ched = "";
    //   this.in_neither = "";

    //   this.isAdd = true;
    //   setTimeout(() => {
    //     this.isAdd = false;
    //   }, 2000);
    // },
    submitData() {
      if (this.count === true) {
        this.isActive = true;
        this.count = false;
        this.isIcon = true;
      } else {
        this.isActive = false;
      }
    },
    onClose() {
      this.isActive = false;
    },

    async FetchData(office, campus, user_id) {
      try {
        const response = await axios
          .post(import.meta.env.VITE_API_HEPLIST, {
            office: office,
            campus_id: campus,
            user_id: user_id,
          })
          .then((response) => {
            this.hepData = response.data;
            // if (response.data == "Successfully HEP added!"){
            //     this.isDataActive = false;
            // }
          })
          .catch((error) => {
            console.error("Error fetching hep data", error);
          });
      } catch (error) {}
    },

    async deleteData(id) {
      this.selectedID = id;
      let userCookies = this.cookies.get("userCookies");
      const response = await axios
        .post(import.meta.env.VITE_API_DELETE_HEP, {
          id: id,
          user_id: userCookies["id"],
        })
        .then((response) => {
          location.reload();
        })
        .catch((error) => {
          console.error("Error history not found", error);
        });
    },

    async addData() {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      let userCookies = this.cookies.get("userCookies");
      // Form Data
      const formData = new FormData();
      formData.append("supported_file", this.selectedFile);

      // Edit these
      formData.append("program_id", this.in_department);
      formData.append("exam_date", this.in_program);
      formData.append("number_of_takers", this.in_priority);
      formData.append("number_of_passers", this.in_nonprio);
      formData.append("campus_id", userCookies["campus_id"]);
      formData.append("college_id", userCookies["college_id"]);
      formData.append("user_id", userCookies["id"]);

      try {
        const response = await axios
          .post(import.meta.env.VITE_API_CREATE_HEP, formData, {
            headers,
          })
          .then((response) => {
            // this.collegeProgram = response.data;

            if (response.data == "Successfully HEP added!") {
              location.reload();
              // this.FetchData(userCookies["userPosition"],userCookies['campus_id'],userCookies['id']);
            }
          })
          .catch((error) => {
            console.error("Error fetching campus", error);
          });
      } catch (error) {}

    },

    openUpdate(item) {
      this.forUpdate = item;
    },
    async submitUpdate() {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      let userCookies = this.cookies.get("userCookies");
      // Form Data
      const formEditData = new FormData();
      formEditData.append("supported_file", this.editselectedFile);
      formEditData.append("program_id", this.forUpdate.program_id);
      formEditData.append("exam_date", this.forUpdate.exam_date);
      formEditData.append("number_of_takers", this.forUpdate.number_of_takers);
      formEditData.append(
        "number_of_passers",
        this.forUpdate.number_of_passers
      );
      formEditData.append("campus_id", userCookies["campus_id"]);
      formEditData.append("college_id", userCookies["college_id"]);
      formEditData.append("user_id", userCookies["id"]);
      formEditData.append("id", this.forUpdate.id);

      try {
        const response = await axios
          .post(import.meta.env.VITE_API_UPDATE_HEP, formEditData, {
            headers,
          })
          .then((response) => {
            // this.collegeProgram = response.data;

            if (response.data == "Successfully HEP updated!") {
              location.reload();
              // this.FetchData(userCookies["userPosition"],userCookies['campus_id'],userCookies['id']);
            }
          })
          .catch((error) => {
            console.error("Error fetching campus", error);
          });
      } catch (error) {}
    },
  },
};
