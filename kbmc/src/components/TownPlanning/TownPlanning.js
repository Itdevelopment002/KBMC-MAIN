import React, { useEffect, useState } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";
import api, { baseURL } from "../api";
import { Link } from "react-router-dom";

const TownPlanning = () => {
  const [departments, setDepartments] = useState([]);
  const [description, setDescription] = useState([]);
  const [pdf, setPdf] = useState([]);

  const fetchDepartments = async () => {
    try {
      const response = await api.get(`/public_disclosure`);
      setDepartments(response.data);
    } catch (error) {
      console.error("Error fetching departments data");
    }
  };

  const fetchTownPlanningDesc = async () => {
    try {
      const response = await api.get("/development-plan-desc");
      setDescription(response.data);
    } catch (error) {
      console.error("Error fetching development plan description");
    }
  };

  const fetchTownPlanningPdf = async () => {
    try {
      const response = await api.get("/development-plan-pdf");
      setPdf(response.data);
    } catch (error) {
      console.error("Error fetching development plan pdf");
    }
  };

  useEffect(() => {
    fetchDepartments();
    fetchTownPlanningDesc();
    fetchTownPlanningPdf();
  }, []);

  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
    });

    return () => {
      lightbox.destroy();
    };
  }, [pdf]);

  return (
    <div>
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
            <h1>Town Planning Department</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/departments">Departments</Link>
              </li>
              <li>
                <span>Town Planning Department</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <section className="departments-style-two alternat-2" id="town-planning">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-9 col-md-12 col-sm-12 content-side">
              <div className="department-details-content">
                <div className="content-one">
                  <div className="title-box">
                    <h3>Town Planning Department</h3>
                  </div>
                  <div className="text-box">
                    {description.map((desc) => (
                      <p>{desc.description}</p>
                    ))}
                  </div>
                </div>
                <br />
                <div className="content-box">
                  <div className="row">
                    {pdf.map((pdf) => (
                      <div className="col-lg-3 town_plan">
                        <Link
                          to={`${baseURL}/${pdf.image_path}`}
                          data-toggle="lightbox"
                          data-gallery="example-gallery"
                          className="glightbox"
                        >
                          <img
                            src={`${baseURL}/${pdf.image_path}`}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>
                        <h6 className="text-center">{pdf.name}</h6>
                        <div className="pdf-dwnl">
                          <Link
                            to={`${baseURL}/${pdf.pdf_path}`}
                            download
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa fa-download"></i>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
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

export default TownPlanning;
