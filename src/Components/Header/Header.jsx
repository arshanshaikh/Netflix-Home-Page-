import React from "react";
import logo from "../../netflix-logo.png";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {

  return (
    <nav className="header">
      <img src={logo} alt="Logo" />

      <div>


      <Link to="/tvshows ">TV Shows</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/recent">Recently Added</Link>
      <Link to="/mylist">My List</Link>
      </div>

      <BsSearch/>
    </nav>
  );
};

export default Header;
