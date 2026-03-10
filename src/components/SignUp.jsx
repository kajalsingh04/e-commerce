import "../styles/signUp.css";
import logo2 from "../assets/logo2.jpg";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <>
            <div className="signup">
                <div className="signupCard">
                    <form className="signupForm">
                        <h2>Sign up</h2>
                        <div>
                            <h4>Name</h4>
                            <input type="text" placeholder="enter your name" />
                        </div>
                        <div>
                            <h4>Email</h4>
                            <input type="text" placeholder="email" />
                        </div>
                        <div>
                            <h4>Password</h4>
                            <input type="password" placeholder="password" />
                        </div>
                        <div>
                            <h4>Confirm password</h4>
                            <input type="password" placeholder="re-enter password" />
                        </div>
                        <div>
                            <button className="signupbtn1">Sign up</button>
                        </div>
                        <hr />
                        <div>
                            <p>Already have an account?</p>
                            <Link to='/Login'><button className="signupbtn2">Log in</button></Link>
                        </div>
                    </form>
                    <div className="signformdiv">
                        <img src={logo2} alt="image" />
                    </div>
                </div>
            </div>
        </>
    );
}