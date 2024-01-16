import { Flex, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ProductsTable } from 'components/products';
import { getProducts } from 'services/product';
import { Product } from 'types/product';
import useSearch from '../hooks/useSearch';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { searchValue } = useSearch();

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((e) => console.log('error ', e))
      .finally();
  }, []);

  const filteredProducts = products.filter((productItem) =>
    productItem.product.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <Stack mt={{ base: 0, md: 16 }}>
      <Flex align="center" gap={2} my={2}>
        <Text fontSize="16px" fontWeight={700} color="#1A1A1A">
          Products
        </Text>
        <Text fontSize="12px" color="#808080">
          10 of 64 results
        </Text>
      </Flex>
      <ProductsTable products={filteredProducts} isSelectable />
    </Stack>
  );
};

export default Home;
