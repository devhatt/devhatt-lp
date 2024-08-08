import JoinUsLogo from "./assets/JoinUsLogo";

import Datas from "@/components/octopost/Datas/Datas";

export default function JoinUs() {
  return (
    <section className="h-screen flex flex-col ">
      <div className="flex-shrink-0">
        <Datas />
      </div>
      <div className=" flex-grow bg-octopost-darkBlue relative ">
        <div className="absolute  bg-layer1 inset-0 "></div>
        <div className="absolute  bg-layer inset-0 "></div>
        <div className="absolute flex-center  inset-0 gap-32">
          <div className="">
            <JoinUsLogo />
          </div>
          <div className="text-white space-y-10">
            <div className="max-w-[500px] ">
              <h1 className="text-[56px] leading-tight font-bold ">
                Junte-se a nossa comunidade
              </h1>
              <p className="font-light">
                Veja o que outros usuários e desenvolvedores estão dizendo sobre
                o OctoPost. Convocamos você a participar deste movimento
                colaborativo!
              </p>
            </div>
            <div className="italic font-thin">
              More than 10,000 people have tried
            </div>
            <div className="hover:shadow-lg cursor-pointer py-4 px-6 max-w-60 hover:brightness-105 rounded-md bg-[#5965F2]">
              Acesse o nosso Discord!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
