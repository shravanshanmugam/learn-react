import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/**
 * Multi-page app (MPA) - Client (Browser) makes request to server to fetch each page
 * Single page app (SPA)
 * 1. Client makes request to server to fetch page one time
 * which returns an entire (react) application and the app makes incremental updates
 * to the existing document through different methods like internal state changes,
 * fetch requests etc.
 * 2. Client makes request to server to fetch additional data via API.
 * 3. Server only returns the required data (not a page or an app) and the app consumes the
 * data and makes changes to the view based on the data.
 * 4. Entire page is not reloaded. Only content is changed */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
