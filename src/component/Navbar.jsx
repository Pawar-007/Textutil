import React from 'react'
import PropTypes from "prop-types"; 
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export default function Navbar(props) {
  return (
    
     <nav className={`navbar  navbar-expand-lg navbar-${props.mode}  bg-${props.mode==='dark'? 'dark':'light'}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.name}</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <navlink  className="nav-link active" activeClassName="active" aria-current="page" to="/home" href="#">{props.link}</navlink>
          </li>
          <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/about">About</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/image">image</Link>
          </li>
          
          <button id="mode" onClick={props.toogles}>change mode</button>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={
    name: PropTypes.string,
    link: PropTypes.string
  };
  
  Navbar.defaultProps = {
    name:"Enter_webiste_name",
    link:"Home",
  }