import React from "react";
import { Box, Text, Flex, Image, VStack, Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const ProductList = ({ products, onProductClick, onRemoveProduct }) => {
  return (
    <Box>
      {products?.length > 0 ? (
        products.map((product) => (
          <Box
            key={product.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            mb={4}
            cursor="pointer"
            _hover={{ bg: "gray.100" }}
          >
            <Flex direction="column">
              <Flex align="center" mb={4} onClick={() => onProductClick(product)}>
                <Image
                  src="/Images/Prouduct/demo.png"
                  alt={product.name}
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="md"
                />
                <VStack align="start" spacing={2} ml={4}>
                  <Text fontSize="lg" fontWeight="bold">{product.name}</Text>
                  <Text fontSize="md" color="gray.600">${product.price.toFixed(2)}</Text>
                </VStack>
              </Flex>
              <Button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents triggering onProductClick
                  onRemoveProduct(product.id);
                }}
                colorScheme="red"
                size="sm"
                leftIcon={<DeleteIcon />}
                w="full"
              >
                Remove
              </Button>
            </Flex>
          </Box>
        ))
      ) : (
        <Text>No products available</Text>
      )}
    </Box>
  );
};

export default ProductList;
