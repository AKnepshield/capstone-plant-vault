import { Link } from "react-router-dom";
import { deletePlant } from "../../services/plantService.js";
import clipArtImage from "../../images/clipArt.jpg";

export const Plant = ({ plant, fetchPlants, currentUser }) => {
  const handleDelete = () => {
    deletePlant(plant.id).then(() => {
      if (window.confirm("Are you sure you want to delete this plant?")) {
        deletePlant(plant.id).then(() => {
          fetchPlants(currentUser);
        });
      }
    });
  };
  return (
    <div
      className="card plant-card mx-auto my-3"
      style={{ maxWidth: "18rem", backgroundColor: "#20c997" }}
    >
      <img
        src={clipArtImage}
        className="card-img-top mx-auto my-auto"
        alt="Plant clip"
        style={{ width: "100px", backgroundColor: "white" }}
      />
      <div className="card-body plant-card-body">
        <h3 className="card-title">{plant.type}</h3>
        <p className="card-text">Room: {plant.room && plant.room.roomName}</p>
        <p className="card-text">Water Level: {plant.waterLevel}</p>
        <p className="card-text">Light Needed: {plant.lightNeeded}</p>
        <p className="card-text">Date Planted: {plant.datePlanted}</p>
      </div>

      <div className="card-footer btn-container d-flex justify-content-center">
        <Link
          to={`/plant/${plant.id}/edit`}
          className="btn btn-outline-success"
          style={{ color: "white" }}
        >
          Edit Plant
        </Link>
        <button className="btn btn-outline-danger" onClick={handleDelete}>
          Delete Plant
        </button>
      </div>
    </div>
  );
};
