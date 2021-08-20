import React from 'react';
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
import Footer from './components/Footer/Footer';


function App() {

  // Auth0 methods and functions 
  const {user, isAuthenticated, getIdTokenClaims } = useAuth0(); 

//   const [capability, setCapabilty] = React.useState(false);

// React.useEffect(() => {
//   if(isAuthenticated){
//     getIdTokenClaims()
//     .then((res) => {
//       const jwt = res.__raw
//       const config = {
//         headers: {"Authorization": `Bearer ${jwt}`},
//         method: 'post',
//         baseURL: process.env.REACT_APP_SERVER,
//         url: `login`,
//       }
//       axios(config)
//         .then(function(response){
//           console.log("login response", response);
//         })
//         .catch(function(err){
//           console.error('inside catch')
//         })
//       .catch(function(err){
//         console.error('outside catch')
//       })
//     })
//   }
// }, [getIdTokenClaims, isAuthenticated])

// if()

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
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default withAuth0(App);
