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
      <h2>Expense Items List</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {/* Display transaction details */}
            <div>Title: {transaction.expenseTitle}</div>
            <div>Amount: {transaction.expenseAmount}</div>
            <div>Date: {transaction.expenseDate}</div>
            <div>Category: {transaction.expenseCategory}</div>
            {/* Add a button to remove the transaction */}
            <button onClick={() => removeTransaction(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseItemsList