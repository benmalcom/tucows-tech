import { Box, Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';

const UserDropdown = () => (
  <Flex pos="relative" display={{ base: 'none', md: 'flex' }}>
    <Icon
      as={IoNotificationsOutline}
      color="custom.100"
      h="24px"
      w="24px"
      _hover={{ opacity: 0.7 }}
    />
    <Box
      bg="red.500"
      h="6px"
      w="6px"
      borderRadius="50%"
      pos="absolute"
      top={1}
      right={1}
    />
  </Flex>
);

export default UserDropdown;
