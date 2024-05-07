import React from 'react'
import { useState, useEffect } from 'react'
import ExpenseItemsList from '../ExpenseItemsList/ExpenseItemsList'
import ExpenseTrackerForm from '../ExpenseTrackerForm/ExpenseTrackerForm'


import styles from '../ExpenseDisplay/ExpenseDisplay.module.css'


const ExpenseDisplay = () => {
  // transactionData as an array with different objects
  const [transactionData, setTransactionData] = useState([]);
  

  // Function to update transactionData
  const updateTransactionData = (data) => {
    setTransactionData([...transactionData, data]);
  }

  useEffect(() => {
    console.log(transactionData); // Log the updated transaction array
  }, [transactionData]);

  return (
    <>
      <header>
        <h2 className={styles.title}>Expense Tracker App</h2>
      </header>
      <section className={styles.display_container}>
        <div className={styles.form_container}>
          <ExpenseTrackerForm updateTransactionData={updateTransactionData}/>
        </div>

        <div className={styles.expenses_container}>
          <ExpenseItemsList 
            transactions={transactionData}
            setTransactionData={setTransactionData} 
            className={styles.items_list}
          />
        </div> 
      </section>
    </>
  )
}

export default ExpenseDisplay