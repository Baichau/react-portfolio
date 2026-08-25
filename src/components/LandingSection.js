import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
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
    <img src="/my-picture.png"
    alt="My picture"
    width={400}
    style={{ borderRadius: '60px' }} 
    />
    <h1 style={{ fontSize: '20px', margin: '5px 0', fontWeight: '400'}}>{greeting}</h1>
    <h2 style={{ fontSize: '32px', margin: '10px 0', fontWeight: '800'}}>{bio1}</h2>
    <h3 style={{ fontSize: '32px', margin: '10px 0', fontWeight: 'bold'}}>{bio2}</h3>
  </FullScreenSection>
);

export default LandingSection;
