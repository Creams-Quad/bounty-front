import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import LoginButton from "../Login";
import logo from "../../assets/bounty.png";
import "./navbar.scss";

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
                <img src={logo} alt="" className="logo" />
              </div>
            </div>

            <div>
              <div className="links">
                <a style={{ color: "#1e5451" }} href="/admin">
                  Admin
                </a>
                <a style={{ color: "#1e5451" }} href="/Bounty Board">
                  Bounty Board
                </a>
                <a style={{ color: "#1e5451" }} href="/about">
                  Team
                </a>
              </div>
            </div>
            
          </div>

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
