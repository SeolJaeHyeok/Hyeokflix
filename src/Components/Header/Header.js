import React from "react";
import "./Header.css";

export default () => (
  <header className="nav">
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/search">Search</a>
      </li>
      <li>
        <a href="/tv">TV</a>
      </li>
    </ul>
  </header>
);
