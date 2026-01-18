import { useState, useEffect } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import sigLogo from "../../assets/RedSigLogo.png";

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigationType = useNavigationType(); // 👈 KEY ADDITION

  /* =====================
     Header scroll effect
     ===================== */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =====================
     Scroll behavior
     ===================== */
  useEffect(() => {
    // 🔒 If page was refreshed, always start at top
    if (navigationType === "POP") {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    // ✅ Only scroll to hash on normal navigation
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location, navigationType]);

  const navItems = [
    {
      label: "About",
      scrollTo: "/#about",
      dropdown: [{ label: "Learn More", to: "/about" }],
    },
    {
      label: "Divisions",
      scrollTo: "/#divisions",
      dropdown: [
        { label: "Quant", to: "/quantitative" },
        { label: "Fundamental", to: "/fundamental" },
      ],
    },
    {
      label: "MStAR Fund",
      scrollTo: "/#mstar",
      dropdown: [{ label: "Learn More", to: "/mstar" }],
    },
    {
      label: "Research Journal",
      scrollTo: "/#journal",
      dropdown: [{ label: "Learn More", to: "/researchjournal" }],
    },
    {
      label: "Join",
      scrollTo: "/#join",
      dropdown: null,
    },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FFFFF0]/90 backdrop-blur-md border-b border-[#7A1626]/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/#hero" className="flex items-center gap-3">
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
              <div key={item.label} className="relative group">
                <Link
                  to={item.scrollTo}
                  className="font-secondary text-sm text-[#4B5563]
                             hover:text-[#1F2933] transition-colors"
                >
                  {item.label}
                </Link>

                {item.dropdown && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 mt-3 w-48
                               opacity-0 invisible group-hover:opacity-100
                               group-hover:visible transition-all duration-200 z-50"
                  >
                    <div className="bg-[#FFFFF0] border border-[#7A1626]/20
                                    rounded-md shadow-lg py-2">
                      {item.dropdown.map((drop) => (
                        <Link
                          key={drop.label}
                          to={drop.to}
                          className="block px-4 py-2 text-sm text-[#4B5563]
                                     hover:text-[#1F2933]
                                     hover:bg-[#7A1626]/5 transition-colors"
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
              className="md:hidden bg-[#FFFFF0]/95 backdrop-blur-md
                         border-b border-[#7A1626]/20"
            >
              <div className="px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={
                      item.dropdown
                        ? item.dropdown[0]?.to ?? item.scrollTo
                        : item.scrollTo
                    }
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-secondary text-sm text-[#4B5563]
                               hover:text-[#1F2933] transition-colors py-2"
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
