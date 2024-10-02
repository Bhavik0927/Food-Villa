import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import ContactUs from "./components/Contact";

export const RenderRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<Error/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/Contact',
        element: <ContactUs />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />
    },
    ]
  }

]);
