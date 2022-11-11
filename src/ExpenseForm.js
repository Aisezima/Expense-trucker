// import { useState } from 'react'
// import './ExpenseForm.css'

// const ExpenseForm  =() => {
//     // useState  менен иштоонун 2 вариянты 
//     // учооно тен 1 переменный ачып иштетуу жолу
//     const [userInput, setUserInput]  = useState({
//         title: '',
//         amount: '',
//         date: '',
//     })

//     // useState мене иштоонун 1 вариянты 
//     //   ар бирине озунчо переменный ачып   иштетебиз
//     // const [title, setTitle] = useState('')
//     // const [amount, setAmount] = useState('')
//     // const [date, setDate] = useState('')


//     // 1 вариянт))) биз бул жактан ар бирине параметр ачып жазып чыктык 
//     //  жана узунураак код болот  
//     const titleChangeHandler = (event) => {
//         setUserInput({
//         ...userInput,
//             title: event.target.value
//         })
//         // setTitle(event.target.value);
//     }
//     const amountChangeHandler = (event) => {
//         setUserInput({
//         ...userInput,
//             amount: event.target.value
//         })
//         // setAmount(event.target.value);
//     }
//     const dateChangeHandler = (event) => {
//         setUserInput({
//         ...userInput,
//             date:  event.target.value
//         })
//         // setDate(event.target.value);
//     }

//     const submitHandler =(event) =>{
//         event.preventDefault()
//         console.log(userInput);
//     }
// //  2 вариянт ))) 1 вариянтга окшош иштейт бирок 
// // кыскараак жолу
//         // const inputChangeHandler = (e)  =>  {
//         //     let currentInput = e.target.name
//         //     if(currentInput  === 'title'){
//         //         setTitle(e.target.value)
//         //     }else if(currentInput === 'amount'){
//         //         setAmount (e.target.value)
//         //     }else if (currentInput === 'date'){
//         //         setDate(e.target.value)
//         //     }
       
//         // }


//     return(
//         <form onSubmit={submitHandler}>
//             <div className="new-expense__controls">
//                 <div className="new-expense__control">  
//                     <label>Title</label>
//                     <input name='title' onChange={titleChangeHandler} type="text" />
//                 </div>
//                 <div className="new-expense__control">
//                     <label>Amount</label>
//                     <input name='amount' onChange={amountChangeHandler} type="number" min={1}  step={0.1}/>
//                 </div>
//                 <div className="new-expense__control">
//                     <label>Date</label>
//                     <input  name='date' onChange={dateChangeHandler} type="date"   min={'2021-01-01'} max={'2025-01-01'}  />
//                 </div>
//             </div>

//             <div className='new-expense__actions'> 
//                 <button >Add expenses</button>
//             </div>
//         </form>
//     )
// }
// export default ExpenseForm