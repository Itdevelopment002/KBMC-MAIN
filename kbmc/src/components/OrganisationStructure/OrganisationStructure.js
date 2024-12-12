import React from "react";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";
import img1 from "../../assets/images/Organization-structure.jpg";
import { Link } from "react-router-dom";

const OrganisationStructure = () => {
  return (
    <>
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
            <h1>Organization Structure</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>Organization Structure</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="departments-style-two alternat-2">
        <div className="auto-container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img width="100%" src={img1} className="img-fluid" alt="" />
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrganisationStructure;
