import Confirmation from "./_components/Confirmation";
import Faq from "./_components/Faq";
import Gallery from "./_components/Gallery";
import Hero from "./_components/Hero";
import Place from "./_components/Place";
import Placement from "./_components/Placement";
import Schedule from "./_components/Schedule";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Place/>
      <Placement/>
      <Schedule/>
      <Gallery/>
      <Confirmation/>
      <Faq/>
    </div>
  );
}
