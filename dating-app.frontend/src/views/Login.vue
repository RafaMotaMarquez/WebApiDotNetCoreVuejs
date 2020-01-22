<!-- This is the file that will render any external pages you do not want inside the dash, like login form-->
<template>
  <v-app id="login-view">
    <LoginForm />
  </v-app>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  components: {
    LoginForm
  }
};
</script>

<style lang="scss" scoped></style>
