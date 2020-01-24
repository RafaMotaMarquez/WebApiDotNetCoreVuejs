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
              <v-form ref="form" v-model="valid" id="loginFormSignIn">
                <v-text-field
                  v-model="username"
                  label="Username"
                  name="username"
                  :rules="usernameRules"
                  prepend-icon="mdi-human-greeting"
                  type="text"
                  required
                />

                <v-text-field
                  v-model="password"
                  id="password"
                  label="Password"
                  name="password"
                  :rules="passwordRules"
                  prepend-icon="mdi-lock"
                  type="password"
                  required
                />
                <v-btn
                  :disabled="!valid"
                  class="col-12 mb-12 mt-8"
                  color="primary"
                  @click="login"
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
      valid: true,
      usernameRules: [
        v => !!v || "Username is required",
        v =>
          (v && v.length >= 4) || "Username must be at least 4 characters long",
        v => (v && v.length <= 10) || "Username must be less than 10 characters"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v =>
          (v && v.length >= 4) || "Password must be at least 4 characters long",
        v => (v && v.length <= 10) || "Password must be less than 10 characters"
      ],
      errors: [],
      info: null,
      loading: true,
      errored: false
    };
  },
  mounted() {
    Vue.axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => {
        console.log(response.data);
      });
    // axios
    //   .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    //   .then(response => {
    //     this.info = response.data.bpi;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     this.errored = true;
    //   })
    //   .finally(() => (this.loading = false));
    // GET /someUrl
  },
  methods: {
    login(username, password) {
      username = this.username;
      password = this.password;
      var creds = { username, password };
      this.$http.post("http://localhost:5000/api/auth/login", creds).then(
        response => {
          console.log("*/*/*/*/*/*");
          console.log(response);
        },
        error => {
          console.log("*/*/*/*/*/*");
          console.log(error);
        }
      );
      // axios
      //   .post("http://localhost:5000/api/auth/login", {
      //     body: creds
      //   })
      //   .then(response => {})
      //   .catch(e => {
      //     this.errors.push(e);
      //     console.log("*/*/*/*/*/*");
      //     console.log(this.errors);
      //   });

      // return creds;
    }
  }
};
</script>

<style lang="scss" scoped>
// @import url("https://fonts.googleapis.com/css?family=Lobster&display=swap");
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
