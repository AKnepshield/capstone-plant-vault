import { getPlantsByUserId } from "../../services/userService.js";
import { useState, useEffect } from "react";
import { Plant } from "./Plant.js";
// import fernImage from "../../images/fern.jpg";

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
        <div className="col-md-6 text-center ">
          <div className="card p-4 shadow">
            <h1 className="display-4 mb-4">Welcome To PlantVault!</h1>
            <div className="lead text-center mb-0">
              Compile your plants and watch them grow
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        {allPlants?.map((plant) => (
          <li className="list-group-item col-md-3 mb-4" key={plant.id}>
            <Plant
              plant={plant}
              currentUser={currentUser}
              fetchPlants={fetchPlants}
            />
          </li>
        ))}
      </div>
    </div>
  );
};

{
  /* <div className="row justify-content-center">
        <div className="col-md-6">
          <article
            className="plants"
            style={{
              backgroundColor: "black",
              padding: "8px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          > */
}
// </div>
