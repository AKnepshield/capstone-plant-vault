import { useNavigate, Link } from "react-router-dom";

export const UserNav = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/profile">Profile</Link>
      </li>
      <li className="navbar-item">
        <Link to="/add-plant">Add Plant</Link>
      </li>
      <li className="navbar-item">
        <Link to="/rooms">Rooms</Link>
      </li>
      {localStorage.getItem("plant_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
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
  );
};
