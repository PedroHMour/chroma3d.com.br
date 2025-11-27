import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Exemplo de rota privada
    },
    sitemap: 'https://www.chromatech.com.br/sitemap.xml', // Ajusta para o teu domínio
  };
}