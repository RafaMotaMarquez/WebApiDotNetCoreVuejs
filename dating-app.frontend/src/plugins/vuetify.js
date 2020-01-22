import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.red.lighten1,
        secondary: colors.grey.lighten1
        // accent: "#cddc39",
        // error: "#3f51b5",
        // warning: "#9c27b0",
        // info: "#e91e63",
        // success: "#00bcd4"
      },
      dark: {
        primary: "#558b2f"
      },
      options: {
        customProperties: true
      }
    }
  }
});
