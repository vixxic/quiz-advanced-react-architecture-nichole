import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { state, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/Login");
  };

  return (
    <div className="nav-outer">
      <nav className="navbar">
        <h1>
          OB<span style={{ color: "#d4521a" }}>SID</span>IAN
        </h1>

        <div className="links-btn-div">
          <p className="users-email">{state.user?.email}</p>
          <NavLink to="/products" className="pages-link">
            Products
          </NavLink>

          <NavLink to="/checkout" className="pages-link">
            Checkout{" "}
            {state.totalItems > 0 && (
              <span className="total-items">{state.totalItems}</span>
            )}
          </NavLink>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
