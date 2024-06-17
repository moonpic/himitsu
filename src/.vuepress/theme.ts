import { hopeTheme } from "vuepress-theme-hope";
import { localesconfig, locales2 } from "./locales.js";

export default hopeTheme({
  navbarLayout: {
    start: ["Search"],
    end: ["Links", "Language", "Outlook", "Repo"],
  },

  hostname: "https://animecross.xyz",

  author: {
    name: "Moonpic",
  },

  iconAssets: "fontawesome",

  repo: "moonpic/website",
  docsDir: "src",

  locales: localesconfig,

  plugins: {
    docsearch: {
      appId: 'X0VGF1D6HR',
      apiKey: '70daba0e597f1fdfaf2c93e7719a5633',
      indexName: 'himitsu2',
      locales: locales2,
    },
    
    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },

    components: {
      components: ["Badge", "VPCard", "VPBanner"],
    },

    copyright: {
      license: "MPL-2.0",
    },

    mdEnhance: {
      align: true,
      attrs: false,
      hint: true,
      codetabs: true,
      component: true,
      demo: false,
      figure: true,
      breaks: true,
      imgLazyload: false,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },

    redirect: {
      switchLocale: 'modal',
    },
  },
});