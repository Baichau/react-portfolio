import React from "react";
import { Button, Heading, Link, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const email = "nikitaburalek1@gmail.com";

const ContactMeSection = () => (
  <FullScreenSection
    id="contactme-section"
    isDarkBackground
    backgroundColor="#512DA8"
    py={{ base: 8, md: 16 }}
    minHeight={{ base: "auto", md: "60vh" }}
    justifyContent="center"
  >
    <VStack
      width="100%"
      maxW="800px"
      p={{ base: 4, md: 8 }}
      alignItems="flex-start"
      spacing={6}
    >
      <Heading as="h2">Contact me</Heading>
      <Text fontSize={{ base: "md", md: "lg" }}>
        Have a project in mind? Send me an email and I’ll get back to you.
      </Text>
      <Button
        as="a"
        href={`mailto:${email}?subject=Portfolio%20inquiry`}
        colorScheme="whiteAlpha"
        size="lg"
      >
        Email Nick
      </Button>
      <Text>
        <Link href={`mailto:${email}`}>{email}</Link>
      </Text>
    </VStack>
  </FullScreenSection>
);

export default ContactMeSection;
