import React, { useEffect, useState } from "react";
import api from "../api";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";
import { Link } from "react-router-dom";

const PublicDisclosure = ({ fetchDepartments, fetchDepartmentData }) => {
  const [departments, setDepartments] = useState([]);

  const fetchDeptDatas = async () => {
    try {
      const response = await api.get("/public_disclosure");
      const filteredDepartments = response.data.filter(
        (department) => department.status === 1
      );
      setDepartments(filteredDepartments);
    } catch (error) {
      console.error("Error fetching department data:", error);
      alert("Failed to fetch department data. Please try again later.");
    }
  };

  useEffect(() => {
    fetchDeptDatas();
  }, []);

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
            <h1>Public Disclosure</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>Public Disclosure</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <section className="departments-style-two alternat-2 pub-dsclr">
        <div className="auto-container">
          <div className="row clearfix">
            {departments.map((dept) => (
              <div
                className="col-lg-4 col-md-12 col-sm-12 departments-block"
                key={dept.id}
              >
                <div className="departments-block-two">
                  <div className="inner-box">
                    <div className="content-box">
                      <h5>
                        <Link
                          to={
                            dept?.department_name === "General Admin Department"
                              ? "/general-admin-department"
                              : dept?.department_name === "Town Planning"
                              ? "/town-planning"
                              : `/${dept?.department_name
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`
                          }
                          state={{ id: dept?.id }}
                        >
                          {dept?.department_name}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicDisclosure;
