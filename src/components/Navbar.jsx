import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h3>Kulineran</h3>
      </div>
      <ul className="nav-list">
        <li>
          <a href="/#home">Home</a>
        </li>
        <li>
          <a href="/#makanan">Makanan</a>
        </li>
        <li>
          <a href="/#tempatMakan">Tempat Makan</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
