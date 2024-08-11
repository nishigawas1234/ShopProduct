import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Link,
  Badge,
} from '@chakra-ui/react';
import { ShoopingCart, Logo } from '../Icons';
import { CardDrawer } from '..';
import { useSelector } from 'react-redux';
import { getCartData } from '../../Redux/Cart/cartSelector';

const Header = () => {
  const cartDataArray = useSelector(getCartData);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeNav, setActiveNav] = useState(0);

  const onOpenDrawer = () => setIsDrawerOpen(true);
  const onCloseDrawer = () => setIsDrawerOpen(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bgColor = 'transparent';
  const textColor = scrollPosition > 500 ? 'gray.500' : 'contrast.200';
  const iconColor  = scrollPosition > 500 ? "gray.500" : "#F8F8F8"; 
  const navItems = [
    {
      isButton: false,
      title: "All Products",
      action: "Product",
    },
    {
      isButton: false,
      title: "Featured Products",
      action: "contact",
    },
  ];

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        width="100%"
        zIndex="1000"
        bg={bgColor}
        boxShadow="sm"
        py={2}
        pt={10}
        transition="background-color 0.3s ease"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          maxW="90%"
          mx="auto"
          px={4}
        >
      
          <a href='#'><Logo color={textColor} /></a>
          <Flex >
          <Flex alignItems="center" gap={6} mr="24">
            {navItems.map((item, i) => (
              <Box key={i}>
                <Link
                  href={`#${item.action}`}
                  fontSize="md"
                  fontWeight={activeNav === item.title  ? "800" : "300"}
                  color={textColor}
                  _hover={{ color: "none" }}
                  _focus={{ boxShadow: "none" }}
                  onClick={() => setActiveNav(item.title)}
                >
                  {item.title}
                </Link>
              </Box>
            ))}
          </Flex>
          <Flex alignItems="center" gap={4}>
           

            <Box position="relative" onClick={onOpenDrawer}>
              <ShoopingCart color={iconColor} />
              <Badge
                position="absolute"
                top="0"
                right="0"
                transform="translate(50%, -50%)"
                variant="solid"
                colorScheme="red"
                borderRadius="full"
                px={2}
                py={1}
                fontSize="sm"
              >
                {cartDataArray.length}
              </Badge>
            </Box>
          </Flex>
          </Flex>
        </Flex>
      </Box>

      <CardDrawer
        isOpen={isDrawerOpen}
        onClose={onCloseDrawer}
      />
    </>
  );
};

export default Header;
