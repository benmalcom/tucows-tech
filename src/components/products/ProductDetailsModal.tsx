import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ModalFooter,
  Text,
  ButtonProps,
  Flex,
  Image,
  Stack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import React from 'react';
import features from './features.json';
import { Product } from '../../types/product';

type ProductDetailsModalProps = {
  onClose(): void;
  isOpen: boolean;
  product: Product;
};

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  onClose,
  isOpen,
  product,
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ base: 'sm', md: 'md', lg: '2xl' }}
      >
        <ModalOverlay />
        <ModalContent p={{ base: '2px', md: '20px' }}>
          <ModalHeader pb={0} fontWeight={700} fontSize="20px">
            {product.product}
          </ModalHeader>
          <ModalCloseButton outline="none" _focus={{ outline: 'none' }} />
          <ModalBody pt={{ base: 'initial', md: '50px' }}>
            <Flex flexDir={{ base: 'column', md: 'row' }} w="full">
              <Flex w={{ base: '100%', md: '50%' }} justify="center">
                <Image
                  boxSize="276px"
                  objectFit="cover"
                  src="/images/tech.png"
                  alt="Macb"
                />
              </Flex>
              <Flex
                flexDir="column"
                w={{ base: '100%', md: '50%' }}
                gap="16px"
                pl={{ base: '0px', md: '12px' }}
              >
                <Text fontSize="12px" fontWeight={600}>
                  Key Features
                </Text>
                <UnorderedList>
                  {features.map((feature, index) => (
                    <ListItem lineHeight="25px" fontSize="12px" key={index}>
                      {feature}
                    </ListItem>
                  ))}
                </UnorderedList>
                <Text lineHeight="25px" fontSize="12px" fontWeight={400}>
                  Apple 16" MacBook Pro features a 16" Retina Display, a Magic
                  Keyboard with a redesigned scissor mechanism, a six-speaker
                  high-fidelity sound system, and an advanced thermal design.
                  This MacBook Pro also features an AMD Radeon Pro 5600M
                  graphics card, a 7nm mobile discrete GPU designed for pro
                  users. With 8GB of HBM2
                </Text>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter mt={{ base: 'initial', md: 16 }}>
            <Button
              colorScheme="gray"
              onClick={onClose}
              _hover={{ color: 'custom.100' }}
              w={{ base: '100%', md: 'unset' }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

type ModalManagerProps = Omit<
  ProductDetailsModalProps,
  'onClose' | 'isOpen'
> & {
  triggerFunc({ trigger }: { trigger(): void }): React.ReactNode;
};

export const ModalManager: React.FC<ModalManagerProps> = ({
  triggerFunc,
  ...rest
}) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <ProductDetailsModal isOpen={isOpen} onClose={onToggle} {...rest} />
      {triggerFunc({
        trigger: onToggle,
      })}
    </>
  );
};
