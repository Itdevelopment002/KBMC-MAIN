import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ServiceHome.css";
import api, { baseURL } from "../api";

const ServicesHome = () => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await api.get("/services");
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services data");
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="container-fluid container-fluid1">
      <section className="service-section-new">
        <section className="council-section service-home">
          <div className="service-sec">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 col-sm-12 links-column">
                <div className="links-inner">
                  <div className="row clearfix mb-2">
                    {services.map((service, index) => (
                      <div
                        className="col-lg-3 col-md-6 col-sm-12 single-column mb-1"
                        key={index}
                      >
                        <Link to={service.service_link}>
                          <div className="single-links theme-btn btn-one">
                            <div className="figure">
                              <img
                                className="Sirv image-main sirv-image-loaded"
                                src={`${baseURL}/${service.main_icon_path}`}
                                data-src="assets/images/icons/Public Disclosure.png"
                                referrerpolicy="no-referrer-when-downgrade"
                                id="responsive-image-1972685"
                                loading="lazy"
                                alt=""
                              />
                              <img
                                className="Sirv image-hover sirv-image-loaded"
                                data-src="assets/images/icons/Public Disclosure-WH.png"
                                referrerpolicy="no-referrer-when-downgrade"
                                id="responsive-image-9979409"
                                loading="lazy"
                                src={`${baseURL}/${service.hover_icon_path}`}
                                alt=""
                              />
                            </div>
                            <h5>
                              <span>{service.service_heading}</span>
                            </h5>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ServicesHome;
