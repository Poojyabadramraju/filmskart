import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import FanClub from "../pages/FanClub";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Movie from "../pages/Movie";
import CategoriesAdmin from "../pages/Admin/CategoriesAdmin";
import InsertProduct from "../pages/Admin/InsertProduct";
import Tags from "../pages/Admin/Tags";
import Theme from "../pages/Admin/Theme";
import UpcomingMovies from "../pages/Admin/UpcomingMovies";
import UploadBanner from "../pages/Admin/UploadBanner";
import Event from "../pages/Event";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";

import Dashboard from "../pages/Admin/Dashboard";
import AddtoCart from "../pages/AddtoCart";

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
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/fan-club",
        element: <FanClub />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "/add-to-cart",
        element: <AddtoCart />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
