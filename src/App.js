import "./App.css";
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Content} from "./components/content/Content";
import {SideContent} from "./components/sideContent/SideContent";
import {Footer} from "./components/footer/Footer"
import paysage1 from "./images/1.jpeg";
import paysage2 from "./images/2.jpeg";
import paysage3 from "./images/3.jpeg";


function App() {
  return (
      <div className="container">
      < Header title ="My Blog" baseline ="An awesome baseline" />
      < Navbar link ="Link" />
      <div className="container-main">
        <div className="col-1">
          < Content title="TITLE HEADING" description="Title description" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " image={paysage1} alt="paysage"/>
          < Content title="TITLE HEADING" description="Title description" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " image={paysage2} alt="paysage"/>
        </div>
        <div className="col-2">
        < SideContent title="ABOUT ME" text="Lorem Ipsum is simply dummy text." image={paysage3}alt="paysage"/>
        
        </div>
      </div>
      < Footer />
     
      </div>

  );
}

export default App;
