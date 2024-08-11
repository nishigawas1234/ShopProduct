import React from "react";
import {Flex, Image, Text, VStack, Button } from "@chakra-ui/react";

const ProductDetail = ({ product }) => {
  return (
    <Flex direction={{ base: "column", md: "row" }} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
       {/* image from api is not working so using static image here */}
      <Image src="/Images/Prouduct/demo.png" alt={product.name} boxSize="150px" objectFit="cover" borderRadius="md" />
      <VStack align="start" spacing={4} ml={{ base: 0, md: 4 }}>
        <Text fontSize="xl" fontWeight="bold">{product.name}</Text>
        <Text fontSize="lg" color="gray.600">${product.price?.toFixed(2)}</Text>
        <Text fontSize="md" color="gray.800">{product.description}</Text>
        <Flex mt={4} gap={4}>
          <Button colorScheme="blue">Add to Cart</Button>
          <Button variant="outline">Buy Now</Button>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ProductDetail;
