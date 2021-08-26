<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
            type="text"
            class="form-control"
            placeholder="Search by First Name"
            v-model="firstName"
        />
        <div class="input-group-append">
          <button
              class="btn btn-outline-secondary"
              type="button"
              @click="searchUser"
          >
            Search User
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Users List</h4>
      <ul class="list-group">
        <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(user, index) in users"
            :key="index"
            @click="setActiveUser(user, index)"
        >
          {{ user.firstName }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllUsers">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentUser._id">
        <h4>User</h4>
        <div>
          <label><strong>First Name:</strong></label> {{ currentUser.firstName }}
        </div>
        <div>
          <label><strong>Last Name:</strong></label>
          {{ currentUser.lastName }}
        </div>
        <div>
          <label><strong>Email Address:</strong></label>
          {{ currentUser.email }}
        </div>
        <div>
          <label><strong>Phone Number:</strong></label>
          {{ currentUser.phoneNumber }}
        </div>
        <a
            class="btn btn-warning"
            :href="'/users/' + currentUser._id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br/>
        <p>Please click on a User...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import UserDataService from "@/services/UserDataService";
import User from "@/types/Users";

@Component
export default class UsersList extends Vue {
  private users: User[] = [];
  private currentUser = {} as User;
  private currentIndex: number = -1;
  private firstName: string = "";


  retrieveUsers() {
    UserDataService.getAll()
        .then((response) => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
  }

  refreshUser() {
    this.retrieveUsers();
    this.currentUser = {} as User;
    this.currentIndex = -1;

  }

  setActiveUser(user: User, index: number) {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllUsers() {
    UserDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshUser();
        })
        .catch((e) => {
          console.log(e);
        });
  }

  searchUser() {
    UserDataService.findByFirstName(this.firstName)
        .then((response) => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
  }

  mounted() {
    this.retrieveUsers();
    console.log({} as User)
  }
}
</script>

<style scoped>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
