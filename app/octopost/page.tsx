import About from "@/components/octopost/About/About";
import Hero from "@/components/octopost/Hero/Hero";
import Navbar from "@/components/octopost/Navbar/Navbar";
import JoinUs from "@/components/octopost/JoinUs/JoinUs";
import Works from "@/components/octopost/Works/Works";

function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Works />

      <JoinUs />
    </>
  );
}

export default Page;
