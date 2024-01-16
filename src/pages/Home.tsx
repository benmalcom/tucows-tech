import { Flex, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ProductsTable } from 'components/products';
import { getProducts } from 'services/product';
import { Product } from 'types/product';
import useSearch from '../hooks/useSearch';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalSelected, setTotalSelected] = useState(0);
  const { searchValue } = useSearch();

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((e) => console.log('Error fetching products ', e))
      .finally();
  }, []);

  const onSelect = (totalSelected: number) => setTotalSelected(totalSelected);

  const filteredProducts = products.filter((productItem) =>
    productItem.product.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <Stack mt={{ base: 0, md: 16 }}>
      <Flex justify="space-between" align="center">
        <Flex align="center" gap={2} my={2}>
          <Text fontSize="16px" fontWeight={700} color="#1A1A1A">
            Products
          </Text>
          <Text fontSize="12px" color="#808080">
            10 of 64 results
          </Text>
        </Flex>
        {totalSelected > 0 && (
          <Flex align="center" gap={1}>
            <Text fontSize="14px" fontWeight={700} color="custom.100">
              Selected:
            </Text>
            <Text fontSize="14px" color="#1A1A1A">
              {totalSelected}
            </Text>
          </Flex>
        )}
      </Flex>
      <ProductsTable
        products={filteredProducts}
        isSelectable
        onSelect={onSelect}
      />
    </Stack>
  );
};

export default Home;
