import Background from "./Background";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex items-center pt-16 overflow-hidden relative">
      {/* Hero Background */}
      <Background />

      {/* Inner Hero */}
      <div className="max-w-300 relative z-10 my-0 mx-auto py-20 px-10 items-center">
        {/* Hero Content - Left */}
        <HeroContent />

        {/* Hero Visual - Right */}
        <HeroVisual />
      </div>
    </section>
  );
};

export default Hero;
