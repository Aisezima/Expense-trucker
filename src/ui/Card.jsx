import "./Card.css" 
const Card = (props) => { 
    const classes = 'card ' + props.className 
    return(
        <div className={classes}> {props.children}</div>
    )
}

export default Card
// ui bul tupoi komponenter   uchun 
//tuppoi komponent   logicasy jok komponent uchun 