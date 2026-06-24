import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import CollectionShowcase from "@/components/CollectionShowcase";
import SplitEditorial from "@/components/SplitEditorial";
import NewArrivals from "@/components/NewArrivals";
import Craftsmanship from "@/components/Craftsmanship";
import FeaturedMasterpieces from "@/components/FeaturedMasterpieces";
import WhoWeAre from "@/components/WhoWeAre";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-secondary selection:text-primary font-sans overflow-hidden">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <CollectionShowcase />
      <SplitEditorial />
      <NewArrivals />
      <FeaturedMasterpieces />
      <Craftsmanship />
      <WhoWeAre />
      <Footer />
    </main>
  );
}
