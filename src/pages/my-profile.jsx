import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../configs/api";

const MyProfilePage = () => {
  const userSelector = useSelector((state) => state.auth);

  return (
    <Box padding="10">
      <Text fontSize="lg">MY PROFILE</Text>
      <Text>username: {userSelector.username}</Text>
      <Text>email: {userSelector.email}</Text>
      <Text>full name: {userSelector.full_name}</Text>
      <Text>role: {userSelector.role}</Text>
    </Box>
  );
};

export default MyProfilePage;
