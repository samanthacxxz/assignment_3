import { useState } from 'react'

import ExpenseTrackerForm from './components/ExpenseTrackerForm/ExpenseTrackerForm'

import styles from './App.module.css'


function App() {

  return (
    <>
      <div className={styles.main}>
        <ExpenseTrackerForm />
      </div>
    </>
  )
}

export default App
