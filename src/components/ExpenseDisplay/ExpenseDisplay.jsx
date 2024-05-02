import React from 'react'
import { useState } from 'react'
import ExpenseItemsList from '../ExpenseItemsList/ExpenseItemsList'
import ExpenseTrackerForm from '../ExpenseTrackerForm/ExpenseTrackerForm'
import utility from '../../utility'


import styles from '../ExpenseDisplay/ExpenseDisplay.module.css'


const ExpenseDisplay = () => {
  const transactionsData = [
    { id: utility(), title: 'cookies', amount: 20, category: 'grocery'},
    { id: utility(), title: 'pepsi', amount: 20, category: 'grocery'}
  ]

  const [transactions, setTransactions] = useState(transactionsData)
  return (
    <>
      <h2 className={styles.title}>Expense Tracker App</h2>
      <section className={styles.display_container}>
        <div className={styles.form_container}>
          <ExpenseTrackerForm />
        </div>

        <div className={styles.expenses_listed}>
          <ExpenseItemsList transcations={transactions}/>
        </div>
      </section>



    </>
  )
}

export default ExpenseDisplay