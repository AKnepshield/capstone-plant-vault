import { Link } from "react-router-dom";

export const Plant = ({ plant }) => {
  //   const editPlantRoute = `profile/${plant.id}/edit-plant/`;

  return (
    <div className="plant-card">
      <h3>{plant.type}</h3>
      <p>Room: {plant.room.roomName}</p>
      <p>Water Level: {plant.waterLevel}</p>
      <p>Light Needed: {plant.lightNeeded}</p>

      <Link to={`/plant/${plant.id}/edit`}>
        <button className="edit-plant-btn">Edit Plant</button>
      </Link>
      {/* ^ currentUser greyed out in dev tools */}
    </div>
  );
};
