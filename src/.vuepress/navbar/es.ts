import { navbar } from "vuepress-theme-hope";
export const esNavbar = navbar([
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
    text: "Guide",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
]);
