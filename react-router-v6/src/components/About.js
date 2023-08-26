import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="home">
      <header>
        <nav className="left">
          <h2>#VANLIFE</h2>
        </nav>
        <nav className="right">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        <div className="hero-text">
          <h2>You got the travel plans, we got the travel vans.</h2>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
        </div>
        <button>Find your van</button>
      </main>
      <footer>
        <p>&copy; 2022 #VANLIFE</p>
      </footer>
    </div>
  );
}

export default About;
