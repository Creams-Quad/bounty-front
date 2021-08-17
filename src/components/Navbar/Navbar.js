import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import logo from "../../assets/bounty.png";
import "./navbar.scss";
import LoginButton from '../LoginButton.js';
import {useAuth0} from '@auth0/auth0-react'

import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

export default function BountyNav() {
  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  // nav bar color change on scroll
  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== "amir") {
          setScrollState("amir");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  const {isAuthenticated} = useAuth0();


  return (
    <>
      <nav
        className="navbar"
        style={{
          backgroundColor: scrollState === "top" ? "#f3f0eb" : "white",
          position: "fixed",
        }}
      >
        <div className="container">
          <div className="nav-flex">
            <div>
              <div href="/">
                <img src={logo} alt="" className="logo"/>
              </div>
            </div>

            <div>

              <Navbar className="links"> 
                {
                isAuthenticated ? 
                <Link style={{margin:'10px', color: "#1e5451" }} to="/admin">
                  Admin
                </Link> : null
                }
                {
                isAuthenticated ? 
                <Link style={{margin:'10px', color: "#1e5451" }} to="/bountyboard">
                  Bounty Board
                </Link>
                : null 
                }
                <Link style={{margin:'10px', color: "#1e5451" }} to="/about">
                  Team
                </Link>
              </Navbar>

            </div>
            
          </div>
          {isAuthenticated ?
         null
          : <LoginButton/>  
        }
          {/* {!this.props.auth0.isAuthenticated ? (
          <LoginButton />
        ) : ( */}
          <img
            style={{ borderRadius: "50%", height: "75px" }}
            // src={this.props.auth0.user.picture}
            alt=""
          ></img>
          {/* )} */}
          <Form inline></Form>
        </div>
      </nav>
    </>
  );
}
