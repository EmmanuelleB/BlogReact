import "./Header.css";

export const Header =(props)=>{
    return(
    <div className="container-header">
        <h1>{props.title}</h1>
        <h3>{props.baseline}</h3>
    </div>
    )
}