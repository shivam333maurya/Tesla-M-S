import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Inventory from "./pages/Inventory";
import ModelS from "./pages/ModelS";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <a href="/" className="Icon" target={"blank"}>
            <svg
              className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
              viewBox="0 0 342 35"
              xmlns="http://www.w3.org/2000/svg"
              style={{ inlineSize: "120px" }}
            >
              <path
                d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <nav className="navLinks">
            <a href="/">Model S</a>
            <a href="/">Model 3</a>
            <a href="/">Model X</a>
            <a href="/">Model Y </a>
            <a href="/">Solar Roof </a>
            <a href="/">Solar Panels</a>
          </nav>
          <nav className="navLinks">
            <a href="/html/">Shop</a>

            <a href="/css/">Account</a>

            <a href="/css/">Menu</a>
          </nav>
        </div>
      </header>
      <main>
        <section>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ModelS />} />
              <Route path="/inventory" element={<Inventory />} />
            </Routes>
          </BrowserRouter>
        </section>
      </main>
    </div>
  );
}

export default App;
