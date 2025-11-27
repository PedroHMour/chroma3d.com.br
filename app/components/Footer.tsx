import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // CONFIGURAÇÃO DOS LINKS SOCIAIS
  const socialLinks = [
    
    { icon: FaInstagram, url: "https://instagram.com/chromatech_3d", label: "Instagram" },
    
  ];

  return (
    <footer className="relative border-t border-white/5 bg-[#050505] pt-16 pb-8 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="relative w-[260px] h-[80px]">
              <Image
                src="/images/logo.png"
                alt="Chromatech"
                fill
                className="object-contain opacity-90"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Revolucionando a indústria 4.0 na Amazônia com tecnologia de impressão 3D de ponta.
            </p>
            
            {/* Ícones Sociais Corrigidos */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Explorar</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Início</Link></li>
              <li><Link href="/#oferta-especial" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Produtos</Link></li>
              <li><Link href="/sobre-nos" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">A Chromatech</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Institucional</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Termos de Uso</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contato</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <p>Manaus, AM - Brasil</p>
              <p className="text-white font-medium">contato@chroma3d.com.br</p>
              <a 
                href="https://wa.me/5592981600014" // Coloca o número real aqui
                target="_blank"
                className="inline-flex items-center gap-2 text-[#00E676] hover:text-white transition-colors font-medium"
              >
                <FaWhatsapp size={18} /> Suporte Comercial
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">&copy; {currentYear} Chromatech.</p>
          <p className="text-gray-500 text-xs">Tecnologia desenvolvida na Amazônia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;