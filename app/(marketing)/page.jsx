import HeaderNav from "./_components/DashboardNav/HeaderNav";
import Background from "./_components/Hero/Background";

export default function Home() {
  return (
    <div className="font-sora">
      {/* Navbar */}
      <HeaderNav />

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-16 overflow-hidden relative">
        <Background />
      </section>
    </div>
  );
}
