import React from 'react';
import Navbar from '../components/navBar';
import Card from '../components/Card';
import styles from './Homepage.module.css';
import { CiWallet } from "react-icons/ci";
import { GiExpense } from "react-icons/gi";
import { MdOutlineSavings } from "react-icons/md";


const HomePage = () => {
  return (
    <div>
      <h2 className={styles.header}>Financial Board</h2>
      <div>
        <Card title="Total Balance" value="20000$" Icon={CiWallet} />
        <Card title="Expenses" value="10000$" Icon={GiExpense}/>
        <Card title="Savings" value="10000$" Icon={MdOutlineSavings}/>
      </div>
    </div>
  );
};

export default HomePage;
