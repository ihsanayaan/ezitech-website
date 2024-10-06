import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="logoet.png" alt="EziTech Logo" />
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#works">Works</a></li>
              <li><a href="#why choose et">Why Choose ET</a></li>
              <li><a href="#about us">About Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h1>Utilize Effective Learning to Reach Your Potential!</h1>
        </div>
      </section>
      {/* Services Section */}
      <section id="works" className='service-card'>
        <div className="service-card">
          <h2>How It Works?</h2>
          <div className="services">
            <div className="service-card">
              <img src="/images/wd.png" alt="Web Development" />
              <h3>Web Development</h3>
            </div>
            <div className="service-card">
              <img src="/images/ad.png" alt="App Development" />
              <h3>App Development</h3>
            </div>
            <div className="service-card">
              <img src="/images/cs.png" alt="Cyber Security" />
              <h3>Cyber Security</h3>
            </div>
            <div className="service-card">
              <img src="/images/d.png" alt="Designing" />
              <h3>Designing</h3>
            </div>
            <div className="service-card">
              <img src="/images/g.png" alt="Gaming" />
              <h3>Gaming</h3>
            </div>
            <div className="service-card">
              <img src="/images/b.png" alt="Block Chain" />
              <h3>Block Chain</h3>
            </div>
            <div className="service-card">
              <img src="/images/ml&ai.png" alt="ML and AI" />
              <h3>ML and AI</h3>
            </div>
            <div className="service-card">
              <img src="/images/m.png" alt="Marketing" />
              <h3>Marketing</h3>
            </div>
            <div className="service-card">
              <img src="/images/amz.png" alt="Amazone" />
              <h3>Amazon</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section id="why choose et" className="why-choose-us">
        <div className="services-card">
          <h2>Why Choose EziTech?</h2>
          <div className="services">
            <div className="service-card">
              <img src="/images/ext.png" alt="Expert Team" />
              <h3>Expert Team</h3>
              <p>Our team comprises experts in various domains.</p>
            </div>
            <div className="service-card">
              <img src="/images/inn.png" alt="Innovative Solutions" />
              <h3>Innovative Solutions</h3>
              <p>We provide cutting-edge solutions for your business.</p>
            </div>
            <div className="service-card">
              <img src="/images/cuss.png" alt="Customer Satisfaction" />
              <h3>Customer Satisfaction</h3>
              <p>We prioritize client satisfaction above all.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer id="about us" className="footer">
        <div className="container">
          <h2>About</h2>
          <p>Ezitech Institute provides a platform for nwecomers to launch their IT and freelancing careers.Our emphasis on practical information technology courses that are career and work oriented makes us the topcomputer institute in Rawalpindi,Islamabad,Pakistan.</p>
        </div>
      </footer>
      <footer className='footer1'>
        <div className="container">
          <p>Phone: +92 3455555396  --------- Email: info@ezitech.org</p>
          <br />
          <p>&copy; 2024 EziTech Institute.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
