 import './Chart.css'
import ChartBar from './ChartBar'

 const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map(data => data.value)
    const maxValue = Math.max(...dataPointsValue)

    return (
        <div className='chart'>
            {props.dataPoints.map(data => {
                return (
                    <ChartBar
                     key = {data.label}  //ar bir jsx koddun ozunun key bolushsu kerek 
                     value  = {data.value} 
                     label ={data.label}
                     maxValue = {maxValue}/>
                )
            })}
        </div>
    )
 }           
 export default Chart
 