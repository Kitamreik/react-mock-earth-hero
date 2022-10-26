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

  const navigateToGroups = () => {
    navigate('/groups', {replace: true});
  };

  const navigateToActions = () => {
    navigate('/actions', {replace: true});
  };

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
    return (
    <>
      <h2>Home</h2>
      <h3>Take action for people & planet</h3>
      <p>Respond to climate change by discovering personalised, positive steps we can take to care for our planet and communities. It's our future to choose</p>
    </>
    ) 
  }
  
  function Contacts() {
    return (
      <>
        <h2>Contacts</h2>
        <p>Have an idea to share?
          Have a suggestion to improve on what we are doing?We would love to hear from you!</p>
        <form>
          <label>Your Email
          <input type="text" placeholder="Email" name="email" id="email"></input>
          </label>
          <label>Message
          <input type="text" placeholder="What's on your mind?" name="message" id="message"></input>
          </label>
          <label><Button>Send</Button></label>
        </form>
      </>
    )
  }

  function App() {
    return (
      <>
      <SignUpForm />
      </>
    )
    ;
  }

  function Actions() {
    return (
      <>
        <h2>*Million Ways to make an impact</h2>
        <p>Well, there’s not quite a million in our database, but there’s bound to be something for everyone here. Start small and work your way up!</p>

        <h3>Our recommendations</h3>
          <img src='.././recommendations.png' alt='the recommendations section'></img>
        <h3>Browse by Categories</h3>
          <img src='.././categories.png' alt='the category section'></img>
        <h3>All Actions</h3>
          <img src='.././actions.png' alt='the all actions section'></img>
      </>
    )
  }
  // you cannot have the word public in the path directory, so use ./

  function Groups() {
    return (
      <>
        <h2>Want to Become a Climate Change Activist?</h2>

        <h3> Join A Local Activism Group</h3>
        <p>You want to find people who share your goals. People who you like and admire, and who are working towards something you believe in. These activists will become your community of friends and co-conspirators.
        Logistically and emotionally, climate activism is too hard to do alone. You need support, and your voice will be more powerful when joined with your group.
        Join multiple groups if you can. This helps prevent "silver bullet thinking" (where activists get locked into a single idea as 'the' solution), and helps build solidarity. Don't expect the group, or the people in the group to be perfect. But look for groups that are pretty well-aligned with where you're at.
        Finding these groups in your area can be challenging. Earth Hero is currently looking to implement a feature to connect new and experienced activists to climate groups and events in their areas.
        If no group or chapter currently exists in your area, consider starting one!</p>

        <h3>Be energetic but prioritise your own health.</h3>
        <p>If you burn out, you can't help. You might even present a challenge to other activists. Be kind to yourself.</p>

        <h3>Joining groups is a gateway. But how far can you go?</h3>
        <p>You might choose to reduce your own fossil fuel and energy use to help shift the culture. You might sue the fossil fuel industry for exploitation and predatory behaviour. How revolutionary can you get? The planet is dying around us and the damage is irreversible; now is the time to push the boundary and challenge the status quo.</p>

        <h3>Climate Groups and Organisations to help you get started:</h3>
       <img src='.././earth-hero-groups.png' alt='a list of Climate Change Organizations'></img>
      </>
    )
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
            <Button onClick={navigateToActions}>Actions</Button>  
            <Button onClick={navigateToGroups}>Groups</Button>

            {/* 
            <Button onClick={navigateToTeam}>Route</Button>
            <Button onClick={navigateToDonate}>Route</Button> */}
            {/* --------------------- */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/app" element={<App />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/actions" element={<Actions />} />
              <Route path="/groups" element={<Groups />} />
              {/* <Route component={NotFound} /> - EXPERIMENTAL CODE */}
            </Routes>
          </div>
          <div>
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