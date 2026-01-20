import JournalHero from "./JournalHero";
import JournalCurrentEdition from "./JournalCurrentEdition";
import JournalAbout from "./JournalAbout";
import ResearchJournalDisclosure from "./JournalDisclosure";
import CommonFooter from "../layout/CommonFooter";

export default function JournalPage() {
    return (
        <main className="bg-[#FFFFF0]">
            <JournalHero />
            <JournalCurrentEdition />
            <JournalAbout />
            <ResearchJournalDisclosure />
            <CommonFooter />
        </main>
    );
}
