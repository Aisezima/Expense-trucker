
import React from 'react'
import ExpenseDate from './ExpenseDate' // import kyldyk
import './ExpenseItem.css' 

function ExpenseItem(props){ //props aldyk
    const title = props.title   //title dep peremennyi achtyk //  Expenses.jsx dagy titledy  aldyk 
    const expenseAmount = props.amount   // expenseAmount depmperemennyi achtyk. Expenses.jsx dagy amoundu  aldyk 

    return (
        <div className='expense-item'>
            <ExpenseDate expenseDate = {props.date} />  
              {/*ExpenseDAta componentge   expenseDataga  datanun maanisin saldyk */}
            <div className='expense-item__description'> </div>
            <h2>{title} </h2> 
              {/* h2 ge title logicasyn saldyk */}
            <div className='expense-item__price'>{`$ ${expenseAmount}`} </div>
            {/* interpolatsia arkyluu  expenseAmoundu saldyk */}
        </div>
    )
}
export default ExpenseItem 



