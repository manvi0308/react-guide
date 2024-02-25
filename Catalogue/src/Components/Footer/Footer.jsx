import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you get the latest version
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const footerOneContents = [
    {
      id: 1,
      item: "A",
    },
    {
      id: 2,
      item: "B",
    },
    {
      id: 3,
      item: "C",
    },
    {
      id: 4,
      item: "D",
    },
  ];
  return (
    <div className="footer">
      <div className="footerContents">
        <ol>
          {footerOneContents.map((item) => {
            return <li key={item.id}>{item.item}</li>;
          })}
        </ol>
      </div>
      <div className="footerContents">
        <ol>
          {footerOneContents.map((item) => {
            return <li key={item.id}>{item.item}</li>;
          })}
        </ol>
      </div>
      <div className="footerContents">
        <ol>
          {footerOneContents.map((item) => {
            return <li key={item.id}>{item.item}</li>;
          })}
        </ol>
      </div>
      <div className=" quickLinks">
        <h4>Quick Links</h4>
        <ol>
          <li>
            <FontAwesomeIcon icon={faFacebookF} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} />
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Footer;
