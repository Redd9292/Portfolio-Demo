import { Link } from "react-router-dom";
import './Header.css'
function Header() {

  return (
    <header>
        <nav className="navStyle">
      <h1 className="text-6xl">Gilbert Espinoza</h1>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;