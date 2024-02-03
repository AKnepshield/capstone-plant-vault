import { getPlantsByUserId } from "../../services/plantService.js";
import { useState, useEffect } from "react";
import { Plant } from "./Plant.js";
import { PlantUser } from "../users/PlantUser.js";

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

  // All of this ^ is greyed out in dev tools.  Why?

  return (
    <div className="plants-container">
      <h1>Welcome To PlantVault!</h1>
      <div>Compile your plants and watch them grow</div>

      <h2>Your Plants</h2>
      <PlantUser currentUser={currentUser} />

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
