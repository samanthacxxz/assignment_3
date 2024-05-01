import React from 'react'

import ExpenseTrackerForm from '../ExpenseTrackerForm/ExpenseTrackerForm'

import styles from './ExpenseItem'

const ExpenseItem = ({ itemProp }) => {
    const { title, amount, date, category } = itemProp.info;
  return (
    <>
    <h2>Expense Tracker - List</h2>
        <ul>
            <li>Title: {title}</li>
            <li>Amount: {amount}</li>
            <li>Date: {date}</li>
            <li>Category: {category}</li>
        </ul>
    </>
  )
}

export default ExpenseItem