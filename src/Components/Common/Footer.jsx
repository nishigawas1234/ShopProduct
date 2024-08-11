import React from "react";
import { Box, Flex, Text, Link, Image, VStack } from "@chakra-ui/react";
import { Logo } from "../Icons";

const Footer = () => {
  return (
    <Box
      bg="gray.800"
      py={24}
      px={14}
      position="relative"
      bottom={0}
      width="100%"
    >
      <a href="#">
        <Logo />
      </a>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        mt={4}
      >
        <VStack align="start" spacing={2}>
          <VStack spacing={1} align="start">
            <Link href="#Home" color="contrast.200">
              Home
            </Link>
            <Link href="#Product" color="contrast.200">
              Product
            </Link>
          </VStack>
        </VStack>
        <Box textAlign="center">
          <Text color="contrast.200" fontSize="14px">
            We are a registered E-Commerce seller and we support a variety of
            Local and International payment modes
          </Text>
          <Image
            src="Images/Logo/payment.png"
            alt="Logo"
            boxSize="100px"
            width="200px"
            height="55px"
          />
        </Box>
        <Box>
          <Text
            color="contrast.200"
            fontSize="14px"
            textAlign="start"
            mb="50px"
          >
            Website protected by
          </Text>
          <Image
            src="Images/Logo/websiteDevelopBy.png"
            alt="Logo"
            boxSize="100px"
            width="200px"
            height="55px"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
