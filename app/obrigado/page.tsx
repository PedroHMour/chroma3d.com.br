'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaCheckCircle, FaCopy, FaWhatsapp } from 'react-icons/fa';
import { QRCodeCanvas } from 'qrcode.react';

// Interface para os dados salvos
interface PaymentData {
  type: 'pix' | 'card';
  payload?: string; // Código Pix
}

export default function ObrigadoPage() {
  const router = useRouter();
  const [data, setData] = useState<PaymentData | null>(null);

  useEffect(() => {
    // 1. Recupera os dados do pagamento que salvamos no formulário
    const savedData = localStorage.getItem('chroma_payment_data');
    
    if (!savedData) {
      // Se não tiver dados, manda de volta pra home (evita acesso direto)
      router.push('/'); 
      return;
    }
    
    setData(JSON.parse(savedData));
  }, [router]);

  if (!data) return <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">Carregando...</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6">
      
      {/* Fundo Decorativo */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0 opacity-20" />

      <div className="relative z-10 max-w-lg w-full bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl text-center">
        
        <div className="mb-6 flex justify-center">
          <FaCheckCircle className="text-[#00E676] text-6xl" />
        </div>

        <h1 className="text-3xl font-bold mb-2">
          {data.type === 'pix' ? 'Falta pouco!' : 'Pagamento Confirmado!'}
        </h1>
        
        <p className="text-gray-400 mb-8 text-lg">
          {data.type === 'pix' 
            ? 'Escaneie o QR Code abaixo para finalizar sua reserva.' 
            : 'Parabéns! Sua vaga no 2º lote da Tupana A1 está garantida.'}
        </p>

        {/* --- SE FOR PIX --- */}
        {data.type === 'pix' && data.payload && (
          <div className="bg-white p-6 rounded-xl mb-6 shadow-lg">
            {/* QR Code Gerado */}
            <div className="flex justify-center mb-6">
              <QRCodeCanvas 
                value={data.payload} 
                size={220} 
                level={"H"}
              />
            </div>
            
            <p className="text-gray-500 text-xs font-bold uppercase mb-2 tracking-wider">Pix Copia e Cola</p>
            
            {/* Código Texto */}
            <div className="bg-gray-100 p-4 rounded-lg text-gray-600 text-xs font-mono break-all mb-4 border border-gray-200 leading-relaxed">
              {data.payload}
            </div>

            <button 
              onClick={() => { 
                navigator.clipboard.writeText(data.payload!); 
                alert('Código Pix copiado!'); 
              }}
              className="w-full bg-[#00E676] hover:bg-green-600 text-white font-bold py-4 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
            >
              <FaCopy /> Copiar Código Pix
            </button>
            
            <div className="mt-6 text-xs text-red-500 font-medium bg-red-50 p-3 rounded border border-red-100">
              ⚠️ Para garantir sua prioridade, realize o pagamento em até 2 horas.
            </div>
          </div>
        )}

        {/* --- RODAPÉ DO CARD --- */}
        <div className="border-t border-white/10 pt-6 mt-6">
          <p className="text-gray-400 text-sm mb-4">Precisa de ajuda?</p>
          <a 
            href="https://wa.me/5592981600014" 
            target="_blank"
            className="inline-flex items-center gap-2 text-[#0052FF] hover:text-white transition-colors font-bold text-lg"
          >
            <FaWhatsapp size={24} /> Falar no WhatsApp
          </a>
        </div>

        <Link href="/" className="block mt-8 text-sm text-gray-500 underline hover:text-gray-300">
          Voltar para o início
        </Link>

      </div>
    </div>
  );
}