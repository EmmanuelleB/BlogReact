import "./Content.css";

export const Content =(props)=>{
    return (
        <div className="container-content">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.image} alt={props.alt}/>
            <p>{props.text}</p>
        </div>
    )
}