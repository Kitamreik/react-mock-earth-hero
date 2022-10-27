// DO NOT TOUCH - WORKING
import React, { useRef, useState } from "react";
import { Alert, Button } from "react-bootstrap";
// import { useAuth } from '../contexts/Auth-Context';
import { Link, useNavigate } from "react-router-dom";

function SignUpForm () {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    // const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");
    const [message, setMessage] = useState('Sign up with email');
  
    async function handleSubmit(e) {
      e.preventDefault();
      setError("");
  
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
      }
  
      try {
        setMessage(`new account created loggin as ${email}`)
        // await signUp(email, password);
        setLoading(true)
        // await signup(emailRef.current.value, passwordRef.current.value)
        history.push("/")
      } catch(err) {
        setError("Failed to create an account")
        alert(err.message)
        setError(err.message);
      }
  
      setLoading(false)
    }

    const navigate = useNavigate();
    const navigateToLandingPage = () => {
    navigate('/landing-page', {replace: true});
    }
    
    return (
        <div className="SignUp">
            {/* <h3>Sign Up To Get Started</h3> */}
            <h2>{message}</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                {/* no method="post" */}
                <label>
                Email
                <input type="text" placeholder="Email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} ref={emailRef} required />
                </label>
                <br />
                <label>
                Password
                <input
                    type="password" placeholder="Password"
                    name="password" value={password} onChange={(e) => setPassword(e.target.value)} ref={passwordRef} required
                />
                </label>
                <br />
                <label for='password'>Re-type Password</label>
                <input type='password'  placeholder='Confirm password' name='password' autoComplete='on' />
                <br />
                <div className="login">
                    <Button disabled={loading} type="submit" value={login} onChange={(e) => setLogin(e.target.value)} onClick={navigateToLandingPage}>Create Account</Button>
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