import React from "react";
import { Heading, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Nick!";
const bio1 = "A full-stack developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Image
      src="/my-picture.png"
      alt="My picture"
      width={{ base: '80%', md: '400px' }}
      borderRadius="60px"
    />
    <Heading as="h1" size={{ base: 'md', md: 'lg' }} mt={4}>
      {greeting}
    </Heading>
    <Heading as="h2" size={{ base: 'lg', md: 'xl' }} mt={2}>
      {bio1}
    </Heading>
    <Heading as="h3" size={{ base: 'lg', md: 'xl' }} mt={2}>
      {bio2}
    </Heading>
  </FullScreenSection>
);

export default LandingSection;
