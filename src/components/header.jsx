import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import "../components/header.css";
import themeContext from "../context/dataProvider";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  let { theme, Toggle } = useContext(themeContext);
  const [user] = useAuthState(auth);
  return (
    <>
      <header className={`hide-when-mobile`}>
        <h1>
          <Link to={"/"}>HomeBook</Link>
        </h1>
        <i
          className="fa-solid fa-sun"
          onClick={() => {
            Toggle(theme === "light" || theme === "" ? "dark" : "");
          }}
        ></i>
        <i
          className="fa-solid fa-moon"
          onClick={() => {
            Toggle(theme === "light" || theme === "" ? "dark" : "");
          }}
        ></i>
        <ul className="flex">
          {user && (
            <li
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    // Sign-out successful.
                    navigate("/sign-in");
                    console.log("okkkkkk");
                  })
                  .catch((error) => {
                    // An error happened.
                    console.log("error");
                  });
              }}
              className="main-list"
            >
              <button className="main-link">sign-out</button>
            </li>
          )}
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/sign-in">
                sign-in
              </NavLink>
            </li>
          )}
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/sign-up">
                sign-up
              </NavLink>
            </li>
          )}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/html">
                HTML
              </NavLink>
              <ul className="sub-ul">
                <li>
                  <Link to="/">Full Course</Link>
                </li>
                <li>
                  <Link to="/">Crash Course</Link>
                </li>
                <li>
                  <Link to="/">learn in 1h</Link>
                </li>
              </ul>
            </li>
          )}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/css">
                CSS
              </NavLink>
              <ul className="sub-ul">
                <li>
                  <Link to="/">Full Course</Link>
                </li>
                <li>
                  <Link to="/">CSS Examples</Link>
                </li>
                <li className="mini-projects">
                  <Link to="/">mini projects&nbsp; + </Link>
                  <ul className="sub-sub-ul">
                    <li>
                      <Link to="/">project 1</Link>
                    </li>
                    <li>
                      <Link to="/">project 2</Link>
                    </li>
                    <li>
                      <Link to="/">project 3</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          )}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/Profile">
                Profile
              </NavLink>
              <ul className="sub-ul sub-of-js">
                <li>
                  <Link to="/">coming soon🔥</Link>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </header>
      <header className="show-when-mobile">
        <h1>HomeBook</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <Link to="/">Full Course</Link>
              </li>
              <li>
                <Link to="/">Crash Course</Link>
              </li>
              <li>
                <Link to="/">learn in 1h</Link>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <Link to="/">Full Course</Link>
              </li>
              <li>
                <Link to="/">CSS Examples</Link>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <Link to="/">project 1</Link>
                  </li>
                  <li>
                    <Link to="/">project 2</Link>
                  </li>
                  <li>
                    <Link to="/">project 3</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <Link to="/">coming soon🔥</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
