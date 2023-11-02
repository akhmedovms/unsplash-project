import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="align-element">
      <Navbar />
      <main className="align-element py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
