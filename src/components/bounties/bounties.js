import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./bounties.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import iceCream from "../../assets/iceCream.jpg";

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

export default function Bounties() {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [showNewBounty, setShowNewBounty] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowNewBounty(false);
  };

  const handleNewBounty = () => {
    console.log("pressed");
    setShowNewBounty(true);
  };

  return (
    <div className="container">
      <div className="bounty">
        <h4 style={{ color: "#1e5451" }}>
          Create bounties or hunt outstanding claims
        </h4>
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
              value={value}
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
              rows={4}
              defaultValue="Default Value"
              variant="outlined"
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Primary
          </Button>
        </form>
      </div>

      <div className="board-wrapper">
        <Link to="/details">
          <div className="bounty-item">
            <div>
              <h3 className="bounty-title">Vegan Creamcicle Ice Cream</h3>
              <div className="bounty-descrip">
                <div className="tiny-text">posted by</div>
                <h6 className="name">Tek Jones</h6>
                <h5> 01-23-21//4:30</h5>
                <div className="descrip-buttons">💜Karma:1000</div>
                <div className="descrip-buttons">📝Comments:3</div>
              </div>
            </div>
            <div className="ice-Image">
              <img src={iceCream}></img>
            </div>
          </div>
        </Link>

        <div className="bounty-item">
          <div>
            <h3 className="bounty-title">Vegan Creamcicle Ice Cream</h3>
            <div className="bounty-descrip">
              <div className="tiny-text">posted by</div>
              <h6 className="name">Tek Jones</h6>
              <h5> 01-23-21//4:30</h5>
              <div className="descrip-buttons">💜Karma:1000</div>
              <div className="descrip-buttons">📝Comments:3</div>
            </div>
          </div>
          <div className="ice-Image">
            <img src={iceCream}></img>
          </div>
        </div>

        <div className="bounty-item">
          <div>
            <h3 className="bounty-title">Vegan Creamcicle Ice Cream</h3>
            <div className="bounty-descrip">
              <div className="tiny-text">posted by</div>
              <h6 className="name">Tek Jones</h6>
              <h5> 01-23-21//4:30</h5>
              <div className="descrip-buttons">💜Karma:1000</div>
              <div className="descrip-buttons">📝Comments:3</div>
            </div>
          </div>
          <div className="ice-Image">
            <img src={iceCream}></img>
          </div>
        </div>

        <div className="bounty-item">
          <div>
            <h3 className="bounty-title">Vegan Creamcicle Ice Cream</h3>
            <div className="bounty-descrip">
              <div className="tiny-text">posted by</div>
              <h6 className="name">Tek Jones</h6>
              <h5> 01-23-21//4:30</h5>
              <div className="descrip-buttons">💜Karma:1000</div>
              <div className="descrip-buttons">📝Comments:3</div>
            </div>
          </div>
          <div className="ice-Image">
            <img src={iceCream}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
