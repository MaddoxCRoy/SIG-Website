import QuantHero from "./QuantHero";
import QuantProcess from "./QuantProcess";
import QuantEngagement from "./QuantEngagement";
import QuantRole from "./QuantRole";

export default function QuantPage() {
    return (
        <main className="bg-[#FFFFF0]">
            <QuantHero />
            <QuantProcess />
            <QuantEngagement />
            <QuantRole />
        </main>
    );
}
