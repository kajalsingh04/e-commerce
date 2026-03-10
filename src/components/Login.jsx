import { useState } from "react";
import "../styles/login.css"
import logo1 from "../assets/logo1.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState({});
      const router = useNavigate();

      const validate = () => {
            let newError = {};

            if (!username) {
                  newError.username = "Enter valid username"
            }
            if (!password) {
                  newError.password = "Enter valid password"
            }

            return newError;
      }

      const handleSubmit = async (e) => {
            e.preventDefault();
            const validateError = validate();
            setError(validateError);
            if (Object.keys(validateError).length > 0) {
                  return;
            }

            const response = await fetch('https://dummyjson.com/auth/login', {
                   method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                        username: username,
                        password: password,
                       
                  }),

            })

            const data = await response.json()
            // console.log(data)
            // setPassword(data.password)
            // setUsername(data.username)
             localStorage.setItem("accessToken",data.accessToken)

            if(data.accessToken){
                router("/");
            }
      }

    return (
        <>
            <div className="login">
                <div className="loginCard">
                    <form className="LoginForm" onSubmit={handleSubmit}>
                        <h2>Log in </h2>
                        <div>
                            <h4>Email or username</h4>
                            <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                            {error.username && <p className="text-red-500">{error.username}</p>}
                        </div>
                        <div>
                            <h4>Password</h4>
                            <input type="Password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            {error.password && <p className="text-red-500">{error.password}</p>}
                        </div>
                        <div>
                            <button  type="submit" className="loginbtn1">Log in</button>
                        </div>
                        <div>
                        <Link to='/ManagePass'><p>Forgot password?</p></Link>
                        </div>
                        <hr />
                        <div>
                        <Link to='/SignUp'><button className="loginbtn2">Sign up</button></Link>
                        </div>
                    </form>
                    <div className="formdiv"> 
                        <img src={logo1} alt="image" />
                    </div>
                </div>
            </div>
        </>
    );
}