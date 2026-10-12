import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
        <AboutSection />
        <ProjectsSection />
        <ContactMeSection />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
