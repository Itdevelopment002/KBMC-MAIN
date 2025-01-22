import React, { useState, useEffect } from "react";
import api, { baseURL } from "../api";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";
import { Link, useLocation } from "react-router-dom";

const DeptDataYear = () => {
  const location = useLocation();
  const state = location.state || {};
  const { id } = state;
  const [activeIndex, setActiveIndex] = useState(null);
  const [data, setData] = useState([]);
  const [departmentData, setDepartmentData] = useState([]);
  const [deptData, setDeptData] = useState([]);
  const [departmentName, setDepartmentName] = useState([]);

  const fetchDeptData = async () => {
    try {
      const response = await api.get("/department-datas");
      const filteredDepartments = response.data.filter(
        (department) => department.status === 1
      );
      const filteredData = filteredDepartments.filter(
        (item) => String(item.id) === String(id)
      );
      setDeptData(filteredData);
    } catch (error) {
      console.error("Error fetching department data:", error);
    }
  };

  const fetchData = async () => {
    try {
      if (deptData.length === 0) return;
      const response = await api.get("/department-data-year");
      const filteredDepartments = response.data.filter(
        (department) => department.status === 1
      );
      const filteredData = filteredDepartments.filter(
        (item) => item.department_id === deptData[0]?.id
      );
      setData(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDepartmentData = async () => {
    try {
      const response = await api.get("public_disclosure");
      const filteredDepartments = response.data.filter(
        (department) => department.status === 1
      );
      setDepartmentName(filteredDepartments);
      const filteredData = filteredDepartments.filter(
        (item) => String(item.id) === String(deptData[0]?.public_disclosure_id)
      );
      setDepartmentData(filteredData);
    } catch (error) {
      console.error("Error fetching department data:", error);
    }
  };

  useEffect(() => {
    fetchDeptData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (deptData.length > 0) {
      fetchData();
      fetchDepartmentData();
    }
    // eslint-disable-next-line
  }, [deptData]);

  const groupedData = data.reduce((acc, item) => {
    const { year } = item;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {});

  const sortedData = Object.entries(groupedData).sort(([yearA], [yearB]) => {
    // Parse years for proper sorting
    const parseYear = (y) => parseInt(y.match(/\d{4}/g)?.[0] || "0", 10);
    return parseYear(yearB) - parseYear(yearA);
  });

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
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
            <h1>{departmentData[0]?.department_name}</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/departments">Departments</Link>
              </li>
              <li>
                <span>{departmentData[0]?.department_name}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="departments-style-two faq-section alternat-2">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-9 col-md-12 col-sm-12 content-side">
              <div className="department-details-content">
                <div className="content-one dept_leyer_1">
                  <div className="title-box">
                    <h3>{deptData[0]?.department_heading}</h3>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col-lg-1 col-md-1 col-sm-1 image-column">
                  <div className="image-box">
                    <figure className="image">
                      <img src="assets/images/resource/faq-1.jpg" alt="" />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-11 col-md-11 col-sm-11 content-column">
                  <div className="content-box">
                    <ul className="accordion-box year-accordion-box">
                      {sortedData.map(([year, records], index) => (
                        <li
                          key={index}
                          className={`accordion block ${
                            activeIndex === index ? "active-block" : ""
                          }`}
                        >
                          <div
                            className="acc-btn"
                            onClick={() => handleAccordionClick(index)}
                          >
                            <span className="count-text">{index + 1}</span>
                            <h3>{year}</h3>
                          </div>
                          <div
                            className="acc-content"
                            style={{
                              display: activeIndex === index ? "block" : "none",
                            }}
                          >
                            <div className="row">
                              <div className="col-md-6">
                                <ul>
                                  {records.map((record, idx) => (
                                    <li key={idx}>
                                      <Link
  to={record.pdf.startsWith("http") ? record.pdf : `${baseURL}/${record.pdf}`}
  target="_blank"
  rel="noreferrer"
>
                                        {record.pdfheading}
                                      </Link>
                                    </li>
                                    
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
              <div className="department-sidebar">
                <div className="category-widget">
                  <div className="widget-content">
                    <ul className="category-list clearfix">
                      {departmentName.map((department, index) => (
                        <li key={index}>
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

export default DeptDataYear;
