import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/banner/inner-banner.jpg";
import api from "../api";
import { Link } from "react-router-dom";

const MuncipalProperties = () => {
  const [muncipals, setMuncipals] = useState([]);

  const fetchMuncipal = async () => {
    try {
      const response = await api.get("/muncipal");
      setMuncipals(response.data);
    } catch (error) {
      console.error("Error fetching muncipal data");
    }
  };

  useEffect(() => {
    fetchMuncipal();
  }, []);

  return (
    <>
      <section className="page-title mb-5">
        <div
          className="bg-layer"
          style={{
            backgroundImage: `url(${img1})`,
          }}
        ></div>
        <div className="line-box">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Muncipal Properties</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="#.">City Profile</Link>
              </li>
              <li>
                <span>Muncipal Properties</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="service-style-four">
        <div className="auto-container mt-4">
          <h5 className="pb-4">
            The properties obtained under Accomodation reservation to kulgaon
            badlapur municipal council like halls, shops, markets are rented
            through the tender procedure. Also we have community halls in
            various areas for citizens.
          </h5>

          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="text-center">
                <tr>
                  <th
                    style={{
                      backgroundColor: "#29aae1",
                      color: "#fff",
                    }}
                  >
                    Sr. No
                  </th>
                  <th
                    style={{
                      backgroundColor: "#29aae1",
                      color: "#fff",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      backgroundColor: "#29aae1",
                      color: "#fff",
                    }}
                  >
                    Shops / Sabhagruha / Community Hall / Gymnasium / Library
                  </th>
                  <th
                    style={{
                      backgroundColor: "#29aae1",
                      color: "#fff",
                    }}
                  >
                    Address
                  </th>
                </tr>
              </thead>
              <tbody>
                {muncipals.map((muncipal, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{muncipal.name}</td>
                    <td>{muncipal.propertyType}</td>
                    <td>{muncipal.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default MuncipalProperties;
