import React from "react";
import innerBanner from "../../assets/images/banner/inner-banner.jpg";
import { Link } from "react-router-dom";

const Nuhm = () => {
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
            <h1>NUHM</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="#.">Schemes</Link>
              </li>
              <li>
                <span>NUHM</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="departments-style-two alternat-2 nuhm_inner">
        <div className="auto-container">
          <div className="content-two">
            <h3 className="color_blue">National Urban Health Mission (NUHM)</h3>
            <br />
            <h5 className="mb-3">
              NUHM envisages to meet health care needs of the urban population
              with the focus on urban poor, by making available to them
              essential primary health care services and reducing their out of
              pocket expenses for treatment
            </h5>
            <h5>
              <b>Goals :</b>
            </h5>
            <ul className="list-item clearfix mt-2">
              <li>
                i) Need based city specific urban health care system to meet the
                diverse health care needs of the urban poor and other vulnerable
                sections.
              </li>
              <li>
                ii) Institutional mechanism and management systems to meet the
                health-related challenges of a rapidly growing urban population
              </li>
              <li>
                iii) Partnership with community and local bodies for a more
                proactive involvement in planning, implementation, and
                monitoring of health activities.
              </li>
              <li>
                iv) Availability of resources for providing essential primary
                health care to urban poor
              </li>
              <li>
                v) Partnerships with NGOs, for profit and not for profit health
                service providers and other stakeholders.
              </li>
            </ul>

            <h5 className="mt-3">
              <b>Goals :</b>
            </h5>
            <p>Services Provided By ASHA Worker</p>
            <ul className="list-item clearfix mt-2">
              <li>1 Community Monitoring.</li>
              <li>2 Home Visit For New Born Care And Antenatal Visits.</li>
              <li>
                3 Routine Immunization For Age Group 0-5 Years And Pregnant
                Woman.
              </li>
              <li>4 Area Visit And Survey For Different National Programs.</li>
            </ul>

            <h5 className="mt-3">
              <b>Schemes Under NUHM</b>
            </h5>
            <p>1 Reproductive And Child Health</p>
            <p>
              Early identification and tracking of the individual beneficiary
              throughout the reproductive lifecycle of women and promote,
              monitor and support the reproductive, maternal, newborn and child
              health (RMNCH) schemes/programme delivery and reporting.
            </p>

            <h5 className="mt-3">
              <b>Key aspects of RCH Portal:</b>
            </h5>
            <ul className="list-item clearfix mt-2 nuhm_list">
              <li>
                Playing a vital role in key decision making and monitoring the
                implementation of health schemes in the country.
              </li>
              <li>
                Helps health workers in planning for service delivery and
                identification of beneficiary due for Antenatal Check-up, Post
                Natal Check-up and Immunization Services.
              </li>
              <li>
                Identification of high-risk pregnant women and tracking of
                health conditions and assistance during the delivery of pregnant
                women.
              </li>
              <li>
                Helps Health Worker in generation of work plan for delivery of
                immunization services to children
              </li>
            </ul>

            <h5 className="mt-3">
              <b>2 Routine Immunisation</b>
            </h5>
            <ul className="list-item clearfix mt-2 nuhm_list">
              <li>For age 0-5 years</li>
              <li>Pregnant Woman</li>
              <li>Buster Dose at 10 & 16 Years Age</li>
            </ul>

            <h5 className="mt-3 mb-2">
              <b>
                <i>3 Pradhan Mantri Matru Vandana Yojana (PMMVY)</i>
              </b>
            </h5>
            <p>
              <b>The Objectives of the PMMVY</b>
            </p>
            <ul className="list-item clearfix mt-2 nuhm_list">
              <li>
                To provide cash incentive for partial compensation for the wage
                loss so that the woman can take adequate rest before and after
                delivery of the first child;
              </li>
              <li>
                To improve health seeking behaviour amongst the Pregnant Women &
                Lactating Mothers (PW&LM).
              </li>
              <li>
                To promote positive behavioural change towards girl child by
                providing additional cash incentive for the second child, if
                that is a girl child.
              </li>
              <li>
                The criteria for determining socially and economically
                disadvantaged sections of society will be the following:
              </li>
            </ul>

            <ul className="list-item clearfix mt-2 nuhm_list">
              <li>
                i. Women belonging to scheduled castes and scheduled tribes;
              </li>
              <li>
                ii. Women who are partially (40%) or fully disabled (Divyang
                Jan)
              </li>
              <li>iii. Women holder of BPL ration Card</li>
              <li>
                iv. Women Beneficiaries under PradhanMantri Jan AarogyaYojana
                (PMJAY) under Ayushman Bharat.
              </li>
              <li>v. Women holding E-shram card</li>
              <li>
                vi. Women farmers who are beneficiaries under KishanSammanNidhi
              </li>
              <li>vii. Women holding MGNREGA Job Card</li>
              <li>
                viii. Women whose net family income is less than Rs. 8 Lakh per
                annum
              </li>
              <li>ix. Pregnant and Lactating AWWs/ AWHs/ ASHAs</li>
              <li>
                x. Any other category as may be prescribed by the Central
                Government
              </li>
            </ul>

            <p>
              The benefit is available to a woman for the first two living
              children provided the second child is a girl.{" "}
              <b>
                In case of the first child the amount of Rs. 5000 in two
                instalments and for the second child, the benefit of Rs. 6000
                will be provided subject to second child is a girl child in one
                instalment after the birth.
              </b>{" "}
              However, for availing benefits for second child, registration
              during the pregnancy shall be mandatory. This would contribute to
              improve the Sex Ratio at Birth and to prevent female foeticide.
            </p>
            <br />

            <p>
              Benefits can be availed only on the basis of the Aadhaar Number of
              Beneficiary so as to avoid any duplication or malpractices.
            </p>

            <h5 className="mt-3 mb-2">
              <b>Registration under the Scheme:</b>
            </h5>
            <ul className="list-item clearfix mt-2 nuhm_list">
              <li>
                I. The eligible women desirous of availing maternity benefits
                are required to register under the scheme at the Anganwadi
                Centre (AWC).
              </li>
              <li>
                II. For registration, the beneficiary shall submit the
                prescribed application Form 1-A, complete in all respects, along
                with the relevant documents and undertaking/consent duly signed
                by her at the AWC. While submitting the form, the beneficiary
                will be required to submit her Aadhaar details with her written
                consent, her/husband/family member‟s Mobile Number and her
                Bank/Post Office account details.
              </li>
              <li>
                III. The prescribed form(s) can be obtained from the AWC. The
                form(s) can also be downloaded from the website of Ministry of
                Women and Child Development (http://wcd.nic.in) and submit the
                same at Aanganwadi Centre.
              </li>
            </ul>

            <h5 className="mt-3 mb-2">
              <b>Janani Suraksha Yojana</b>
            </h5>
            <p>
              JananiSurakshaYojana (JSY) is a safe motherhood intervention under
              the National Health Mission. It is being implemented with the
              objective of reducing maternal and neonatal mortality by promoting
              institutional delivery among poor pregnant women. The scheme,
              launched on 12 April 2005 by the Hon’ble Prime Minister, is under
              implementation in all states and Union Territories (UTs), with a
              special focus on Low Performing States (LPS).
            </p>
            <br />
            <p>
              JSY is a centrally sponsored scheme, which integrates cash
              assistance with delivery and post-delivery care. The Yojana has
              identified Accredited Social Health Activist (ASHA) as an
              effective link between the government and pregnant women.
            </p>

            <h5 className="mt-3 mb-2">
              <b>Objectives:</b>
            </h5>
            <p>
              To increase the institutional deliveries in urban & rural areas.
              To reduce the Maternal Mortality & Infant Mortality among BPL, SC
              & ST.
            </p>

            <h5 className="mt-3 mb-2">
              <b>Strategy:</b>
            </h5>
            <p>
              Beneficiary must be BPL. In case of SC & ST, benefit should be
              given to all pregnant women (including non BPL). The age of
              registered pregnant mothers should not be less than 19 years. The
              benefit should be given to the beneficiaries up to two living
              children.
            </p>
            <br />
            <p>
              For Urban area, the beneficiary after delivery in the institution
              to be paid Rs. 600/- For C-Section Rs. 1500/- are given to the
              beneficiaries
            </p>
            <br />
            <p>
              <b>
                UNDER NUHM DIFFERENT NATIONAL HEALTH PROGRAMMES ARE CONDUCTED
              </b>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nuhm;
