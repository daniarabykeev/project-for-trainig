import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";
import EditProductPage from "../pages/EditProductPage";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddProductPage />} />
          <Route path="/edit/:id" element={<EditProductPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MainRoutes;
