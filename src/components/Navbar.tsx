import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <img src="/logo.png" width="30" height="30" alt="Logo" />
        <span className="ml-2">React Forms</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/plain">
              Plain HTML 5
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/controlled">
              Controlled Components
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/uncontrolled">
              Uncontrolled Components
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
