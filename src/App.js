import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
import About from "./components/pages/About";
import Basket from "./components/pages/basket/Basket";
import "./index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/basket", element: <Basket /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;