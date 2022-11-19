import React from 'react'
import './ChartBar.css' //import kyldyk


const ChartBar = (props) => { //props aldyk
// % menen chygarabyz 
    let barHeight = "%" 
    // uslovia koiobuz 
    if(props.maxValue > 0 ) {  //eger maxValuedegi main 0don  chon bolso
        barHeight = Math.round((props.value / props.maxValue) * 100) + '%'  //%tinf ormulasyn jazabyz
        // math.random  bul ( ex: 20.3 bolso 20 lylyp koiot)
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height: barHeight}}> </div> 
                {/* //inline stil  arkyluu stil berdik */}
            </div>
            <div className='chart-bar__label'>{props.label}</div>  //props arkyluu labeldi aldyl Charttan 
        </div>
    )
}

export default ChartBar