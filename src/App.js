import './App.css'; // appty  import kylyndy  react ozy kyldy
import NewExpenses from './components/newExpenses/NewExpenses'; // NewExpensesти  import кылдык
import Expenses from "./components/expenses/Expenses"  // expensesti import kyldyk
import { useState } from 'react';

const expenseData = [ // backendten keldi birok   bul feik  massivge salyp keldik
  {
    id: 'el1',
    date: new Date (2022, 3, 22),
    title: 'Car Insurance',
    amount: 200,
  },
  {
    id: 'el2',
    date: new Date(2023, 5, 22),
    title: 'KinderGarden',
    amount: 100,
  },  
  {
    id: 'el3',
    date: new Date(2024, 6, 22),
    title: 'Utitiiii',
    amount: 100,
  }, 
  {
    id: 'el4',
    date: new Date(2025, 6, 22),
    title: 'paper',
    amount: 100,
  }, 
];// backendden kelgen dannyilar



function App() {
  const [totalExpenses, setExpenses] = useState(expenseData) //useState koldonduk , backten kelgen dannyidi saldyk
// totalExpenses peremennyidun aty, setTotalExpenses function

const getExpenseDataHandler = (liftingData) => {   // function achtyk l iting datany saldyk
    setExpenses((prevState) => { //
      return  [liftingData, ...prevState]
    })
  
}

  return (
    <div className="App">
      <NewExpenses onGet = {getExpenseDataHandler}/>
      <Expenses expenses={totalExpenses}/>
    </div>
  );
  
}

export default App;