import {
  Flex,
  Icon,
  StyleProps,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { HiMiniChevronDown } from 'react-icons/hi2';
import { Badge } from 'components/ui';
import { Product } from 'types/product';

type ProductsTableProps = {
  products: Product[];
};
const trStyles: StyleProps = {
  boxShadow: '0px -1px 0px 0px #E4E4EF inset',
  h: '56px',
};
const thStyles: StyleProps = {
  padding: '18px 16px',
  textTransform: 'initial',
  fontSize: '16px',
  fontWeight: 700,
  color: '#1A1A1A',
  lineHeight: '20px',
  textAlign: 'center',
  display: { base: 'none', lg: 'table-cell' },
};
const tdStyles: StyleProps = {
  padding: '8px 16px',
  textAlign: 'center',
  display: { base: 'none', lg: 'table-cell' },
  color: '#1A1A1A',
};

function getRandomBadgeColor() {
  const colors = ['green', 'purple', 'orange', 'red'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const ProductsTable: React.FC<ProductsTableProps> = ({ products }) => {
  return (
    <TableContainer w="full" borderRadius="8px" border="1px solid #E4E4EF">
      <Table variant="simple">
        <Thead>
          <Tr {...trStyles}>
            <Th {...thStyles}>ID</Th>
            <Th {...thStyles}>Status</Th>
            <Th {...thStyles}>Quantity</Th>
            <Th {...thStyles} display={{ base: 'table-cell' }}>
              Product name
            </Th>
            <Th
              {...thStyles}
              display={{ base: 'none', md: 'flex' }}
              borderLeft="1px solid #E4E4EF"
              justifyContent="space-between"
            >
              <Flex flex={1} justify="center">
                Prices
              </Flex>
              <Icon as={HiMiniChevronDown} w="20px" h="20px" />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.id} {...trStyles}>
              <Td {...tdStyles}>{product.id}</Td>
              <Td {...tdStyles}>
                <Badge variant="subtle" colorScheme={getRandomBadgeColor()}>
                  Status
                </Badge>
              </Td>
              <Td {...tdStyles}>{product.quantity}</Td>
              <Td
                {...tdStyles}
                display={{ base: 'inline-flex' }}
                textAlign="left"
                justifyContent="space-between"
                flexDir="column"
              >
                {product.product}
                <Flex fontSize="12px" color="#808080" gap={2}>
                  <Text>{product.serial}</Text>
                  <Text display={{ base: 'block', md: 'none' }}>
                    {' '}
                    - Qty: {product.quantity}
                  </Text>
                </Flex>
              </Td>
              <Td {...tdStyles} isNumeric borderLeft="1px solid #E4E4EF">
                {product.total}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
