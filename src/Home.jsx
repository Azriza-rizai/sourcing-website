import "../css/Home.css"; // Import the CSS file for styling

function Home() {
  return (
  <> 
    <section className="hero">
     <div className="hero-content">
      <h1>Your Global Sourcing Partner</h1>
      <h3>From concept to delivery, we connect your business to the world.</h3>
      <a href="/contact" className="cta-btn">Get in Touch</a>
    </div>
    </section>

    <section className="services" id="services">
        <h2 className="key">Key Services</h2>
        <div className="supplier">
          <h3 className="find">Supplier identification and verification</h3>
          <p>
            Identify and evaluate potential suppliers based on their
            credibility, reputation, and product offerings.
          </p>
      </div>
        <div className="procurement">
          <div className="sourcing">
            <div className="not-too-wide">
              <h3 className="sourcing-title">Product sourcing and procurement</h3>
            </div>
          </div>
          <p>
            Identify and source products from trusted suppliers based on your
            requirements, preferences, and budget.
          </p>
        </div>
        <div className="quality">
          <h3 className="inspection">Quality control and inspection</h3>
          <p>
            Monitoring and evaluating products at various stages of production
            to ensure they meet pre-defined standards.
          </p>
        </div>
        <div
          className="prices">
          <h3>Negotiation of prices and terms</h3>
          <p>
            Secure the best pricing, payment conditions, and delivery terms
            through strategic negotiation with suppliers.
          </p>
        </div>
        <div
          className="logistics"
        >
          <h3>Logistics and shipping management</h3>
          <p>
            Coordinate shipping, customs, and delivery to ensure timely and
            secure transport of goods from supplier to destination..
          </p>
        </div>
    </section>
  </>
  );
}

export default Home;
