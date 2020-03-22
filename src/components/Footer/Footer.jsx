import React from "react";
import "./Footer.scss";

const Footer = () => (
  <div className="footer">
    <p>
      Designed and built by &nbsp;
      <a
        href="https://github.com/rennardmarquez"
        target="_blank"
        rel="noopener noreferrer"
      >
        Rennard Marquez
      </a>
    </p>
    <p>Datasource: John Hopkins University. Updates every 23:59 (UTC)</p>
  </div>
);

export default Footer;
