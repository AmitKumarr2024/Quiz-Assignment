import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import MainPage from "../page/MainPage";
import QuizTestBoard from "../components/QuizTestBoard";
import QuizCard from "../components/QuizCard";

const index = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      { path: "start-quiz", element: <QuizTestBoard /> },
      { path: "card:id", element: <QuizCard/> },
    ],
  },
]);

export default index;
