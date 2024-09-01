import AboutLogo from "./assets/AboutLogo";
import {
  AboutIcons1,
  AboutIcons2,
  AboutIcons3,
  AboutIcons4,
  AboutIcons5,
} from "./assets/AboutLogoIcons";
import CloudIcon from "./assets/CloudIcon";

export default function About() {
  return (
    <section className="flex bg-white md:flex-center  lg:mx-40 lg:flex-center">
      <div className="lg:flex-center">
        <div className="relative hidden lg:flex">
          <AboutLogo />
          <div className="absolute top-36 left-14">
            <AboutIcons1 />
          </div>
          <div className="absolute top-[278px] left-20">
            <AboutIcons2 />
          </div>
          <div className="absolute bottom-7 left-48">
            <AboutIcons3 />
          </div>
          <div className="absolute bottom-10 right-[164px]">
            <AboutIcons4 />
          </div>
          <div className="absolute top-56 right-8">
            <AboutIcons5 />
          </div>
        </div>
      </div>
      <div className="max-w-[445px] md:flex-center px-4 flex-center lg:max-w-full  lg:flex-center">
        <div className="space-y-12 text-wrap text-center truncate ">
          <h1 className="text-[#a076f9] lg:text-5xl  text-4xl font-bold mt-20 lg:font-extrabold">
            O que é a Octopost?
          </h1>
          <p className=" text-[#5C5CA0] w-full font-light">
            Octopost é um app que permite que o usuário faça publicações em
            redes sociais all-in-one, mas de forma modular, ou seja, se sua rede
            social não está presente ainda no app, não se preocupe, você pode
            desenvolver um módulo pra usar essa nova rede social no app!
          </p>
          <div className="flex gap-8 max-w-1/3 lg:flex-row  lg:flex-nowrap flex-wrap-reverse flex-center">
            <div className="">
              <CloudIcon />
              <p className="text-center primary-text-gradient">
                Free and Open <br />
                Source
              </p>
            </div>
            <div className="hover:bg-white">
              <CloudIcon />
              <p className="text-center primary-text-gradient">
                Free and Open <br />
                Source
              </p>
            </div>
            <div className="">
              <CloudIcon />
              <p className="text-center primary-text-gradient">
                Free and Open <br />
                Source
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
