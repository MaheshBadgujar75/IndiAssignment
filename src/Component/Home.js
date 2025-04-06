import React from "react";

export default function App() {
    return (
        <div className="app-container">
            {/* Header */}
            <header>
                <div className="logo">
                    <h1>Sample Website</h1>
                </div>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h2>Welcome to Sample Website</h2>
                    <p>We deliver top-notch solutions your business needs.</p>
                    <button>Get Started</button>
                </div>
            </section>

            {/* Cards Section */}
            <section className="cards-container">
                <h2 className="section-title">Our Services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="card-icon">🚀</div>
                        <h3>Service 1</h3>
                        <p>Discover more about our first service offering.</p>
                        <a href="#learn-more" className="card-link">Learn More</a>
                    </div>
                    <div className="card">
                        <div className="card-icon">💡</div>
                        <h3>Service 2</h3>
                        <p>Learn how our second service can help your business grow.</p>
                        <a href="#learn-more" className="card-link">Learn More</a>
                    </div>
                    <div className="card">
                        <div className="card-icon">📊</div>
                        <h3>Service 3</h3>
                        <p>Explore the benefits of choosing our third service.</p>
                        <a href="#learn-more" className="card-link">Learn More</a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <h2>Ready to Get Started?</h2>
                <p>Join thousands of satisfied customers who've transformed their business with us.</p>
                <button>Contact Us Today</button>
            </section>

            {/* Footer */}
            <footer>
                <div className="footer-content">
                    <div className="footer-logo">
                        <h3>Sample Website</h3>
                        <p>We transform Business.</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Navigation</h4>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#services">Services</a>
                            <a href="#contact">Contact</a>
                        </div>
                        <div className="footer-column">
                            <h4>Contact</h4>
                            <p>hello@samplewebsite.com</p>
                            <p>123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy;2025 MaheshBadgujar. All rights reserved.</p>
                </div>
            </footer>

            {/* Styles */}
            <style>{`
                /* Base Styles */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Outfit', 'Montserrat', sans-serif;
                    line-height: 1.6;
                    color: #333;
                    background-color: #f8f9fa;
                }
                
                .app-container {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
                
                /* Header Styles */
                header {
                    background-color: #17263c;
                    color: #fff;
                    padding: 1.2rem 5%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    position: sticky;
                    top: 0;
                    z-index: 100;
                }
                
                .logo h1 {
                    font-size: 1.8rem;
                    font-weight: 700;
                    letter-spacing: -0.5px;
                }
                
                nav {
                    display: flex;
                    gap: 2rem;
                }
                
                nav a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 1rem;
                    position: relative;
                    transition: all 0.3s ease;
                }
                
                nav a::after {
                    content: "";
                    position: absolute;
                    width: 0;
                    height: 2px;
                    background: #5cdb95;
                    left: 0;
                    bottom: -4px;
                    transition: width 0.3s ease;
                }
                
                nav a:hover {
                    color: #5cdb95;
                }
                
                nav a:hover::after {
                    width: 100%;
                }
                
                /* Hero Section */
                .hero {
                    text-align: center;
                    padding: 7rem 1rem;
                    background: linear-gradient(135deg, #17263c 0%, #3a7bd5 100%);
                    color: white;
                }
                
                .hero-content {
                    max-width: 800px;
                    margin: 0 auto;
                }
                
                .hero h2 {
                    font-size: 3rem;
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    line-height: 1.2;
                }
                
                .hero p {
                    font-size: 1.2rem;
                    margin-bottom: 2.5rem;
                    opacity: 0.9;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                .hero button {
                    padding: 1rem 2.5rem;
                    background: #5cdb95;
                    border: 2px solid white;
                    border-radius: 50px;
                    color: #17263c;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
                }
                
                .hero button:hover {
                    background: white;
                    color: #3a7bd5;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                }
                
                /* Services Section */
                .cards-container {
                    padding: 5rem 5%;
                    background-color: #f8f9fa;
                }
                
                .section-title {
                    text-align: center;
                    font-size: 2.2rem;
                    margin-bottom: 3rem;
                    color: #17263c;
                    position: relative;
                }
                
                .section-title::after {
                    content: "";
                    position: absolute;
                    width: 80px;
                    height: 4px;
                    background: #5cdb95;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    border-radius: 2px;
                }
                
                .cards {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 2.5rem;
                    justify-content: center;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .card {
                    background: white;
                    padding: 2.5rem 2rem;
                    width: 320px;
                    border-radius: 12px;
                    border-bottom: 4px solid #5cdb95;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                    transition: all 0.4s ease;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                
                .card-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1.5rem;
                }
                
                .card h3 {
                    margin-bottom: 1rem;
                    font-size: 1.5rem;
                    color: #17263c;
                }
                
                .card p {
                    font-size: 1rem;
                    color: #666;
                    margin-bottom: 1.5rem;
                }
                
                .card-link {
                    text-decoration: none;
                    color: #3a7bd5;
                    font-weight: 600;
                    position: relative;
                    transition: all 0.3s ease;
                }
                
                .card-link::after {
                    content: "";
                    position: absolute;
                    width: 0;
                    height: 2px;
                    background: #5cdb95;
                    left: 0;
                    bottom: -4px;
                    transition: width 0.3s ease;
                }
                
                .card-link:hover::after {
                    width: 100%;
                }
                
                .card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                }
                
                /* CTA Section */
                .cta-section {
                    background: linear-gradient(135deg, #3a7bd5 0%, #17263c 100%);
                    color: white;
                    text-align: center;
                    padding: 5rem 1rem;
                }
                
                .cta-section h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }
                
                .cta-section p {
                    font-size: 1.1rem;
                    margin-bottom: 2rem;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                    opacity: 0.9;
                }
                
                .cta-section button {
                    padding: 1rem 2.5rem;
                    background: #5cdb95;
                    border: 2px solid white;
                    border-radius: 50px;
                    color: #17263c;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
                }
                
                .cta-section button:hover {
                    background: white;
                    color: #3a7bd5;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                }
                
                /* Footer Styles */
                footer {
                    background-color: #17263c;
                    color: #fff;
                }
                
                .footer-content {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    padding: 4rem 5%;
                    max-width: 1200px;
                    margin: 0 auto;
                    gap: 2rem;
                }
                
                .footer-logo {
                    flex: 1;
                    min-width: 250px;
                }
                
                .footer-logo h3 {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                    color: #5cdb95;
                }
                
                .footer-logo p {
                    color: #e0e0e0;
                }
                
                .footer-links {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 3rem;
                }
                
                .footer-column {
                    min-width: 150px;
                }
                
                .footer-column h4 {
                    color: #5cdb95;
                    margin-bottom: 1.2rem;
                    font-size: 1.1rem;
                }
                
                .footer-column a {
                    display: block;
                    color: #e0e0e0;
                    text-decoration: none;
                    margin-bottom: 0.7rem;
                    transition: color 0.3s ease;
                }
                
                .footer-column a:hover {
                    color: #5cdb95;
                }
                
                .footer-column p {
                    color: #e0e0e0;
                    margin-bottom: 0.7rem;
                }
                
                .footer-bottom {
                    text-align: center;
                    padding: 1.5rem;
                    background-color: #0f1926;
                    font-size: 0.9rem;
                }
                
                /* Responsive Design */
                @media (max-width: 768px) {
                    header {
                        flex-direction: column;
                        padding: 1rem;
                    }
                    
                    .logo {
                        margin-bottom: 1rem;
                    }
                    
                    nav {
                        width: 100%;
                        justify-content: space-around;
                        gap: 0.5rem;
                    }
                    
                    .hero {
                        padding: 4rem 1rem;
                    }
                    
                    .hero h2 {
                        font-size: 2.2rem;
                    }
                    
                    .cards {
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .footer-content {
                        flex-direction: column;
                    }
                    
                    .footer-links {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
}
