import "./ExpenseDate.css"

const ExpenseDate = (props) =>{

    const date = props.expenseDate
    const day = date.toLocaleString('en-US',{day: '2-digit'} )
    const month  = date.toLocaleString('en-US',{month: 'long'} )
    const year = date.getFullYear()

    return(
    <div className='expense-date'>
        <div className='expense-date__month'>{day} </div>
        <div className='expense-date__day'>{month} </div>
        <div className='expense-date__year'>{year} </div>
    </div>
    )
}
export  default ExpenseDate

