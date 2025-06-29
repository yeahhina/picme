import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <div>
        <NavLink className="logo" to="/">
          PIC-ME
        </NavLink>
      </div>
      <div className="nav">
        <NavLink className="nav-link" to="/faq">
          FAQ
        </NavLink>
        <NavLink className="nav-link" to="/policy">
          PRIVACY POLICY
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          CONTACT ME
        </NavLink>
      </div>
    </div>
  );
}
export default Header;
