import React, { useState, useEffect } from "react";
import logo from "../../assets/bounty.png";
import "./navbar.scss";

import LoginButton from "../LoginButton.js";
import { useAuth0 } from "@auth0/auth0-react";

import {Link} from 'react-router-dom'




export default function BountyNav() {
  const [scrollState, setScrollState] = useState("top");
  const { isAuthenticated } = useAuth0();
  
  // nav bar color change on scroll
  useEffect(() => {
    let listener = null;
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

 

  return (
    <>
      <nav
        className="navbar"
        style={{
          backgroundColor: scrollState === "top" ? "#f3f0eb" : "white",
          position: "fixed",
          zIndex: 10,
        }}
      >
        <div className="nav-container">
          <div className="nav-flex">
            
              <div >
                <a href="/">
                  <img href= "/" src={logo} alt="" className="logo"/>
                </a>  
              </div>
              <div className="links" style={{display: "flex", alignItems: "center", justifyContent: "center"}}> 
                
              {isAuthenticated ? 
                <Link style={{margin:'10px', color: "#1e5451" }} to="/admin">
                  Guild Master's Room
                </Link>
                : null 
              }
                {isAuthenticated ? 
                  <Link style={{margin:'10px', color: "#1e5451" }} to="/bountyboard">
                    Bounty Board
                  </Link>
                  : null 
                }


                <Link style={{marginRight:'20px', marginLeft:'10px', color: "#1e5451" }} to="/about">
                  Team
                </Link>           

                {isAuthenticated ? null : <LoginButton/>}


              </div>

            </div>
            
          </div>

          <img
            style={{ borderRadius: "50%", height: "75px" }}
            // src={this.props.auth0.user.picture}
            alt=""
          ></img>

      </nav>
    </>
  );
}
