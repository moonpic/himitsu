import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import localesConfig from './meta.js'
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

export default defineUserConfig({
  plugins: [
    googleAnalyticsPlugin({
     id: "G-J6PHW601VW",
   }),
  ],
  
  base: "/",

  locales: localesConfig,
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
