import { Link } from "react-router-dom";
import { deletePlant } from "../../services/plantService.js";

export const Plant = ({ plant, fetchPlants, currentUser }) => {
  const handleDelete = () => {
    deletePlant(plant.id).then(() => {
      fetchPlants(currentUser);
    });
  };
  return (
    <div className="plant-card">
      <h3>{plant.type}</h3>
      <p>Room: {plant.room && plant.room.roomName}</p>
      <p>Water Level: {plant.waterLevel}</p>
      <p>Light Needed: {plant.lightNeeded}</p>
      <p>Date Planted: {plant.datePlanted}</p>

      <div className="btn-container">
        <Link to={`/plant/${plant.id}/edit`}>
          <button className="edit-plant-btn">Edit Plant</button>
        </Link>
        <button className="delete-plant-btn" onClick={handleDelete}>
          Delete Plant
        </button>
      </div>
    </div>
  );
};
