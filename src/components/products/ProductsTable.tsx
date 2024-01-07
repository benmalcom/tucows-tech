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
};
const tdStyles: StyleProps = {
  padding: '8px 16px',
  textAlign: 'center',
};

const ProductsTable: React.FC<ProductsTableProps> = ({ products }) => {
  return (
    <TableContainer w="full" borderRadius="8px" border="1px solid #E4E4EF">
      <Table variant="simple">
        <Thead>
          <Tr {...trStyles}>
            <Th {...thStyles}>ID</Th>
            <Th {...thStyles}>Status</Th>
            <Th {...thStyles}>Quantity</Th>
            <Th {...thStyles}>Product name</Th>
            <Th
              {...thStyles}
              borderLeft="1px solid #E4E4EF"
              as={Flex}
              justify="space-between"
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
              <Td {...tdStyles}>Status</Td>
              <Td {...tdStyles}>{product.quantity}</Td>
              <Td {...tdStyles} textAlign="left" as={Flex} flexDir="column">
                {product.product}
                <Text fontSize="12px" color="#808080">
                  {product.serial}
                </Text>
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
