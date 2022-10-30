// DO NOT TOUCH
import React, { useRef, useState } from "react";
import { Alert, Button } from "react-bootstrap";
// import { useAuth } from '../contexts/Auth-Context';
import { Link, useNavigate } from "react-router-dom";


function LogInForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
//   const { register } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");


  async function handleSubmit(e) {
    e.preventDefault()
    

    try {
      setError("")
      setLoading(true)
    //   await register(emailRef.current.value, passwordRef.current.value)
      await (emailRef.current.value, passwordRef.current.value)
      history.push("/landing-page")
    } catch {
      setError("Failed to login")
    }

    setLoading(false)
  }
  return (
    <div className="LogIn">
        <h3>Ready to go? Log In</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <form method="post" onSubmit={handleSubmit}>
            <label htmlFor="email">
            Email
            <input type="email" placeholder="Email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} ref={emailRef} required />
            </label>
            <br />
            <label htmlFor="password">
            Password
            <input
                type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} ref={passwordRef} required
            />
            </label>
            <br />
            <label htmlFor="password">
              Confirm Password
              <input 
                type="password"
                id="password-confirm" placeholder="Confirm password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} ref={passwordConfirmRef} required
              />
            </label>
            <br />
            <div>
                <Button disabled={loading} type="submit" value={login} onChange={(e) => setLogin(e.target.value)} > Log In</Button>
            </div>
        </form>
        <br />
        <div>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <br />
        <div>
            Need an account? <Link to="/app">Sign Up</Link>
        </div>
        <div>
          {/* <a href="https://www.facebook.com">Sign In with Facebook</a> */}
        </div>
        
      </div>
  );
};
 
export default LogInForm;