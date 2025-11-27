'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaHandshake } from 'react-icons/fa';

const MissionSection: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-black/50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Nossa Essência
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
        
        {/* Card Missão (Vem da Esquerda) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
          viewport={{ once: true, margin: "-100px" }} // Anima quando entra na tela
          className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <FaRocket size={120} />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 mb-6">
              <FaRocket size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Missão</h3>
            <p className="text-gray-400 leading-relaxed">
              Democratizar a indústria 4.0 na Amazônia, fornecendo ferramentas que transformam criatividade em produtos tangíveis, reduzindo a barreira logística e impulsionando a inovação local.
            </p>
          </div>
        </motion.div>

        {/* Card Visão/Valores (Vem da Direita) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="p-8 rounded-3xl border border-white/10 bg-gradient-to-bl from-gray-900 to-black relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <FaHandshake size={120} />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-full bg-[#00E676]/20 flex items-center justify-center text-[#00E676] mb-6">
              <FaHandshake size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Valores</h3>
            <p className="text-gray-400 leading-relaxed">
              Acreditamos na tecnologia como ponte para o desenvolvimento sustentável. Valorizamos a precisão técnica, a transparência com o cliente e o compromisso com o ecossistema industrial de Manaus.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MissionSection;