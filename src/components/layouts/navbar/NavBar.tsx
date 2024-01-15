import { Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { FcMenu } from 'react-icons/fc';
import { TbSettings } from 'react-icons/tb';
import Notification from './Notification';
import SearchForm from './SearchForm';
import UserDropdown from './UserDropdown';
import useSearch from '../../../hooks/useSearch';
import { SearchValue } from '../../../types/general';
import { Logo } from '../../ui';

const NavBar: React.FC = () => {
  const { onSearch } = useSearch();
  const handleSearch = (searchValue: SearchValue) => onSearch(searchValue);

  return (
    <Flex
      w="full"
      as="nav"
      align="center"
      justify="space-between"
      flexDir={{ base: 'column', md: 'row' }}
      my={{ base: 3, md: 8 }}
      gap={5}
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
        <SearchForm onSubmitSearch={handleSearch} />
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
