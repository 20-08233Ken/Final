<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  data() {
    return {
      headers: [

        {
          title: "Campus ",
          value: "campus_name",
        },
        {
          title: "Action",
          value: "action",
        },
      ],

      sampleData: [
        {
          id: 1,
          campus_name: "Campus1",
        },
      ],

      forUpdate:[
        {
            updateCampus:null
        }
      ]
    };
  },

  components: {
    Form,
    Field,
    ErrorMessage,
  },
};
</script>

<template>
  <v-data-table :headers="headers" :items="sampleData">
    <template v-slot:item.action="{ item }">
      <span class="w-full flex items-center justify-center gap-3">
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              icon="mdi-pencil"
              size="xs"
              elevation="0"
              v-bind="activatorProps"
            >
              <v-icon color="light-blue-darken-2"></v-icon>
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card class="px-3 py-3">
              <h3
                class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4"
              >
                Edit Record
              </h3>

              <Form class="mt-4 px-3">
                <p class="text-0.9 font-Subheader text-gray-500">Campus</p>
                <Field
                  type="text"
                  name="campus"
                  placeholder="Type here"
                  class="input mt-2 input-bordered w-full"
                  style="border: 1px solid #d2d2d2"
                  v-model="item.campus_name"
                />

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <span class="w-full flex justify-end mt-4">
                    <v-btn
                      text="Cancel"
                      @click="isActive.value = false"
                    ></v-btn>

                    <v-btn  class=" bg-teal-darken-3" >Submit</v-btn>
                  </span>
                </v-card-actions>
              </Form>
            </v-card>
          </template>
        </v-dialog>

        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              icon="mdi-delete"
              size="xs"
              elevation="0"
              v-bind="activatorProps"
            >
              <v-icon color="red-darken-3"></v-icon>
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card class="px-3 py-3">
              <h3
                class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4"
              >
                Delete Record
              </h3>

              <p class="py-3 px-3">Are you sure you want to delete this record?</p>

              <v-card-actions>
                  <v-spacer></v-spacer>
                  <span class="w-full flex justify-end mt-4">
                    <v-btn
                      text="Cancel"
                      @click="isActive.value = false"
                    ></v-btn>

                    <v-btn  class=" bg-teal-darken-3" >Delete</v-btn>
                  </span>
                </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </span>
    </template>
  </v-data-table>
</template>
