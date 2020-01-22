<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar height="100" color="red lighten-1" dark flat>
              <v-toolbar-title>
                <h1 class="title ">Login to</h1>

                <v-img
                  alt="Fire dragon"
                  class="shrink mt-1 hidden-sm-and-down pl-0"
                  contain
                  min-width="150"
                  src="@/assets/fireDragonLogo.svg"
                  width="100"
                />
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Login"
                  name="login"
                  prepend-icon="mdi-human-greeting"
                  type="text"
                />

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="red lighten-1 white--text">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
