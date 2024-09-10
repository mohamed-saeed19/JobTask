import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import AboutUs from "./Components/AboutUs/AboutUs";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, 
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <AboutUs />,
        },
        {
          path: "services",
          element: <Services />,
        },
      ],
    },
  ]);
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
