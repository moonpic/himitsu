import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import localesConfig from './navbar/locales.js'
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

export default defineUserConfig({
  //unnecessary for now
  //plugins: [
    //googleAnalyticsPlugin({
     // id: "G-7YTE0XJ6X3",
   // }),
  //],
  
  base: "/",

  locales: localesConfig,
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
