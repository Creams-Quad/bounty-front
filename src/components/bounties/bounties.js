//component specific imports
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

//Context
import { BountyContext } from '../bounties/createBountyProvider.js';

//Auth
import { withAuth0, useAuth0 } from "@auth0/auth0-react";

//styling imports 
import { Description, SettingsInputAntennaTwoTone } from "@material-ui/icons";
import "./bounties.scss";
import TextField from "@material-ui/core/TextField";
import iceCream from "../../assets/iceCream.jpg";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";





const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Bounties(props) {
  const classes = useStyles();
  const [heading, setHeading] = useState("");
  const [description, setDescription]= useState("")

  const { bountyInfo, setBountyInfo }  = useContext(BountyContext);

  const [showNewBounty, setShowNewBounty] = useState(false);
  const {user, isAuthenticated, getIdTokenClaims} = useAuth0();

  useEffect(() => {
    if(isAuthenticated){
      getIdTokenClaims()
      .then(res => {
        const jwt = res.__raw;
        const config2 = {
          headers: {"Authorization":`Bearer ${jwt}`},
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: 'api/v2/bounties',
        }
        axios(config2)
        // this is where we can make a request to GET bounty list
        .then(function(response){
          let axiosResults = response.data;
          // console.log(axiosResults);
          setBountyInfo(axiosResults)
        })
        .catch(function(err){
          console.error(err)
        })
      })
      .catch(function(err){
      console.error(err);
      })
    }
  }, [bountyInfo] );
  
  // console.log('coming from bounty.js', user);
  
  const handleChange = (event) => {
    setHeading(event.target.value);
  };
  const handleDescChange = (event) => {
    setDescription(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowNewBounty(false);
    //Making a sending a post request for new bounty
    if(isAuthenticated){
      getIdTokenClaims()
      .then(res => {
        const jwt = res.__raw;
        const config = {
            headers: {"Authorization":`Bearer ${jwt}`},
            method:'post',
            baseURL:process.env.REACT_APP_SERVER,
            url:'api/v2/bounties',
            data: {
              header: heading,
              content: description,
              karma: 100, 
              poster: user.given_name,
            },
          }
          axios(config)
          // this is where we can make a request to GET bounty list
            .then(function(response){
              let axiosResults = response.data;
              console.log("",axiosResults);
            })
            .catch(function(err){
              console.error(err)
            })
          })
      .catch(function(err){
        console.error(err)
      })
    }
  }  
  // log the db for bounty  
  // console.log(dbBounty)       
          
  // show form        
  const handleNewBounty = () => {
    console.log("pressed");
    setShowNewBounty(true);
  };

  return (
    <div className="container" style={{marginBottom: "200px"}}>
      <div className="bounty">
        <div style={{ color: "#1e5451" }}>
          Create bounties or hunt outstanding claims
        </div>
      </div>
      <div className="new-bounty-wrapper">
        <Button onClick={handleNewBounty} variant="contained">
          New Bounty
        </Button>

        <form
          style={{ display: showNewBounty ? "block" : "none" }}
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Title"
              multiline
              maxRows={4}
              value={heading}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              id="outlined-textarea"
              label="Karma Points"
              placeholder="Placeholder"
              multiline
              value="1000"
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={8}
              onChange={handleDescChange}
              defaultValue=""
              variant="outlined"
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
        {bountyInfo ?  bountyInfo.reverse().map((bountyItem) => {
          return(
            <div className="board-wrapper">
                <Link to="/details">
                  <div className="bounty-item">
                    <div>
                      <h3 className="bounty-title">{bountyItem.header === null ? <p>Nothing to Render</p>  : bountyItem.header}</h3>
                      <div className="bounty-descrip">
                        <div className="tiny-text">posted by</div>
                        <h6 className="name">{bountyItem.poster === null ? <p>Nothing to Render</p>  : bountyItem.poster}</h6>
                        <h5> 01-23-21//4:30</h5>
                        <div className="descrip-buttons">`💜${bountyItem.karma}`</div>
                        <div className="descrip-buttons">📝Comments:3</div>
                      </div>
                    </div>
                    <div className="ice-Image">
                      <img src={iceCream}></img>
                    </div>
                  </div>
                </Link>
            </div>
          )
        }): null}
    </div>

  );
}
export default withAuth0(Bounties);
