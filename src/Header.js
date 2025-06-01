import ReactDOM from "react-dom/client";
import { Link, NavLink } from "react-router-dom";
import FAQ from './Faq.js';
import Policy from './Policy.js';
import Contact from './Contact.js';
function Header(){
    return (
        <div className="Header">
            <div>
                <NavLink className="logo" to="/">PIC-ME</NavLink>
            </div>
            <div className="nav">
                <NavLink className="nav-link" to="/faq">FAQ</NavLink>
                <NavLink className="nav-link" to="/policy">PRIVACY POLICY</NavLink>
                <NavLink className="nav-link" to="/contact">CONTACT ME</NavLink>
            </div>
        </div>
    )
}
export default Header;