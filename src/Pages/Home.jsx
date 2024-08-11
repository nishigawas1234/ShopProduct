import { Box, Button, Grid, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box id="Home">
        <VStack
          justifyContent="center"
          h="100%"
          color="contrast.200"
          alignItems="flex-start"
          px={24}
        >
          <Text fontSize="64px" fontWeight="900" color="contrast.200">
            Latest Styles
          </Text>
          <Text fontSize="30px" fontWeight="800">
            At Yesterday’s Prices
          </Text>
          <a href="#Product">
            <Button bg="primary.500" colorScheme="red" variant="solid" size="md">
              BROWSE ALL STYLES
            </Button>
          </a>
        </VStack>
      </Box>
    </>
  );
}
