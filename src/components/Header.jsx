import "../styles/header.css";
import gblogo from "../assets/gblogo.png";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="header">

                <img src={gblogo} alt="project logo" />

                <nav className="nav">
                    <Link to="/"><label htmlFor="items">Product</label></Link>
                    <div className="search-bar">
                        <span className="search-icon">🔍</span>
                        <input id="items" type="text" placeholder="search anything..." className="search-input" />
                        {/* <img src={logo} alt="" className="search-logo" /> */}
                    </div>
                    <div>
                        <Link to="/Cart"><label className="cart">Cart<span>🛒</span></label></Link>
                    </div>
                    <div>
                        <Link to="/Login"> <button className="loginbtn"><span>👤</span>Login</button></Link>
                    </div>
                </nav>
            </div>
        </>
    );
}