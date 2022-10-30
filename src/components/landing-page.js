import {React, useState} from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

/* broken 10/30
// import { UserAuthContextProvider } from '../components/SignUp/UserAuthContext'
// import { RegisterUserProfile } from './SignUp/UserAuthContext';
// import AuthProvider from './SignUp/UserAuthContext';

*/ 


// COMBINE the function of Data from form-data in react-auth with AdminDashboard via the const of email and password
function AdminDashboard () {
    const [error, setError] = useState("");
    const [email] = useState("");
    const [password] = useState("");
    // const { logout } = useAuth();// currentUser
    const history = useNavigate();

    async function handleLogout() {
        setError("")
    
        try {
        //   await logout()
          history.push("/login")
        } catch {
          setError("Failed to log out")
        }
      }

    // adding from Data from react-auth

    // store the person's data
    const Person = (props) => {
        return (
        <>
            <h2>Profile of Person</h2>
            <p>Email: {props.email}</p>
            <p>Password: {props.password}</p>
        </>
        )
    }

    // create a profile and render that on the page
    const Profile = (props) => {
        return (
            <>
                <h2>Profile Confirmation</h2>
                <p>Hello {props.fullname}! </p>
                <p>Please confirm your email: {props.email}</p>
                <p>Please confirm your password: {props.password}</p>
            </>
        );
    }

    return (
        <Container>
            <div className="AdminHeading">
                <h1> <span>Admin Landing Page</span> </h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <div>
                <div className="Data">
                    <h2>Form Data Population</h2>
                    <Person email={email} password={password} />
                    <br />
                    <br />
                    <Profile email={email} password={password} />
                </div>
                    <signUpLogRef />
                </div>
                <Link to='/updateprofile'>
                    Update Profile
                </Link>
                <div>
                <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
                </div>
            </div>
        </Container>
    )
}

export default AdminDashboard;

