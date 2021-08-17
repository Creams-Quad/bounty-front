import React, { useState, useEffect } from "react";
import logo from "../../assets/bounty.png";
import "./navbar.scss";
import LoginButton from "../LoginButton.js";
import { useAuth0 } from "@auth0/auth0-react";

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
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <nav
        className="navbar"
        style={{
          backgroundColor: scrollState === "top" ? "#f3f0eb" : "white",
          position: "fixed",
        }}
      >
        <div className="nav-container">
          <div className="nav-flex">
            
              <div href="/">
                <img src={logo} alt="" className="logo" />
              </div>
           

            
              <div className="links">
                {isAuthenticated ? (
                  <a style={{ color: "#1e5451" }} href="/admin">
                    Admin
                  </a>
                ) : null}
                {isAuthenticated ? (
                  <a style={{ color: "#1e5451" }} href="/Bounty Board">
                    Bounty Board
                  </a>
                ) : null}
                {isAuthenticated ? null : <LoginButton />}
                <a style={{ color: "#1e5451" }} href="/about">
                  Team
                </a>
              </div>
            
          </div>
          

          <img
            style={{ borderRadius: "50%", height: "75px" }}
            // src={this.props.auth0.user.picture}
            alt=""
          ></img>

         
        </div>
      </nav>
    </>
  );
}
