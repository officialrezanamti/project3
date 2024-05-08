import { NavLink } from "react-bootstrap";
import "./MyNav.css";
export default function MyNav() {
  return (
    <>
      <header>
        <div className="right">
          <h1>Nerd Studio</h1>
        </div>
        <div className="left">
          <NavLink to="/" className="nav">
            Home
          </NavLink>
          <NavLink to="/about" className="nav">
            About
          </NavLink>
          <NavLink to="/article" className="nav">
            Article
          </NavLink>
          <NavLink to="/enter" className="nav">
            Enter
          </NavLink>
        </div>
      </header>
    </>
  );
}
