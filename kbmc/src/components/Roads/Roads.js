import React, { useEffect, useState } from "react";
import api from "../api";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";
import { Link } from "react-router-dom";

const Roads = () => {
  const [roads, setRoads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoads = async () => {
      try {
        const response = await api.get("/roads");
        setRoads(response.data);
      } catch (err) {
        setError("Error fetching road data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRoads();
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
            <h1>Roads</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="#.">City Profile</Link>
              </li>
              <li>
                <span>Roads</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="service-style-four">
        <div className="auto-container">
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
                    Length
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="3" className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="3" className="text-center">
                      {error}
                    </td>
                  </tr>
                ) : (
                  roads.map((road, index) => (
                    <tr key={road.id}>
                      <td>{index + 1}</td>
                      <td>{road.description}</td>
                      <td>{road.length}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roads;
