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
        <h1>Welcome</h1>
        <p>Easily manage your expenses.</p>
        <button onClick={() => navigate("/expense")}>Let's go</button>
      </div>
    </div>
  );
};

export default HomePage;
