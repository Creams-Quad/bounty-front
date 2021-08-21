import React from "react";
import "./landingpage.scss";
import heroImage from "../../assets/image1.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import demo1 from "../../assets/demo1.png";
import demo2 from "../../assets/demo2.png";
import demo3 from "../../assets/demo3.png";

export default function Landingpage() {
  return (
    <div>
      <main>
        <div className="container">
          <div className="grid">
            <div className="grid-item-one">
              <div className="hero-header">
                <h4>A social network for</h4>
                <div className="hero-title">
                  <h1>Solving Ice Cream Based Problems</h1>
                </div>
                <button className="hero-button">Get Started</button>
              </div>
            </div>
            <div className="grid-item-two">
              <img alt="hero" src={heroImage}></img>
            </div>
          </div>
          <section className="section">
            <div className="author-wrapper">
              <div className="center-author">-PROJECT AUTHORS-</div>
              <div className="names">
                <div>
                  CULLEN
                  <br />
                  SHARP
                </div>
                <div>
                  LOUIS
                  <br />
                  LASSEGUE
                </div>
                <div>
                  SUNNY
                  <br />
                  LEE
                </div>
                <div>
                  TEK
                  <br />
                  JONES
                </div>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="servie-title-wrapper">
              <div className="subtag">services</div>
              <h3>What Problems does this solve</h3>
              <p>
                We set out to solve a problem for three types of users. Lets
                check it out.
              </p>
            </div>
            <div className="box-wrapper">
              <div className="box">
                <div>
                  <img alt="icon" className="box-icons" src={icon1}></img>
                </div>
                <div>
                  <div className="box-header">1. Dream</div>
                  <p>Be in the moment of your most creative self.</p>
                </div>
              </div>

              <div className="box solid">
                <div>
                  <img alt="icons" className="box-icons" src={icon2}></img>
                </div>
                <div>
                  <div className="box-header">2. Post your idea</div>
                  <p>Share your imagination so you can see it in REALITY.</p>
                </div>
              </div>

              <div className="box">
                <div>
                  <img alt="icons" className="box-icons" src={icon3}></img>
                </div>
                <div>
                  <div className="box-header">3. Enjoy your creation</div>
                  <p>Watch as others eat your idea while you are too!</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="demo-grid">
              <div className="demo-grid-item-one">
                <img alt="icons" src={demo1}></img>
              </div>
              <div className="demo-grid-item-two">
                <div className="demo-title-wrapper">
                  <div className="box-header">
                    Let's start by creating your first bounty
                  </div>
                  <p>Lorem Ipsum a couple words on that.</p>
                  <button className="demo-button">New Bounty</button>
                </div>
              </div>
            </div>
          </section>
          <section  className="section">
            <div className="demo-grid flex-reverse">
              <div className="demo-grid-item-one">
                <img alt="icons" src={demo2}></img>
              </div>
              <div className="demo-grid-item-two">
                <div className="demo-title-wrapper">
                  <div className="box-header">
                    Click on a bounty to join the conversation
                  </div>
                  <p>Lorem Ipsum a couple words on that.</p>
                  <button className="demo-button">New Bounty</button>
                </div>
              </div>
            </div>
          </section>
          <section style={{marginBottom: "200px"}} className="section">
            <div className="demo-grid">
              <div className="demo-grid-item-one">
                <img alt="icons" src={demo3}></img>
              </div>
              <div className="demo-grid-item-two">
                <div className="demo-title-wrapper">
                  <div className="box-header">
                    Complete some recipes and collect your bounty
                  </div>
                  <p>Lorem Ipsum a couple words on that.</p>
                  <button className="demo-button">New Bounty</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
        
    </div>
  );
}
