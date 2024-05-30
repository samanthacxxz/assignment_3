import ExpenseDisplay from './components/ExpenseDisplay/ExpenseDisplay'

import styles from './App.module.css'
import { useState } from 'react'


function App() {
  
  return (
    <>
      <ExpenseDisplay className={styles.expense_display}/>
    </>
  )
}

export default App
