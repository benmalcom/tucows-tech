import {
  Checkbox,
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
import React, { useEffect, useState } from 'react';
import { HiMiniChevronDown } from 'react-icons/hi2';
import { Badge } from 'components/ui';
import { Product } from 'types/product';
import { ModalManager as ProductDetailsModalManager } from './ProductDetailsModal';

type ProductsTableProps = {
  products: Product[];
  isSelectable?: boolean;
  onSelect(totalSelected: number): void;
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

const nf = new Intl.NumberFormat(navigator.language, {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'narrowSymbol',
  maximumFractionDigits: 2,
});

const columns = [
  { name: 'ID', selector: 'id' },
  {
    name: 'Status',
    selector: null,
  },
  { name: 'Quantity', selector: 'quantity' },
  {
    name: 'Product name',
    selector: 'product',
    thProps: { display: { base: 'table-cell' } },
  },
  {
    name: 'Prices',
    selector: null,
    render: () => (
      <>
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
      </>
    ),
    thProps: {
      display: { base: 'none', md: 'flex' },
      borderLeft: '1px solid #E4E4EF',
      justifyContent: 'space-between',
    },
  },
];

const ProductsTable: React.FC<ProductsTableProps> = ({
  products,
  isSelectable,
  onSelect,
}) => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [badgeColors, setBadgeColors] = useState<string[]>([]); // Store badge colors

  useEffect(() => {
    setBadgeColors(products.map(() => getRandomBadgeColor()));
  }, [products]);

  const handleCheckboxChange = (productId: number) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter((id) => id !== productId);
      } else {
        return [...prevSelected, productId];
      }
    });
  };

  useEffect(() => {
    onSelect(selectedProducts.length);
  }, [onSelect, selectedProducts]);

  const hasAllSelected =
    selectedProducts.length > 0 && selectedProducts.length === products.length;

  const hasSomeSelected =
    selectedProducts.length > 0 && selectedProducts.length !== products.length;

  if (products.length === 0) {
    return (
      <Flex py={3} px={4} bg="gray.100" align="center">
        <Text color="custom.200" textAlign="center">
          No products available.
        </Text>
      </Flex>
    );
  }

  return (
    <TableContainer
      w="full"
      borderRadius="8px"
      border="1px solid #E4E4EF"
      mb={4}
    >
      <Table variant="simple">
        <Thead>
          <Tr {...trStyles}>
            {isSelectable && (
              <Th key="th-checkbox" {...thStyles}>
                <Checkbox
                  color="custom.100"
                  onChange={() =>
                    setSelectedProducts(
                      selectedProducts.length === products.length
                        ? []
                        : products.map((product) => product.id),
                    )
                  }
                  isChecked={hasAllSelected}
                  isIndeterminate={hasSomeSelected}
                />
              </Th>
            )}
            {columns.map((col, index) => {
              if (col.render) {
                return col.render();
              } else if (col.name) {
                return (
                  <Th key={index} {...thStyles} {...col.thProps}>
                    {col.name}
                  </Th>
                );
              }
              return null;
            })}
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, index) => (
            <Tr key={product.id} {...trStyles}>
              {isSelectable && (
                <Td {...tdStyles}>
                  <Checkbox
                    key="td-checkbox"
                    color="custom.100"
                    onChange={() => handleCheckboxChange(product.id)}
                    isChecked={selectedProducts.includes(product.id)}
                  />
                </Td>
              )}
              <Td {...tdStyles}>{product.id}</Td>
              <Td {...tdStyles}>
                <Badge variant="subtle" colorScheme={badgeColors[index]}>
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
                <ProductDetailsModalManager
                  product={product}
                  triggerFunc={({ trigger }) => (
                    <Text
                      _hover={{ color: 'custom.100', cursor: 'pointer' }}
                      onClick={() => trigger()}
                    >
                      {product.product}
                    </Text>
                  )}
                />
                <Flex fontSize="12px" color="#808080" gap={2}>
                  <Text>{product.serial}</Text>
                  <Text display={{ base: 'block', md: 'none' }}>
                    {' '}
                    - Qty: {product.quantity}
                  </Text>
                </Flex>
              </Td>
              <Td {...tdStyles} isNumeric borderLeft="1px solid #E4E4EF">
                {nf.format(product.total)}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
