import { useState } from "react";
import InputTransaction from "../components/InputTransaction";
import { FaArrowTrendDown, FaArrowTrendUp, FaArrowLeft, FaCheck } from "react-icons/fa6";
import {
  MdOutlineFoodBank,
  MdLocalMovies,
  MdOutlineHealthAndSafety,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { FaBus, FaShoppingBag, FaHome, FaLaptop } from "react-icons/fa";
import styles from './AddTransactions.module.css';
import CategoryCard from '../components/ExpenseCategory';

const TransactionPage = () => {
  const [selectedType, setSelectedType] = useState("Expense");
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const expenseCategories = [
    { title: "Food & Dining", Icon: MdOutlineFoodBank },
    { title: "Transportation", Icon: FaBus },
    { title: "Shopping", Icon: FaShoppingBag },
    { title: "Housing", Icon: FaHome },
    { title: "Entertainment", Icon: MdLocalMovies },
    { title: "Healthcare", Icon: MdOutlineHealthAndSafety },
    { title: "Bills & Utilities", Icon: MdOutlineMiscellaneousServices },
    { title: "Technology", Icon: FaLaptop },
    { title: "Other", Icon: MdOutlineMiscellaneousServices },
  ];

  const incomeCategories = [
    { title: "Salary", Icon: FaArrowTrendUp },
    { title: "Freelance", Icon: FaLaptop },
    { title: "Gift", Icon: MdLocalMovies },
    { title: "Investment", Icon: FaArrowTrendUp },
    { title: "Other Income", Icon: MdOutlineMiscellaneousServices },
  ];

  const categoriesToShow = selectedType === "Expense" ? expenseCategories : incomeCategories;

  return (
    <div className={styles.container}>
      <div className={styles.typeRow}>
        <h2 className={styles.title}>Transaction Type</h2>

        <InputTransaction
          title="Expense"
          Icon={FaArrowTrendDown}
          active={selectedType === "Expense"}
          onClick={() => setSelectedType("Expense")}
        />
        <InputTransaction
          title="Income"
          Icon={FaArrowTrendUp}
          active={selectedType === "Income"}
          onClick={() => setSelectedType("Income")}
        />

        <h2 className={styles.title}>Category</h2>
        <div className={styles.categoryGrid}>
          {categoriesToShow.map((cat, index) => (
            <CategoryCard key={index} title={cat.title} Icon={cat.Icon} />
          ))}
        </div>

        <h2 className={styles.title}>Amount</h2>
        <input
          className={styles.inputField}
          type="number"
          value={amount}
          placeholder="0"
          onChange={handleAmountChange}
        />

        <h2 className={styles.title}>Date</h2>
        <input
          className={styles.inputField}
          type="date"
          value={date}
          onChange={handleDateChange}
        />

        <h2 className={styles.title}>Notes (Optional)</h2>
        <textarea
          className={styles.inputContainer}
          placeholder="Add any notes here..."
          value={notes}
          onChange={handleNotesChange}
          rows={4}
        />

        <div className={styles.buttonRow}>
          <button className={styles.cancelButton}>
            <FaArrowLeft style={{ marginRight: '6px' }} />
            Cancel
          </button>
          <button className={styles.addButton}>
            <FaCheck style={{ marginRight: '6px' }} />
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
