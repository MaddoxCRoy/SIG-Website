import About from "./About";
import Divisions from "./Divisions";
import Footer from "./Footer";
import Hero from "./Hero";
import Journal from "./Journal";
import MStARFund from "./MStarFund";

export default function AboutPage() {
    return (
        <main className="bg-[#FFFFF0]">
            <Hero />
            <About />
            <Divisions />
            <MStARFund />
            <Journal />
            <Footer />
        </main>
    );
}
