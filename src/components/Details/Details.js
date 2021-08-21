import React, { useState, useEffect } from "react";
import "./details.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


import iceCream from "../../assets/iceCream.png";
import arrowDown from "../../assets/arrowDown.png";
import arrowUp from "../../assets/arrowUp.png";
import { useAuth0 } from "@auth0/auth0-react";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "40px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

export default function Details(props) {
  const classes = useStyles();
  const [karma, setKarma] = useState(1000);
  const { isAuthenticated, getIdTokenClaims, user } = useAuth0();
  const [eachStore, setEachStore] = useState({});
  const [formComments, setFormComments] = useState("");
  const [comments, setComments] = useState([]);

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

  const handleChange = (event) => {
    setFormComments(event.target.value);
  };

  useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims().then((res) => {
        const jwt = res.__raw;
        const config = {
          headers: { Authorization: `Bearer ${jwt}` },
          method: "get",
          baseURL: process.env.REACT_APP_SERVER,
          url: `api/v2/bounties/${props.formId}`,
        };
        axios(config)
          .then(function (response) {
            setEachStore({ ...response.data });
            setComments([...response.data.Comments]);
          })
          .catch(function (err) {
            console.error(err);
          })
          .catch(function (err) {
            console.error(err);
          });
      });
    }
  }, [getIdTokenClaims, isAuthenticated, props.formId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isAuthenticated) {
      getIdTokenClaims().then((res) => {
        const jwt = res.__raw;
        console.log(jwt);
        const config = {
          headers: { Authorization: `Bearer ${jwt}` },
          method: "post",
          baseURL: process.env.REACT_APP_SERVER,
          url: "api/v2/comments",
          data: {
            bountyId: props.formId,
            poster: user.name,
            header: props.header,
            content: formComments,
          },
        };
        axios(config)
          .then(function (response) {
            setComments([...comments, { ...response.data }]);
          })
          .catch(function (err) {
            console.error(err);
          })
          .catch(function (err) {
            console.error(err);
          });
      });
    }
    setFormComments("");
  };

  return (
    <div className="container" style={{ marginBottom: "200px" }}>
      <div className="details"></div>
      <div className="detail-wrapper">
        <div className="close-x" type="button" onClick={props.onClose}>
          ✖
        </div>
        <div className="detail-title">
          <div className="bounty-item">
            <div>
              <div style={{ display: "flex" }}>
                <div className="karma-increment">
                  <div onClick={incrementKarma} style={{ cursor: "pointer" }}>
                    <img alt="upArrow" className="arrow" src={arrowUp}></img>
                  </div>
                  <div className="heart">💜</div>
                  <div onClick={decrementKarma} style={{ cursor: "pointer" }}>
                    <img
                      alt="downArrow"
                      className="arrow"
                      src={arrowDown}
                    ></img>
                  </div>
                </div>
                <div>
                  <h3 className="bounty-title">{eachStore.header}</h3>
                  <div className="bounty-descrip">
                    <div className="tiny-text">posted by</div>
                    <h6 className="name">{eachStore.poster}</h6>
                    <h5>{}</h5>
                    <div className="descrip-buttons">💜Karma:{karma}</div>
                    <div className="descrip-buttons">
                      📝Comments:
                      {eachStore.Comments ? eachStore.Comments.length : 0}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ice-Image">
              <img src={iceCream} alt="ice - cream"></img>
            </div>
          </div>
        </div>
        <p style={{ marginBottom: "50px" }}>{eachStore.content}</p>
        <div style={{ height: "250px", overflow: "scroll" }}>
          {comments ? (
            comments.map((comments) => {
              return (
                <div key={comments.createdAt} className="user-comments">
                  <div className="user-name">
                    <div>posted by</div>
                    <h6>{comments.poster}</h6>
                  </div>
                  <p>{comments.content}</p>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div className={classes.root}>
            <TextField
              id="outlined-full-width"
              label="Comments"
              placeholder="Join the convo or claim the bounty"
              fullWidth
              multiline
              rows={3}
              margin="normal"
              value={formComments}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
