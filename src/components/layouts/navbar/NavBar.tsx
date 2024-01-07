import { Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { FcMenu } from 'react-icons/fc';
import { TbSettings } from 'react-icons/tb';
import Notification from './Notification';
import SearchForm from './SearchForm';
import UserDropdown from './UserDropdown';
import { Logo } from '../../ui';

const NavBar: React.FC = () => {
  const onSubmitSearch = (searchValue: string) => {
    console.log('searchValue ', searchValue);
  };
  return (
    <Flex
      w="full"
      as="nav"
      align="center"
      justify="space-between"
      flexDir={{ base: 'column', md: 'row' }}
      my={5}
      gap={4}
    >
      <Flex
        justify={{ base: 'space-between', md: 'unset' }}
        w={{ base: 'full', md: 'unset' }}
        h="full"
        align="center"
      >
        <Logo />
        <Icon
          as={FcMenu}
          color="#707070"
          h="24px"
          w="24px"
          display={{ sm: 'block', md: 'none' }}
        />
      </Flex>

      <Flex justify="end" flex="1" align="center" gap={7}>
        <SearchForm onSubmit={onSubmitSearch} />
        <Icon
          as={TbSettings}
          color="custom.100"
          h="24px"
          w="24px"
          _hover={{ opacity: 0.7 }}
          display={{ base: 'none', md: 'block' }}
        />
        <Notification />
        <UserDropdown />
      </Flex>
    </Flex>
  );
};
export default NavBar;
