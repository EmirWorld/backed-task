<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
            type="text"
            class="form-control"
            id="firstName"
            required
            v-model="user.firstName"
            name="first-name"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
            class="form-control"
            id="description"
            required
            v-model="user.lastName"
            name="description"
        />
      </div>

      <div class="form-group">
        <label for="description">Email Adress</label>
        <input
            class="form-control"
            id="email"
            required
            v-model="user.email"
            name="email-address"
        />
      </div>

      <div class="form-group">
        <label for="description">Phone Number</label>
        <input
            class="form-control"
            id="phoneNumber"
            required
            v-model="user.phoneNumber"
            name="phone-number"
        />
      </div>

      <button @click="saveUser" class="btn btn-success mt-2">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success mt-2" @click="newUser">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import UserDataService from "@/services/UserDataService";
import User from "@/types/Users";

@Component
export default class AddUser extends Vue {
  private user: User = {
    _id: null,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };

  private submitted: boolean = false;

  /*
  * Method for saving User
  * */
  saveUser() {
    let data = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      phoneNumber: this.user.phoneNumber,
    };

    /*
    * Using http Data service with axios to create User
    * */
    UserDataService.create(data)
        .then((response) => {
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e.message);
        });
  }

  newUser() {
    this.submitted = false;
    this.user = {} as User;
  }
}
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
