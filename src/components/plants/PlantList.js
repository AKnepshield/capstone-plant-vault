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
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-md-6">
          <h1>Welcome To PlantVault!</h1>
          <div>Compile your plants and watch them grow</div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>All Plants</h2>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
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
      </div>
    </div>
  );
};
