import "./SideContent.css";

const SideContent = (props) => {
  return (
    <div className="container-sideContent">
      <h2>{props.title}</h2>
      <div className="picture"></div>
      {/* <img src={props.image} alt={props.alt}/> */}
      <p>{props.text}</p>
    </div>
  );
};
export default SideContent;
