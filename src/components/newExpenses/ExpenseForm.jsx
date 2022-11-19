import { useState } from 'react'  //useState koldonduk
import './ExpenseForm.css'

const ExpenseForm  = (props) => {  //peremennyi achtyk props aldyk
    // bizdin dannyilar ozgoryp turat oshol uchun titlega amountga datege useState berdik
    const [title, setTitle] = useState('') 
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const inputChangeHandler = (e)  =>  {  //title, amount, date uchoono 1  click berdik 
        let currentInput = e.target.name //name degen atributga biz (title, amount, date) degen name berdik
        if(currentInput  === 'title'){  // when  currentInputtan kelgen znachenia  titlegar barabar bolso
            setTitle(e.target.value) //anda setTitla tiledyn znacheniasyn salup koiduk
        }else if(currentInput === 'amount'){  //inputga kelgen znacheni  amountga barabar bolso
            setAmount (e.target.value) //setAmountga amounttan kelgen znacheniany salyp koiduk
        }else if (currentInput === 'date'){ //inputga kelgen znacheni  datege barabar bolso
            setDate(e.target.value)  //setDatege datetten  kelgen znacheniany salyp koiduk
        }

    }
    const submitHandler =(event) => { //formga click berdik
        event.preventDefault() // znachenialar perezapis  bolup ketpesh uchun preventDefault methodun koldonobuz
        
        const inputData = { //object achtyk  
            id: Date.now().toString(), // ar bir znachenianyn key bolush kerek al key bige id bolup beret
            title: title,   // titlega useStatedegi title peremennyidy berebiz
            amount: Number(amount), // useStatedegi amount peremennyidy berebiz
            // baalardy koshkondo kankantinatsia bolbosh uchun numberge oroduk
            date: new Date(date), //  useStatedegi date peremennyidy berebiz 
        }

        props.onSave(inputData) 
    }
    return(
        <form onSubmit={submitHandler}>  //
            {/* tuzgin logikabyzdy ishesh uchun    formdga berdik */}

            <div className="new-expense__controls">
                <div className="new-expense__control">  
                    <label>Title</label>
                    <input value={title} //inputga jazgan znachenia  titlega tuchup kalyshy kerek 
                     name='title'  // inputtun atyn title dep berdik
                    type="text"  //type text boluusu kerek
                    onChange={inputChangeHandler}  /> 
            {/* tuzgin logikabyzdy ishesh uchun  inputga berdik */}

                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={amount}  //inputga jazgan znachenia  amount tuchup kalyshy kerek 
                    name='amount'   // inputtun atyn amount dep berdik
                    onChange={inputChangeHandler} 
                // tuzgin logikabyzdy ishesh uchun  inputga berdik (event koldonduk) //

                    type="number"  //san jazylat  type number bolot
                    min={1}   //den bashtalat
                    step={0.1}  //  0.1den koshulat
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label> 
                    <input 
                     value={date} //inputga jazgan znachenia  date tuchup kalyshy kerek 
                     name='date'  // inputtun aryn date dep berdik
                     onChange={inputChangeHandler}
                // tuzgin logikabyzdy ishesh uchun  inputga berdik (event koldonduk) //

                      type="date"  // type date boldu
                       min={'2021-01-01'}  //2021den 
                       max={'2025-01-01'} // 2025ge cheiin
                        />
                </div>
            </div>

            <div className='new-expense__actions'>  // class berdik
                <button >Add expenses</button>   
                {/* button tuzduk  */}
            </div>
        </form>
    )
}
export default ExpenseForm  // export bolboso kod ishebeit
