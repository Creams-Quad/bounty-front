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
      {/* <Bounties/> */}
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Landingpage/> 
          </Route>
          <Route exact path="/bountyboard">
            <Bounties/> 
          </Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default withAuth0(App);
