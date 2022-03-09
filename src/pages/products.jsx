import { Box, Text, Input, Center, FormLabel } from "@chakra-ui/react";
import { axiosInstance } from "../configs/api";

const ProductCard = ({ productName, price, category }) => {
  return (
    <Box borderWidth={1} borderColor="gray" borderRadius="4px" width="150px">
      <Text fontSize="large" fontWeight="bold">
        Product Name
      </Text>
      <Text>Rp. 12,000</Text>
      <Text>Books</Text>
    </Box>
  );
};

const ProductPage = () => {
  return (
    <Center>
      <Box width="xl">
        <Text fontSize="2xl" marginBottom="8">
          Products Page
        </Text>

        <FormLabel htmlFor="searchProduct">Product Name</FormLabel>
        <Input id="searchProduct" />

        <ProductCard />
      </Box>
    </Center>
  );
};

export default ProductPage;
