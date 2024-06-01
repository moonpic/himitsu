import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, esNavbar } from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  navbarLayout: {
    start: ["Search", "Language"],
    end: ["Links", "Repo"],
  },
      
  hostname: "https://himitsu2.vercel.app",

  author: {
    name: "Moonpic",
  },

  iconAssets: "fontawesome-with-brands",


  repo: "moonpic/himitsu-website",

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
  "/es" : {
  navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Himitsu",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

  },

  plugins: {
    

    docsearch: {
      appId: 'X0VGF1D6HR',
      apiKey: '70daba0e597f1fdfaf2c93e7719a5633',
      indexName: 'himitsu2',
    },

    notice: [
      {
        path: "/",
        title: "We need your help!",
        content: "The creator of himitsu has been kidnapped, we need 10k dollars",
        actions: [
          {
            text: "Help him",
            link: "https://youtu.be/dQw4w9WgXcQ?si=6Z1-2sii4sWKnOOt",
            type: "primary",
          },
          { text: "Nah" },
        ],
      },
    ],
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
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
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: false,
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

      // Install chart.js before enabling it
      // chart: true,

      // insert component easily

      // Install echarts before enabling it
      // echarts: true,

      // Install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // Install katex before enabling it
      // katex: true,

      // Install mathjax-full before enabling it
      // mathjax: true,

      // Install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // @moonpic I may use this in the future
      // Install reveal.js before enabling it 
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // Install @vue/repl before enabling it
      // vuePlayground: true,

      // Install sandpack-vue3 before enabling it
      // sandpack: true,
    },

     pwa: {
   favicon: "/favicon.ico",
   cacheHTML: true,
   cacheImage: true,
       appendBase: true,
       apple: {
         icon: "/assets/icon/apple-icon-152.png",
         statusBarColor: "black",
       },
       msTile: {
         image: "/assets/icon/ms-icon-144.png",
         color: "#ffffff",
       },
       manifest: {
         icons: [
           {
             src: "/assets/icon/chrome-mask-512.png",
             sizes: "512x512",
             purpose: "maskable",
             type: "image/png",
           },
           {
             src: "/assets/icon/chrome-mask-192.png",
             sizes: "192x192",
             purpose: "maskable",
             type: "image/png",
           },
           {
             src: "/assets/icon/chrome-512.png",
             sizes: "512x512",
             type: "image/png",
           },
           {
             src: "/assets/icon/chrome-192.png",
             sizes: "192x192",
             type: "image/png",
           },
         ], 
       },
     },
  },
});
