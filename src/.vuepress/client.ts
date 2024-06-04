import { defineClientConfig } from "vuepress/client";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss";

import Changelog from "./mihon/components/Changelog.vue";
import ChangelogsList from "./mihon/components/ChangelogsList.vue";
import Contributors from "./mihon/components/Contributors.vue";
import DownloadButton from "./mihon/components/DownloadButton.vue";
import ReleaseDate from "./mihon/components/ReleaseDate.vue";

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [
    "Changelog",
    "ChangelogsList",
    "Contributors",
    "DownloadButton",
    "ReleaseDate"
  ],
});