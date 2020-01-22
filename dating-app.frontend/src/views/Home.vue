<template>
  <!-- <Home /> -->
  <v-app id="home-view">
    <v-app-bar app color="red lighten-1" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Fire dragon"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="150"
          src="@/assets/fireDragonLogo.svg"
          width="100"
        />
      </div>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
// import Home from "../components/Home";

export default {
  // components: {
  //   Home
  // }
};
</script>
