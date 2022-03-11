import {
  Box,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProtectedPage from "../components/ProtectedPage";
import { axiosInstance } from "../configs/api";
import { BsThreeDots } from "react-icons/bs";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [postList, setPostList] = useState([]);

  const userSelector = useSelector((state) => state.auth);

  const fetchPosts = () => {
    axiosInstance.get("/posts").then((res) => {
      setPostList(res.data);
    });
  };

  const renderPosts = () => {
    return postList.map((val) => {
      return (
        <Box width="lg" marginY="8">
          <Menu>
            <MenuButton as={IconButton} icon={<Icon as={BsThreeDots} />} />
            <MenuList>
              <MenuItem>View Details</MenuItem>
              {val.userId === userSelector.id ? (
                <>
                  <MenuItem>Edit Post</MenuItem>
                  <MenuItem>Delete Post</MenuItem>
                </>
              ) : null}
            </MenuList>
          </Menu>
          <Image src={val.image_url} />
          <Text>{val.caption}</Text>
          <Text>{val.userId}</Text>
        </Box>
      );
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box padding="10">
      <h1>Home Page</h1>
      {renderPosts()}
    </Box>
  );
};

export default HomePage;
