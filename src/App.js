import {Routes, Route, useNavigate} from 'react-router-dom';
// BrowserRouter as Router from react-router-dom --> add for gatsby 
// Bootstrap: https://react-bootstrap.github.io/getting-started/introduction/
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
// The useNavigate hook returns a function that lets us navigate programmatically, e.g. after a form is submitted or a button is clicked.

// The navigate function can be passed a delta, e.g. -1 to go one page back, 1 to go one page forward, or a path -navigate('/contacts').

To redirect to another page on button click in React:

Use the useNavigate() hook, e.g. const navigate = useNavigate();.
Call the navigate() function, passing it the path - navigate('/about').
The navigate() function lets us navigate programmatically.

*/ 

// Component Testing from app.js in react-auth
import SignUpForm from './components/SignUpForm';

export default function App() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/contacts', {replace: true});
  };

  const navigateToApp = () => {
    navigate('/app', {replace: true});
  };
  
  /*
   // When the replace property on the options object is set to true, the current entry in the history stack gets replaced with the new one.

  // In other words, navigating to the new route won't push a new entry into the history stack, so if the user clicks the back button, they won't be able to navigate to the previous page.
  // For example, this is useful when a user logs in, because you don't want them to be able to click the back button and get back to the login page.

  // It is also useful if you have a route that redirects users to a different page, because you don't want users to click the back button and get redirected again.

// Add'l documentation: https://v5.reactrouter.com/web/guides/quick-start
  */ 
 
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };

  function Home() {
    return <h2>Home</h2>;
  }
  
  function Contacts() {
    return <h2>Contacts</h2>;
  }

  function App() {
    return (
      <>
      <SignUpForm />
      </>
    )
    ;
  }

  // 404 Error- EXPERIMENTAL CODE
  /*
  function NotFound() {
    return (
      <Status code={404}>
        <div>
          <h1>Sorry, can’t find that.</h1>
        </div>
      </Status>
    );
  }
  */ 
  

  return (
    <div className='App'>
      <Container>
        <nav> 
            <div id="user-pic">User Pic</div> 
            <div id="user-name">User Name</div> 
            <button id="sign-out">Sign Out</button>
            <button id="sign-in">Sign In With Google</button>
            <Button>Sign In With Facebook</Button>
          <div className='Routes'>
            {/* Link from react-router-dom --> we could use Link, but we won't here */}
            <Button onClick={navigateHome}>Home</Button>
            <Button onClick={navigateToContacts}>Contacts</Button>
            {/* EXPERIMENTAL CODE */}
            <Button onClick={navigateToApp}>App</Button>          
            {/* <Button onClick={navigateToActions}>Route</Button>
            <Button onClick={navigateToGroups}>Route</Button>
            <Button onClick={navigateToTeam}>Route</Button>
            <Button onClick={navigateToDonate}>Route</Button> */}
            {/* --------------------- */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/app" element={<App />} />
              <Route path="/contacts" element={<Contacts />} />
              
              {/* <Route component={NotFound} /> - EXPERIMENTAL CODE */}
            </Routes>
          </div>
          <div>
            Content
            {/* <SignUpForm /> */}
          </div>
        </nav>
      </Container>
    </div>// END
  );
}


// -------BOILERPLATE--------
/* 
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header>
        
//       </header>
//       <div>
//         React
//       </div>
//     </div>
//   );
// }

// export default App;
*/ 
// --------------------