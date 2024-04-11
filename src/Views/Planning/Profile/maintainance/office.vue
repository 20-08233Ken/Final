<script src ='../../../../Scripts/Planning/Profile/maintenance/office.js'> </script>

<template>
  <div class="w-full">
    <v-dialog max-width="500">
      <template v-slot:activator="{ props: activatorProps }">
        <span class="w-full flex justify-end">
          <v-btn elevation="0" class="mt-2" v-bind="activatorProps">
            <v-icon class="mr-2" color="teal-darken-3">mdi-account-plus</v-icon>
            <p class="text-0.7 text-teal-700 font-Header">Add</p>
          </v-btn>
        </span>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card class="px-3 py-3">
          <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4">
            Add Record
          </h3>
          <Form class="mt-4 px-3" @submit="AddData">
            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Campus</p>
            <Field as="select" name="campus_id" class="w-full select select-bordered mt-2"
              style="border: 1px solid #d2d2d2" :rules="validateInput" v-model="newOffice.campus_id">
              <option disabled selected>Select Campus ...</option>
              <option v-for="items in CampusData" :value="items.campus_id">
                {{ items.campus }}
              </option>
            </Field>
            <ErrorMessage name="campus" class="error_message" />

            <p class="text-0.9 font-Subheader text-gray-500 mt-4">Office</p>
            <Field type="text" name="office" placeholder="Type here" class="input mt-2 input-bordered w-full"
              style="border: 1px solid #d2d2d2" v-model="newOffice.office" />
            <v-card-actions>
              <v-spacer></v-spacer>
              <span class="w-full flex justify-end mt-4">
                <v-btn text="Cancel" @click="isActive.value = false"></v-btn>
                <v-btn class=" bg-teal-darken-3" type="submit" @click="isActive.value = false">Add</v-btn>
              </span>
            </v-card-actions>
          </Form>
        </v-card>
      </template>
    </v-dialog>
  </div>


  <v-data-table :headers="headers" :items="OfficeData" loading-text="Loading... Please wait" :loading="myLoading">
    <template v-slot:item.action="{ item }">
      <span class="w-full flex items-center justify-center gap-3">
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn icon="mdi-pencil" size="xs" elevation="0" v-bind="activatorProps" @click="openUpdate(item)">
              <v-icon color="light-blue-darken-2"></v-icon>
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card class="px-3 py-3">
              <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4">
                Edit Record
              </h3>

              <Form class="mt-4 px-3" @submit="submitUpdate">

                <p class="text-0.9 font-Subheader text-gray-500 mt-4">Campus</p>
                <Field as="select" name="campus" class="w-full select select-bordered mt-2"
                  style="border: 1px solid #d2d2d2" :rules="validateInput" v-model="forUpdate.campus_id">
                  <option disabled selected>Select Campus ...</option>
                  <option v-for="items in CampusData" :value="items.campus_id">
                    {{ items.campus }}
                  </option>
                </Field>
                <ErrorMessage name="campus" class="error_message" />


                <p class="text-0.9 font-Subheader text-gray-500">Office</p>
                <Field type="text" name="office" placeholder="Type here" class="input mt-2 input-bordered w-full"
                  style="border: 1px solid #d2d2d2" v-model="forUpdate.office" />

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <span class="w-full flex justify-end mt-4">
                    <v-btn text="Cancel" @click="isActive.value = false"></v-btn>
                    <v-btn class=" bg-teal-darken-3" type="submit" @click="isActive.value = false">Submit</v-btn>
                  </span>
                </v-card-actions>
              </Form>
            </v-card>
          </template>
        </v-dialog>

        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn icon="mdi-delete" size="xs" elevation="0" v-bind="activatorProps" @click="forDelete(item)">
              <v-icon color="red-darken-3"></v-icon>
            </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card class="px-3 py-3">
              <h3 class="font-bold text-lg font-Header w-full bg-gray-700 text-white px-4 py-4">
                Delete Record
              </h3>
              <Form class="mt-4 px-3" @submit="submitDelete">
                <p class="py-3 px-3">Are you sure you want to delete this record?</p>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <span class="w-full flex justify-end mt-4">
                    <v-btn text="Cancel" @click="isActive.value = false"></v-btn>
                    <v-btn class=" bg-teal-darken-3" type="submit" @click="isActive.value = false">Delete</v-btn>
                  </span>
                </v-card-actions>
              </Form>
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
