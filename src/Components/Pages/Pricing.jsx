import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pricing.css";

const Pricing = () => {
  const navigate = useNavigate();

  const pricingPlans = [
    {
      plan: "For Individual",
      price: "9.99",
      currency: "$",
      description: "Ideal for individuals who are just getting started.",
    },
    {
      plan: "For Student",
      price: "19.99",
      currency: "$",
      description: "Perfect for small teams or freelancers.",
    },
    {
      plan: "For Business",
      price: "29.99",
      currency: "$",
      description: "Best for large teams and advanced users.",
    },
  ];

  const handleChoosePlan = () => {
    navigate("/signin"); // Redirect to the Sign In page
  };

  return (
    <div className="pricing-container">
      <h2 className="pricing-title">Our Pricing Plans</h2>
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="price-card">
            <h3 className="plan-title">{plan.plan}</h3>
            <div className="price">
              <span className="currency">{plan.currency}</span>
              <span className="amount">{plan.price}</span>
            </div>
            <p className="description">{plan.description}</p>
            <button
              className="choose-plan-btn"
              onClick={handleChoosePlan}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
