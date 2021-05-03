import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//Components
import Home from './pages/Home'
import Logo from './images/small_logo.png'
import LinkedIn from './images/social/linkedin.svg'
import WhatsApp from './images/social/whatsapp.svg'
import Contact from './pages/ContactUs'
//Styles
import './App.css';

function App() {
  return (
    <Router>
      <div class="container">
        <header>
          <div>
            <Link to="/">
              <img className="nav__logo" src={Logo} alt="logo" />
            </Link>
          </div>
          <nav>
            <ul className="nav__links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/solutions">Solutions</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div className="nav__icons">
            <a><img className="nav__icon" src={LinkedIn} alt="linkedIn icon"/></a>
            <a><img className="nav__icon" src={WhatsApp} alt="whatsapp icon"/></a>
          </div>
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/solutions">
            <solutions />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



function solutions() {
  return <h2>solutions</h2>;
}

export default App;
