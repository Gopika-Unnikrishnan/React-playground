
import "./style.css"
//method1
const Button = ({label,color}) =>{
    return(
        <button className="button">{label}</button>
    )
}
//method2
// function Button(props){
//     return(
//         <button className="button">{props.label}</button>
//     )
// }


export default Button