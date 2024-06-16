import { sidebar } from "vuepress-theme-hope";

export const esSidebar = sidebar({
  "/": [
    { text: 'Descargar', link: '/download/' },
    { text: 'Registro de cambios', link: '/changelogs/' },  
    { text: 'Bifurcaciones', link: '/forks/' },
    { text: 'Contribuir', link: '/docs/contribute' },
    
    {
      text: "Guias",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    { text: 'Introduccion', link: '/getting-started/' },
  ],
});
