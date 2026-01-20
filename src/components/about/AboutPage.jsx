import AboutHero from "./AboutHero";
import AboutMission from "./AboutMission";
import AboutWhatWeDo from "./AboutWhatWeDo";
import AboutEboard from "./AboutEboard";
import CommonFooter from "../layout/CommonFooter";      

export default function AboutPage() {
    return (
        <main className="bg-[#FFFFF0]">
            <AboutHero />
            <AboutMission />
            <AboutWhatWeDo />
            <AboutEboard />
            <CommonFooter />
        </main>
    );
}
