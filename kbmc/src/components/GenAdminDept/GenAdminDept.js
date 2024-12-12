import React, { useEffect, useState } from "react";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";
import api from "../api";
import { Link } from "react-router-dom";

const GenAdminDept = () => {
  const [genDepartments, setGenDepartments] = useState([]);
  const [error, setError] = useState(null);
  const [departments, setDepartments] = useState([]);

  const fetchDeptData = async () => {
    try {
      const response = await api.get(`/public_disclosure`);
      const filteredDepartments = response.data.filter(
        (department) => department.status === 1
      );
      setDepartments(filteredDepartments);
    } catch (error) {
      console.error("Error fetching department data:", error);
    }
  };

  useEffect(() => {
    fetchDeptData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const fetchGenDepartments = async () => {
      try {
        const response = await api.get("/generaladmindepartment");
        const filteredDepartments = response.data.filter(
          (department) => department.status === 1
        );
        setGenDepartments(filteredDepartments);
      } catch (err) {
        setError(
          err.response
            ? err.response.data.message
            : "Error fetching departments"
        );
      }
    };

    fetchGenDepartments();
  }, []);

  return (
    <div>
      <section className="page-title ">
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
            <h1>General Admin Department</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/departments">Departments</Link>
              </li>
              <li>
                <span>General Admin Department</span>
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
                    <h3>General Admin Department</h3>
                    <hr />
                  </div>
                  <ul>
                    {error ? (
                      <li>{error}</li>
                    ) : (
                      genDepartments.map((dept) => (
                        <li key={dept.id}>
                          <Link to={dept.heading_link} state={{ id: dept?.id }}>
                            {dept.departments_heading}
                          </Link>
                        </li>
                      ))
                    )}
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
                          <Link
                            to={
                              department?.department_name ===
                              "General Admin Department"
                                ? "/general-admin-department"
                                : department?.department_name ===
                                  "Town Planning"
                                ? "/town-planning"
                                : `/${department?.department_name
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`
                            }
                            state={{ id: department?.id }}
                          >
                            {department?.department_name}
                          </Link>
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
    </div>
  );
};

export default GenAdminDept;
