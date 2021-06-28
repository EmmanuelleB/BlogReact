import "./Navbar.css";

export const Navbar =(props)=>{
    return (
        <div className="container-navbar">
            <div>
                <a href="#">{props.link}</a>
                <a href="#">{props.link}</a>
                <a href="#">{props.link}</a>
            </div>     
            <a href="#">{props.link}</a>
        </div>
    )
}