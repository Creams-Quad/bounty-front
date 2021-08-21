import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'




export default function MemeGenerator(props)

{

    var items = [
                {
                    name: "Mustard Ice-Cream",
                    description: "I love me some mustard ice-cream to enjoy a cold sandwhich",
                    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2019%2F07%2FIce-Cream-Frenchs-Mustard-FT-Blog0719.jpg"
                },
                {
                    name: "'Toothpaste' and 'Orange Juice'",
                    description: "A revolutionary idea to clean your teeth as you eat!",
                    image:"https://i.redd.it/rvxgncp2o3m31.jpg"
                },
                {
                    name: "Ketchap Ice-Cream",
                    description:"If you have mustard ice-cream, why not ketchap as well?",
                    image:"https://i.pinimg.com/originals/dd/d7/59/ddd75921ecface8b9dd6c70fd80239a5.jpg",
                },
                {
                    name:"Mac & Cheese Ice-Cream",
                    description:"The taste of mac and cheese as it melts?",
                    image: "https://pyxis.nymag.com/v1/imgs/d15/f96/f34967e2e54eec88d908f6abca3697f908-macncheese-icecream.rsquare.w1200.jpg",
                },
            ]
            
            return (
                <Carousel >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
                </Carousel>
                )
            }

function Item(props)
{
    return (
        <Paper style={{
            background: "url('https://i.gifer.com/GPkR.gif')"
                }}>
            <h2>{props.item.name}</h2>
            <p style={{
                color:'white', 
                marginBottom:'5%', 
                fontSize: '30pt',
                marginLeft: '8%'
                }}>
                {props.item.description}</p>
            
            <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
            }}>
                <img  alt="ice cream" style={{
                        height: '600px',
                        }}  
                        src={props.item.image} 
                        />
            </div>
        </Paper>
    )
}