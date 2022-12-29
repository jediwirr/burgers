import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./pages/home";
import './styles.scss';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
