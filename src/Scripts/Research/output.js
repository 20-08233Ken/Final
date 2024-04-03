import { Form, Field, ErrorMessage } from 'vee-validate'

export default {
  data() {
    return {
      isDataActive: 1,

      researchOutputs: [
        {
          ro_id: 1,
          ro_title: "title",
          ro_author: "author",
          ro_status: "status",
          ro_started: "started",
          ro_completed: "completed",
        },
        {
          ro_id: 1,
          ro_title: "title",
          ro_author: "author",
          ro_status: "status",
          ro_started: "started",
          ro_completed: "completed",
        },
      ],
      approvedLogs: [
        {
          approvedBy: "Approved By ",
          comment: "Comment",
        },
        {
          approvedBy: "Approved By ",
          comment: "Comment",
        },
      ],
      headers: [
        {
            title:'Researchers Profile',
            align:'center',
            children:[
                {
                    title:'Campus',
                    value:'campus'
                },
                {
                    title:'College',
                    value:'college'
                },
                {
                    title:'Firstname',
                    value:'firstname'
                },
                {
                    title:'Lastname',
                    value:'lastname'
                },
                {
                    title:'Middle Name',
                    value:'middle_name'
                }
            ]
        },
        {
          title: "Details of Research Outputs",
          align: "center",
          children: [
            {
              title: "Research Title",
              value: "research_title",
            },
            {
              title: "Name of Faculty Researcher / Author",
              value: "faculty_name",
            },
            {
              title: "Status of Research",
              value: "research_status",
            },
            {
              title: "Duration of Research",
              align: "center",
              children: [
                {
                  title: "Date Started",
                  value: "date_started",
                },
                {
                  title: "Date of Completion",
                  value: "date_completion",
                },
              ],
            },
          ],
        },
        {
          title: "Details of Presentation",
          align: "center",
          children: [
            {
              title: "Title of Forum",
              value: "forum",
            },
            {
              title: "Venue",
              value: "venue",
            },
            {
              title: "Forum Type",
              value: "forum_type",
            },
            {
              title: "Date of Presentation",
              value: "data_presentation",
            },
          ],
        },
        {
          title: "Details of Publication",
          align: "center",
          children: [
            {
              title: "Published Title",
              value: "published_title",
            },
            {
              title: "Date of Publication",
              value: "publication_date",
            },
            {
              title: "Title of Journal / Publication",
              value: "jounral_title",
            },
            {
              title: "Volume & Issue",
              value: "volume",
            },
            {
              title: "ISSN / ISBN",
              value: "volume",
            },
            {
              title: "Index",
              value: "inde",
            },
          ],
        },
        {
          title: "Details of Utilized Output",
          align: "center",
          children: [
            {
              title: "Product Name / Methods / Process / Technology",
              value: "methods",
            },
            {
              title: "Patent Number / Product Description",
              value: "patent_number",
            },
            {
              title: "Benefitiyng Industry / Community",
              value: "benefits",
            },
          ],
        },
        {
          title: "Action",
          value: "actions",
        },
      ],

      campusData: [
        {
          campus_id: 1,
          campusName: "Campus",
        },
      ],

      collegeData: [
        {
          college_id: 1,
          collegeName: "College",
        },
      ],

      sampleData: [
        {
            campus: "1",
            college: "2",
            firstname: "3",
            lastname: "4",
            middle_name: "5",
            researchers:[
                {
                    fname:'1 2 3'
                },
                {
                    fname:'1 2 3'
                }
            ]
        },
      ],

      forUpdate: [],

      // Input

      input: [
        {
          researchers: [
            // {
            //   campus_id: null,
            //   campus: null,
            //   college: null,
            //   college_id: null,
            //   researchers_id: null,
            //   fname: null,
            //   lname: null,
            //   mname: null,
            // },
          ],
          sdg: null,
          research_title: null,
          faculty_researcher: null,
          date_started: null,
          date_completion: null,
          published_title: null,
          date_publication: null,
          journal_title: null,
          volume: null,
          issn: null,
          index: null,
          product_name: null,
          product_desc: null,
          benefits: null,
        },
      ],
      hepData: [],

      SDGs: [
        { id: 1, name: "SDG 1: No Poverty" },
        { id: 2, name: "SDG 2: Zero Hunger" },
        { id: 3, name: "SDG 3: Good Health and Well-being" },
        { id: 4, name: "SDG 4: Quality Education" },
        { id: 5, name: "SDG 5: Gender Equality" },
        { id: 6, name: "SDG 6: Clean Water and Sanitation" },
        { id: 7, name: "SDG 7: Affordable and Clean Energy" },
        { id: 8, name: "SDG 8: Decent Work and Economic Growth" },
        { id: 9, name: "SDG 9: Industry, Innovation, and Infrastructure" },
        { id: 10, name: "SDG 10: Reduced Inequality" },
        { id: 11, name: "SDG 11: Sustainable Cities and Communities" },
        { id: 12, name: "SDG 12: Responsible Consumption and Production" },
        { id: 13, name: "SDG 13: Climate Action" },
        { id: 14, name: "SDG 14: Life Below Water" },
        { id: 15, name: "SDG 15: Life on Land" },
        { id: 16, name: "SDG 16: Peace, Justice, and Strong Institutions" },
        { id: 17, name: "SDG 17: Partnerships for the Goals" },
      ],

      search: "",
      disableBtn: false,
      myLoading: false,
      researcher_fname: "",
      researcher_lname: "",
      researcher_mname: "",
      researcher_campus: "",
      researcher_college: "",
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  methods: {
    validateInput(value) {
      if (!value) {
        return "This field is required";
      }

      return true;
    },
    changeData(isActive) {
      this.isDataActive = isActive;
    },

    deleteData(id) {
      console.log(id);
    },

    addField() {
      if (
        this.researcher_fname.trim() !== "" ||
        this.researcher_lname.trim() !== "" ||
        this.researcher_mname.trim() !== "" ||
        this.researcher_campus.trim() !== "" ||
        this.researcher_college.trim() !== ""
      ) {
        this.input[0].researchers.push({
          id: this.input[0].researchers.length,
          fname: this.researcher_fname,
          lname: this.researcher_lname,
          mname: this.researcher_mname,
          campus: this.researcher_campus,
          college: this.researcher_college,
        });

        this.researcher_fname = "";
        this.researcher_lname = "";
        this.researcher_mname = "";
        this.researcher_campus = "";
        this.researcher_college = "";
      } else {
      }

      //     this.addHTML = `

      //   `;
    },

    deleteName(id) {
      if (this.input[0].researchers.length > 1) {
        this.input[0].researchers = this.input[0].researchers.filter(
          (item, index) => index !== id
        );
      } else {
        this.input[0].researchers = [];
      }
    },

    openUpdate(item) {
      this.forUpdate = item;

      console.log(JSON.stringify(this.forUpdate.campus ))
    },

    submitData() {
      console.log("submit");
      console.log(JSON.stringify(this.input[0]));
    },

    deleteName_update(id){
        if (this.forUpdate.researchers.length > 1) {
            this.forUpdate.researchers = this.forUpdate.researchers.filter(
              (item, index) => index !== id
            );
          } else {
            this.forUpdate.researchers = [];
          }
    }
  },
};

