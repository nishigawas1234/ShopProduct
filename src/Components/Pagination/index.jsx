import React from "react";
import { HStack, Button, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <HStack spacing={2} justifyContent="center" mt={6}>
      <IconButton
        icon={<ArrowLeftIcon />}
        onClick={() => handlePageChange(1)}
        isDisabled={currentPage === 1}
        aria-label="First Page"
      />
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={() => handlePageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
        aria-label="Previous Page"
      />
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          variant={currentPage === index + 1 ? "solid" : "outline"}
          colorScheme={currentPage === index + 1 ? "red" : "gray"}
          borderColor={currentPage === index + 1 ? "red.500" : "gray.200"}
          color={currentPage === index + 1 ? "contrast.200" : "gray.600"}
          _hover={{
            borderColor: "trasparent",
            color: "black",
          }}
        >
          {index + 1}
        </Button>
      ))}
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={() => handlePageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
        aria-label="Next Page"
      />
      <IconButton
        icon={<ArrowRightIcon />}
        onClick={() => handlePageChange(totalPages)}
        isDisabled={currentPage === totalPages}
        aria-label="Last Page"
      />
    </HStack>
  );
};

export default Pagination;
