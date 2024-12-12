import React, { useState, useEffect } from "react";
import api from "../api";
import bannerImage from "../../assets/images/banner/inner-banner.jpg";
import { Link } from "react-router-dom";

const PrivateHospital = () => {
  const [eastHospitals, setEastHospitals] = useState([]);
  const [westHospitals, setWestHospitals] = useState([]);

  const fetchHospitals = async () => {
    try {
      const response = await api.get("/private-hospital");
      const hospitals = response.data;
      const eastDivisionHospitals = hospitals.filter(
        (hospital) => hospital.division === "East"
      );
      const westDivisionHospitals = hospitals.filter(
        (hospital) => hospital.division === "West"
      );
      setEastHospitals(eastDivisionHospitals);
      setWestHospitals(westDivisionHospitals);
    } catch (error) {
      console.error("Error fetching hospital data:", error);
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, []);

  return (
    <div>
      <section className="page-title">
        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${bannerImage})` }}
        ></div>
        <div className="line-box">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Private Hospital</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="#.">City Profile</Link>
              </li>
              <li>
                <span>Private Hospital</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />

      <section className="service-style-four mt-5">
        <div className="auto-container">
          <h5>
            List of Major Hospitals (Government and Private) in Kulgaon Badlapur
            Municipal Council Areas
          </h5>
          <div className="table-responsive mt-3">
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
                    Hospitals
                    style={{
                      backgroundColor: "#29aae1",
                      color: "#fff",
                    }}
                  >
                    Hospitals Name
                  </th>
                  <th
                    style={{
                      backgroundColor: "#29aae1",
                      color: "#fff",
                    }}
                  >
                    Name of Principal Doctor &nbsp; speciality
                  </th>
                  <th
                    style={{
                      backgroundColor: "#29aae1",
                      color: "#fff",
                    }}
                  >
                    Address
                  </th>
                  <th
                    style={{
                      backgroundColor: "#29aae1",
                      color: "#fff",
                    }}
                  >
                    Phone No.
                  </th>
                  <th
                    style={{
                      backgroundColor: "#29aae1",
                      color: "#fff",
                    }}
                  >
                    No. of Beds
                  </th>
                  <th
                    style={{
                      backgroundColor: "#29aae1",
                      color: "#fff",
                    }}
                  >
                    Facilities Provided in Hospital
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td colSpan="7">
                    <b>Names of East Division Hospital</b>
                  </td>
                </tr>
                {eastHospitals.map((east, index) => (
                  <tr key={east.id}>
                    <td>{index + 1}</td>
                    <td>{east.hospital_name}</td>
                    <td>{east.principal_doctor}</td>
                    <td>{east.address}</td>
                    <td>
                      {east.phone_no} / {east.mobile_no}
                    </td>
                    <td>{east.beds}</td>
                    <td>{east.facility}</td>
                  </tr>
                ))}
              </tbody>

              <tbody>
                <tr>
                  <td colSpan="7">
                    <b>Names of West Division Hospital</b>
                  </td>
                </tr>
                {westHospitals.map((west, index) => (
                  <tr key={west.id}>
                    <td>{index + 1}</td>
                    <td>{west.hospital_name}</td>
                    <td>{west.principal_doctor}</td>
                    <td>{west.address}</td>
                    <td>
                      {west.phone_no} / {west.mobile_no}
                    </td>
                    <td>{west.beds}</td>
                    <td>{west.facility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateHospital;
