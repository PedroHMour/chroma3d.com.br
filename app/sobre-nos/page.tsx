import React from 'react';
import styles from './SobreNos.module.css';
import TeamCard from '@/app/components/TeamCard';
import { FaBullseye, FaEye } from 'react-icons/fa';
import { equipe } from '@/data/content'; // <-- Importa dados locais

const AboutUsPage = () => {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Inovação e Paixão pela <span className={styles.highlight}>Tecnologia 3D</span>
          </h1>
          <p className={styles.subtitle}>
            Somos a Chromatech, uma empresa nascida em Manaus com a missão de revolucionar o acesso à impressão 3D de alta performance na Amazônia e no mundo.
          </p>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className={styles.missionSection}>
        <div className={styles.missionGrid}>
          <div className={styles.missionCard}>
            <FaBullseye className={styles.missionIcon} />
            <h2 className={styles.missionTitle}>Nossa Missão</h2>
            <p>Desenvolver e fornecer soluções inovadoras em impressão 3D que melhorem a qualidade de vida das pessoas.</p>
          </div>
          <div className={styles.missionCard}>
            <FaEye className={styles.missionIcon} />
            <h2 className={styles.missionTitle}>Nossa Visão</h2>
            <p>Ser referência global em tecnologia de impressão 3D, reconhecida pela inovação e qualidade.</p>
          </div>
        </div>
      </section>
      
      {/* Valores */}
      <section className={styles.valuesSection}>
         <h2 className={styles.sectionTitle}>Nossos Valores</h2>
         <div className={styles.valuesGrid}>
            <div className={styles.valueItem}><strong>Inovação:</strong> Buscar constantemente novas soluções.</div>
            <div className={styles.valueItem}><strong>Sustentabilidade:</strong> Responsabilidade ambiental e social.</div>
            <div className={styles.valueItem}><strong>Qualidade:</strong> Garantir excelência em todos os produtos.</div>
            <div className={styles.valueItem}><strong>Colaboração:</strong> Parceria com clientes e comunidades.</div>
            <div className={styles.valueItem}><strong>Responsabilidade:</strong> Integridade e ética nas decisões.</div>
         </div>
      </section>

      {/* Equipa */}
      <section className={styles.teamSection}>
        <div className={styles.teamContent}>
          <h2 className={styles.sectionTitle}>Liderança Visionária</h2>
          <p className={styles.sectionSubtitle}>Conheça as mentes por trás da inovação na Chromatech.</p>
          <div className={styles.teamGrid}>
            {equipe.map((member) => (
              <TeamCard 
                key={member.id} 
                name={member.name} 
                title={member.title} 
                imageUrl={member.imageUrl} 
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;