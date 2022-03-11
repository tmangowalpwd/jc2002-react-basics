import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import user_types from "../../redux/reducers/types/user";

const Navbar = () => {
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
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/band">Band</Link>
        <Link to="/tour">Tour</Link>
        <Link to="/products">Products</Link>
        <Link to="/users">Users</Link>
        <a href="contact.html">Contact</a>
      </div>
      {userSelector.role}
      {/* <i className="bi bi-search" /> */}
      <Button onClick={logoutBtnHandler} colorScheme="red">
        Logout
      </Button>
    </nav>
  );
};

export default Navbar;
