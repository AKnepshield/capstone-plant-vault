// import { useEffect, useState } from "react";
// import { getAllPlants } from "./services/plantService.js";
// import { Plant } from "./components/plants/Plant.js";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./components/views/ApplicationViews.js";
import { Authorized } from "./components/views/Authorized.js";
import { Login } from "./components/auth/Login.js";

export const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};
