import React from 'react';


import TransitionsModal from '../team/modal.js';
import MediaCard from '../team/teamCard.js';
import MemeGenerator from './memeGenerator.js';

export default function Team(){ 

    return(
        <div className="container">
            <main>
                <div style={{marginTop: "100px",marginBottom: "200px"}}>
                    <div style={{
                        background: "url('https://c.tenor.com/wcrmL2x1D2gAAAAC/assorted-icecream.gif')",
                        backgroundSize: 'contain',
                        opacity: '0.7',
                        color: 'white'
                    }}>
                        <h1 style={{
                            
                        }}>Our Mission</h1> 
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems:'center',
                    }}>
                        <p style={{marginTop:'3%'}}>A Bounty formed through the love and desire for the ice cream of your dreams. We innovate through imagination and create reality with just a thought.</p>
                    </div>

                    <div style={{
                        marginTop: '10%'
                    }}>
                        <MemeGenerator />
                    </div>

                    <div style={{
                        marginTop: '10%',
                        marginBottom: '10%',
                    }}>
                        <p>As you can see from the slide-show up above, there are many different ideas that have lots of potential. We want to understand what users really want in their ice-cream.</p>
                        <TransitionsModal/> 
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent:'center',
                        alignItems: 'center',
                        marginBottom:'5%'
                    }}>
                        <h2>Our Team</h2>
                    </div>
                    <MediaCard/> 
                </div>
            </main>
        </div>
    ) 
}