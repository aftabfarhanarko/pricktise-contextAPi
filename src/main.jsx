import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router";
import COntextProvider from "./context/COntextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <COntextProvider>
      <RouterProvider router={router}></RouterProvider>
    </COntextProvider>
  </StrictMode>
);
