import { getPlantsByUserId } from "../../services/plantService.js";
import { useState, useEffect } from "react";
import { Plant } from "./Plant.js";

export const PlantList = ({ currentUser }) => {
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    const userId = currentUser.id;

    if (userId) {
      getPlantsByUserId(userId).then((plantArray) => {
        setAllPlants(plantArray);
      });
    }
  }, [currentUser]);

  return (
    <div className="plants-container">
      <h1>Welcome To PlantVault!</h1>
      <div>Compile your plants and watch them grow</div>

      <h2>All Plants</h2>
      <article className="plants">
        <ul>
          {allPlants.map((plant) => (
            <li key={plant.id}>
              <Plant plant={plant} currentUser={currentUser} />
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};
