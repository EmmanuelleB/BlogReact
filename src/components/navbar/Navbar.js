import "./Navbar.css";
import Link from "../link/Link";

const Navbar = (props) => {
  return (
    <div className="container-navbar">
      <div>
        <Link link="Link1" />
        <Link link="Link2" />
        <Link link="Link3" />
      </div>
      <Link link="Link4" />
    </div>
  );
};

export default Navbar;
