import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const UserNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-xxl navbar-light bg-light">
      <a className="navbar-brand" href="/">
        PlantVault
      </a>

      <div id="navbarNav">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/profile/add-plant" className="nav-link">
              Add Plant
            </Link>
          </li>
          {localStorage.getItem("plant_user") ? (
            <li className="navbar-item navbar-logout">
              <Link
                className="nav-link"
                to=""
                onClick={() => {
                  localStorage.removeItem("plant_user");
                  navigate("/", { replace: true });
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </nav>
  );
};
