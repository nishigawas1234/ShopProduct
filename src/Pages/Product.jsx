import { Box, Grid, Tag, TagLabel } from "@chakra-ui/react";
import { FilterDrawer, ProductCard, Skelton } from "../Components";
import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import axios from "../Api/axios";
import { useDispatch } from "react-redux";
import { setProductData } from "../Redux/Product/productSlice";

export default function Product() {
  const dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allProduct, setAllProduct] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    getAllProducts();
    getAllFilters();
  }, []);

  const getAllProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/reactjsTest/products`);
      setAllProduct(response.data.products);
      dispatch(setProductData(response.data.products));
      setLoading(false);
    } catch (err) {
      setError(err.message || "An error occurred");
      setLoading(false);
    }
  };

  const getAllFilters = async () => {
    try {
      const colors = await axios.get(`/reactjsTest/colors`);
      const material = await axios.get(`/reactjsTest/material`);

      if (colors || material) {
        const combinedData = {
          colors: colors.data.colors,
          material: material.data.material,
        };
        const filters = convertToFilters(combinedData);
        setFilterOptions(filters);
      }
    } catch (err) {
      setError(err.message || "An error occurred");
    }
  };

  const convertToFilters = (data) => {
    return Object.keys(data).map((key) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      options: data[key],
    }));
  };

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  const handleClearAllFilters = () => {
    setSelectedFilters({});
  };

  const filterProducts = () => {
    if (!allProduct || Object.keys(selectedFilters).length === 0)
      return allProduct;

    return allProduct.filter((product) => {
      return Object.keys(selectedFilters).every((filterKey) => {
        if (selectedFilters[filterKey]?.length === 0) return true;

        const productKey = filterKey === "Colors" ? "colorId" : "materialId";

        return selectedFilters[filterKey].includes(product[productKey]);
      });
    });
  };

  const productsPerPage = 6;
  const totalPages = Math.ceil(filterProducts()?.length / productsPerPage);

  const paginatedProducts = filterProducts()?.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <>
      <Box id="Product" p={4} py={12} position="relative">
        {loading ? (
          <Box>
          <Skelton />
        </Box>
        ) : (
          <>
            {" "}
            <FilterDrawer
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              filters={filterOptions}
              onFilterChange={handleFilterChange}
              onClearAll={handleClearAllFilters}
            />
            {Object.keys(selectedFilters).length > 0 && (
              <Box mb={4}>
                <Box d="flex" flexWrap="wrap" gap={2}>
                  {Object.keys(selectedFilters).map((filterName) =>
                    selectedFilters[filterName].map((optionId) => {
                      const option = filterOptions
                        ?.find((filter) => filter.name === filterName)
                        ?.options.find((option) => option.id === optionId);
                      return (
                        <Tag
                          key={optionId}
                          size="lg"
                          variant="subtle"
                          colorScheme="teal"
                          mr="4"
                        >
                          <TagLabel>{option?.name || filterName}</TagLabel>
                        </Tag>
                      );
                    })
                  )}
                </Box>
              </Box>
            )}
            {paginatedProducts.length ? (
              <Grid templateColumns="repeat(3, 1fr)" gap={6} ms="250px">
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    filterOptions={filterOptions}
                  />
                ))}
              </Grid>
            ) : (
              <Box h="600px" w="100%">
                No data Found
              </Box>
            )}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </>
        )}
      </Box>
    </>
  );
}
