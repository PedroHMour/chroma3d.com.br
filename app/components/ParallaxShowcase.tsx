'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxShowcase: React.FC = () => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yPrinter = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 bg-[#0a0a0a]">
      
      {/* Luz de fundo sutil */}
      <div className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-blue-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Texto */}
        <motion.div style={{ y: yText, opacity }} className="z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Poder Industrial. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#0052FF]">
              Cores Reais.
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            A Tupana A1 redefine o que é possível fazer em impressão 3D. Com chassi reforçado e tecnologia exclusiva, ela não é apenas uma impressora, é uma fábrica na sua mesa.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-[#0052FF]">300mm</h3>
              <p className="text-sm text-gray-400 font-medium">Volume Cúbico</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-[#00E676]">Multicolorida</h3>
              <p className="text-sm text-gray-400 font-medium">Mistura Simultânea</p>
            </div>
          </div>
        </motion.div>

        {/* Imagem */}
        <motion.div style={{ y: yPrinter }} className="relative w-full flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl transform scale-75 pointer-events-none" />
            <Image
              src="/images/Tupana-A1.png" 
              alt="Impressora Tupana A1"
              width={600}
              height={600}
              className="object-contain z-10 relative drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ParallaxShowcase;