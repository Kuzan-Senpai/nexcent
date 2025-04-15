import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero"
import Ourclient from "@/components/sections/Ourclient";
import Community from "@/components/sections/Community";
import Footer from "@/components/layout/Footer";
import Learnmore from "@/components/sections/Learnmore";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Ourclient/>
      <Community/>
      <Learnmore/>
      <Footer/>
    </div>
  )
}
