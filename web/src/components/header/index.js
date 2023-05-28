import "./style.css";
import { Nav } from "./nav";
function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <a href="/">InTheSky</a>
          </div>

          <Nav />
        </div>
      </header>
    </>
  );
}

export default Header;
