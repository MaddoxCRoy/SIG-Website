import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Divisions from "./components/home/Divisions";
import MStarFund from "./components/home/MStarFund";
import Footer from "./components/home/Footer";
import Layout from "./components/layout/layout";

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Divisions />
      <MStarFund />
      <Footer />
    </Layout>
  );
}


