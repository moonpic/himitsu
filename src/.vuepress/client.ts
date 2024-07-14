import { defineClientConfig } from "vuepress/client";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { defineRevealJsConfig } from "vuepress-plugin-md-enhance/client";

import Changelog from "../mihon/Changelog.vue";
import ChangelogsList from "../mihon/ChangelogsList.vue";
import Contributors from "../mihon/Contributors.vue";
import DownloadButtons from "../mihon/DownloadButtons.vue";
import ReleaseDate from "../mihon/ReleaseDate.vue";

export default defineClientConfig({
  setup() {
    // This function will be called when the client is set up
  },
  enhance({ app, router, siteData }) {
    // Register global components
    app.component("Changelog", Changelog);
    app.component("ChangelogsList", ChangelogsList);
    app.component("Contributors", Contributors);
    app.component("DownloadButtons", DownloadButtons);
    app.component("ReleaseDate", ReleaseDate);

    defineRevealJsConfig({
  
    });
     // Apply setupTransparentNavbar conditionally based on the route
     router.afterEach((to) => {
      if (typeof window !== 'undefined' && (to.path === '/download' || to.path.startsWith('/changelogs'))) {
        setupTransparentNavbar({ type: "all", threshold: 3410 });
      }
    });
  }
});