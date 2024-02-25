import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Sunmica from "./Components/Sunmica/Sunmica";
import Louvers from "./Components/Louvers/Louvers";
import WPCPanels from "./Components/WPCPanels/WPCPanels";
import Layout from "./Layout";
import Carousel from "./Components/Carousel/Carousel";

const router = createBrowserRouter([
  {
    path: "",
    element: [<Layout />],
    children: [
      { path: "sunmica", element: <Sunmica /> },
      { path: "louvers", element: <Louvers /> },
      { path: "wpcpanels", element: <WPCPanels /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
