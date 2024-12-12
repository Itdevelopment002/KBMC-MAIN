import React, { useEffect, useState } from "react";
import api, { baseURL } from "../api";
import { Link } from "react-router-dom";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";
import pdficon from "../../assets/images/icons/PDF-Icons.png";

const RightToService = () => {
  const [pdfData, setPdfData] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/rts_table")
      .then((response) => {
        setPdfData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching PDF data:", error);
      });
  }, []);

  useEffect(() => {
    api
      .get("/righttoservices")
      .then((response) => {
        setServices(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("There was an error fetching the data!", err);
        setError("Failed to fetch services. Please try again later.");
        setLoading(false);
      });
  }, []);

  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.heading]) {
      acc[service.heading] = [];
    }
    acc[service.heading].push(service.description);
    return acc;
  }, {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
            <h1>Right to Service</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>Right to Service</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="service-style-four rts_inner">
        <div className="auto-container">
          <h4 className="mb-3 color_blue">
            Kulgaon Badlapur Municipal Council, Kulgaon.
          </h4>
          <div>
            {Object.keys(groupedServices).length === 0 ? (
              <p>No services available.</p>
            ) : (
              Object.entries(groupedServices).map(([heading, descriptions]) => (
                <div key={heading}>
                  <h5 className="mb-3">{heading}</h5>
                  {descriptions.map((description, index) => (
                    <p className="mb-0" key={index}>
                      {description}
                    </p>
                  ))}
                </div>
              ))
            )}
          </div>

          <div className="table-responsive mt-3">
            <table className="table table-bordered">
              <thead className="text-center">
                <tr>
                  <th
                    width="10%"
                    style={{ backgroundColor: "#29aae1", color: "#fff" }}
                  >
                    Sr. No
                  </th>
                  <th
                    className="text-center"
                    style={{ backgroundColor: "#29aae1", color: "#fff" }}
                  >
                    Description
                  </th>
                  <th
                    width="15%"
                    style={{ backgroundColor: "#29aae1", color: "#fff" }}
                  >
                    Download PDF
                  </th>
                </tr>
              </thead>
              <tbody>
                {pdfData.map((item, index) => (
                  <tr key={item.id}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{item.description}</td>
                    <td className="text-center">
                      <div className="download-box">
                        <div className="icon-box">
                          <Link
                            to={`${baseURL}/${item.pdf_path}`}
                            target="_blank"
                          >
                            <img width="25px" src={pdficon} alt="pdf_icon" />
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default RightToService;
