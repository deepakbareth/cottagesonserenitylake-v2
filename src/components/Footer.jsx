import { ArrowRight } from "lucide-react";
import logo from "../assets/logo7.jpg";
import pbw from "../assets/pbw.png"

/**
 * Footer Component
 * Premium editorial dark footer with newsletter signup, links, contacts, and social icons.
 */
export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to Cottages on Serenity Lake updates!");
  };

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800 relative z-10 pt-10 pb-10 pointer-events-auto">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12">

        {/* Column 1: Brand Intro */}
        <div className="space-y-4">
          <a href="#home" className="inline-block group">
            <div className="bg-white p-2.5 rounded-xl border border-gray-800 transition-transform duration-500 hover:scale-105 inline-block">
              <img src={logo} alt="AlwaysAtHome Logo" className="h-20 w-auto object-contain" />
            </div>
          </a>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans mt-2">
            Your memories in the North Woods. Secluded private cottages curated for restful nights, private lakefront recreation, and premium comfort.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="space-y-4">
          <h4 className="text-white font-serif font-bold text-sm sm:text-base uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
            <li>
              <a href="#home" className="hover:text-white transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#amenities" className="hover:text-white transition-colors duration-200">
                Amenities
              </a>
            </li>

            <li>
              <a href="#reviews" className="hover:text-white transition-colors duration-200">
                Reviews
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact details */}
        <div className="space-y-4">
          <h4 className="text-white font-serif font-bold text-sm sm:text-base uppercase tracking-wider">
            Get in Touch
          </h4>

          <div className="space-y-1.5 text-xs sm:text-sm">
            <p>
              <span className="text-white font-semibold">Phone:</span>{" "}
              <a href="tel:+18009979575" className="hover:text-white transition-colors">
                +1(800) 997-9575
              </a>
            </p>
            <p>
              <span className="text-white font-semibold">Cell:</span>{" "}
              <a href="tel:+15204041142" className="hover:text-white transition-colors">
                +1(520) 404-1142
              </a>
            </p>
            <p>
              <span className="text-white font-semibold">Email:</span>{" "}
              <a href="mailto:alisaalicia04@aol.com" className="hover:text-white transition-colors">
                alisaalicia04@aol.com
              </a>
            </p>
          </div>
        </div>

        {/* Column 4: Newsletter sign-up */}
        <div className="space-y-4">
          <h4 className="text-white font-serif font-bold text-sm sm:text-base uppercase tracking-wider">
            Newsletter
          </h4>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            Subscribe to receive exclusive offers and seasonal travel inspiration.
          </p>
          <form onSubmit={handleSubscribe} className="relative flex items-center mt-2 w-full">
            <input
              type="email"
              placeholder="Enter email address"
              required
              className="w-full bg-gray-900 border border-gray-800 focus:border-gray-700 text-white placeholder-gray-500 rounded-full py-2.5 pl-5 pr-12 text-xs focus:outline-none transition-all duration-300"
            />
            <button
              type="submit"
              className="absolute right-0 w-9 h-9 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center text-gray-900 transition-colors cursor-pointer"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom copyright details row */}
      <div className="border-t border-gray-900 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] sm:text-xs">
        <p>&copy; {new Date().getFullYear()} Cottages on Serenity Lake. All rights reserved.</p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-900 transition-all duration-200"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-900 transition-all duration-200"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-900 transition-all duration-200"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-xs font-sans">powered by</span>
          <a href="https://premiumbusinesswebsites.com/">
            <img
              src={pbw}
              alt="Partner Logo"
              className="h-12 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
        </div>
      </div>

    </div>
    </footer>
  );
}
