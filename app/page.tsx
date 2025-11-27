'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion'; // 1. Importamos 'Variants'
import ParallaxShowcase from './components/ParallaxShowcase';
import MissionSection from './components/MissionSection';
import InterestForm from './components/InterestForm';
import { FaCheckCircle, FaInfoCircle, FaGift, FaRegClock } from 'react-icons/fa';

// 2. Aplicamos o tipo ': Variants' aqui. Isso resolve o erro de build.
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden flex flex-col">
      
      {/* ==================== HERO (DEEP TECH) ==================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-28 pb-20 text-center">
        
        {/* Glow Azul Profundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          
          {/* Tag Clean - 1º Lote Esgotado */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp} 
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
              </span>
              <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                1º Lote: Esgotado
              </span>
            </div>
          </motion.div>

          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInUp} 
            className="mb-6 text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-none"
          >
            Atenção <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#00E676]">
              Região Norte.
            </span>
          </motion.h1>

          {/* Comunicado - Estilo Cartão Tecnológico */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="mb-10 max-w-3xl mx-auto border border-white/10 rounded-2xl p-8 bg-[#111]/50 backdrop-blur-sm shadow-2xl"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <FaInfoCircle className="text-[#0052FF] text-3xl opacity-90" />
              
              <div>
                <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">Comunicado de Entrega</h3>
                <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Devido à alta demanda, o primeiro lote foi totalmente vendido. Quem entrar agora na lista de espera receberá a Tupana A1 <strong>em até 45 dias (dependendo da região)</strong>. 
                  <br /><br />
                  Garanta sua posição no <strong>2º Lote</strong> agora mesmo.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <a 
              href="#oferta-especial" 
              className="inline-flex h-16 px-12 rounded-full bg-gradient-to-r from-[#0052FF] to-[#0040C9] text-white font-bold text-xl items-center justify-center transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,82,255,0.4)]"
            >
              Garantir Vaga no 2º Lote
            </a>
            <p className="mt-4 text-sm text-gray-500">Poucas vagas restantes.</p>
          </motion.div>
        </div>
      </section>

      {/* ==================== PARALLAX (PRODUTO) ==================== */}
      <ParallaxShowcase />

      {/* ==================== OFERTA (DEEP DARK) ==================== */}
      <section id="oferta-especial" className="py-24 px-6 relative bg-[#080808] border-t border-white/5">
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Texto da Oferta */}
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-[#00E676]/10 text-[#00E676] font-bold text-sm mb-6 border border-[#00E676]/20">
              CONDIÇÃO EXCLUSIVA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Garanta sua Tupana A1 com <span className="text-[#00E676]">R$ 600 de Bônus.</span>
            </h2>
            
            <div className="space-y-8 mb-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/5 flex items-center justify-center text-[#0052FF] flex-shrink-0 font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Sinal de Entrada Facilitado</h4>
                  <p className="text-gray-400 mt-1">Garanta a reserva da sua máquina no 2º lote com uma entrada de apenas <strong>R$ 990,00</strong>.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/5 flex items-center justify-center text-[#00E676] flex-shrink-0 font-bold text-xl">
                  $
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Cashback em Produtos</h4>
                  <p className="text-gray-400 mt-1">O valor da sua entrada volta para você! Receba um cupom de <strong>R$ 600,00</strong> para gastar em filamentos.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/5 flex items-center justify-center text-purple-500 flex-shrink-0 font-bold text-xl">
                  🕒
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Restante Parcelado</h4>
                  <p className="text-gray-400 mt-1">O saldo restante pode ser parcelado, facilitando o seu fluxo de caixa.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário (Dark Card) */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-900/50 to-green-900/50 rounded-3xl blur-xl opacity-30" />
            
            <div className="relative bg-[#111] rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white">Lista de Espera - 2º Lote</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Preencha para garantir a condição de Cashback.
                </p>
              </div>
              
              <InterestForm 
                produtoId={1} 
                nomeProduto="Tupana A1 - 2º Lote (Oferta R$990+Cashback)" 
              />
              
              <p className="mt-6 text-center text-xs text-gray-500">
                * Ao preencher, você receberá o link para pagamento da entrada.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== MISSÃO ==================== */}
      <div className="py-10">
        <MissionSection />
      </div>

    </div>
  );
}