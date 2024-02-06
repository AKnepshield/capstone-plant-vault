import { getPlantsByUserId } from "../../services/userService.js";
import { useState, useEffect } from "react";
import { Plant } from "./Plant.js";

export const PlantList = ({ currentUser }) => {
  const [allPlants, setAllPlants] = useState([]);

  const fetchPlants = (currentUser) => {
    getPlantsByUserId(currentUser?.id).then((userData) => {
      const plantsArray = userData;
      setAllPlants(plantsArray);
    });
  };

  useEffect(() => {
    if (currentUser.id) {
      fetchPlants(currentUser);
    }
  }, [currentUser]);

  return (
    <div className="plants-container">
      <h1>Welcome To PlantVault!</h1>
      <div>Compile your plants and watch them grow</div>

      <h2>All Plants</h2>
      <article className="plants">
        <ul>
          {allPlants?.map((plant) => (
            <li key={plant.id}>
              <Plant
                plant={plant}
                currentUser={currentUser}
                fetchPlants={fetchPlants}
              />
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};
