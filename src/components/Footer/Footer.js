import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{textAlign: "center", padding: "20px"}}>
          <p style={{ fontSize: "15px" }}>
            bountysquad.org © 2021 All rights reserved - Authors / Cullen Sharp,
            Sunny Lee, Louis Lassgeue, Tek Jones
          </p>
        </div>
      </div>
    </footer>
  );
}
