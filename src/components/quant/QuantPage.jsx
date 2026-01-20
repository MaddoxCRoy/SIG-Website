import QuantHero from "./QuantHero";
import QuantProcess from "./QuantProcess";
import QuantEngagement from "./QuantEngagement";
import CommonFooter from "../layout/CommonFooter";

export default function QuantPage() {
    return (
        <main className="bg-[#FFFFF0]">
            <QuantHero />
            <QuantProcess />
            <QuantEngagement />
            <CommonFooter />
        </main>
    );
}
