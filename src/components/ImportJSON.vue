<template>
  <div class="container">
    <div class="container">
      <div class="row">
        <div class="col-sm display-4 text-center">JSON Importer for Users</div>
      </div>
      <div class="row">
        <div class="col-sm lead text-center">Input JSON</div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="form-group">
            <label for="dataFormImportOne">JSON Input one containing user emails and names</label>
            <textarea v-model="jsonData.jsonDataOne" id="dataFormImportOne" class="form-control" rows="20">
            </textarea>
          </div>
        </div>
        <div class="col-sm">
          <div class="row">
            <div class="form-group">
              <label for="dataFormImportTwo">JSON Input containing emails and phone numbers</label>
              <textarea v-model="jsonData.jsonDataTwo" id="dataFormImportTwo" class="form-control" rows="20">
            </textarea>
            </div>
          </div>
        </div>
      </div>
      <button type="button"
              class="btn btn-primary submit"
              @click="mergeData">
        Submit
      </button>
      {{ jsonData.message }}
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import UserDataService from "@/services/UserDataService";

@Component
export default class ImportJSON extends Vue {

  private jsonData = {
    jsonDataOne: null,
    jsonDataTwo: null,
    message: ''
  }

  /*
  * Method to format and merge existing two json files and get JSON data to store multiple Users
  * */

  mergeData() {


    const dJSON = require('dirty-json');
    const jsonFormatOne = dJSON.parse(this.jsonData.jsonDataOne)
    const jsonFormatTwo = dJSON.parse(this.jsonData.jsonDataTwo)

    if (jsonFormatOne || jsonFormatTwo === null) {
      this.jsonData.message = 'Please fill correctly JSON fields'
    } else {

      /*
    * Map Formatted data and compare emails, if match exists merge into one Array
    * */

      let merged = jsonFormatOne.map((dataSetOne: { email: string; phoneNumber: string; }) => {
        console.log(dataSetOne)
        let temp = jsonFormatTwo.find((dataSetTwo: { email: string; }) => dataSetTwo.email === dataSetOne.email)
        if (temp.phoneNumbers) {
          dataSetOne.phoneNumber = temp.phoneNumbers[0].value;
        }
        return dataSetOne;
      })

      let data = JSON.stringify(merged)

      /*
      * Create Existing Users from JSON Importer
      * */

      UserDataService.bulkCreate(data)
          .then((response) => {
            console.log(response.data)
          })
          .catch((e) => {
            console.log(e)
          })

      this.jsonData.message = '';
    }

  }

  mounted() {
  }
}
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
