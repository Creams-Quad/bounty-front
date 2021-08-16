import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import LoginButton from "../Login";
import "./navbar.scss";

export default function BountyNav() {
  
  return (
    <>
      <Navbar>
        <Navbar.Brand href="/">
          <img alt="" className="" />
        </Navbar.Brand>
        <Nav className="">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/admin">Profile</Nav.Link>
          <Nav.Link href="/Bounty Board">Favorites</Nav.Link>
          <Nav.Link href="/about">Team</Nav.Link>
        </Nav>
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
      </Navbar>
    </>
  );
}
