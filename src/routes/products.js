import Navbar from "../components/Navbar/Navbar";
import NavbarProducts from "../components/NavbarProducts/NavbarProducts";
import HomePage from "../pages/home";
import ProductPage from "../pages/products";

const mainMenuSlug = "products"

export const product_routes = [
  {
    path: `/${mainMenuSlug}`,
    component: <ProductPage />,
    navbar: <NavbarProducts />,
    navLinkName: "Products"
  },
  {
    path: `/${mainMenuSlug}/reports`,
    component: <ProductPage />,
    navbar: <NavbarProducts />,
    navLinkName: "Reports"
  },
  {
    path: `/${mainMenuSlug}/details/:productId`,
    component: <ProductPage />,
    navbar: <NavbarProducts />,
    navLinkName: "Details"
  },
  {
    path: `/${mainMenuSlug}/stock-mutation`,
    component: <ProductPage />,
    navbar: <NavbarProducts />,
    navLinkName: "Stock Mutation"
  }
]