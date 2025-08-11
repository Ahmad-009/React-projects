import styles from './ExpenseCategory.module.css';

function CategoryCard({ title, Icon, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <Icon className={styles.icon} />
      <span className={styles.title}>{title}</span>
    </div>
  );
}

export default CategoryCard;
