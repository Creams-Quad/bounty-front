//component specific imports
import React, { useState, useEffect} from "react";
import axios from "axios";

//Auth
import { withAuth0, useAuth0 } from "@auth0/auth0-react";

//styling imports
import "./bounties.scss";
import TextField from "@material-ui/core/TextField";
import iceCream from "../../assets/iceCream.jpg";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import Details from "../Details/Details.js";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  },
}));

function Bounties(props) {
  const classes = useStyles();
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [formData, setFormData]= useState();
  const [showNewBounty, setShowNewBounty] = useState(false);
  const [idValue, setIdValue] = useState();
  const { user, isAuthenticated, getIdTokenClaims } = useAuth0();
  const [open, setOpen] = React.useState(false);

  const handleOpen = (id) => {
    setOpen(true);
    setIdValue(id)
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims()
        .then((res) => {
          const jwt = res.__raw;
          const config2 = {
            headers: { Authorization: `Bearer ${jwt}` },
            method: "get",
            baseURL: process.env.REACT_APP_SERVER,
            url: "api/v2/bounties",
          };
          axios(config2)
            // this is where we can make a request to GET bounty list
            .then(function (response) {
              let axiosResults = response.data;
              console.log(axiosResults);
              setFormData([...axiosResults.reverse()]);
            })
            .catch(function (err) {
              console.error(err);
            });
        })
        .catch(function (err) {
          console.error(err);
        });
    }
  }, [getIdTokenClaims, isAuthenticated]);

  const handleChange = (event) => {
    setHeading(event.target.value);
  };
  const handleDescChange = (event) => {
    setDescription(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowNewBounty(false);
    //Making a sending a post request for new bounty
    if (isAuthenticated) {
      getIdTokenClaims()
        .then((res) => {
          const jwt = res.__raw;
          const config = {
            headers: { Authorization: `Bearer ${jwt}` },
            method: "post",
            baseURL: process.env.REACT_APP_SERVER,
            url: "api/v2/bounties",
            data: {
              header: heading,
              content: description,
              karma: 1000,
              poster: user.given_name,
            },
          };
          axios(config)
            // this is where we can make a request to GET bounty list
            .then(function (response) {
              let axiosResults = response.data;
              setFormData([{...axiosResults}, ...formData])
            })
            .catch(function (err) {
              console.error(err);
            });
        })
        .catch(function (err) {
          console.error(err);
        });
        setHeading("");
        setDescription("");
    }
  };

  const handleNewBounty = () => {
    setShowNewBounty(true);
  };
  
  return (
    <div  className="container" style={{ marginBottom: "200px" }}>
      <div  className="bounty">
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
              value={description}
              variant="outlined"
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
      {formData
        ? formData.map((bountyItem, idx) => {
            return (
                  <div key={idx} className="board-wrapper">
              <div  type="button" onClick={() => handleOpen(bountyItem.id)} className="bounty-item">
                  <div >
                    <h3  className="bounty-title">
                      {bountyItem.header === null ? (
                        <p>Nothing to Render</p>
                      ) : (
                        bountyItem.header
                      )}
                    </h3>
                    <div  className="bounty-descrip">
                      <div  className="tiny-text">posted by</div>
                      <h6 className="name">
                        {bountyItem.poster === null ? (
                          <p>Nothing to Render</p>
                        ) : (
                          bountyItem.poster
                        )}
                      </h6>
                      <h5>{bountyItem.createdAt}</h5>
                      <div className="descrip-buttons">
                        💜 {bountyItem.karma}
                      </div>
                      <div  className="descrip-buttons">📝Comments:{bountyItem.Comments ?  bountyItem.Comments.length : 0}</div>
                    </div>
                  </div>
                  <div  className="ice-Image">
                    <img src={iceCream} alt="logo"></img>
                  </div>
                </div>
              </div>
            );
          })
        : null}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Details formId={idValue}></Details>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default withAuth0(Bounties);
