<template>
  <v-content>
    <div id="loginFormContainer">
      <div id="backgroundLoginImage" class="hidden-sm-and-down"></div>
      <div id="loginForm">
        <div>
          <h1 class="mt-12">Sign in to</h1>
          <v-img
            alt="Fire dragon"
            class="fireDragonlogo mt-1 pl-0"
            contain
            min-width="350"
            src="@/assets/fireDragonLogoRed.svg"
            width="150"
          />
          <v-container class="fluid">
            <v-row style="width:100%">
              <v-form id="loginFormSignIn">
                <v-text-field
                  v-model="username"
                  label="Login"
                  name="login"
                  prepend-icon="mdi-human-greeting"
                  type="text"
                  required
                />

                <v-text-field
                  v-model="password"
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  required
                />
                <v-btn class="col-12 mb-12" color="primary" @click="login"
                  >Login</v-btn
                >
              </v-form>
              <h2 class="primary--text">Not a member yet ? Sign up</h2>
            </v-row>
          </v-container>
        </div>
      </div>
    </div>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login(username, password) {
      username = this.username;
      password = this.password;
      console.log("*/*/*/*/*/*");
      console.log(username);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Lobster&display=swap");
#loginFormContainer {
  display: flex;
  height: 100%;
  #backgroundLoginImage {
    display: flex;
    flex: 7;
    background: url("../assets/loginDragon.jpg") no-repeat center center;
    background-size: cover;
    div {
      border: 1px solid grey;
    }
  }
  #loginForm {
    display: flex;
    flex: 7;
    background-color: cornsilk;

    div {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      h1,
      h2 {
        font-family: "Lobster", cursive;
      }
      h2 {
        font-size: 1.4rem;
      }
      div.fireDragonlogo {
        max-height: 80px;
      }
      #loginFormSignIn {
        width: 35%;
      }
    }
  }
}
</style>
