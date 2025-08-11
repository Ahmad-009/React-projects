import React from 'react';
import styles from './Card.module.css';

function Card({ title, value, Icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        {Icon && <Icon size={32} />}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}

export default Card;
