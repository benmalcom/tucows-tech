import { Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';

const UserDropdown = () => (
  <Flex align="center" display={{ base: 'none', md: 'flex' }}>
    <Flex h="44px" w="44px" align="center" justify="center">
      <Icon
        as={HiOutlineUserCircle}
        color="custom.100"
        h="24px"
        w="24px"
        _hover={{ opacity: 0.7 }}
      />
    </Flex>
    <Text color="custom.100">Adriana Arias</Text>
  </Flex>
);

export default UserDropdown;
