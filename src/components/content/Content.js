import "./Content.css";
import MainContent from "../mainContent/MainContent";
import SideContent from "../sideContent/SideContent";
// import paysage1 from ".../images/1.jpeg";
// import paysage2 from ".../images/2.jpeg";
// import paysage3 from ".../images/3.jpeg";

const Content = () => {
  return (
    <div className="container-content">
      <div className="col1">
        <MainContent
          title="TITLE HEADING"
          description="Title description"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          // image={paysage1}
          // alt="paysage"
        />
        <MainContent
          title="TITLE HEADING TWO"
          description="Title description"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          // image={paysage2}
          // alt="paysage"
        />
      </div>
      <div className="col2">
        <SideContent
          title="ABOUT ME"
          text="Lorem Ipsum is simply dummy text."
          //   image={paysage3}
          //   alt="paysage"
        />
      </div>
    </div>
  );
};
export default Content;
