import { defineClientConfig } from "vuepress/client";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss";

import Changelog from "../mihon/Changelog.vue";
import ChangelogsList from "../mihon/ChangelogsList.vue";
import Contributors from "../mihon/Contributors.vue";
import DownloadButtons from "../mihon/DownloadButtons.vue";
import ReleaseDate from "../mihon/ReleaseDate.vue";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("Changelog", Changelog);
    app.component("ChangelogsList", ChangelogsList);
    app.component("Contributors", Contributors);
    app.component("DownloadButtons", DownloadButtons);
    app.component("ReleaseDate", ReleaseDate);
  },
  setup() {},
  rootComponents: [],
});