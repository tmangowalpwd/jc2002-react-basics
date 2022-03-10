import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import counter_types from "../redux/reducers/counter/types";

const CounterPage = () => {
  const countSelector = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const changeCountValue = (dir) => {
    if (dir === "increment") {
      dispatch({
        type: counter_types.INCREMENT_COUNTER,
      });
    } else if (dir === "decrement") {
      dispatch({
        type: counter_types.DECREMENT_COUNTER,
      });
    }
  };
  return (
    <Box maxWidth="2xl" padding="16">
      <Flex alignItems="center" marginTop="10">
        <Button onClick={() => changeCountValue("decrement")} marginRight="4">
          -
        </Button>
        <Text fontSize="2xl">{countSelector.count}</Text>
        <Button onClick={() => changeCountValue("increment")} marginLeft="4">
          +
        </Button>
      </Flex>
      <Flex alignItems="center" marginTop="4">
        <Input />
        <Button marginLeft="4">Set Counter</Button>
      </Flex>
      <Button marginTop="4">Reset Counter</Button>
    </Box>
  );
};

export default CounterPage;
