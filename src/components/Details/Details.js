import React, { useState, useContext, useEffect } from "react";
import "./details.scss";
import iceCream from "../../assets/iceCream.jpg";
import arrowDown from "../../assets/arrowDown.png";
import arrowUp from "../../assets/arrowUp.png";
import {useAuth0} from '@auth0/auth0-react';

import { BountyContext } from "../bounties/createBountyProvider.js";
import axios from "axios";

export default function Details(props) {
  const [karma, setKarma] = useState(1000);
  const {isAuthenticated, getIdTokenClaims} = useAuth0() 
  const { bountyInfo } = useContext(BountyContext);
  const [eachStore, setEachStore] = useState({});

  console.log('line 17', props)
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

  useEffect(()=> {
    if(isAuthenticated){
      getIdTokenClaims()
        .then((res) => {
          const jwt = res.__raw;
          console.log(props)
          
          const config = {
            headers:{"Authorization": `Bearer ${jwt}`},
            method:'get',
            baseURL: process.env.REACT_APP_SERVER,
            url: `api/v2/bounties/${props.formId}`
          }
          axios(config)
            .then(function(response){
              setEachStore({...response.data})
            })
            .catch(function(err){
              console.error(err)
            })
          .catch(function(err){
            console.error(err)
          });
        }
      )
    }
  }, [])
  
  console.log('details state', eachStore)
  return (
    <div className="container" style={{ marginBottom: "200px" }}>
      <div className="details"></div>
      <div className="detail-wrapper">
        <div className="detail-title">
          <div className="bounty-item">
            <div>
              <div style={{ display: "flex" }}>
                <div className="karma-increment">
                  <div onClick={incrementKarma} style={{ cursor: "pointer" }}>
                    <img className="arrow" src={arrowUp}></img>
                  </div>
                  <div className="heart">💜</div>
                  <div onClick={decrementKarma} style={{ cursor: "pointer" }}>
                    <img className="arrow" src={arrowDown}></img>
                  </div>
                </div>
                <div>
                  <h3 className="bounty-title">{eachStore.header}</h3>
                  <div className="bounty-descrip">
                    <div className="tiny-text">posted by</div>
                    <h6 className="name">{eachStore.poster}</h6>
                    <h5>{}</h5>
                    <div className="descrip-buttons">💜Karma:{eachStore.karma}</div>
                    <div className="descrip-buttons">📝Comments:{eachStore.Comments ? eachStore.Comments.length : 0}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ice-Image">
              <img src={iceCream} alt="ice - cream"></img>
            </div>
          </div>
        </div>
        <p>{bountyInfo.content}</p>
      </div>
    
    </div>
  );
}
