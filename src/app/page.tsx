import Header from "./components/layout/Header/Header";
import PopularPackages from "./components/layout/PopularPackages/PopularPackages";
import CallToAction from "./components/layout/CallToAction/CallToAction";
import Services from "./components/layout/Services/Services";
import HowItWorks from "./components/layout/HowItWorks/HowItWorks";
import Faq from "./components/layout/Faq/Faq";
import Footer from "./components/layout/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <PopularPackages />
      <CallToAction />
      <Services />
      <HowItWorks />
      <Faq />
      <Footer />
    </>
  );
}
