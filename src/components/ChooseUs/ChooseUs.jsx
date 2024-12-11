import React from "react";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <section className="aboutus ChooseUsSection">
      <div className="container">
        <h1 className="mdHeading">Why Choose Us?</h1>
        <ul className="orderList">
          <li className="mainText">
            Affordable Prices: Starting from AED 200.
          </li>
          <li className="mainText">
            Quick Turnaround: Same-day service for most repairs.{" "}
          </li>
          <li className="mainText">
            Special Discounts: Loyalty rewards for repeat customers and bulk
            service discounts.{" "}
          </li>
          <li className="mainText">
            Expert Technicians: Skilled professionals for all types of motor
            repairs.{" "}
          </li>
        </ul>
        <p className="mainText  mx-auto">
          <span>Note</span>
          "All prices mentioned are for workshop-based services. On-site service
          is available for AED 200, including inspection and installation."
        </p>
      </div>
    </section>
  );
};

export default ChooseUs;
