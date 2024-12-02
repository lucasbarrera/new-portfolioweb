import { NavLink } from "react-router-dom";
import "./navbar.css";
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-md ">
        <div className="container-fluid">
          <img className="logo-navbar" src="logo-negro.png" alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" href="#">
                  Acerca de mi
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/formacion" className="nav-link ">
                  Formación
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/trabajos" className="nav-link">
                  Trabajos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
