import Hero from "@/components/homeSections/hero/Hero";
// import Header from "@/components/header/Header";
import Trust from "@/components/homeSections/trust/Trust";
import Offer from "@/components/homeSections/offer/Offer";
import Train from "@/components/homeSections/train/Train";
import Pricing from "@/components/homeSections/pricing/Pricing";
import Testi from "@/components/homeSections/testi/Testi";

export default function Home() {
  return (
    <div style={{}} className="fcc">
      <Hero />
      <Trust />
      <Offer />
      <Train />
      <Pricing />
      <Testi />
    </div>
  );
}
