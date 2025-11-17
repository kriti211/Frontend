
import React from "react";
import hero from "./assets/Professional Photo.jpg"
import img1 from "./assets/Screenshot 2025-03-09 120415.png";
import img2 from "./assets/ar ss.png";
import img3 from "./assets/Screenshot (39).png";
import "./App.css";

export default function App() {
  return (
    <div className="main-bg">
      
      {/* HEADER */}
      <header className="header">
        <h2>Kriti Portfolio</h2>
      </header>

      <div className="container">

        {/* HERO SECTION */}
        <div className="hero-section">
          <div className="hero-text">
            <h1>Kriti Sodani</h1>
            <p>
              I am a Frontend Developer, AR Creator, and Tech Enthusiast.  
              I love building clean UI, creative filters, and interactive digital experiences.
            </p>
          </div>

          <div className="hero-img">
            <img src={hero} alt="Kriti" />
          </div>
        </div>

        {/* PROJECTS */}
        <h2 className="project-title">My Projects</h2>

        <div className="projects">

          <div className="card">
            <img src={img1} alt="Project 1" />
            <h3>Portfolio Preview</h3>
            <a href="https://kriti211.github.io/Health/">View Project</a>
          </div>

          <div className="card">
            <img src={img2} alt="AR Project" />
            <h3>AR Project</h3>
            <a href="https://kriti211.github.io/AR-Potfolio/">View Project</a>
          </div>

          <div className="card">
            <img src={img3} alt="Website Project" />
            <h3>Website Project</h3>
            <a href="https://kriti211.github.io/Ask-Learn/">View Project</a>
          </div>

        </div>
      </div>
    </div>
  );
}
