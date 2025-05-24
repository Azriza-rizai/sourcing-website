import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router";
// import Layout from "./Layout.jsx";
// import "./main.css";
=======
// import "../css/main.css";
import Layout from "./Layout.jsx";
>>>>>>> eaf36dd1ff1543ee3eaf0ebfccc61b941dc29483
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Products from "./Products.jsx";
import Order from "./Order.jsx";
import Partners from "./Partners.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/order" element={<Order />} />
          <Route path="/partners" element={<Partners/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
