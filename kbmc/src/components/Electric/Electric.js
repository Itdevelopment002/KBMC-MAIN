import React, { useEffect, useState } from "react";
import api from "../api";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";
import { Link } from "react-router-dom";

const Electric = () => {
  const [electricData, setElectricData] = useState([]);

  useEffect(() => {
    api
      .get("/electric")
      .then((response) => {
        setElectricData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching electric data:", error);
      });
  }, []);

  return (
    <>
      <section className="page-title">
        <div
          className="bg-layer"
          style={{
            backgroundImage: `url(${innerBanner})`,
          }}
        ></div>
        <div className="line-box">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Electric</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="#.">City Profile</Link>
              </li>
              <li>
                <span>Electric</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br /> <br />
      <section className="service-style-four">
        <div className="auto-container">
          <h5 className="pb-4 fs-5 fw-none">
            In the Kulgaon Badlapur Municipal Council area, there are a total of
            15418 lamps in the east and west areas and the maintenance of the
            said lamps is done through the municipal council for the eastern
            division. Hi-Tech Construction Group for Navi Mumbai and West
            Division. Maintenance and repairs are done through Sagar Sai
            Construction.
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
                    Description
                  </th>
                  <th
                    style={{
                      backgroundColor: "#29aae1",
                      color: "#fff",
                    }}
                  >
                    Mobile No.
                  </th>
                  <th
                    style={{
                      backgroundColor: "#29aae1",
                      color: "#fff",
                    }}
                  >
                    Vendor Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {electricData.length > 0 ? (
                  electricData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.description}</td>
                      <td>{item.mobileNo}</td>
                      <td>{item.vendorName}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Electric;
