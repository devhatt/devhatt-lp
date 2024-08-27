import AboutLogo from './assets/AboutLogo'
import {
  AboutIcons1,
  AboutIcons2,
  AboutIcons3,
  AboutIcons4,
  AboutIcons5,
} from './assets/AboutLogoIcons'
import CloudIcon from './assets/CloudIcon'

export default function About() {
  return (
    <section className="mx-48 flex h-screen bg-white">
      <div className="flex-center w-1/2">
        <div className="relative">
          <AboutLogo />
          <div className="absolute left-14 top-36">
            <AboutIcons1 />
          </div>
          <div className="absolute left-20 top-[278px]">
            <AboutIcons2 />
          </div>
          <div className="absolute bottom-7 left-48">
            <AboutIcons3 />
          </div>
          <div className="absolute bottom-10 right-[164px]">
            <AboutIcons4 />
          </div>
          <div className="absolute right-8 top-56">
            <AboutIcons5 />
          </div>
        </div>
      </div>
      <div className="max-w-3/5 flex-center">
        <div className="space-y-12">
          <h1 className="text-5xl font-extrabold text-[#a076f9]">
            O que é a Octopost?
          </h1>
          <p className="w-full font-light text-[#5C5CA0]">
            Octopost é um app que permite que o usuário faça publicações em
            redes sociais all-in-one, mas de forma modular, ou seja, se sua rede
            social não está presente ainda no app, não se preocupe, você pode
            desenvolver um módulo pra usar essa nova rede social no app!
          </p>
          <div className="flex gap-8">
            <div className="">
              <CloudIcon />
              <p className="primary-text-gradient text-center">
                Free and Open <br />
                Source
              </p>
            </div>
            <div className="hover:bg-white">
              <CloudIcon />
              <p className="primary-text-gradient text-center">
                Free and Open <br />
                Source
              </p>
            </div>
            <div className="">
              <CloudIcon />
              <p className="primary-text-gradient text-center">
                Free and Open <br />
                Source
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
