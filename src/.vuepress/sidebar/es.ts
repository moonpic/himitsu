import { sidebar } from "vuepress-theme-hope";

export const esSidebar = sidebar({
  "/ES/": [
    { text: 'Descargar', link: '/ES/Descargar/' },
    { text: 'Registro de cambios', link: '/ES/changelogs/' },  
    { text: 'Bifurcaciones', link: '/ES/forks/' },
    { text: 'Contribuir', link: '/ES/docs/contribute' },
    
    {
      text: "Guias",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    { text: 'Introduccion', link: '/ES/Empezando/' },
  ],
});
