import About from "@/components/octopost/About/About";
import Datas from "@/components/octopost/Datas/Datas";
import Hero from "@/components/octopost/Hero/Hero";
import Navbar from "@/components/octopost/Navbar/Navbar";

function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <Datas />
    </>
  );
}

export default Page;
