import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

const Navbar = () => {
  // const { username } = useContext(LoginContext);
  const username = localStorage.getItem("username");
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
          <a href="/contact">Contact</a>
        </li>
        <li>{username ? <a href="/dashboard">{username}</a> : <a href="/login">Login</a>}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
