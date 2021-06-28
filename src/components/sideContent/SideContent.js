import "./SideContent.css"

export const SideContent =(props)=>{
    return(
        <div className="container-sideContent">
            <h2>{props.title}</h2>
            <img src={props.image} alt={props.alt}/>
            <p>{props.text}</p>
        </div>
    )
}