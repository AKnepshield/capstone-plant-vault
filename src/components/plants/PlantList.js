import { useState, useEffect } from "react";
import { getAllPlants } from "../../services/plantService.js";
import { Plant } from "./Plant.js";
import "./Plants.css";

export const PlantList = () => {
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    getAllPlants().then((plantsArray) => {
      setAllPlants(plantsArray);
      console.log("plants are in!");
    });
  }, []);

  return (
    <div className="plants-container">
      <h1>Welcome To PlantVault!</h1>
      <div>Compile your plants and watch them grow</div>

      <h2>All Plants</h2>
      <article className="plants">
        <ul>
          {allPlants.map((plantObj) => {
            return <Plant plant={plantObj} key={plantObj.id} />;
          })}
        </ul>
      </article>
    </div>
  );
};
