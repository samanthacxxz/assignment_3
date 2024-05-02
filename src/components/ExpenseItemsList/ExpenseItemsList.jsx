import { useState } from 'react'
import ExpenseDisplay from '../ExpenseDisplay/ExpenseDisplay'

import styles from './ExpenseItemsList.module.css'

const ExpenseItemsList = ({ transcations }) => {
  return (
    <>
    <section className={styles.expenseList}>
      <h3>Expense Overview</h3>
          <div className={styles.itemsList}>
              <span className={styles.itemRow}>Title: </span>
              <span className={styles.itemRow}>Amount: </span>
              <span className={styles.itemRow}>Date: </span>
              <span className={styles.itemRow}>Category: </span>
          </div>
          <ul>
            {
            transcations.map((data)=> <li key={data.id}>{data.title} ${data.amount} {data.category}</li>)
            }

          </ul>
    </section>

    </>
  )
}

export default ExpenseItemsList