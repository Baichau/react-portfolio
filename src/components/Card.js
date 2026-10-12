import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, description, imageSrc, imageAlt, technologies, liveLink, repoLink }) => {
  return (
    <Box
      backgroundColor="white"
      textColor="black"
      borderRadius="xl"
      overflow="hidden"
      p={{ base: 3, md: 4 }}
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.02)' }}
      display="flex"
      flexDirection="column"
    >
      <img
        src={imageSrc}
        width="100%"
        height="220"
        alt={imageAlt}
        loading="lazy"
        decoding="async"
        style={{ borderRadius: '8px', objectFit: 'cover' }}
      />
      <Heading as="h3" size={{ base: 'sm', md: 'md' }} my={2}>
        {title}
      </Heading>
      <VStack alignItems="flex-start" spacing={3} flex={1}>
        <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600">
          {description}
        </Text>
        <Text fontSize="sm" color="gray.700">
          <strong>Tech:</strong> {technologies.join(", ")}
        </Text>
        <HStack spacing={3} flexWrap="wrap" mt="auto">
          {liveLink && (
            <Button
              as="a"
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              colorScheme="blue"
            >
              Live demo
            </Button>
          )}
          <Button
            as="a"
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="outline"
            colorScheme="blue"
          >
            {liveLink ? "GitHub repo" : "GitHub project"}
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};


export default Card;
