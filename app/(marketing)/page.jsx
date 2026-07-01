import HeaderNav from "./_components/MarketingNav/HeaderNav";
import Hero from "./_components/Hero/Hero";
import Assembly from "./_components/Assembly/Assembly";

export default function Home() {
  return (
    <div className="font-sora">
      {/* Navbar */}
      <HeaderNav />

      {/* Hero */}
      <Hero />

      {/* Assembly */}
      <Assembly />
    </div>
  );
}
