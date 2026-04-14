import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="nav-wrap">
        <nav className="navbar">
          <Link to="/" className="logo-static">
            Nikan
          </Link>

          <ul>
            <li><Link className="nav-button" to="/">Home</Link></li>
            <li><Link className="nav-button" to="/about">Over Mij</Link></li>
            <li><Link className="nav-button" to="/projects">Projecten</Link></li>
            <li><Link className="nav-button" to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="nav-underline"></div>
      </header>

      <Outlet />
    </>
  );
}