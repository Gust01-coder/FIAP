import React from "react";

const CTASection = ({ title, subtitle, children }) => {
  return (
    <section class="py-5 bg-success text-white">
      <div class="container text-center">
        <h2 class="fw-bold mb-4">{title}</h2>
        <p class="lead mb-4">{subtitle}</p>
        {children}
      </div>
    </section>
  );
};

export default CTASection;
