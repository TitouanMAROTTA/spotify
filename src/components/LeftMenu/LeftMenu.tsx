import React from "react";
import { Link } from "react-router-dom";
import "./LeftMenu.css";

function LeftMenu() {
  return (
    <div className="left-menu">
      <div className="logo">Logo</div>
      <div className="menu-item">
        <Link to="/" className="active">
          <span className="icon">
            <i className="fas fa-home"></i>
          </span>
          Home
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/playlist">
          <span className="icon">
            <i className="fas fa-book"></i>
          </span>
          Playlist
        </Link>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default LeftMenu;
