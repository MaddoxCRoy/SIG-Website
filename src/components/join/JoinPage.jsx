import JoinHero from "./JoinHero";
import JoinTimeline from "./JoinTimeline";
import JoinFAQ from "./JoinFAQ";
import CommonFooter from "../layout/CommonFooter";

export default function JoinPage() {
    return (
        <main className="bg-[#FFFFF0]">
            <JoinHero />
            <JoinTimeline />
            <JoinFAQ />
            <CommonFooter />
        </main>
    );
}
