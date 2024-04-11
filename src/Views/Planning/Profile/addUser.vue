<script src = '../../../Scripts/Planning/Profile/addUser.js' >

</script>

<template>
  <div class="w-10/12 flex flex-col px-3vw py-3vw bg-white shadow-card2">
    <h3
      class="font-bold text-lg font-Header bg-gray-700 text-white py-4 px-4 mt-4"
    >
      User Profile
    </h3>

 
    <Form class="mt-4" @submit="submitData">
      <p class="flex items-center gap-2 text-Red-Darken font-Subheader">
        Personal Information
      </p>

      <p class="text-0.9 font-Subheader text-gray-500 mt-4">Company ID</p>
      <Field
        type="text"
        name="company_id"
        placeholder="Type here"
        class="input mt-2 input-bordered w-full"
        style="border: 1px solid #d2d2d2"
        :rules="validateData"
        v-model="userData.company_id"
      />
      <ErrorMessage name="company_id" class="error_message" />

      <p class="text-0.9 font-Subheader text-gray-500 mt-4">Company Email</p>
      <Field
        type="email"
        name="email"
        placeholder="Type here"
        class="input mt-2 input-bordered w-full"
        style="border: 1px solid #d2d2d2"
        :rules="validateData"
        v-model="userData.email"
      />
      <ErrorMessage name="email" class="error_message" />

      <p class="text-0.9 font-Subheader text-gray-500 mt-4">First Name</p>
      <Field
        type="text"
        name="firstname"
        placeholder="Type here"
        class="input mt-2 input-bordered w-full"
        style="border: 1px solid #d2d2d2"
        :rules="validateData"
        v-model="userData.firstname"
      />
      <ErrorMessage name="firstname" class="error_message" />

      <p class="text-0.9 font-Subheader text-gray-500 mt-4">Last Name</p>
      <Field
        type="text"
        name="lastname"
        placeholder="Type here"
        class="input mt-2 input-bordered w-full"
        style="border: 1px solid #d2d2d2"
        :rules="validateData"
        v-model="userData.lastname"
      />
      <ErrorMessage name="lastname" class="error_message" />

      <p class="text-0.9 font-Subheader text-gray-500 mt-4">Middlename</p>
      <Field
        type="text"
        name="middlename"
        placeholder="Type here"
        class="input mt-2 input-bordered w-full"
        style="border: 1px solid #d2d2d2"
        :rules="validateData"
        v-model="userData.middlename"
      />
      <ErrorMessage name="middlename" class="error_message" />

      <p class="text-0.9 font-Subheader text-gray-500 mt-4">Username</p>
      <Field
        type="text"
        name="username"
        placeholder="Type here"
        class="input mt-2 input-bordered w-full"
        style="border: 1px solid #d2d2d2"
        :rules="validateData"
        v-model="userData.username"
      />
      <ErrorMessage name="username" class="error_message" />

      <p class="text-0.9 font-Subheader text-gray-500 mt-4">Password</p>
      <Field
        type="password"
        name="password"
        placeholder="Type here"
        class="input mt-2 input-bordered w-full"
        style="border: 1px solid #d2d2d2"
        :rules="validateData"
        v-model="userData.password"
      />
      <ErrorMessage name="password" class="error_message" />

      <p class="text-0.9 font-Subheader text-gray-500 mt-4">Confirm Password</p>
      <Field
        type="password"
        name="confirm_password"
        placeholder="Type here"
        class="input mt-2 input-bordered w-full"
        style="border: 1px solid #d2d2d2"
        :rules="validateData"
        v-model="userData.confirm_password"
      />
      <ErrorMessage name="confirm_password" class="error_message" />

      <p class="flex items-center gap-2 text-Red-Darken font-Subheader mt-8">
        Designation
      </p>

      <p class="text-0.9 font-Subheader text-gray-500 mt-4">Campus</p>
      <Field
        as="select"
        name="campus_id"
        class="w-full select select-bordered mt-2"
        style="border: 1px solid #d2d2d2"
        :rules="validateData"
        v-model="userData.campus_id"
        @change="changeCollege(userData.campus_id)"
      >
        <option disabled selected>Select Campus ...</option>
        <option v-for="items in CampusData" :value="items.id">
          {{ items.campus }}
        </option>
      </Field>
      <ErrorMessage name="campus" class="error_message" />

      <p class="text-0.9 font-Subheader text-gray-500 mt-4">Office</p>
      <Field
        as="select"
        name="office_id"
        class="w-full select select-bordered mt-2"
        v-model="userData.office_id"
        style="border: 1px solid #d2d2d2"
      >
        <option disabled selected>Select Office ...</option>
        <option v-for="items in OfficeData" :value="items.id">
          {{ items.office }}
        </option>
      </Field>
      <ErrorMessage name="office" class="error_message" />

      <p class="text-0.9 font-Subheader text-gray-500 mt-4">Position</p>
      <Field
        as="select"
        name="position_id"
        class="select select-bordered mt-2 w-full"
        style="border: 1px solid #d2d2d2"
        :rules="validateData"
        v-model="userData.position_id"
      >
        <option disabled selected>Select Position ...</option>
        <option v-for="items in PositionData" :value="items.id">
          {{ items.role }}
        </option>
      </Field>
      <ErrorMessage name="postion" class="error_message" />

      <p class="text-0.9 font-Subheader text-gray-500 mt-4">College</p>
      <Field
        as="select"
        name="college_id"
        class="w-full select select-bordered mt-2"
        :disabled="userData.position_id != 6"
        v-model="userData.college_id"
        style="border: 1px solid #d2d2d2"
      >
        <option disabled selected>Select College ...</option>
        <option v-for="items in CollegeData" :value="items.id">
          {{ items.college }}
        </option>
      </Field>
      <ErrorMessage name="college" class="error_message" />

      <!-- <span class="w-full flex  mt-4">
                                <form method="dialog" class="w-full flex justify-end">
                                    <button class="btn btn-success text-white w-3/12" type="submit">Add</button>
                                </form>
                            </span> -->

      <v-card-actions>
        <v-spacer></v-spacer>
        <span class="w-full justify-end flex gap-1">
          <v-btn
            text="Close"
            class="w-2/12 mt-4 bg-grey-lighten-3"
            @click="isActive.value = false"
          ></v-btn>
          <v-btn
            text="Submit"
            class="bg-teal-darken-3 w-2/12 mt-4"
            type="submit"
          ></v-btn>
        </span>
      </v-card-actions>
    </Form>
  </div>
</template>

<style scoped>
.error_message {
  color: red;
  font-size: 0.9rem;
}
</style>
