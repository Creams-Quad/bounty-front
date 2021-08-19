import React, { useState, useContext } from "react";
import "./details.scss";
import iceCream from "../../assets/iceCream.jpg";
import arrowDown from "../../assets/arrowDown.png";
import arrowUp from "../../assets/arrowUp.png";


import { BountyContext } from '../bounties/createBountyProvider.js';

export default function Details() {
  const [karma, setKarma] = useState(1000);

  const { bountyInfo  }  = useContext(BountyContext);

  
  function incrementKarma() {
    setKarma(karma + 1000);
  }

  function decrementKarma() {
    if (karma <= 1000) {
      setKarma(1000);
    } else {
      setKarma(karma - 1000);
    }
  }
console.log('details bounty info', bountyInfo)
  return (
    <div className="container" style={{marginBottom: "200px"}}>
      <div className="details">
        
      </div>
      <div className="detail-wrapper">
        <div className="detail-title">
          <div className="bounty-item">
            <div>
              <div style={{ display: "flex" }}>
                <div className="karma-increment">
                  <div onClick={incrementKarma} style={{ cursor: "pointer" }}>
                  <img className="arrow" src={arrowUp}></img>
                  </div><div className="heart">💜</div><div onClick={decrementKarma} style={{ cursor: "pointer" }}><img className="arrow" src={arrowDown}></img></div>
                </div>
                <div>
                  <h3 className="bounty-title">{bountyInfo.header}</h3>
                  <div className="bounty-descrip">
                    <div className="tiny-text">posted by</div>
                    <h6 className="name">{bountyInfo.poster}</h6>
                    <h5>{}</h5>
                    <div className="descrip-buttons">💜Karma:{karma}</div>
                    <div className="descrip-buttons">📝Comments:3</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ice-Image">
              <img src={iceCream}></img>
            </div>
          </div>
        </div>
        <p>
          {bountyInfo.content}
        </p>
      </div>
    </div>
  );
}
