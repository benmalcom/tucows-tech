import { Flex, Image } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <Flex gap={{ base: 2, md: 3 }} align="center">
      <Image
        src="images/logo.svg"
        alt="Main image"
        w={{ base: '46.631px', md: 'unset' }}
        h={{ base: '43.995px', md: 'unset' }}
      />
      <Image
        src="images/logoText.svg"
        alt="Image text"
        w={{ base: '154.942px', md: 'unset' }}
        h={{ base: '31.834px', md: 'unset' }}
      />
    </Flex>
  );
};

export default Logo;
