import "./style.css";
import { Nav } from "./nav";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/">InTheSky</Link>
          </div>
          
          <Nav />
        </div>
      </header>
    </>
  );
}

export default Header;
