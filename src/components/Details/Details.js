import React from "react";
import "./details.scss";
import iceCream from '../../assets/iceCream.jpg'

export default function Details() {
  return (
    <div className="container">
      <div className="details">
        <h4>details</h4>
      </div>
      <div className="detail-wrapper">
        <div className="detail-title">
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit
          doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
          deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
          velit hic maxime
        </p>
      </div>
    </div>
  );
}
