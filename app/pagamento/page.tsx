'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaCreditCard, FaQrcode, FaArrowLeft, FaCopy, FaCheckCircle, FaLock, FaShieldAlt } from 'react-icons/fa';
import { QRCodeCanvas } from 'qrcode.react';

interface ClientData {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  produtoId: number;
  nomeProduto: string;
}

interface PaymentPayload {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  produto_id: number;
  produto_nome: string;
  card_number?: string;
  card_name?: string;
  card_expiry?: string;
  card_cvv?: string;
  card_type?: string;
}

interface ApiResponse {
  status?: string;
  message?: string;
  copia_cola?: string;
  imagem_qr?: string;
  sucesso?: boolean;
}

export default function PagamentoPage() {
  const router = useRouter();
  const [cliente, setCliente] = useState<ClientData | null>(null);
  const [metodo, setMetodo] = useState<'pix' | 'card' | null>(null);
  const [status, setStatus] = useState<'escolha' | 'processando' | 'sucesso_pix' | 'sucesso_card' | 'erro'>('escolha');
  const [pixCode, setPixCode] = useState('');
  const [erroMsg, setErroMsg] = useState('');

  const [cardData, setCardData] = useState({ number: '', name: '', expiry: '', cvv: '', type: 'credit' });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('chroma_cliente');
      if (!saved) {
        router.push('/');
        return;
      }
      setCliente(JSON.parse(saved));
    }
  }, [router]);

  const handlePagar = async () => {
    if (!cliente) return;

    setStatus('processando');
    setErroMsg('');

    const payload: PaymentPayload = {
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone,
      cpf: cliente.cpf,
      produto_id: cliente.produtoId,
      produto_nome: cliente.nomeProduto,
    };

    if (metodo === 'card') {
      // Lógica de cartão se necessário
      setErroMsg("Pagamento em cartão indisponível no momento.");
      setStatus('erro');
      return;
    }

    try {
      // ATENÇÃO: Pega a URL da variável de ambiente da Vercel
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
      
      if (!apiUrl) throw new Error("Erro de Configuração: API URL não definida.");

      const response = await fetch(`${apiUrl}/api/pix`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const res: ApiResponse = await response.json();

      if (!response.ok || res.status === 'error') {
        throw new Error(res.message || 'Erro no processamento.');
      }

      if (metodo === 'pix') {
        if (res.copia_cola) {
          setPixCode(res.copia_cola);
          // Salva para a página de obrigado
          localStorage.setItem('chroma_payment_data', JSON.stringify({ type: 'pix', payload: res.copia_cola }));
          setStatus('sucesso_pix');
          // Opcional: Redirecionar para /obrigado
          // router.push('/obrigado');
        } else {
          throw new Error('Código Pix não gerado.');
        }
      }

    } catch (error: any) {
      setErroMsg(error.message || 'Erro de conexão.');
      setStatus('erro');
    }
  };

  if (!cliente) return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">Carregando...</div>;

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 py-12 px-4 flex justify-center items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505] z-0" />

      <div className="max-w-lg w-full bg-[#0F0F0F] border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10 backdrop-blur-sm">

        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          {!status.startsWith('sucesso') && (
            <button onClick={() => router.back()} className="text-gray-500 hover:text-white transition-colors">
              <FaArrowLeft />
            </button>
          )}
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500 uppercase tracking-widest">Checkout Seguro</span>
            <div className="flex items-center gap-1 text-green-500 text-xs"><FaLock size={10} /> TLS 256-bit</div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 text-white">Finalizar Reserva</h1>
        <p className="text-center text-gray-400 text-sm mb-8">
          Confirmando vaga para: <span className="text-white font-medium">{cliente.nome}</span>
          <br />
          Valor da Entrada: <span className="text-[#00E676] font-bold text-lg">R$ 990,00</span>
        </p>

        {status === 'escolha' && !metodo && (
          <div className="space-y-4">
            <p className="text-sm text-gray-400 mb-4">Escolha como deseja pagar:</p>
            <button onClick={() => setMetodo('pix')} className="w-full bg-[#1A1A1A] hover:bg-[#222] border border-white/10 hover:border-[#00E676]/50 p-5 rounded-xl flex items-center gap-4 transition-all group relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#00E676] scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              <div className="w-12 h-12 bg-[#00E676]/10 text-[#00E676] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"><FaQrcode size={20} /></div>
              <div className="text-left">
                <p className="font-bold text-white text-lg">Pix Imediato</p>
                <p className="text-xs text-gray-500">Aprovação instantânea + QR Code</p>
              </div>
            </button>
          </div>
        )}

        {status === 'escolha' && metodo === 'pix' && (
          <div className="text-center">
            <div className="w-20 h-20 bg-[#00E676]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaQrcode className="text-[#00E676] text-3xl" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Pagar com Pix</h3>
            <p className="text-gray-400 mb-8 text-sm px-4">O QR Code será gerado instantaneamente.</p>
            <button onClick={handlePagar} className="w-full bg-[#00E676] hover:bg-[#00C853] text-black font-bold py-4 rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,230,118,0.4)]">GERAR CÓDIGO PIX</button>
            <button onClick={() => setMetodo(null)} className="w-full text-gray-500 text-xs mt-4 hover:text-white transition-colors">Trocar Método</button>
          </div>
        )}

        {status === 'processando' && (
          <div className="text-center py-16">
            <div className="w-16 h-16 border-4 border-[#0052FF] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <h3 className="text-white font-bold text-lg">Processando...</h3>
            <p className="text-gray-500 text-sm mt-2">Conectando ao gateway seguro...</p>
          </div>
        )}

        {status === 'sucesso_pix' && (
          <div className="text-center animate-fade-in">
            <div className="bg-white p-4 rounded-2xl inline-block mb-6 shadow-lg">
              <QRCodeCanvas value={pixCode} size={200} level={"H"} />
            </div>
            <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/10 mb-6">
              <p className="text-[10px] font-bold text-gray-500 uppercase mb-2 text-left">Pix Copia e Cola</p>
              <div className="text-xs text-gray-300 font-mono break-all text-left line-clamp-2">{pixCode}</div>
            </div>
            <button onClick={() => { navigator.clipboard.writeText(pixCode); alert("Copiado!") }} className="w-full bg-[#00E676] text-black font-bold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#00C853] mb-4">
              <FaCopy /> Copiar Código
            </button>
            <div className="text-xs text-amber-400">⚠️ O código expira em 24 horas</div>
            <Link href="/obrigado" className="block mt-4 text-blue-500 text-sm hover:underline">Já paguei, ver confirmação</Link>
          </div>
        )}

        {status === 'erro' && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-500 text-3xl">!</span>
            </div>
            <h3 className="text-red-500 font-bold text-xl mb-2">Erro no Pagamento</h3>
            <div className="bg-red-500/5 border border-red-500/20 p-4 rounded-xl text-xs text-red-300 font-mono text-left mb-6 break-words">
              {erroMsg}
            </div>
            <button onClick={() => setStatus('escolha')} className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-xl transition-colors">
              Tentar Novamente
            </button>
          </div>
        )}
      </div>
      <div className="absolute bottom-4 text-center w-full z-10 opacity-50">
        <p className="text-[10px] text-gray-600 flex items-center justify-center gap-1"><FaShieldAlt /> Pagamento processado via Canvi</p>
      </div>
    </div>
  );
}