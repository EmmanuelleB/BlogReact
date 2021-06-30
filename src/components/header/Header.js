import "./Header.css";
import Title from "../tiltle/Title";
import Baseline from "../baseline/Baseline";

const Header = (props) => {
  return (
    <div className="container-header">
      <Title title="My Blog" />
      <Baseline baseline="An awesome baseline" />
    </div>
  );
};
export default Header;
