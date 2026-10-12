import React from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const AboutSection = () => (
  <FullScreenSection
    id="about-section"
    backgroundColor="#1f2937"
    isDarkBackground
    py={{ base: 12, md: 20 }}
    minHeight={{ base: "auto", md: "100vh" }}
    alignItems="flex-start"
    justifyContent="center"
  >
    <VStack alignItems="flex-start" spacing={5} maxWidth="800px">
      <Heading as="h2">About me</Heading>
      <Text fontSize={{ base: "md", md: "lg" }}>
        I’m Nick, a full-stack developer based in Batumi, Georgia. I build
        responsive web experiences and the APIs behind them, with a focus on
        practical features and clear, approachable interfaces.
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }}>
        <strong>Full-stack developer (React, Node, Python)</strong>
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }}>
        <strong>Location:</strong> Batumi, Georgia
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }}>
        <strong>Languages:</strong> English and Russian
      </Text>
    </VStack>
  </FullScreenSection>
);

export default AboutSection;
