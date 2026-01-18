import JournalHero from "./JournalHero";
import JournalCurrentEdition from "./JournalCurrentEdition";
import JournalAbout from "./JournalAbout";

export default function JournalPage() {
    return (
        <main className="bg-[#FFFFF0]">
            <JournalHero />
            <JournalCurrentEdition />
            <JournalAbout />
        </main>
    );
}
