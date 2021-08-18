import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { withAuth0, useAuth0 } from "@auth0/auth0-react";
import Landingpage from './components/Landingpage/Landingpage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';

//Components 
import Details from './components/Details/Details.js';
import Bounties  from './components/bounties/bounties';
import Admin from './components/admin/adminPage.js';
import Team from './components/team/teamPage.js';


function App() {

  // Auth0 methods and functions 
  const {user, isAuthenticated, getIdTokenClaims} = useAuth0(); 

  //Will make this request when user is authenticated 
  useEffect(() => {
    if(isAuthenticated){
        getIdTokenClaims()
      .then(res => {
        const jwt = res.__raw;

        const config = {
          header: {},
          method:'',
          baseURL:'',
          url:'',
        }
        axios(config)
        // this is where we can make a request to GET bounty list
          .then(function(response){
            let axiosResults = response.data;
            console.log(axiosResults);
          })
          .catch(function(err){
            console.error(err)
          })
      })
      .catch(function(err){
        console.error(err)
      })
    }
  })

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
           {isAuthenticated  ?  <Bounties/> : null}  
          </Route>

          <Route exact path="/admin">
           {isAuthenticated ? <Admin/> : null}
          </Route> 

          <Route exact path="/about">
            <Team/> 
          </Route>

          <Route exact path="/details">
            <Details/> 
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default withAuth0(App);
