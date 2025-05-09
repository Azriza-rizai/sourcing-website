import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <header>
    <div class="container">
      <img class = "backgroundImage" href="url('/path/to/your/image.jpg')"></img>
      <h1 class="logo">EU-China Sourcing</h1>
      <nav>
        <ul class="nav-links">
          <li><a href="#services">Home</a></li>
          <li><a href="index.html#about.html">About</a></li>
          <li><a href="#contact">Order</a></li>
          <li><a href="#services">Products</a></li>
          <li><a href="#about">Partnerships</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="hero-content">
      <h2>Your Global Sourcing Partner</h2>
      <p>From concept to delivery, we connect your business to the world.</p>
      <a href="#contact" class="cta-btn">Get in Touch</a>
    </div>
  </section>

  <footer>
    <div class="container1">
      <p>&copy; 2025 The Sourcing Co. All rights reserved.</p>
    </div>
  </footer>
    </>
  )
}

export default App
