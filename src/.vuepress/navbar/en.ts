import { navbar } from "vuepress-theme-hope";
export const enNavbar = navbar([
  {
    text: "Get v3.0.0",
    icon: "download",
    prefix: "/guide/",
    children: [
      {
        text: "soon",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "soon",
        icon: "download",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
    },

  {
    text: "Docs",
    icon: "folder",
    link: "https://himitsu2.vercel.app/",
  },
  {
    text: "News",
    icon: "book",
    link: "https://himitsu2.vercel.app/",
  },
  { text: "",
    icon: "/assets/icon/gitlab.svg",
    link: "https://himitsu2.vercel.app/"
  },
]);
