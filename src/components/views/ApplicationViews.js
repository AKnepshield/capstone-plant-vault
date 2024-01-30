import { useEffect, useState } from "react";
import { PlantUserViews } from "./PlantUserViews.js";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localPlantUser = localStorage.getItem("plant_user");
    const plantUserObject = JSON.parse(localPlantUser);

    setCurrentUser(plantUserObject);
  }, []);

  return <PlantUserViews currentUser={currentUser} />;
};
