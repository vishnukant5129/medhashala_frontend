import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/HeroSection";
import Features from "../components/home/Features.jsx";
import HowItWorks from "../components/home/HowItWorks";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;