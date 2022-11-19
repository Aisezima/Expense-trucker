 import './Chart.css'
import ChartBar from './ChartBar' // Chart CharBardy chakyrat

 const Chart = (props) => { // props aldyk(prospun ichinde ChartDataPointsdun maanisin salganbyz)
    // props  arkyluu aldyk maanisin 
    const dataPointsValue = props.dataPoints.map(data => data.value) // (data bul element ) elementtin valuelerin aldyk
    const maxValue = Math.max(...dataPointsValue) //maxValuege DataPointsValueni saldyk and
    //  dataPointsValuenin maxsimum maanisin kaitarat

    return (
        <div className='chart'>
            {props.dataPoints.map(data => {
                return (
                    <ChartBar
                     key = {data.label}  //ar bir jsx componenttin  key boluusu kerek
                     value  = {data.value}   // lifting up arkyluu  datany valuesin  valuege saldyk
                     label ={data.label} // datadagy labeldi  labelge salyp berdik  any biz ChartBardan tartyp alabyz
                     maxValue = {maxValue}/> //two way data bindingdi koldonduk
                )
            })}
        </div>
    )
 }           
 export default Chart
 