import { useState } from 'react'
import styles from './ExpenseTrackerForm.module.css'


const ExpenseTrackerForm = ({ updateTransactionData }) => {

    // default expense data input from user - empty
    const [expenseInput, setExpenseInput] = useState({
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
        // cloning the error, adding error message depending on error type
        const clonedErrorObj = {...error};
         // if the input has no content - show error message
        if (!expenseInput.expenseTitle.trim()) {
            clonedErrorObj.expenseTitleError = "Expense Title is required!";
            isValid = false;
        } else if (expenseInput.expenseTitle.trim().length > 20) {
            clonedErrorObj.expenseTitleError = "Maximum character limit reached"
            isValid = false;
        }
        if (!expenseInput.expenseAmount.trim()) {
            clonedErrorObj.expenseAmountError = "Expense Amount is required!";
            isValid = false;
        } else if (expenseInput.expenseAmount.trim() > 100000) {
            clonedErrorObj.expenseAmountError = "The Amount is conceringly too high"
        }
        if (!expenseInput.expenseDate) {
            clonedErrorObj.expenseDateError = "Please choose the date!"
            isValid = false;
        }
        // checking if the expense amount input has only numbers
        const amountRegex = /^\d+$/;
        if (!amountRegex.test(expenseInput.expenseAmount.trim())) {
            clonedErrorObj.expenseAmountError = "Write the amount in numbers"
            isValid = false;
        }

        setError(clonedErrorObj);
        return isValid;
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setError((prevError) => ({
          ...prevError,
          [`${name}Error`]: "",
        }));
        setExpenseInput((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        const formData = {
            title: expenseInput.expenseTitle,
            amount: expenseInput.expenseAmount,
            date: expenseInput.expenseDate,
            category: expenseInput.expenseCategory,
        }
        if (isValid) {
            updateTransactionData(formData)
            console.log("Form is valid. Submitting...");
            console.log(formData)
        } else {
          console.log("Form is invalid. Please correct the errors.");
        }
    };

  return (
    <>
        <h2>Tracker Form</h2>
        <form onSubmit={handleSubmit}>
            <div className={styles.input_group}>
                <label htmlFor="expenseTitle">
                    Expense Title<sup>*</sup>
                </label>
                <input 
                type="text"
                name='expenseTitle'
                className='input_element'
                onChange={handleChange}
                value={expenseInput.expenseTitle}

                />
                <p>{error.expenseTitleError}</p>
            </div>

            <div className={styles.input_group}>
                <label htmlFor="expenseAmount">
                    Expense Amount<sup>*</sup>
                </label>
                <input 
                type="text"
                name='expenseAmount'
                className='input_element'
                onChange={handleChange}
                value={expenseInput.expenseAmount}

                />
                <p>{error.expenseAmountError}</p>
            </div>
            <div className={styles.input_group}>
                <label htmlFor="expenseDate">
                    Expense Date<sup>*</sup>
                </label>
                <input 
                type="date"
                name='expenseDate'
                className='input_element'
                onChange={handleChange}
                value={expenseInput.expenseDate}

                />
                <p>{error.expenseDateError}</p>
            </div>
            <div className={styles.input_group}>
                <label htmlFor="expenseCategory">
                    Expense Category<sup>*</sup>
                </label>
                <select 
                name="expenseCategory" 
                value={expenseInput.expenseCategory}
                onChange={handleChange}
                >
                    <option value="">Select Category</option>
                    <option value="Housing">Housing</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <button 
            type='submit' 
            className={styles.submitButton}>
                Submit :)
            </button>
        </form>
    </>
  )
}

export default ExpenseTrackerForm