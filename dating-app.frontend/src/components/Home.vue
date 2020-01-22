<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex mt-4>
        <h1 class="red--text display-1 font-weight-bold my-12">
          Welcome to Dating App
        </h1>
        <h1 class="display-2 font-weight-bold my-12">
          Reading values from DB
        </h1>
        <ul id="listOfValues">
          <li v-for="value in values" v-bind:key="value">
            {{ value.id }} | {{ value.name }}
          </li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      values: []
    };
  },
  created() {
    axios
      .get(`http://localhost:5000/api/values`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.values = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
};
</script>
