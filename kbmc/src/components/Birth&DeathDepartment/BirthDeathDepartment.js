import React, { useState, useEffect } from "react";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";
import api from "../api";
import { Link } from "react-router-dom";

const BirthDeathDepartment = () => {
  const [departments, setDepartments] = useState([]);

  const fetchDepartments = async () => {
    try {
      const response = await api.get("/departments");
      setDepartments(response.data);
    } catch (error) {
      console.error("Error fetching departments data");
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);
  return (
    <>
      <section className="page-title ">
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
            <h1>Birth & Death Department</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/departments">Departments</Link>
              </li>
              <li>
                <span>Birth & Death Department</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <section className="departments-style-two alternat-2">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-9 col-md-12 col-sm-12 content-side">
              <div className="department-details-content">
                <div className="content-one dept_leyer_1">
                  <div className="title-box">
                    <h3>Birth & Death Department</h3>
                    <hr />
                  </div>
                  <ul>
                    <li>
                      <Link to="#.">Heading 1</Link>
                    </li>
                    <li>
                      <Link to="#.">Heading 2</Link>
                    </li>
                    <li>
                      <Link to="#.">Heading 3</Link>
                    </li>
                    <li>
                      <Link to="#.">Heading 4</Link>
                    </li>
                    <li>
                      <Link to="#.">Heading 5</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
              <div className="department-sidebar">
                <div className="category-widget">
                  <div className="widget-content">
                    <ul className="category-list clearfix">
                      {departments.map((department, index) => (
                        <li key={index}>
                          {" "}
                          <Link to={department.link}>{department.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BirthDeathDepartment;
