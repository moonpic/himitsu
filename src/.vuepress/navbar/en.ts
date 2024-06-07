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
    children: [
      {
        text: "Guides",
        icon: "lightbulb",
        children: [{ text: "Introduction", icon: "ellipsis", link: "/getting-started/" }],
      },
    ],
  },
]);
