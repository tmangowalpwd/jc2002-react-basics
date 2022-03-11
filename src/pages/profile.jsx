import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../configs/api";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({});

  const { userId } = useParams();

  const fetchUserProfileData = () => {
    axiosInstance.get(`/user_accounts/${userId}`).then((res) => {
      setProfileData(res.data);
    });
  };

  useEffect(() => {
    fetchUserProfileData();
  }, []);

  return (
    <Box padding="10">
      <Text>username: {profileData.username}</Text>
      <Text>email: {profileData.email}</Text>
      <Text>full name: {profileData.full_name}</Text>
      <Text>role: {profileData.role}</Text>
    </Box>
  );
};

export default ProfilePage;
