import React, { useState, useEffect } from "react";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";
import { Link } from "react-router-dom";
import api from "../api";

const PrivacyPolicy = () => {
  const [policy, setPolicy] = useState([]);

  useEffect(() => {
    fetchPolicy();
  }, []);

  const fetchPolicy = async () => {
    try {
      const response = await api.get("/privacy-policy");
      setPolicy(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section className="page-title">
        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${innerBanner})` }}
        ></div>
        <div className="line-box">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Privacy Policy</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>Privacy Policy</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="event-details">
        <div className="auto-container">
          <div className="content-side">
            <div className="event-details-content">
              <div className="content-one">
                {policy.map((policy) => (
                  <React.Fragment key={policy.id}>
                    <h3>{policy.heading}</h3>
                    <p>{policy.description}</p>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
