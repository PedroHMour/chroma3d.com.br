'use client'; // Necessário para animações

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tilt } from 'react-tilt'; // Efeito 3D
import { motion } from 'framer-motion'; // Animação de entrada

// Configuração do efeito 3D
const defaultTiltOptions = {
  reverse:        false,  // reverse the tilt direction
  max:            15,     // max tilt rotation (degrees)
  perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale:          1.02,   // 2 = 200%, 1.5 = 150%, etc..
  speed:          1000,   // Speed of the enter/exit transition
  transition:     true,   // Set a transition on enter/exit.
  axis:           null,   // What axis should be disabled. Can be X or Y.
  reset:          true,   // If the tilt effect has to be reset on exit.
  easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
};

interface Produto {
  id: number;
  nome: string;
  descricaoCurta: string;
  preco: number;
  urlImagemPrincipal: string;
}

interface ProductCardProps {
  produto: Produto;
  index: number; // Para animar em escada (stagger)
}

const ProductCard: React.FC<ProductCardProps> = ({ produto, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Efeito cascata
    >
      <Tilt options={defaultTiltOptions}>
        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,230,118,0.1)]">
          <Link href={`/produtos/${produto.id}`} className="flex h-full flex-col">
            
            {/* Imagem com Glow de fundo */}
            <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-b from-transparent to-black/20 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <Image
                src={produto.urlImagemPrincipal}
                alt={produto.nome}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
              />
            </div>

            {/* Conteúdo */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[#00E676] transition-colors">
                {produto.nome}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
                {produto.descricaoCurta}
              </p>
              
              <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-lg font-bold text-white">
                  R$ {produto.preco.toFixed(2).replace('.', ',')}
                </span>
                <span className="rounded-full bg-[#0052FF] px-4 py-2 text-xs font-bold text-white transition-all hover:bg-[#00E676] hover:text-black hover:shadow-[0_0_15px_rgba(0,230,118,0.4)]">
                  Ver Detalhes
                </span>
              </div>
            </div>
          </Link>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProductCard;