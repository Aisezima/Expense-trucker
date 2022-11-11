
import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props){
    const title = props.title
    const expenseAmount = props.amount

    return (
        <div className='expense-item'>
            <ExpenseDate expenseDate = {props.date} />   
            <div className='expense-item__description'> </div>
            <h2>{title} </h2>
            <div className='expense-item__price'>{`$ ${expenseAmount}`} </div>
        </div>
    )
}
export default ExpenseItem 

//  2  sostoania bar  props, useState
  //Hook -  reactyn functionryn  hook dep atalat 
  //useState sostauniany upravlaet
  //bir nerseni ozgortot 
  //bir nerseni ozgortkubuz kelse   useState we ll use
//  hook eto function 
// hook perevodit ilgich


