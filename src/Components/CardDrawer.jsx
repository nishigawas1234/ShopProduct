import React, { useEffect, useState } from "react";
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, useToast , DrawerContent, Button, Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { ProductList } from "."; 
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../Redux/Cart/cartSelector";
import { getProductData } from "../Redux/Product/productSelector";
import { setCardData } from "../Redux/Cart/cartSlice";

const CardDrawer = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const toast = useToast();
  const cartDataArray = useSelector(getCartData);
  const allProduct = useSelector(getProductData);
  const [selectedMenu, setSelectedMenu] = useState("All Products");
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    if (selectedMenu === "All Products") {
      const filteredData = allProduct.filter(item => cartDataArray.includes(item.id));
      setSelectedProduct(filteredData);
    }
  }, [allProduct, cartDataArray, selectedMenu]);

  // Handle menu click
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    // When menu changes, refresh the product list
    if (menu === "All Products") {
      const filteredData = allProduct.filter(item => cartDataArray.includes(item.id));
      setSelectedProduct(filteredData);
    }
  };

  // Handle product click to show details (Placeholder)
  const handleProductClick = (product) => {
    // Implement your product detail logic here
    console.log("Product clicked:", product);
  };

  const handleRemoveProduct = (productId) => {
    const updatedCartArray = cartDataArray.filter(item => item !== productId)
    dispatch(setCardData(updatedCartArray))
    toast({
      title: "Removed product from cart",
      status: "success",
      duration: 3000,
      position:"top",
      isClosable: true,
    });
  };

  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex justify="space-between" align="center">
              <Text fontSize="24px" fontWeight="bold">{selectedMenu}</Text>
              <IconButton
                icon={<CloseIcon />}
                onClick={onClose}
                aria-label="Close Drawer"
                variant="outline"
              />
            </Flex>
            <Flex mt={4} mb={4} gap={4} justify="space-between">
              <Text 
                cursor="pointer"
                fontWeight={selectedMenu === "All Products" ? "bold" : "normal"}
                fontSize="md" 
                onClick={() => handleMenuClick("All Products")}
              >
                All Products
              </Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <ProductList 
              products={selectedProduct} 
              onProductClick={handleProductClick}  
              onRemoveProduct={handleRemoveProduct}
            />
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default CardDrawer;
