import "../styles/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Column 1 */}
                <div className="footer-column">
                    <h2 className="footer-logo">GlowBeauty</h2>
                    <p>Your daily dose of beauty and confidence.</p>
                </div>

                {/* Column 2 */}
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/Cart">Cart</Link>
                    <Link to="/Login">Login</Link>
                    <Link to="/SignUp">Sign Up</Link>
                </div>

                {/* Column 3 */}
                <div className="footer-column">
                    <h3>Customer Service</h3>
                    <a href="">Contact Us</a>
                    <a href="">Shipping Policy</a>
                    <a href="">Returns</a>
                    <a href=" ">FAQs</a>
                </div>

                {/* Column 4 */}
                <div className="footer-column">
                    <h3>Contact</h3>
                    <p>Email: support@glowbeauty.com</p>
                    <p>Phone: +91 9876543210</p>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 GlowBeauty. All rights reserved.
            </div>
        </footer>
    );
}