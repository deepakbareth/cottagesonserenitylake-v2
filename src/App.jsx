import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutProperties from "./components/AboutProperties";
import Amenities from "./components/Amenities";
import SleepSection from "./components/SleepSection";
import Reviews from "./components/Reviews";
import BackgroundLamps from "./components/BackgroundLamps";
import Footer from "./components/Footer";

/**
 * App — root component.
 * Assembles the page layout: Navbar + Hero + AboutProperties + Amenities + SleepSection + Reviews + BackgroundLamps + Footer.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <BackgroundLamps />

      <main className="relative z-10 pointer-events-none">
        <Hero />
        <AboutProperties />
        <Amenities />
        <SleepSection />
        {/* <Reviews /> */}
        <Footer />
      </main>
    </>
  );
}
