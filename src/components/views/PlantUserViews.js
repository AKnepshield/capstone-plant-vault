import { Route, Routes } from "react-router-dom";
import { PlantList } from "../plants/PlantList.js";
import { Welcome } from "../welcome/Welcome.js";

export const PlantUserViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route path="/" element={<></>}>
        <Route index element={<Welcome />} />
        <Route
          path="plants"
          element={<PlantList currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
