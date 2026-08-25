import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Weather Finder",
    description:
      "A weather app that fetches real-time weather data using the wttr.in API. Built with vanilla JavaScript and modular ES6.",
    getImageSrc: () => require("../images/photo1.jpg"),
    link: "https://github.com/Baichau/weather-finder", 
  },
  {
    title: "Django Admin Dashboard",
    description:
      "A Django project with custom models, admin panel configuration, and database integration. Demonstrates backend development skills.",
    getImageSrc: () => require("../images/photo2.jpg"),
    link: "https://github.com/Baichau/little-lemon-api", 
  },
  {
    title: "Screed Masters",
    description:
      "A modern, responsive freelance website built to showcase professional screeding services with a clean user experience.",
    getImageSrc: () => require("../images/photo3.jpg"),
    link: "https://github.com/Baichau/ScreedMasters-app", 
  },
  {
    title: "React Portfolio",
    description:
      "This very portfolio website, built with React, Chakra UI, and Formik. Showcases my projects and contact form.",
    getImageSrc: () => require("../images/photo4.jpg"),
    link: "https://github.com/Baichau/react-portfolio", 
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
