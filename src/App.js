import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./components/views/ApplicationViews.js";
import { Authorized } from "./components/views/Authorized.js";
import { Login } from "./components/auth/Login.js";
import React from "react";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/register" element={<Register />} /> */}

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
