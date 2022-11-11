import './App.css';
import NewExpenses from './components/newExpenses/NewExpenses';
import Expenses from "./components/expenses/Expenses"
import { useState } from 'react';

const expenseData = [

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
];



function App() {
  const [totalExpenses, setExpenses] = useState(expenseData)


const getExpenseDataHandler = (liftingData) => {
    setExpenses((prevState) => {
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