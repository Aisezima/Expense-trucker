// Expenses.jax dan import kyldyk
import React from 'react'

import './ExpenseFilter.css' 



const ExpenseFilter = (props) => { // props aldyk atasynan balasyna otkorush ucchun


const selectChangeHandler = (e) =>{  //callback func achtyk
    props.onGetFilterData(e.target.value)//  expensesdegi   onGetFilterDatanym znacheniasyn aldyk 
}
    // kaitarysh uchun return berdik 
    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'> 
            {/* klasstaryn berdik */}
                <label> Filter by year</label> 
                {/* //label achyk */}
                <select onChange={selectChangeHandler}  value={props.selected}>  // valuege expensesdegi selectting maanisin aldyk
                {/*  clickege onChangedi berdik */}
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="all">All</option>
                    {/* option bul select uchcun tag */}
                </select>
            </div>
        </div>
    )
}



export default ExpenseFilter