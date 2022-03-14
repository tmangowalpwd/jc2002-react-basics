import Navbar from "../components/Navbar/Navbar";
import NavbarUser from "../components/NavbarUser/NavbarUser";
import BandPage from "../pages/band";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import ProductPage from "../pages/products";
import TourPage from "../pages/tour";
import { product_routes } from "./products";

export const routes = [
  {
    path: "/",
    component: <HomePage />,
    navbar: <Navbar />,
  },
  {
    path: "/band",
    component: <BandPage />,
    navbar: <Navbar />
  },
  {
    path: "/tour",
    component: <TourPage />,
    navbar: <Navbar />
  },
  {
    path: "/login",
    component: <LoginPage />,
  },
  ...product_routes
];
