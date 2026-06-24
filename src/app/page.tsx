import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import CollectionShowcase from "@/components/CollectionShowcase";
import SplitEditorial from "@/components/SplitEditorial";
import NewArrivals from "@/components/NewArrivals";
import FeaturedMasterpieces from "@/components/FeaturedMasterpieces";
import OurServices from "@/components/OurServices";
import BrandVideo from "@/components/BrandVideo";
import Footer from "@/components/Footer";
import WhoWeAre from "@/components/WhoWeAre";
import HappyCustomers from "@/components/HappyCustomers";

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
      <OurServices />
      {/* <WhoWeAre /> */}
      <HappyCustomers />
      {/* <BrandVideo /> */}
      <Footer />
    </main>
  );
}
