import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import sigLogo from "../../assets/RedSigLogo.png";

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", to: "/about" },
    { label: "Divisions", to: "/#divisions" },
    { label: "MStAR Fund", to: "/mstar" },
    { label: "Research Journal", to: "/#journal" },
    { label: "Join", to: "/#join" },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFF0] text-[#1F2933]">
      {/* =====================
          Navigation
         ===================== */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#FFFFF0]/90 backdrop-blur-md border-b border-[#7A1626]/20"
          : "bg-transparent"
          }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={sigLogo}
              alt="Scarlet Investment Group"
              className="h-8 w-auto"
            />
            <span className="hidden sm:block font-light tracking-wide">
              Scarlet Investment Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="font-secondary text-sm text-[#4B5563] hover:text-[#1F2933] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#4B5563] hover:text-[#1F2933]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#FFFFF0]/95 backdrop-blur-md border-b border-[#7A1626]/20"
            >
              <div className="px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-secondary text-sm text-[#4B5563] hover:text-[#1F2933] transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* =====================
          Page Content
         ===================== */}
      <main className="pt-24">
        <Outlet />
      </main>
    </div>
  );
}
