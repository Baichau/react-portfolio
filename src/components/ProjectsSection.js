import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Weather Finder",
    description:
      "Search any city to see current weather conditions and temperatures from the wttr.in API.",
    technologies: ["HTML", "CSS", "JavaScript", "wttr.in API"],
    imageAlt: "Weather Finder search screen",
    getImageSrc: () => require("../images/weather-finder.webp"),
    repoLink: "https://github.com/Baichau/weather-finder",
  },
  {
    title: "Little Lemon Restaurant API",
    description:
      "A restaurant API for menu browsing, cart management, order placement, and role-based access.",
    technologies: ["Python", "Django REST Framework", "Djoser", "SQLite"],
    imageAlt: "Little Lemon Restaurant API GitHub project page",
    getImageSrc: () => require("../images/little-lemon-repo.webp"),
    repoLink: "https://github.com/Baichau/little-lemon-api",
  },
  {
    title: "Screed Masters",
    description:
      "A responsive service website showcasing floor-screeding work, client reviews, and enquiry details.",
    technologies: ["HTML", "CSS", "JavaScript", "FormSubmit"],
    imageAlt: "Screed Masters website screenshot",
    getImageSrc: () => require("../images/screed-masters.webp"),
    liveLink: "https://baichau.github.io/ScreedMasters-app/",
    repoLink: "https://github.com/Baichau/ScreedMasters-app",
  },
  {
    title: "React Portfolio",
    description:
      "A responsive portfolio presenting my background, selected projects, and direct contact details.",
    technologies: ["React", "Chakra UI", "JavaScript"],
    imageAlt: "Nick Babichau portfolio homepage screenshot",
    getImageSrc: () => require("../images/portfolio-preview.webp"),
    liveLink: "https://react-portfolio-vert-omega.vercel.app/",
    repoLink: "https://github.com/Baichau/react-portfolio",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={{ base: 4, md: 8 }}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h2" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))' }}
        gridGap={{ base: 4, md: 8 }}
        width="100%"
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            imageAlt={project.imageAlt}
            technologies={project.technologies}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
