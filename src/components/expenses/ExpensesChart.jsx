  import React from 'react'
  import Chart from '../Chart/Chart'   //Chart componenti import kyldyk
 
  const ExpensesChart  = (props) =>{ //peremennyi actyk, props aldyk
    const chartDataPoints  = [ //massiv achtyl anyn ichine maani saldyk
        {label: 'Jan' , value: 0}, 
        {label: 'Feb' , value: 0},
        {label: 'Mac' , value: 0},
        {label: 'Apr' , value: 0},
        {label: 'May' , value: 0},
        {label: 'Jun' , value: 0},
        {label: 'Jul' , value: 0},
        {label: 'Aug' , value: 0},
        {label: 'Seb' , value: 0},
        {label: 'Oct' , value: 0},
        {label: 'Nov' , value: 0},
        {label: 'Dec' , value: 0},

    ];
    //iterarsia kylabyz
    for (const expense of props.expenses) { 
        const expenseMonth = expense.date.getMonth()  // getMoth bizge ailardyn indexin kaitarat
        chartDataPoints[expenseMonth].value += expense.amount  //valuaeleri  +=(koshup barabardygyn chygaryp beret)
    }

    return (
        <Chart dataPoints ={chartDataPoints}/> 
        // chartDataPointsdyn maanisin Chartga otkorup berdik lifting up arkyluu
    )
  }

  export default ExpensesChart


  

