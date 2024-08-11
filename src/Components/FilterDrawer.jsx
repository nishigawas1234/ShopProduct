import {
  Box,
  VStack,
  Checkbox,
  Collapse,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const FilterDrawer = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onClearAll,
}) => {
  const [expandedFilter, setExpandedFilter] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleToggleSubFilters = (filterName) => {
    setExpandedFilter(expandedFilter === filterName ? null : filterName);
  };

  const handleCheckboxChange = (filterName, optionId) => {
    setSelectedOptions((prev) => {
      const updatedOptions = {
        ...prev,
        [filterName]: prev[filterName]?.includes(optionId)
          ? prev[filterName].filter((id) => id !== optionId)
          : [...(prev[filterName] || []), optionId],
      };

      onFilterChange(updatedOptions);
      return updatedOptions;
    });
  };

  const handleClearAllFilters = () => {
    onClearAll();
    setSelectedOptions({});
  };


  return (
    <Box
      as="aside"
      position="absolute"
      left="0"
      top="0"
      height="100%"
      width="250px"
      bg="gray.100"
      p={4}
      boxShadow="md"
      overflowY="auto"
      display={isOpen ? "block" : "none"}
    >
      <Text color="black" fontSize="24px" mb={4} fontWeight="bold">
        Filters
      </Text>
      {filters.length > 0 && (
        <>
          <VStack spacing={4} align="start">
            {filters?.map((filter) => (
              <Box key={filter.name} fontWeight="normal">
                <Button
                  variant="link"
                  onClick={() => handleToggleSubFilters(filter.name)}
                  rightIcon={
                    expandedFilter === filter.name ? (
                      <ChevronUpIcon />
                    ) : (
                      <ChevronDownIcon />
                    )
                  }
                >
                  {filter.name}
                </Button>
                <Collapse in={expandedFilter === filter.name}>
                  <VStack spacing={2} align="start" mt={2} textTransform="capitalize" fontWeight="normal">
                    {filter?.options?.map((option) => (
                      <Checkbox
                        key={option.id}
                        isChecked={
                          selectedOptions[filter.name]?.includes(option.id) ||
                          false
                        }
                        onChange={() =>
                          handleCheckboxChange(filter.name, option.id)
                        }
                      >
                        {option.name}
                      </Checkbox>
                    ))}
                  </VStack>
                </Collapse>
              </Box>
            ))}
          </VStack>
         {Object.keys(selectedOptions).length > 0 &&  <Button
            colorScheme="red"
            onClick={handleClearAllFilters}
            mt={4}
            size="sm"
          >
            Clear All Filters
          </Button>}
         
        </>
      )}
    </Box>
  );
};

export default FilterDrawer;
