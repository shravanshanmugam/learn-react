import React from "react";

function Home() {
  return (
    <div className="home">
      <header>
        <nav class="left">
          <h2>#VANLIFE</h2>
        </nav>
        <nav class="right">
          <h2>About</h2>
          <h2>Vans</h2>
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

export default Home;
