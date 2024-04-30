import { useState } from 'react'
import styles from './ExpenseTrackerForm.module.css'

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
    });

    // validation of the form

    const validateForm = () => {
        let isValid = true;
        const clonedErrorObj = {...errors};
         // if the input has no content - show error message
        if (!expenseData.expenseTitle.trim()) {
            clonedErrorObj.expenseTitleError = "Expense Title is required!";
            isValid = false;
        } else if (expenseData.expenseTitle.trim().length > 20) {
            clonedErrorObj.expenseTitleError = "Maximum character limit reached"
            isValid = false;
        }
        if (!expenseData.expenseAmount.trim()) {
            clonedErrorObj.expenseAmountError = "Expense Amount is required!";
            isValid = false;
        } else if (expenseData.expenseAmount.trim() > 5) {
            clonedErrorObj.expenseAmountError = "Amount is conceringly too high"
        }
        if (!expenseData.expenseDate) {
            clonedErrorObj.expenseDateError = "Please choose the date!"
            isValid = false;
        }
        // checking if the expense amount input has only numbers
        const amountRegex = /^\d+$/;
        if (!amountRegex.test(expenseData.expenseAmount.trim())) {
            clonedErrorObj.expenseAmountError = "Write the amount in numbers"
            isValid = false;
        }
   

    }


  return (
    <>
        <form>
            <div className='input_group'>
                <label htmlFor="expenseTitle">
                    Expense Title<sup>*</sup>
                </label>
                <input 
                type="text"
                name='expenseTitle'
                className='input_element'
                />
                <p>Expense Title Error</p>
            </div>

            <div className='input_group'>
                <label htmlFor="expenseAmount">
                    Expense Amount<sup>*</sup>
                </label>
                <input 
                type="text"
                name='expenseAmount'
                className='input_element'
                />
                <p>Expense Amount Error</p>
            </div>
            <div className='input_group'>
                <label htmlFor="expenseDate">
                    Expense Date<sup>*</sup>
                </label>
                <input 
                type="date"
                name='expenseDate'
                className='input_element'
                />
                <p>Expense Date Error</p>
            </div>
            <div className='input_group'>
                <label htmlFor="expenseCategory">
                    Expense Category<sup>*</sup>
                </label>
                <select name="expenseCategory">
                    <option value="">Housing</option>
                    <option value="">Grocery</option>
                    <option value="">Transportation</option>
                    <option value="">Clothes</option>
                    <option value="">Other</option>
                </select>
            </div>
        </form>
    </>
  )
}

export default ExpenseTrackerForm