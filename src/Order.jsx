import '../css/Order.css';

function Order() {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2>Order Process</h2>

          <h3>1. Give Specifications</h3>
          <p>Submit product details, materials, quantity, and other requirements.</p>

          <h3>2. Confirm 1 of 3 Options</h3>
          <p>We present three supplier or product options based on your specs. Choose one to proceed.</p>

          <h3>3. Deposit</h3>
          <p>Pay a percentage upfront to begin procurement and production arrangements.</p>

          <h3>4. Production</h3>
          <p>Manufacturing starts according to your specifications and agreed lead time.</p>

          <h3>5. Quality Control</h3>
          <p>Our inspection team verifies product quality and compliance before shipping.</p>

          <h3>6. Full Payment</h3>
          <p>Once quality is approved, settle the remaining balance.</p>

          <h3>7. Shipping</h3>
          <p>We manage logistics and dispatch goods via your chosen shipping method.</p>
        </div>    
      </main>
    </>
  );
}

export default Order;
