import './App.css';
import Navbar from './components/Navbar/Navbar';
import { withAuth0, useAuth0 } from "@auth0/auth0-react";
import Landingpage from './components/Landingpage/Landingpage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Bounties  from './components/bounties/bounties';

function App() {
const {user, isAuthenticated} = useAuth0(); 

  return (
    <div className="App">
      <Navbar></Navbar>
      <Landingpage/>

      <Router>
        <Switch>
          <Route exact path="/">
            {isAuthenticated ? <Bounties/> : null}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default withAuth0(App);
