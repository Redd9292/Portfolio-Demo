import { Link } from "react-router-dom";
import './Header.css'
function Header() {

  return (
    <header>
        <nav className="navStyle m-4 p-4 text-sm">
      {/* <h1 className="text-xl">Gilbert Espinoza</h1> */}
        <Link to="/" className="text-red-500">
          <div>Home</div>
        </Link>
        <Link to="/About" className="text-white">
          <div>About</div>
        </Link>
        <Link to="/projects" className="text-white">
          <div>Portfolio</div>
        </Link>
        <Link to="/Resume" className="text-white">
          <div>Resume</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;


