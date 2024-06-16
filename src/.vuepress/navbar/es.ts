import { navbar } from "vuepress-theme-hope";
export const esNavbar = navbar([
  {
    text: "Descargar",
    icon: "download",
    children: [
      {
        text: "Descargar",
        icon: "download",
        link: "/ES/Descargar/",
      },
      {
        text: "Registros de cambios",
        icon: "lightbulb",
        link: "/ES/changelogs/",
      },
    ],
  },
  {
    text: "Documentacion",
    icon: "folder",
    children: [
      {
        text: "Guías",
        icon: "lightbulb",
        children: [{ text: "Introducción", icon: "ellipsis", link: "/ES/Empezando/" }],
      },
    ],
  },
]);
