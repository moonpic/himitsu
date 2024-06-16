import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, esNavbar } from "./navbar/index.js";
import { enSidebar, esSidebar } from "./sidebar/index.js";

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

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Himitsu",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
    "/ES/": {
      navbar: esNavbar,

      sidebar: esSidebar,

      footer: "Himitsu",

      displayFooter: true,

      metaLocales: {
        editLink: "Edite esta página en GitHub",
      },
    },
  },

  plugins: {
    docsearch: {
      appId: 'X0VGF1D6HR',
      apiKey: '70daba0e597f1fdfaf2c93e7719a5633',
      indexName: 'himitsu2',
    },

    // Uncomment and configure this section if needed
    // notice: [
    //   {
    //     path: "/",
    //     title: "We need your help!",
    //     content: "The creator of Himitsu has been kidnapped and is being held for a $10k ransom!",
    //     actions: [
    //       {
    //         text: "Save him",
    //         link: "https://buymeacoffee.com/abandonedcart",
    //         type: "primary",
    //       },
    //       { text: "Nah" },
    //     ],
    //   },
    // ],

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

      // Uncomment and configure these features if needed
      // chart: true,
      // echarts: true,
      // flowchart: true,
      // gfm: true,
      // katex: true,
      // mathjax: true,
      // mermaid: true,
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      // vuePlayground: true,
      // sandpack: true,
    },

    redirect: {
      switchLocale: 'modal',
    },

    // Uncomment and configure this section if needed
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //   },
    // },
  },
});
