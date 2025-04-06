import React from "react";

export default function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>My Website</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section  */}
      <section className="hero">
        <h2>Welcome to Our Website</h2>
        <p>We deliver top-notch solutions tailored to your business needs.</p>
        <button>Get Started</button>
      </section>

      {/* Cards Section */}
      <section className="cards">
        <div className="card">
          <h3>Service 1</h3>
          <p>Discover more about our first service offering.</p>
        </div>
        <div className="card">
          <h3>Service 2</h3>
          <p>Learn how our second service can help your business grow.</p>
        </div>
        <div className="card">
          <h3>Service 3</h3>
          <p>Explore the benefits of choosing our third service.</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>

      {/* Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #fafafa;
        }

        header {
          background-color: #0077ff;
          color: #fff;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        nav a {
          color: #fff;
          margin-left: 1.5rem;
          text-decoration: none;
          font-weight: 500;
          position: relative;
        }

        nav a::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          background: #fff;
          left: 0;
          bottom: -4px;
          transition: width 0.3s ease;
        }

        nav a:hover::after {
          width: 100%;
        }

        .hero {
          text-align: center;
          padding: 5rem 2rem;
          background: #f4f4f4;
        }

        .hero h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .hero p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          color: #555;
        }

        .hero button {
          padding: 0.8rem 2rem;
          background: #0077ff;
          border: none;
          border-radius: 5px;
          color: #fff;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .hero button:hover {
          background-color: #005fcc;
        }

        .cards {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
          padding: 4rem 2rem;
          background: #fff;
        }

        .card {
          background: #f9f9f9;
          padding: 2rem;
          width: 300px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }

        .card h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
          color: #0077ff;
        }

        .card p {
          font-size: 1rem;
          color: #666;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        footer {
          background: #0077ff;
          color: #fff;
          text-align: center;
          padding: 1.5rem 2rem;
          font-size: 0.9rem;
          margin-top: 2rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .cards {
            flex-direction: column;
            align-items: center;
          }

          header {
            flex-direction: column;
          }

          nav a {
            margin-left: 0;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
