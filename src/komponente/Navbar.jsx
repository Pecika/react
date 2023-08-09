import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#b2d8d8',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 2em',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#000',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const linkContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const linkGapStyle = {
    marginLeft: '2em',
  };

  return (
    <div style={navbarStyle}>
      <div style={linkContainerStyle}>
        <Link to="/" style={linkStyle}>Pocetna</Link>
        <div style={linkGapStyle}></div>
        <Link to="/to-do-lista" style={linkStyle}>To-do lista</Link> {/* Updated link */}
        <div style={linkGapStyle}></div>
        <Link to="/kreiraj-zadatak" style={linkStyle}>Kreiraj zadatak</Link>
      </div>
    </div>
  );
};

export default Navbar;
