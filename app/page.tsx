import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero"
import Ourclient from "@/components/sections/Ourclient";
import Community from "@/components/sections/Community";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Ourclient/>
      <Community/>
    </div>
  )
}
