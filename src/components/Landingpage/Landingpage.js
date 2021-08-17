import React from "react";
import "./landingpage.scss";
import heroImage from "../../assets/image1.png";

export default function Landingpage() {
  return (
    <div>
      <main>
        <div className="container">
          <div className="grid">
            <div className="grid-item-one">
              <div className="hero-header">
                <h5>A social network for</h5>
                <h1>Solving Ice Cream Based Problems</h1>
              </div>
            </div>
            <div className="grid-item-two">
              <img alt="hero Image" src={heroImage}></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
