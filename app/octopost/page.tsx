import About from '@/components/octopost/About/About'
import Datas from '@/components/octopost/Datas/Datas'
import Faq from '@/components/octopost/Faq/Faq'
import Hero from '@/components/octopost/Hero/Hero'
import Navbar from '@/components/octopost/Navbar/Navbar'
import JoinUs from '@/components/octopost/JoinUs/JoinUs'
import Works from '@/components/octopost/Works/Works'
import Footer from '@/components/octopost/Footer/Footer'

function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Datas />

      <Faq />
      <JoinUs />
      <Footer />
    </>
  )
}

export default Page
