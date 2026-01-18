import FundamentalHero from "./FundamentalHero";
import FundamentalFramework from "./FundamentalFramework";
import FundamentalSectors from "./FundamentalSectors";
import FundamentalEngagement from "./FundamentalEngagement";
import FundamentalRole from "./FundamentalRole";

export default function FundamentalPage() {
    return (
        <main className="bg-[#FFFFF0]">
            <FundamentalHero />
            <FundamentalFramework />
            <FundamentalSectors />
            <FundamentalEngagement />
            <FundamentalRole />
        </main>
    );
}
