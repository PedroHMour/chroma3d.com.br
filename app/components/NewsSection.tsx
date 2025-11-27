'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Dados simulados (Podes trocar por links reais que aches interessantes)
const newsData = [
  {
    id: 1,
    title: "O Futuro da Manufatura Aditiva em 2025",
    category: "Indústria 4.0",
    image: "/images/background-impressora.jpeg", // Usando imagem que já tens
    link: "https://3dprintingindustry.com/", // Link externo exemplo
    date: "20 Out, 2024"
  },
  {
    id: 2,
    title: "Novos Materiais Sustentáveis para Impressão 3D",
    category: "Sustentabilidade",
    image: "/images/filamento.png", // Usando imagem que já tens
    link: "https://all3dp.com/", // Link externo exemplo
    date: "18 Out, 2024"
  },
  {
    id: 3,
    title: "Chromatech: Inovação no coração da Amazônia",
    category: "Institucional",
    image: "/images/team/pedro.jpg", // Exemplo usando foto da equipa
    link: "/sobre-nos", // Link interno
    date: "15 Out, 2024"
  }
];

const NewsSection: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#00E676] font-medium tracking-wider text-sm uppercase">Atualizações</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Mundo Tech</h2>
          </div>
          <a href="#" className="hidden md:block text-gray-400 hover:text-white transition-colors">Ver todas as notícias &rarr;</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <motion.a
              href={news.link}
              target={news.link.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group block h-full"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Imagem da Notícia */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10">
                    {news.category}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <div className="mt-auto pt-4 flex items-center text-sm text-gray-400 group-hover:text-white transition-colors">
                    Ler Artigo <FaExternalLinkAlt className="ml-2 w-3 h-3" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;