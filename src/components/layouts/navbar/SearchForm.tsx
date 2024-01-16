import {
  Flex,
  Icon,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { SearchValue } from '../../../types/general';
import { Button } from '../../ui';

type SearchFormProps = {
  onSubmitSearch(value: SearchValue): void;
};

const SearchForm: React.FC<SearchFormProps> = ({ onSubmitSearch }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries()) as Record<
      string,
      SearchValue
    >;
    onSubmitSearch(formValues.searchQuery);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) onSubmitSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex justify="end" flex="1" align="center" gap={7}>
        <Flex gap="16px">
          <InputGroup
            h="44px"
            flex={{ base: 1, md: 'unset' }}
            w={{ base: 'unset', md: '260px' }}
            borderRadius="0px 4px 4px 0px"
            border="1px solid #DCDFE3"
            as={Flex}
          >
            <InputLeftElement pointerEvents="none" h="full" pl="8px">
              <Icon as={CiSearch} color="gray.300" h="24px" w="24px" />
            </InputLeftElement>
            <Input
              placeholder="Search"
              color="rgba(0, 0, 0, 0.6)"
              h="full"
              fontWeight={400}
              border="none"
              name="searchQuery"
              onChange={handleChange}
              _placeholder={{ color: 'rgba(0, 0, 0, 0.30)' }}
            />
          </InputGroup>
          <Button variant="primary" p="12px 24px" h="44px" type="submit">
            Search
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
export default SearchForm;
