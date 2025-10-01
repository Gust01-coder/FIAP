import PerguntasFrequentesSec from "./PerguntasFrequentes";

const MapaSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Nossa Localização</h2>
          <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
            Visite nossa sede para conhecer melhor nossas soluções e conversar com nossa equipe
          </p>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="map-container rounded shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1234567890123!2d-46.6333083!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e45de28bb23%3A0x1d2ed3122aae28a7!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização AgroTech"
              ></iframe>
            </div>
          </div>
        </div>

        <PerguntasFrequentesSec />
        
       </div>
    </section>
  );
};

export default MapaSection;
