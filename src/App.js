import {Routes, Route, useNavigate} from 'react-router-dom';
// BrowserRouter as Router from react-router-dom --> add for gatsby 
// Bootstrap: https://react-bootstrap.github.io/getting-started/introduction/
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

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

  // template
  // const navigateToFunction = () => {
  //   navigate('/path', {replace: true});
  // };

  /*
   // When the replace property on the options object is set to true, the current entry in the history stack gets replaced with the new one.

  // In other words, navigating to the new route won't push a new entry into the history stack, so if the user clicks the back button, they won't be able to navigate to the previous page.
  // For example, this is useful when a user logs in, because you don't want them to be able to click the back button and get back to the login page.

  // It is also useful if you have a route that redirects users to a different page, because you don't want users to click the back button and get redirected again.

// Add'l documentation: https://v5.reactrouter.com/web/guides/quick-start
  */ 
 
const navigateToGetInvolved = () => {
    navigate('/get-involved', {replace: true});
  };

const navigateToDonate = () => {
    navigate('/donate', {replace: true});
  };

  const navigateToTeam = () => {
    navigate('/team', {replace: true});
  };

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
  
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };

  // Components that Render --> "Route"
  function Home() {
    return (
    <>
      <h2>Home</h2>
      <h3>Take action for people & planet</h3>
      <p>Respond to climate change by discovering personalised, positive steps we can take to care for our planet and communities. It's our future to choose</p>
      <img src='.././earth-hero-phone.png' alt='EH on mobile'></img>
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

  function Team() {
    return (
      <>
        <h2>Team</h2>
        <h3>We Are Earth Heroes</h3>
        <p>We believe a billion compassionate activists can restore a healthy earth where life can thrive, so we are motivated to inspire people and their communities to join the global climate movement.

        Our nonprofit volunteer team is focused on providing tools and ideas that empower all who want to reduce emissions and care for our shared planet. We help people to effectively respond to the climate emergency while strengthening their resilience and quality of life.</p>

      <img src='.././team.png' alt='team members of EH'></img>

      <img src='.././team-2.png' alt='team members of EH'></img>

      <img src='.././team-3.png' alt='team members of EH'></img>
      </>

    )
  }

  function GetInvolved() {
    return (
      <>
        <h1>Make An Impact on a Global Scale</h1>
        <p>Earth Hero is a group of volunteers who came together to do our part to address the climate crisis. We contribute in different ways with our own unique interests -- yet share a common cause.

        Many hands make light work and accelerates change. If you are interested, and can spare at least 20 hours per month, send a message in the contact form below.

        You can check out the positions we are actively recruiting for here.
        </p>

        <h3>Ways to Get Involved</h3>
        <ul>
          <ol>Writing Actions, Articles & Other Content</ol>
          <ol>Website Dev (Javascript React/Gatsby)</ol>
          <ol>Carbon Pollution Modeling</ol>
          <ol>Research</ol>
          <ol>Translations</ol>
          <ol>Social Media Support</ol>
          <ol>UX/UI Design</ol>
          <ol>Art or Graphic Design</ol>
          <ol>App Development (Swift and Kotlin)</ol>
          <ol>Any other way that interests you!</ol>
        </ul>
        <br />
        <Contacts />

      </>
    )
  }

  function Donate () {
    return (
      <>
        <h1>Support Our Mission</h1>
        <p>Together, we can create a more sustainable future.</p>
        <Button style={{backgroundColor: "green"}}>DONATE</Button>
        <br />
        <br />
        
        <h2>Why Donate?</h2>
        <p>Earth Hero is a non-profit team of volunteers working to address the climate emergency and improve our shared planet. Your support helps us increase the positive impact and cover our costs.</p>
        <br />
        
        <h2>Donate to empower action.</h2>
        <img src='' alt=''></img>
        <p>
        Earth Hero provides tools and resources that help tens of thousands act as change agents.</p>
        <br />

        <h2>Donate to make the global, personal. </h2>
        <img src='' alt=''></img>
        <p>Earth hero envisions a future of one billion activists committed to restoring a healthy Earth where life can thrive.</p>
        <br />
        
        <h2>Donate to improve lives</h2>
        <img src='' alt=''></img>
        <p>Whether adjusting your mode of transportation or your eating habits, Earth Hero provides personalized guidance to help people lead more fulfilling and sustainable lives.</p>
        <br />

        <h2>Donate because this depends on it.</h2>
        <img src='' alt=''></img>
        <p>
        This planet needs you. We cannot do this alone. A collective effort is necessary so future generations can enjoy this world.</p>

        <br />
        <h2>Where does your money go?</h2>
        <p>At Earth Hero, we are committed to acting as ethical stewards of your gifts. Your support ensures that Earth Hero is 100% free for everyone around the world. It funds the technology and tools we use to create, improve, distribute, and spread the message about better ways of living.</p>
        <Button style={{backgroundColor: "green"}}>DONATE</Button>
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
  
  // What renders as the entry point
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
            {/* EXPERIMENTAL CODE */}
            <Button onClick={navigateToApp}>App</Button>
            <Button onClick={navigateToActions}>Actions</Button>  
            <Button onClick={navigateToGroups}>Groups</Button>
            <Button onClick={navigateToTeam}>Team</Button>
            <Button onClick={navigateToGetInvolved}>Get Involved </Button>
            <Button onClick={navigateToContacts}>Contact</Button>
            <Button onClick={navigateToDonate}>Donate</Button> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/app" element={<App />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/actions" element={<Actions />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/team" element={<Team />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/donate" element={<Donate />} />
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