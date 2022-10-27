import {React, useState} from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from '../contexts/Auth-Context';


// how to create "logged in" component so it renders after the user clicks the login button?

function AdminDashboard (Person, Profile) {
    const [error, setError] = useState("");
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

    return (
        <Container>
            <div className="AdminHeading">
                <h1> <span>Admin Landing Page</span> </h1>
                {error && <Alert variant="danger">{error}</Alert>}
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

