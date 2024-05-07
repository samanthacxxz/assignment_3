import { useState } from 'react'
import ExpenseDisplay from '../ExpenseDisplay/ExpenseDisplay'
import ExpenseTrackerForm from '../ExpenseTrackerForm/ExpenseTrackerForm'

import styles from './ExpenseItemsList.module.css'

const ExpenseItemsList = ({ transactions, setTransactionData }) => {
   // Function to remove a transaction by its index
   const removeTransaction = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1); // Remove the transaction at the specified index
    setTransactionData(updatedTransactions); // Update the transaction data array
  };
  return (
    <div>
      <h2 className={styles.list_title}>Expense Items List</h2>
      <ul className={styles.list_container}>
        <div className={styles.list_header}>
          <span>Title</span>
          <span>Amount</span>
          <span>Date</span>
          <span>Category</span>
          <span>Delete</span>
        </div>
        {transactions.map((transactions, index) => (
          <li key={index} className={styles.items}>
            {/* Display transaction details */}
            <span>{transactions.title}</span>
            <span>{transactions.amount}kr</span>
            <span>{transactions.date}</span>
            <span>{transactions.category}</span>
            {/* Add a button to remove the transaction */}
            <button onClick={() => removeTransaction(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseItemsList