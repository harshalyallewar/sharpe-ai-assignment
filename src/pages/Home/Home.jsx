// Import React and component styling
import React from "react";
import "./home.css";

// Define the Home component
const Home = () => {
  return (
    // Home section with left-aligned content
    <section id="home">
      <div className="left">
        <div className="headline">
          {/* Headline with personalized messages */}
          <h2>Frontend Assignment to</h2>
          <h2 className="headline_colored">Harshal Yallewar</h2>
          <h2>By Sharpe AI</h2>
        </div>
      </div>
    </section>
  );
};

// Export the Home component
export default Home;
