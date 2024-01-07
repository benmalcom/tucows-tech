import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './navbar/NavBar';

const Layout = () => {
  return (
    <Flex
      h="100vh"
      w={{ base: '100%', lg: '1184px' }}
      flexDir="column"
      mx="auto"
      p={{ base: '16px', md: 'unset' }}
    >
      <Flex h="full" w="full" flex={1} flexDir="column">
        <NavBar />
        <Box flex={1} boxSizing="border-box" w="full" bg="white">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
