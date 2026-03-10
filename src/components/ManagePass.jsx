import "../styles/managePass.css";
import { Link } from "react-router-dom";

export default function ManagePass() {
    return (
        <>
            <div className="managepass"> 
                <div className="managepassCard">
                    <form className="forgotForm">
                        <h2>Find your account</h2>
                        <div>
                            <h4>Username or email</h4>
                            <input type="text" placeholder="enter your email or username" />
                        </div>
                        <div>
                            <button type="submit" className="reset-btn">Reset</button>
                        </div>
                        <Link to="/Login" className="back-link">
                            Back to Login
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}