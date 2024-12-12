import React, { useEffect, useState } from "react";
import api from "../api";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";
import { Link } from "react-router-dom";

const TreeCensus = () => {
  const [treeData, setTreeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    api
      .get("/tree-census")
      .then((response) => {
        setTreeData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tree census data:", err);
        setError("Error loading data");
        setLoading(false);
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
            <h1>Tree Census</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="#.">City Profile</Link>
              </li>
              <li>
                <span>Tree Census</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <section className="service-style-four mt-5">
        <div className="auto-container">
          <h5 className="pb-4">
            The Maharashtra (Urban Area) Tree Protection and Conservation Act
            came into being in 1975. As per the provisions of these Acts, the
            Tree Authority is bound to enumerate all the trees under its
            jurisdiction. Accordingly, the tree census report in Kulgaon
            Badlapur Municipal Council is as follows.
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
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="3" className="text-center">
                      Loading data...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="3" className="text-center text-danger">
                      {error}
                    </td>
                  </tr>
                ) : (
                  treeData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.description}</td>
                      <td>{item.total}</td>
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

export default TreeCensus;
