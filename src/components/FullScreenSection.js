import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      width="100%"
      overflowX="hidden"
    >
      <VStack
        maxWidth="1280px"
        minHeight="100vh"
        width="100%"
        px={{ base: 4, md: 8, lg: 16 }}
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
