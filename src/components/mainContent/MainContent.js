import "./MainContent.css";

const MainContent = (props) => {
  return (
    <div className="container-maincontent">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className="picture"></div>
      {/* <img src={props.image} alt={props.alt} /> */}
      <p>{props.text}</p>
    </div>
  );
};

export default MainContent;
