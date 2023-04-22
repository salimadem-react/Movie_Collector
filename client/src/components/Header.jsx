import React from "react";
import "../style.scss";

export default function Header() {
  return (
    <nav className="navigationWrapper">
      <div className="logoWrapper">
        <img className="logo" src={require("./logo.png")} alt="" />
      </div>
      <ul className="navigation">
        <li className="parent">
          <a className="link" href="#">
            Favourite movies
          </a>
        </li>
        <li className="parent">
          <a className="link" href="#">
            Watched movies
          </a>
        </li>
        <li className="parent" id="clients">
          <a className="link" href="#">
            Movies to watch
          </a>
        </li>
      </ul>
    </nav>
  );
}
