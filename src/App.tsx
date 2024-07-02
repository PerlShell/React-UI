import { ChakraProvider } from "@chakra-ui/react";
import Hero from "./component/Hero";
import theme from "./constant/theme";
import About from "./component/About";
import Projects from "./component/Projects";
import Footer from "./component/Footer";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
