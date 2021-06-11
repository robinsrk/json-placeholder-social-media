import React from "react";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link className="links" to="/">
            <MDBIcon icon="home" />
            <span> Home</span>
          </Link>
        </li>
        <li>
          <Link className="links" to="/createPost">
            <MDBIcon far icon="edit" />
            <span> Create Post</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
