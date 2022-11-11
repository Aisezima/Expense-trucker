import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import Card from '../../ui/Card'
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react'

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2022')


    const getFilterDataHandler = (selectedYear) => {
        setSelectedYear(selectedYear)
    }


    const  filteredExpenses = props.expenses.filter((el) => {
        return el.date.getFullYear().toString() === selectedYear
    })
    console.log(filteredExpenses);

    return (
        <Card className="expenses"  >
            <ExpenseFilter onGetFilterData={getFilterDataHandler} selected={selectedYear}/>

            {filteredExpenses.map((el) => {
                return <ExpenseItem 
                key={el.id} 
                title={el.title} 
                date={el.date} 
                amount={el.amount}/>
            })}
{/*         
        //  бул метод менен кылсак болот бирк бул таза код боолуп эсептелтнбейт 
        // жана бул жолду биз колдонбойбуз
        /* <ExpenseItem
        title={props.expenses[0].date} 
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}/> 
        <ExpenseItem
        title={props.expenses[1].date} 
        date={props.expenses[1].date}
        amount={props.expenses[1].amount}/> 
        <ExpenseItem
        title={props.expenses[2].date} 
        date={props.expenses[2].date}
        amount={props.expenses[2].amount}/> 
        <ExpenseItem
        title={props.expenses[3].date} 
        date={props.expenses[3].date}
        amount={props.expenses[3].amount}/>  */}
          
         </Card>
    )
} 

export default Expenses