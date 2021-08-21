import React from 'react';

import { FilledInput } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import './GuildMaster.css'


export default function AdminPage(){

const signUpForm = {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',

}

const style = {

}
const FORM ={
    backgroundColor:'rgba(255,255,188,0.7)',
    borderWidth: '3px',
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius:'8px',
    width:'50vh',
    height:'70vh',
    marginLeft:'10vh'
}
const styleFormBox ={
    borderWidth: '3px',
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius:'8px',
    width: '40vh',
    height: '25vh',
    marginTop:'9vh'
}

const secondScreen={
    backgroundColor:'rgba(255,255,188,0.7)',
    borderWidth: '3px',
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius:'8px',
    width:'50vh',
    height:'70vh',
    marginLeft:'10vh'
}
const headingGuild={
    marginLeft: '15vh',
    marginBottom: '20vh',
    width:'40vh'
}
const mainBackground ={
    background: "url('https://acegif.com/wp-content/gif/outerspace-6.gif') no-repeat",
    backgroundSize:'100%'
}

    return(
        <div>
            <main style={mainBackground}>

                <div style={headingGuild} className="adminPageHeading">
                    <div style={{backgroundColor:"black"}}>
                    <h2 
                    id="GuildMasterTitle"> 
                        Welcome, Guild Master
                        <span aria-hidden>_</span>
                        <span aria-hidden class="masterTitle__glitch">Guild Master_</span>
                        <span aria-hidden class="masterTitle__tag">ORGINAL</span>
                        </h2>
                    </div>
                </div>
                {/* container */}
                <div style={{marginLeft: '50vh', width: '85vh'}}>
                    <h3 id="GuildMasterTitle">Create a user or check the bounties.
                    <span aria-hidden>_</span>
                    <span aria-hidden class="masterTitle__glitch">Create a user or check the bounties_</span>
                    <span aria-hidden class="masterTitle__tag">ORGINAL</span>
                    </h3>
                </div>
                <div>

                </div>
                <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    <div style={FORM} id="FORM">
                        <div style={signUpForm} id="signUpAuth0-form">
                            <form style={style}>
                                <div>
                                    <p style={{marginTop: '2vh'}}>
                                    User's Email
                                    </p>
                                    <FilledInput 
                                        type="email"
                                        label="userEmail"
                                        id="Admin-userEmail"
                                        style={{marginTop: '2vh'}}
                                    >
                                    </FilledInput>
                                </div>

                                <div>
                                    <p style={{marginTop: '2vh'}}>
                                    User's Password
                                    </p> 
                                    <FilledInput 
                                        label="userPassword"
                                        id="Admin-Password"
                                        style={{marginTop: '2vh'}}
                                        color="secondary"
                                        type="password"
                                    >
                                    </FilledInput>
                                </div>
                                <Button>Create User</Button> 
                                <div>
                                    <FilledInput
                                        style={styleFormBox}
                                        label="AdminUserResponse"
                                        id="adminResponse"
                                        placeholder="This will be a request console log for the user to see"
                                        disabled
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style={secondScreen}>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}