import React from "react";
import "./Insdustries.css";
import industries1 from "../../assets/industires-1.jpg";
import industries2 from "../../assets/industires-2.jpg";
import industries3 from "../../assets/industires-3.jpg";
import industries4 from "../../assets/industires-4.jpg";

const Industries = () => {
  return (
    <section className="IndustriesSection" id="Industries">
      <div className="container">
        <h2 className="mdHeading  industryHeading">Industries We Serve </h2>
        <div className="IndustriesRow">
          <div className="row ">
            <div className="col-lg-6">
              <div className="IndustriesTextCol">
                <h1 className="mdHeading">Swimming Pools </h1>
                <ul className="industriesList">
                  <li className="mainText">
                    Services: Pool pump repair, maintenance and motor rewinding.{" "}
                  </li>
                  <li className="mainText">Starting Price: AED 200.</li>
                  <li className="mainText">
                    Special Offer: Discounts for villa communities and annual
                    maintenance packages.{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="IndustriesImgCol">
                <img
                  src={industries1}
                  alt="Swimming Pools"
                  className="IndestreisImage"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="IndustriesRow">
          <div className="row colReverce">
            <div className="col-lg-6">
              <div className="IndustriesImgCol">
                <img
                  src={industries2}
                  alt="real estate"
                  className="IndestreisImage"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="IndustriesTextCol">
                <h1 className="mdHeading">
                  Real Estate (Residential & Commercial)
                </h1>
                <ul className="industriesList">
                  <li className="mainText">
                    Services: Repair and maintenance of building motors, water
                    pumps and generators.
                  </li>
                  <li className="mainText">Starting Price: AED 200.</li>
                  <li className="mainText">
                    Special Offer: Special rates for bulk work and discounts for
                    repeat customers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="IndustriesRow">
          <div className="row ">
            <div className="col-lg-6">
              <div className="IndustriesTextCol">
                <h1 className="mdHeading">Water and Sewage Management</h1>
                <ul className="industriesList">
                  <li className="mainText">
                    Services: Pump repairs for water treatment plants, sewage
                    systems, and borewell motors.
                  </li>
                  <li className="mainText">Starting Price: AED 200.</li>
                  <li className="mainText">
                    Special Offer: Annual maintenance contracts with special
                    rates.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="IndustriesImgCol">
                <img
                  src={industries3}
                  alt="water and sewage"
                  className="IndestreisImage"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="IndustriesRow">
          <div className="row colReverce">
            <div className="col-lg-6">
              <div className="IndustriesImgCol">
                <img
                  src={industries4}
                  alt="Manufacturing and industry"
                  className="IndestreisImage"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="IndustriesTextCol">
                <h1 className="mdHeading">Manufacturing and Industry</h1>
                <ul className="industriesList">
                  <li className="mainText">
                    Services: Industrial motor rewinding, pump repairs,
                    generator motor maintenance, and conveyor belt motor
                    services.
                  </li>
                  <li className="mainText">
                    Starting Price: Based on motor size and type.
                  </li>
                  <li className="mainText">
                    Special Offer: Discounts for factory setups and repeat
                    services.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
