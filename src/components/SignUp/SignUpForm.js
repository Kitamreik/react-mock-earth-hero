// DO NOT TOUCH - WORKING
import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
// import { useAuth } from './UserAuthContext'; // broken as of 10/30
// import {AuthProvider} from './UserAuthContext'; // broken as of 10/30
import { Link, useNavigate } from "react-router-dom";



function SignUpForm () {
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const passwordConfirmRef = React.useRef();
    const signUpLogRef = React.useRef();
    // const { signup } = AuthProvider(); // broken as of 10/30
    const [error, setError] = useState(""); // Lisa form
    const [loading, setLoading] = useState(false);
    const history = useNavigate();
    const [email, setEmail] = useState(""); // Lisa form
    const [password, setPassword] = useState(""); // Lisa form
    const [login, setLogin] = useState("");
    const [message, setMessage] = useState('Sign up with email'); // Lisa form 
    const [signUpLog, setSignUpLog] = useState("")
  
    async function handleSubmit(e) {
      e.preventDefault();
  
      try {
        setError("");
        setMessage(`new account created login as ${email}`)
        // at the top of the page, the message calls the email
        await setSignUpLog(email, password);
        setLoading(true)
        // await signup(emailRef.current.value, passwordRef.current.value) // broken as of 10/30
        await (emailRef.current.value, passwordRef.current.value, signUpLogRef.current.value)
        history.push("/landing-page")
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
      } catch(err) {
        setError("Failed to create an account")
        alert(err.message)
        setError(err.message);
      }
  
      setLoading(false)
    }
    
    return (
        <div className="SignUp">
            <h2>{message}</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <form method="post" value={signUpLog} onSubmit={handleSubmit}>
                <label htmlFor="email">
                Email
                <input type="email" placeholder="Email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} ref={emailRef} required />
                </label>
                <br />
                <label htmlFor="password">
                Password
                <input
                    type="password" placeholder="Password"
                    id="password" value={password} onChange={(e) => setPassword(e.target.value)} ref={passwordRef} required
                />
                </label>
                <br />
                <label htmlFor='password'>Confirm Password</label>
                <input type='password'  placeholder='Confirm password' autoComplete='on' value={password} onChange={(e) => setPassword(e.target.value)} ref={passwordConfirmRef} required />
                <br />
                <div className="login">
                    <Button disabled={loading} type="submit" value={login} onChange={(e) => setLogin(e.target.value)} >Create Account</Button>
                </div>
            </form>
            <br />
            <p> Sign up with: </p>
            <Link to="/login">Already have an account? Login</Link>
            <p>
                By continuing, you agree to the Privacy Policy and Terms of Service
            </p>
            <div>
            {/* <a href="https://www.facebook.com">Sign In with Facebook</a> */}
            </div>
            
        </div>
      );
  };

export default SignUpForm;