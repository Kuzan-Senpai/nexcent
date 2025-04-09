import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Ourclient from "@/components/Ourclient";
import Community from "@/components/Community";

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
