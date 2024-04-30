import React, { useState } from 'react'
import { useState } from 'react'

const ExpenseTrackerForm = () => {
    // default expense data
    const [expenseData, setExpenseData] = useState({
        expenseTitle: "",
        expenseAmount: "",
        expenseDate: "",
        expenseCategory: "",
    });

    // default state of errors messagges for each input
    const [error, setError] = useState({
        expenseTitleError: "",
        expsenseAmountError: "",
        expenseDateError: "",
    })

  return (
    <div>ExpenseTrackerForm</div>
  )
}

export default ExpenseTrackerForm