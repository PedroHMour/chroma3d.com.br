import { MetadataRoute } from 'next';
import { produtos } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.chromatech.com.br'; // Ajusta para o teu domínio

  // Páginas estáticas
  const routes = [
    '',
    '/produtos',
    '/sobre-nos',
    '/aplicacoes',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Páginas dinâmicas de produtos
  const productRoutes = produtos.map((produto) => ({
    url: `${baseUrl}/produtos/${produto.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...productRoutes];
}