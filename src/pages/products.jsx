import {
  Box,
  Text,
  Input,
  Center,
  FormLabel,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../configs/api";

const ProductCard = ({ productName, price, category }) => {
  return (
    <Box
      margin="2"
      borderWidth={1}
      borderColor="gray"
      borderRadius="4px"
      width="150px"
      padding="4"
    >
      <Text fontSize="large" fontWeight="bold">
        {productName}
      </Text>
      <Text>Rp. {price}</Text>
      <Text>{category}</Text>
    </Box>
  );
};

const ProductPage = () => {
  const [productList, setProductList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [searchValue, setSearchValue] = useState("");

  const inputHandler = (event) => {
    const { value } = event.target;

    setSearchInput(value);
  };

  const fetchProducts = () => {
    axiosInstance
      .get("/products")
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Terjadi kesalahan di server");
      });
  };

  const renderProducts = () => {
    return productList.map((val) => {
      if (val.product_name.toLowerCase().includes(searchValue.toLowerCase())) {
        return (
          <ProductCard
            category={val.category}
            price={val.price}
            productName={val.product_name}
          />
        );
      }
    });
  };

  const searchButtonHandler = () => {
    setSearchValue(searchInput);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Center>
      <Box width="xl">
        <Text fontSize="2xl" marginBottom="8">
          Products Page
        </Text>

        <FormLabel htmlFor="searchProduct">Product Name</FormLabel>
        <Input onChange={inputHandler} id="searchProduct" />
        <Button onClick={searchButtonHandler} marginTop="1">
          Search
        </Button>

        <Flex wrap="wrap" marginTop="4">
          {renderProducts()}
        </Flex>
      </Box>
    </Center>
  );
};

export default ProductPage;
