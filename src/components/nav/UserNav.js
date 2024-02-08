import { useNavigate, Link } from "react-router-dom";

export const UserNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        PlantVault
      </a>
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
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
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
