import { navbar } from "vuepress-theme-hope";
import { data as release } from '../data/release.data'
export const enNavbar = navbar([
  {
    text: "Download",
    icon: "download",
    children: [
      {
        text: "Download",
        icon: "download",
        link: "/download/",
      },
      {
        text: "Changelogs",
        icon: "lightbulb",
        link: "/changelogs/",
      },
    ],
  },
  {
    text: "Docs",
    icon: "folder",
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
        icon: "book",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
]);
