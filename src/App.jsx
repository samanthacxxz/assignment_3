import ExpenseTrackerForm from './components/ExpenseTrackerForm/ExpenseTrackerForm'

import styles from './App.module.css'
import ExpenseDisplay from './components/ExpenseDisplay/ExpenseDisplay'


function App() {

  return (
    <>
      <div className={styles.main}>
        <ExpenseTrackerForm />
        <ExpenseDisplay />
      </div>
    </>
  )
}

export default App
