// app/page.js (Main page for the single-page website)

import AudioPlayer from "@/components/AudioPlayer";
import Footer from "@/components/footer";
import Hero from "@/components/hero";


export default function Home() {
  return (
    <div className="bg-black text-[#EDE4D9] font-montserrat">
      <Hero />
      {/* <AudioPlayer /> */}
      <Footer />
    </div>
  );
}