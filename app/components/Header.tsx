'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Produtos', href: '/#oferta-especial' },
    { label: 'Sobre Nós', href: '/sobre-nos' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && !isScrolled) setIsScrolled(true);
      if (window.scrollY <= 20 && isScrolled) setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b ${
          isScrolled 
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-white/10 py-2 shadow-lg' 
            : 'bg-transparent border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="relative z-50 group">
            {/* AUMENTO SIGNIFICATIVO AQUI 👇 
                Mobile: 200px largura / 60px altura
                Desktop: 280px largura / 80px altura
            */}
            <div className="relative w-[200px] h-[60px] md:w-[280px] md:h-[80px]">
              <Image
                src="/images/logo.png"
                alt="Chromatech"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 200px, 280px"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.label}
              </Link>
            ))}
            
            <a 
              href="/#garantir-vaga"
              className="px-6 py-3 rounded-full bg-[#0052FF] text-sm font-semibold text-white hover:bg-[#003ECC] hover:shadow-[0_0_15px_rgba(0,82,255,0.4)] transition-all duration-300"
            >
              Pré-Venda
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-2xl z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col justify-center items-center space-y-8"
          >
            <Link 
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-[#0052FF]"
            >
                Home
            </Link>
            {navItems.map((item) => (
              <Link 
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-[#0052FF] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;