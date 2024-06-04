import { defineClientConfig } from "vuepress/client";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss";

import Changelog from "./components/Changelog.vue";
import Contributors from "./components/Contributors.vue";
import DownloadButton from "./components/DownloadButton.vue";
import ReleaseDate from "./components/ReleaseDate.vue";

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [
    "Changelog",
    "Contributors",
    "DownloadButton",
    "ReleaseDate"
  ],
});