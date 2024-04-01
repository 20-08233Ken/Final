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

      forUpdate: [
        {
          updateCampus: null,
        },
      ],

      campus: null,
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
  },
};
</script>

<template>
  <div class="w-full">
    <Form class="flex w-full mb-2 items-center gap-4">
      <span class="w-full flex-col">
        <Field
          type="text"
          name="campus"
          placeholder="Add New Campus"
          class="input mt-2 input-bordered w-full"
          style="border: 1px solid #d2d2d2"
          v-model="campus"
          :rules="validateInput"
        />
        <ErrorMessage name="campus" class="error_message" />
      </span>

      <v-btn elevation="0" class="mt-2" type="submit">
        <v-icon class="mr-2" color="teal-darken-3">mdi-account-plus</v-icon>
        <p class="text-0.7 text-teal-700 font-Header">Add</p>
      </v-btn>
    </Form>
  </div>
  
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

                    <v-btn class="bg-teal-darken-3">Submit</v-btn>
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

              <p class="py-3 px-3">
                Are you sure you want to delete this record?
              </p>

              <v-card-actions>
                <v-spacer></v-spacer>
                <span class="w-full flex justify-end mt-4">
                  <v-btn text="Cancel" @click="isActive.value = false"></v-btn>

                  <v-btn class="bg-teal-darken-3">Delete</v-btn>
                </span>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </span>
    </template>
  </v-data-table>
</template>

<style scoped>
.error_message {
  color: red;
  font-size: 0.9rem;
}
</style>
