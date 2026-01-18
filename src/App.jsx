import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import ScrollToTop from "./components/layout/ScrollToTop";

import AboutPage from "./components/about/AboutPage";
import HomePage from "./components/home/HomePage";
import MStarPage from "./components/mstar/MStarPage";
import QuantPage from "./components/quant/QuantPage";
import FundamentalPage from "./components/fundamental/FundamentalPage";
import JournalPage from "./components/journal/JournalPage"

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mstar" element={<MStarPage />} />
          <Route path="/quantitative" element={<QuantPage />} />
          <Route path="/fundamental" element={<FundamentalPage />} />
          <Route path="/researchjournal" element={<JournalPage />} />
        </Route>
      </Routes>
    </>
  );
}
