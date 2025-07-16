import Navbar from "../components/Navbar";
import HeroCard from "../components/HeroCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen pt-28 bg-[url('/images/background.png')] bg-cover bg-center text-gray-800">
      <Navbar />
      <section className="flex flex-wrap gap-6 justify-center max-w-5xl mx-auto">
        <HeroCard title="Coiffure" image="/images/coiffure.webp" />
        <HeroCard title="Onglerie" image="/images/onglerie.webp" />
        <HeroCard title="Maquillage" image="/images/maquillage.jpg" />
        <HeroCard title="Épilation" image="/images/epilation.jpg" />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
