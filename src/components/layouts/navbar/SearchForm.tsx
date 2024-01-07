import {
  Flex,
  Icon,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { Button } from '../../ui';

type SearchFormProps = {
  onSubmit(value: string): void;
};

const SearchForm: React.FC<SearchFormProps> = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    // Process form data here (e.g., send to server)
    console.log(formValues);
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
              h="full"
              color="rgba(0, 0, 0, 0.30)"
              fontWeight={400}
              border="none"
              name="searchQuery"
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
