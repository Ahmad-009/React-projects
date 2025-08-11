import styles from './InputTransaction.module.css';

function InputTransaction({ title, Icon, active, onClick }) {
  return (
    <div
      className={`${styles.container} ${active ? styles.active : styles.inactive}`}
      onClick={onClick}
    >
      <h2 className={styles.title}>
        <Icon className={styles.icon} />
        {title}
      </h2>
    </div>
  );
}

export default InputTransaction;
