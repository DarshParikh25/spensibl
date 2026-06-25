import HeaderNav from "./_components/MarketingNav/HeaderNav";
import Hero from "./_components/Hero/Hero";

export default function Home() {
  return (
    <div className="font-sora">
      {/* Navbar */}
      <HeaderNav />

      {/* Hero */}
      <Hero />
    </div>
  );
}
