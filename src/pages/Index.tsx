import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Proposito from "@/components/Proposito";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Proposito />
      <Services />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
