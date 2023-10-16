// Assuming all these components are converted to React
import Container from "./components/Container";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Hero from "./components/Hero";
//import Layout from "./layouts/Layout";

function App() {
  return (
      <Container>
        <Hero />
        <Features />
        <Cta />
      </Container>
  );
}

export default App;

