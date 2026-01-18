import MStarHero from "./MStarHero";
import MStarAbout from "./MStarAbout";
import MStarProcess from "./MStarProcess";
import MStarInstruments from "./MStarInstruments";
import MStarRole from "./MStarRole";

export default function MStarPage() {
    return (
        <main className="bg-[#FFFFF0]">
            <MStarHero />
            <MStarAbout />
            <MStarProcess />
            <MStarInstruments />
            <MStarRole />
        </main>
    );
}
