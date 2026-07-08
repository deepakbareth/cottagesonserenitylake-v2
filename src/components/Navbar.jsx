import { useState, useEffect } from "react";
import { Home, Phone, Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo3.jpg";
import Reviews from "./Reviews";

// Navigation links
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#" },
  { label: "About", href: "#" },
  { label: "Amenities", href: "#" },
  { label: "Reviews", href: "#" },
];

const COTTAGES = [
  { name: "Pheasant Cottage", id: 1 },
  { name: "Bear's Den", id: 2 },
  { name: "Tall Pines Lodge", id: 3 },
];


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobilePropertiesOpen, setMobilePropertiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8 ${scrolled ? "pt-4" : "pt-6"
        }`}
    >
      {/* Floating Glassmorphism Pill */}
      <div
        className={`mx-auto max-w-7xl flex items-center justify-between transition-all duration-500 rounded-full border ${scrolled
          ? "h-20 px-8 bg-gray-900/80 backdrop-blur-xl border-brand-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
          : "h-20 px-4 sm:px-8 bg-gray-900/80 backdrop-blur-md border-white/40 shadow-sm"
          }`}
      >
        {/* Logo */}
        <a href="#home" className="relative shrink-0 w-32 sm:w-36 md:w-40 h-10 block">
          <img
            src={logo}
            alt="Alway At Home Logo"
            className={`absolute -top-4 md:-top-12 left-[-18px] md:left-[-28px] h-16 md:h-[95px] w-auto max-w-none object-contain transition-transform duration-500 hover:scale-105 -top-4 md:-top-7`}
          />
        </a>

        {/* Central Menu Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            if (link.label === "Properties") {
              return (
                <div key={link.label} className="relative group py-2">
                  <button className="flex items-center gap-1 font-sans text-[15px] font-medium text-white transition-colors hover:text-white/85 cursor-pointer focus:outline-none">
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 text-white/60 group-hover:text-white" />
                  </button>

                  {/* Dropdown Menu (Glassmorphism Pill Style) */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 bg-white/95 backdrop-blur-md border border-brand-border/60 rounded-2xl shadow-xl p-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50">
                    {COTTAGES.map((cottage) => (
                      <a
                        key={cottage.id}
                        href={`#home-${cottage.id}`}
                        className="block px-4 py-2 rounded-xl text-xs font-semibold text-black hover:bg-brand-surface hover:text-brand-accent transition-all duration-200"
                      >
                        {cottage.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                className="relative font-sans text-[15px] font-medium text-white/90 transition-colors hover:text-white group py-2"
              >
                {link.label}
                {/* Animated Underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
              </a>
            );
          })}
        </nav>

        {/* Right side CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:+1 800-997-9575"
            className="inline-flex items-center gap-2 bg-brand-text px-6 py-2.5 rounded-full text-white font-medium text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-brand-accent"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>+1(800) 997-9575</span>
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-brand-text/70 hover:text-brand-text focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-brand-text" />
            ) : (
              <Menu className="w-6 h-6 text-brand-text" />
            )}
          </button>
        </div>
      </div>

      {/* Floating Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden absolute top-[90px] left-4 right-4 bg-white/95 backdrop-blur-2xl border border-brand-border/50 rounded-2xl shadow-2xl p-4 space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
          {NAV_LINKS.map((link) => {
            if (link.label === "Properties") {
              return (
                <div key={link.label} className="w-full">
                  <button
                    onClick={() => setMobilePropertiesOpen(!mobilePropertiesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-brand-text/80 hover:text-brand-text hover:bg-brand-surface rounded-xl transition-all cursor-pointer focus:outline-none"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 text-brand-subtle ${mobilePropertiesOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {mobilePropertiesOpen && (
                    <div className="pl-6 pr-4 py-1.5 space-y-1 bg-brand-surface/30 rounded-xl mt-1">
                      {COTTAGES.map((cottage) => (
                        <a
                          key={cottage.id}
                          href={`#home-${cottage.id}`}
                          onClick={() => setMenuOpen(false)}
                          className="block px-4 py-2 text-sm font-medium text-brand-muted hover:text-brand-text hover:bg-brand-surface/50 rounded-lg transition-all"
                        >
                          {cottage.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-brand-text/80 hover:text-brand-text hover:bg-brand-surface rounded-xl transition-all"
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-4 mt-2 border-t border-brand-border/30">
            <a
              href="tel:8009979575"
              className="flex items-center justify-center gap-2 bg-brand-text text-white px-4 py-3 rounded-xl font-medium text-sm transition-colors hover:bg-brand-accent"
            >
              <span>+1(800) 997-9575</span>
              <Phone className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}