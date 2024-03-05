import React, { useState } from "react";
import "./Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faMapLocationDot,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

function Detail() {
  const [insights, setinsights] = useState([
    {
      icon: faMoneyBillWave,
      headingText: "Grow Sales",
      desc: "We believe that sales should be about building relationships, not managing data. Our team of experienced sales and technology professionals came together to solve this problem and create a revolutionary sales copilot that will change the way enterprises manage their sales.",
    },
    {
      icon: faMapLocationDot,
      headingText: "Our vision",
      desc: "Our vision is to empower enterprises of all sizes to achieve their sales goals by providing them  Our team of experienced sales and technology professionals came together to solve this problem and create a revolutionary sales copilot that will change the way enterprises manage their sales.",
    },
    {
      icon: faBasketShopping,
      headingText: "Technology",
      desc: "Our sales copilot is built with state-of-the-art technology that leverages machine learning  Our team of experienced sales and technology professionals came together to solve this problem and create a revolutionary sales copilot that will change the way enterprises manage their sales.",
    },
  ]);
  return (
    <>
      <div className="detailContainer">
        <img
          src="https://www.zazz.io/blog/wp-content/uploads/2023/05/image-14.png"
          alt=""
        />
        <h2>Leverage our products to boost your business</h2>
        <div className="itemContainer">
          {insights.map((item, index) => {
            return (
              <div key={index} className="item">
                <span>
                  <FontAwesomeIcon icon={item.icon} size="5x" />
                </span>
                <h3>{item.headingText}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>

    
      </div>
    </>
  );
}

export default Detail;
