import { getAllPlants } from "../../services/plantService.js";
import { useState, useEffect } from "react";
import { Plant } from "./Plant.js";

export const PlantList = () => {
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    getAllPlants().then((plantArray) => {
      setAllPlants(plantArray);
      console.log("Seeds shall be sown!");
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
