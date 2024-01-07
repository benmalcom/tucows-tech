import { HStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ProductsTable } from 'components/products';
import { getProducts } from 'services/product';
import { Product } from 'types/product';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((e) => console.log('error ', e))
      .finally();
  }, []);

  console.log('products ', products);
  return (
    <HStack mt={16}>
      <ProductsTable products={products} />
    </HStack>
  );
};

export default Home;
