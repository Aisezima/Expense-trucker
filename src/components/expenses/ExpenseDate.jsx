import "./ExpenseDate.css"

const ExpenseDate = (props) =>{ //props aldyk 

    const date = props.expenseDate  //  expenseItemdegi   expenseDatanyn ichindegi maanisin aldyk props arkyluu aldyk
    const day = date.toLocaleString('en-US',{day: '2-digit'} )   //toLocaleString return stroky  
    // day  english and 2 sifradan turat 
    const month  = date.toLocaleString('en-US',{month: 'long'} ) // 

    const year = date.getFullYear() 
    //  getFullYear() return  год указанной даты по местному времени.

    return(
    <div className='expense-date'>
        <div className='expense-date__month'>{day} </div>  //class berdik 
        {/*  tuzgon logikabyzdy   salyp koidyk(bul children dep atalat) */}
        <div className='expense-date__day'>{month} </div>
        {/*  tuzgon logikabyzdy   salyp koidyk(bul children dep atalat) */}

        <div className='expense-date__year'>{year} </div>
        {/*  tuzgon logikabyzdy   salyp koidyk(bul children dep atalat) */}

    </div>
    )
}
export  default ExpenseDate

