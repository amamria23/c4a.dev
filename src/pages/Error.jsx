import React from "react";
import "./404.css";
const Error = () => {
  return (
    <div className="bg-purple">
      <div className="stars">
        <div className="custom-navbar">
          <div className="brand-logo">
            <img src="http://salehriaz.com/404Page/img/logo.svg" alt="logo" width="80px" />
          </div>
          <div className="navbar-links">
            <ul className="nav">
              <li>
                <a href="/" >
                  Home
                </a>
              </li>
              <li>
                <a href="/css" >
                  About
                </a>
              </li>
              <li>
                <a href="/profile">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/html"
                  className="btn-request"
                >
                  Request A Demo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="central-body">
          <img
            className="image-404"
            src="http://salehriaz.com/404Page/img/404.svg"
            width="300px"
            alt="404"
          />
          <a href="/" className="btn-go-home">
            GO BACK HOME
          </a>
        </div>
        <div className="objects">
          <img
            className="object_rocket"
            src="http://salehriaz.com/404Page/img/rocket.svg"
            width="40px"
            alt="rocket"
          />
          <div className="earth-moon">
            <img
              className="object_earth"
              src="http://salehriaz.com/404Page/img/earth.svg"
              width="100px"
              alt="earth"
            />
            <img
              className="object_moon"
              src="http://salehriaz.com/404Page/img/moon.svg"
              width="80px"
              alt="moon"
            />
          </div>
          <div className="box_astronaut">
            <img
              className="object_astronaut"
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              width="140px"
              alt="astronaut"
            />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
        </div>
      </div>
    </div>
  );
};

export default Error;
