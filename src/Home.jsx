import "../css/main.css"; // Import the CSS file for styling

function Home() {
  return (
  <> 
      <section class="hero">
     <div class="hero-content">
      <h2>Your Global Sourcing Partner</h2>
      <p>From concept to delivery, we connect your business to the world.</p>
      <a href="#contact" class="cta-btn">Get in Touch</a>
    </div>
     </section>

    <section class="services" id="services">
      <div class="container">
        <h2>Key Services</h2>
        <div class="supplier">
          <h3 class="find">Supplier identification and verification</h3>
          <p>
            Identify and evaluate potential suppliers based on their
            credibility, reputation, and product offerings.
          </p>
        </div>
        <div class="procurement">
          <h3 class="sourcing">Product sourcing and procurement</h3>
          <p>
            Identify and source products from trusted suppliers based on your
            requirements, preferences, and budget.
          </p>
        </div>
        <div class="quality">
          <h3 class="inspection">Quality control and inspection</h3>
          <p>
            Monitoring and evaluating products at various stages of production
            to ensure they meet pre-defined standards.
          </p>
        </div>
        <div
          class="prices"
          backgroundImage
          style={{ backgroundImage: `url('/components/img/a.png')` }}
        >
          <h3>Negotiation of prices and terms</h3>
          <p>
            Secure the best pricing, payment conditions, and delivery terms
            through strategic negotiation with suppliers.
          </p>
        </div>
        <div
          class="logistics"
          backgroundImage
          style={{ backgroundImage: `url('/components/img/a.png')` }}
        >
          <h3>Logistics and shipping management</h3>
          <p>
            Coordinate shipping, customs, and delivery to ensure timely and
            secure transport of goods from supplier to destination..
          </p>
        </div>
      </div>
    </section>
  </>
  );
}

export default Home;
