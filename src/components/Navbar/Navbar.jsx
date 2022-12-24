import { Link } from "react-router-dom";
import "./navbar.css";

import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navBottom">
    
      <Link style={{fontSize:"20px"}}  className="nav-link" to="/login">
        <p>Alxr</p>
      </Link>
      <Link className="nav-link" to="/location">
        <p>Location</p>
      </Link>
      <Link className="nav-link" to="/product">
        <p>product</p>
      </Link>
      <Link className="nav-link" to="/login">
        <p>Logout</p>
      </Link>
    </div>
  );
};
