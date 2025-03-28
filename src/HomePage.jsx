import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <video className="video" autoPlay loop muted>
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="contenu">
        <h1>Smart money management</h1>
        <p>Track your expenses and stay on top of your budget.</p>
        <button onClick={() => navigate("/expense")}>Start now</button>
      </div>
    </div>
  );
};

export default HomePage;
