<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark ps-5 pe-5 pt-3 pb-3">
      <a href="#" class="navbar-brand">Backend Task</a>
      <div class="navbar-nav ms-auto">
        <li class="nav-item">
          <a href="/users" class="nav-link">Users</a>
        </li>
        <li class="nav-item">
          <a href="/add" class="nav-link">Add User</a>
        </li>
        <li class="nav-item">
          <a href="/import" class="nav-link">Import JSON</a>
        </li>
      </div>
    </nav>

    <div class="container mt-3 ">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>
