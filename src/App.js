import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { withAuth0, useAuth0 } from "@auth0/auth0-react";



import Landingpage from './components/Landingpage/Landingpage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


//Components
import Details from "./components/Details/Details.js";
import Bounties from "./components/bounties/bounties";
import AdminPage from "./components/admin/AdminPage";
import Team from "./components/team/teamPage.js";
import Footer from "./components/Footer/Footer";

function App(){
  // Auth0 methods and functions
  const { isAuthenticated } = useAuth0();


  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Landingpage />
          </Route>

          <Route exact path="/bountyboard">
            {isAuthenticated ? <Bounties /> : <Landingpage/>}
          </Route>

          <Route exact path="/admin">
            {isAuthenticated ? <AdminPage/> : <Landingpage/>}
          </Route>

          <Route exact path="/about">
            <Team />
          </Route>

          <Route exact path="/details">
            <Details />
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default withAuth0(App);
