// src/config/site.ts

export const siteConfig = {
  name: "WinSolutions",
  description: "Rutas de aprendizaje estructuradas paso a paso en Ingeniería de Software y Ciberseguridad. Desde cero hasta el nivel profesional.",
  url: "https://astrostarterpro.com",  // DOMINIO FINA - OJO -!!!
  ogImage: "/og-image.png", // Cambiado a ruta estática directa para evitar que rompa el componente SEO
  lang: "es",
  locale: "es_VE",
  author: "Eduardo Zambrano",
  twitter: "@WinSolutions", 
  socialLinks: {
  instagram: "https://instagram.com/winsolutionslat",
  tiktok: "https://tiktok.com/@winsolutionslat",
  twitter: "https://x.com/winsolutionslat", // Puedes cambiar "winsolutionslat" por el usuario exacto que decidas para X
  },
  navLinks: [
    { text: "Inicio", href: "/" },
    { text: "Rutas de Formación", href: "#cursos" },
    { text: "Garantía", href: "#garantia" },
  ],
};