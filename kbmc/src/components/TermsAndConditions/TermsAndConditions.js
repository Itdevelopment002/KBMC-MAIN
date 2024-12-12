import React, { useState, useEffect } from "react";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";
import { Link } from "react-router-dom";
import api from "../api";

const TermsAndConditions = () => {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    fetchTerms();
  }, []);

  const fetchTerms = async () => {
    try {
      const response = await api.get("/terms-and-conditions");
      setTerms(response.data);
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
            <h1>Terms and Conditions</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>Terms and Conditions</span>
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
                {terms.map((term) => (
                  <React.Fragment key={term.id}>
                    <h3>{term.heading}</h3>
                    <p>{term.description}</p>
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

export default TermsAndConditions;
