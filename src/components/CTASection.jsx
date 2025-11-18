const CTASection = ({ title, subtitle, children }) => {
  return (
    <section className="py-5 bg-success text-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">{title}</h2>
        <p className="lead mb-4">{subtitle}</p>
        {children}
      </div>
    </section>
  );
};

export default CTASection;
