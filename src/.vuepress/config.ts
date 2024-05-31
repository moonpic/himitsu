import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import localesConfig from './navbar/locales.ts'
export default defineUserConfig({
  base: "/",

  locales: localesConfig,
  theme,

  // Enable it with pwa
   shouldPrefetch: false,
});
