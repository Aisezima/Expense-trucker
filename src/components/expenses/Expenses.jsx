import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import Card from '../../ui/Card'
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {


    const [selectedYear, setSelectedYear] = useState('2022')


    const getFilterDataHandler = (selectedYear) => {
        setSelectedYear(selectedYear)
    }


    const  filteredExpenses = props.expenses.filter((el) => {
        return el.date.getFullYear().toString() === selectedYear
    })


    
    let expenseContext  = <h1 style = {{color: 'red'}}>No expense found</h1>
    if(filteredExpenses.length > 0) {
        expenseContext = filteredExpenses.map((el) => {
            return (
            <ExpenseItem 
            key={el.id} 
            title={el.title} 
            date={el.date} 
            amount={el.amount}/>
            )
        })
    }


   if(selectedYear === 'all' ){
    expenseContext = props.expenses.map((el) => {
        return (
         <ExpenseItem 
        key={el.id} 
        title={el.title} 
        date={el.date} 
        amount={el.amount}/>
        )
    })
}
   
    return (
        <Card className="expenses"  >
            <ExpensesChart expenses={props.expenses} />
            <ExpenseFilter onGetFilterData={getFilterDataHandler} selected={selectedYear}/>
            {expenseContext}
         </Card>
    )
        } 
export default Expenses