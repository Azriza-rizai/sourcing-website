import "../css/ContactForm.css"; // Assuming you have a styles.css file for styling
import React, { useState } from "react"; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    // Simulated successful submission
    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      <h2 className="title">Contact Us</h2>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
        <label className="label">
          Name *
          <input 
          className="contact-form-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>  

        <label className="label">
          Email *
          <input
            className="contact-form-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="label">
          Message *
          <textarea
              className="contact-form-textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="button">
          Send Message
        </button>

        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;