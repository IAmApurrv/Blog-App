import { Link } from "react-router-dom";
import { FaHome, FaPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#457b9d" }}>
      <div className="container">

        <Link className="navbar-brand d-flex align-items-center" to="/" style={{ fontSize: '2.5rem' }}>
          <span className="me-2" style={{ fontSize: '2rem' }}>📝</span> Blog App
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          {/* <ul className="navbar-nav ms-auto">
            <Link to="/" style={{ color: 'white', backgroundColor: '#00afb9', borderRadius: '8px' }}>Home</Link>
            <Link to="/Create" style={{ color: 'white', backgroundColor: '#00afb9', borderRadius: '8px' }}>New Blog</Link>
          </ ul> */}

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link btn btn-info me-2" to="/" style={{ fontSize: '1.2rem', padding: '10px', color: 'white' }}>
                <FaHome className="me-1" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-success me-2" to="/Create" style={{ fontSize: '1.2rem', padding: '10px', color: 'white' }}>
                <FaPlus className="me-1" /> New Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
