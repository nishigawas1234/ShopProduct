import { Box, Image, Text, Button, VStack ,useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {setCardData} from '../../Redux/Cart/cartSlice'
import {getCartData} from "../../Redux/Cart/cartSelector"

export default function ProductCard({ product, filterOptions }) {
    const dispatch = useDispatch();
    const toast = useToast();
  const [isHovered, setIsHovered] = useState(false);
  
  const cartDataArray = useSelector(getCartData);

  const getOptionName = (filterName, optionId) => {
    const filter = filterOptions.find((filter) => filter.name === filterName);
    return filter?.options.find((option) => option.id === optionId)?.name || "NA";
  };

  const handleAddToCart = (id) => {
   console.log(cartDataArray?.length,"cartData cartData")
   if(cartDataArray?.length){
    dispatch(setCardData([...cartDataArray,id]))
   }else{
    const updatedArray = [id]
    console.log(updatedArray,"updatedArray")
    dispatch(setCardData(updatedArray))
   }
   toast({
    title: "Product added to cart.",
    status: "success",
    duration: 3000,
    position:"top",
    isClosable: true,
  });
  };

  const handleRemoveProduct = (productId) => {
    const updatedCartArray = cartDataArray.filter(item => item !== productId)
    dispatch(setCardData(updatedCartArray))
    toast({
      title: "Removed product from Cart",
      status: "success",
      duration: 3000,
      position:"top",
      isClosable: true,
    });
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      maxW="300px"
    >
      <Box position="relative">
        <Image src="/Images/Prouduct/demo.png" alt={product.name} width="100%" />
        {isHovered && (
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            backgroundColor="rgba(0, 0, 0, 0.5)"
            color="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Button colorScheme="red" _hover={{background:"transparent"}} background="transparent" variant="solid" size="md" onClick={()=>{
              if(cartDataArray.includes(product.id)){
                handleRemoveProduct(product.id)
              }else{
                handleAddToCart(product.id)
              }
              
              }}>
               {cartDataArray.includes(product.id) ? "Removed from Cart" : "Add to Cart"}  
            </Button>
          </Box>
        )}
      </Box>
      <VStack align="start" p={4}>
        <Text fontWeight="bold">{product.name}</Text>
        <Text color="gray.600" textTransform="capitalize">Color: {getOptionName('Colors', product.colorId)}</Text>
        <Text color="gray.600" textTransform="capitalize">Material: {getOptionName('Material', product.materialId)}</Text>
        <Text fontSize="lg" fontWeight="bold">${product.price}</Text>
      </VStack>
    </Box>
  );
}
