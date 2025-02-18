import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import index from "./router/index.jsx";
import { Provider } from "react-redux";
import Store from "./Redux/store.js";

createRoot(document.getElementById("root")).render(
  
    <Provider store={Store}>
      <RouterProvider router={index} />
    </Provider>
 
);
