// NewExpenses    Apptan import kylyndy

import React from 'react'    //okulushuna jakshy  jaazbasak da ishteit
import ExpenseForm from './ExpenseForm'  //import kuldyk
import "./NewExpenses.css"
const NewExpenses = (props) => {  //callback function tuzup  props aldyk

     const saveExpenseDataHandler = (expenseData) =>{  //   function achtyk   backtin dannyiyn saldyk
        props.onGet(expenseData) //lifting up arkyluu  backten kelgen dannyidy aptan aldyk
     }
    return (
        <div className='new-expense'> 
        <ExpenseForm  onSave ={saveExpenseDataHandler}/> 
              {/* function dogu logicabyzdy onSavege saldyk  */} // ExpenseFormdan onSave dep ala alabyz
         </div>
    )
}
export default NewExpenses


