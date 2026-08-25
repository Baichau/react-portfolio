import { Box, Heading, Text, HStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  return (
    <Box
      backgroundColor="white"
      textColor="black"
      borderRadius="xl"
      overflow="hidden"
      p={{ base: 3, md: 4 }}
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.02)' }}
    >
      <img src={imageSrc} width="100%" alt={title} style={{ borderRadius: '8px' }} />
      <Heading as="h3" size={{ base: 'sm', md: 'md' }} my={2}>
        {title}
      </Heading>
      <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.600" mb={3}>
        {description}
      </Text>
      <Link href={link} isExternal style={{ textDecoration: 'none' }} _hover={{ color: 'blue.500' }}>
        <HStack spacing={2}>
          <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="bold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="xs" />
        </HStack>
      </Link>
    </Box>
  );
};


export default Card;
