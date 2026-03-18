import React from "react";

import { Link } from "react-router";

const PageNavigation: React.FC = () => {
  return (
    <nav className="page-navigation">
      <button className="btn-cancel-header">
        <img src="/images/donation-pop-up/x.png" alt="cancel icon" />
      </button>
      <ul>
        <li>
          <Link to={"/"}>about</Link>
        </li>
        <li>
          <a href="../map/index.html">map</a>
        </li>
        <li>
          <a href="../zoos/index.html">zoos</a>
        </li>
        <li>
          <a href="../contact-us/index.html">Contact us</a>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
