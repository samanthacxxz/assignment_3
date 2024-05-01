import ExpenseTrackerForm from './components/ExpenseTrackerForm/ExpenseTrackerForm'
import ExpenseDisplay from './components/ExpenseDisplay/ExpenseDisplay'

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
