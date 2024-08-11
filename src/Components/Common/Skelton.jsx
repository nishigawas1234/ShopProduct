import React from "react";
import { Skeleton, VStack, Box } from "@chakra-ui/react";


const Skelton = () => {
  return (
    <VStack spacing={4} align="stretch" h="100%" w="100%" mt={10}>
      <Box p={4} w="100%">
        <Skeleton
          startColor="gray.900"
          endColor="gray.100"
          height="4"
          rounded="lg"
          mb="9"
        />
        <Skeleton
          startColor="gray.900"
          endColor="gray.100"
          height="4"
          rounded="lg"
          mb="8"
        />
        <Skeleton
          startColor="gray.900"
          endColor="gray.100"
          height="12"
          rounded="lg"
          mb="8"
        />
        <Skeleton
          startColor="gray.900"
          endColor="gray.100"
          height="12"
          rounded="lg"
          mb="8"
        />
        <Skeleton
          startColor="gray.900"
          endColor="gray.100"
          height="12"
          rounded="lg"
          mb="8"
        />
        <Skeleton
          startColor="gray.900"
          endColor="gray.100"
          height="12"
          rounded="lg"
        />
      </Box>
    </VStack>
  );
};

export default Skelton;
