import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router/dom";
import { router } from "./router/Routes.jsx";
import InstalledAppsProvider from "./context/InstalledAppsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstalledAppsProvider>
      <RouterProvider router={router} />
    </InstalledAppsProvider>
  </StrictMode>,
);
