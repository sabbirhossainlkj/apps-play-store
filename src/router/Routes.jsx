import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import Apps from "../pages/Apps/Apps";
import InstallApps from "../pages/InstallApps/InstallApps";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AppDetails from "../pages/appdetailspage/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/data.json");
          return res.json();
        },
        Component: HomePage,
      },
      {
        path: "/apps",
        loader: async () => {
          const res = await fetch("/data.json");
          return res.json();
        },
        Component: Apps,
      },
      {
        path: "/apps/:id",
        loader: async () => {
          const res = await fetch("/data.json");
          return res.json();
        },
        Component: AppDetails,
      },
      {
        path: "/installapps",
        Component: InstallApps,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
