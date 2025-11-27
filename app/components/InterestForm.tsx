'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './InterestForm.module.css';
import { FaArrowRight, FaLock } from 'react-icons/fa';

interface InterestFormProps {
  produtoId: number;
  nomeProduto: string;
}

export default function InterestForm({ produtoId, nomeProduto }: InterestFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Captura os dados do formulário
    const clientData = {
      nome: formData.get('Nome') as string,
      email: formData.get('email') as string,
      telefone: formData.get('Telefone') as string,
      cpf: formData.get('cpf') as string,
      produtoId: produtoId,
      nomeProduto: nomeProduto
    };

    try {
      // Simula um pequeno delay para UX (experiência do usuário)
      await new Promise(resolve => setTimeout(resolve, 800));

      if (typeof window !== 'undefined') {
        // Salva os dados localmente para serem usados na próxima tela (/pagamento)
        localStorage.setItem('chroma_cliente', JSON.stringify(clientData));
      }
      
      setStatus('success');
      
      // Redireciona para a tela de pagamento
      setTimeout(() => {
          router.push('/pagamento');
      }, 500);

    } catch (error) {
      console.error('Erro ao processar formulário:', error);
      // Mesmo com erro, tenta redirecionar para garantir que o cliente não fique preso
      router.push('/pagamento');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className="space-y-4">
        <div className={styles.field}>
          <input 
            name="Nome" 
            type="text" 
            placeholder="Seu Nome Completo" 
            required 
            className={styles.input} 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={styles.field}>
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Seu Melhor E-mail" 
                    required 
                    className={styles.input} 
                />
            </div>
            <div className={styles.field}>
                <input 
                    name="cpf" 
                    type="text" 
                    placeholder="CPF (Apenas números)" 
                    required 
                    className={styles.input} 
                />
            </div>
        </div>

        <div className={styles.field}>
          <input 
            name="Telefone" 
            type="tel" 
            placeholder="WhatsApp com DDD" 
            required 
            className={styles.input} 
          />
        </div>
      </div>
      
      <button 
        type="submit" 
        disabled={status === 'loading' || status === 'success'} 
        className={`${styles.button} flex items-center justify-center gap-3 mt-6 group`}
      >
        {status === 'loading' ? 'Processando...' : 
         status === 'success' ? 'Redirecionando...' : 
         <>
           QUERO GARANTIR MINHA VAGA <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
         </>}
      </button>
      
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
        <FaLock className="text-green-500" /> Seus dados estão seguros.
      </div>
    </form>
  );
}