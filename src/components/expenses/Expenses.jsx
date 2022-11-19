// Negizi kop componentter Expenses.jsx arkyluu import kyldyk
import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import Card from '../../ui/Card'
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {


    const [selectedYear, setSelectedYear] = useState('2022') 
    // useState achtyk   po umolchania  2022 korunup tursun dedik

    const getFilterDataHandler = (selectedYear) => { // selectedYeardyn ichinde emne bar bolso 
        //   getFilterDataHandlerdin ichine tushup kalat  (useState ushundai ishteit)
        setSelectedYear(selectedYear)
    }


    const  filteredExpenses = props.expenses.filter((el) => {   
        // peremeennyi achtyk. expensesdi filter kyldyk 
        //   
        return el.date.getFullYear().toString() === selectedYear  // getFullYear() return  год указанной даты по местному времени.
        //return nam  date    selectorYearge barabar bolso
    })


    
    let expenseContext  = <h1 style = {{color: 'red'}}>No expense found</h1>  //peremennui achtyk  h1 bir berdik inlinw stulli  koldonduk

    if(filteredExpenses.length > 0) {
        expenseContext = filteredExpenses.map((el) => {
             //filteredExpensesdin lenght 0 don chon bolso
            // expenseContexttin maanisi FilteredExpensesge tushup 
            // ichindegi elementtredi aralap  
            // ExpenseItemge kaitaryp beret
            return (
            <ExpenseItem 
            key={el.id}  // idnin maanisin keyge  saldyk
            title={el.title}  
            date={el.date} 
            amount={el.amount}/>
            )
        })
    }


   if(selectedYear === 'all' ){    // esli selectorYear  optiondogu allgo barabar bolso
    expenseContext = props.expenses.map((el) => {   
        // elementterdin  baaryn aralap  ExpenseItemge ge kaitaryp berdik
        return (
         <ExpenseItem 
        key={el.id} 
        title={el.title} 
        date={el.date} 
        amount={el.amount}/>
        )
    })
}
    // COMMENT BERSEM  KYZYL BOLYP KATA CHYGYP JATAT OSHOL SEBEPTEN BAARYN COMMENTGE ALYP KOIDUM
    // return (
    //     <Card className="expenses"  > 
    //         <ExpensesChart expenses={props.expenses} /> 
    //          {/* //expensesdin maainsin    ExpensesChartga berdik  */}
    //         <ExpenseFilter // ExpenseFilterge 
    //          onGetFilterData={getFilterDataHandler}  //OnGetFilterDataga  tuzgon logikabuzdu saldyk           
    //          selected={selectedYear}    
    //         //  {expenseContext}   //selectedge  selectedYear menen expenseContextin maanisin saldyk 
    //         // ExpenseChart menen ExpenseFilter Cardyn baldary  bolot  
    //     //  </Card>
    // )
        } 
// export default Expenses