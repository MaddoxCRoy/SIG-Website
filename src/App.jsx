import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Divisions from "./components/home/Divisions";
import MStarFund from "./components/home/MStarFund";
import Footer from "./components/home/Footer";

export default function App() {
  return (
    <main className="bg-[#0A0D12]">
      <Hero />
      <About />
      <Divisions />
      <MStarFund />
      <Footer />
    </main>
  );
}


