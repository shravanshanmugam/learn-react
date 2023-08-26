import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      {/* 
      Using anchor tag will refresh the page and lose state.
      Navigate from one page to another in react app using Link element.
      It works like an anchor tag but it doesn't refresh the page.
      State in App component can be passed to both Home and About component so is not lost. */}
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav> */}
      <Routes>
        {/* pass the component as parameter */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
