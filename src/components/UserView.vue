<template>
  <div v-if="currentUser._id" class="edit-form">
    <h4>User</h4>
    <form>

      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
            type="text"
            class="form-control"
            id="firstName"
            v-model="currentUser.firstName"
        />
      </div>

      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
            type="text"
            class="form-control"
            id="lastName"
            v-model="currentUser.lastName"
        />
      </div>

      <div class="form-group">
        <label for="email">Email Adress</label>
        <input
            type="text"
            class="form-control"
            id="email"
            v-model="currentUser.email"
        />
      </div>

      <div class="form-group">
        <label for="phoneNumber">Phone Number</label>
        <input
            type="text"
            class="form-control"
            id="phoneNumber"
            v-model="currentUser.phoneNumber"
        />
      </div>

    </form>


    <button class="badge badge-danger mr-2" @click="deleteUser">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="updateUser">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a User...</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserDataService from "@/services/UserDataService";
import User from "@/types/Users";

@Component
export default class UserView extends Vue {
  private currentUser = {} as User;
  private message: string = "";


  /*
  * GET existing user by id
  * */

  getUser(id: string) {
    UserDataService.get(id)
        .then((response) => {
          this.currentUser = response.data;
          console.log(response.data);

        })
        .catch((e) => {
          console.log(e);
        });
  }

  /*
  * Update Existing user by ID
  * */

  updateUser() {
    UserDataService.update(this.$route.params.id, this.currentUser)
        .then((response) => {
          console.log(response.data);
          this.message = "The user was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
  }

  /*
  * Delete Existing User
  * */

  deleteUser() {
    UserDataService.delete(this.$route.params.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "users" });
        })
        .catch((e) => {
          console.log(e);
        });
  }

  mounted() {
    this.message = "";
    this.getUser(this.$route.params.id);

  }
}
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
