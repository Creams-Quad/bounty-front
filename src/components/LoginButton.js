import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";



const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
        },
    },
}));

export default function LoginButton() {
    const classes = useStyles();
    const { loginWithRedirect} = useAuth0();

    return (
        <div className={classes.root}>
        <Button onClick={() => { 
            loginWithRedirect()
            }} variant="contained">
            Log in
        </Button>
        </div>
    );
}
