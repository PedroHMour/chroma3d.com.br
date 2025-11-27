import React from 'react';
import Image from 'next/image';
import styles from './TeamCard.module.css';

interface TeamCardProps {
  name: string;
  title: string;
  imageUrl: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, title, imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={`Foto de ${name}`}
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default TeamCard;