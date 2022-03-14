import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import user_types from "../../redux/reducers/types/user";
import { product_routes } from "../../routes/products";

const NavbarProducts = () => {
  const userSelector = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logoutBtnHandler = () => {
    dispatch({
      type: user_types.LOGOUT_USER,
    });

    localStorage.removeItem("user_data");
  };

  return (
    <nav>
      <div className="link-wrapper">
        <Link to="/">Home</Link>
        {product_routes.map((val) => {
          return <Link to={val.path}>{val.navLinkName}</Link>;
        })}
      </div>

      {userSelector.id ? (
        <Button onClick={logoutBtnHandler} colorScheme="red">
          Logout
        </Button>
      ) : (
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      )}
    </nav>
  );
};

export default NavbarProducts;
