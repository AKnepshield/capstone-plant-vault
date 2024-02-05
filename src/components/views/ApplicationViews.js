import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { UserNav } from "../nav/UserNav.js";
import { Welcome } from "../welcome/Welcome.js";
import { PlantList } from "../plants/PlantList.js";
import { EditForm, PlantForm } from "../forms/EditForm.js";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  // currentUser not being recognized in dev tools but is displaying on page

  useEffect(() => {
    const localPlantUser = localStorage.getItem("plant_user");
    const plantUserObject = JSON.parse(localPlantUser);

    setCurrentUser(plantUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <UserNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="profile">
          <Route index element={<PlantList currentUser={currentUser} />} />
          <Route path="add-plant" element={<></>} />
        </Route>

        <Route
          path="plant/:plantId/edit"
          element={<EditForm currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
