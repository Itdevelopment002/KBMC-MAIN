import React, { useState, useEffect } from "react";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";
import api from "../api";
import { Link } from "react-router-dom";

const Functions = () => {
  const [functions, setFunctions] = useState([]);

  const fetchFunctions = async () => {
    try {
      const response = await api.get("/functions");
      setFunctions(response.data);
    } catch (error) {
      console.error("Error fetching function data:", error);
    }
  };

  useEffect(() => {
    fetchFunctions();
  }, []);

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
            <h1>Functions</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>Functions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />

      <section className="departments-style-two alternat-2">
        <div className="auto-container">
          <div className="content-two">
            <h3>
              DUTIES AND FUNCTIONS OF THE COUNCIL AND THE MUNICIPAL EXECUTIVE.
            </h3>
            <br />
            <ul className="list-item clearfix">
              <li>
                Except as otherwise provided in this Act, the municipal
                Government of a municipal area shall vest in the Council.
              </li>
              <li>
                In addition to the duties imposed upon it by or under this Act
                or any other law for the time being in force, it shall be the
                duty of every Council to undertake and to make reasonable
                provision for the following matters within the limits of the
                municipal area, and when effective measures cannot otherwise be
                made then even outside the said limits, namely:—
                <ul>
                  {functions.map((func, index) => (
                    <li key={index}>
                      <b>{String.fromCharCode(97 + index)}.</b>{" "}
                      {func.description}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Functions;
