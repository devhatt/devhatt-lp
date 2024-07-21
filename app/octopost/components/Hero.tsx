import HeroImg from "./assets/HeroImg";

function Hero() {
  return (
    <section className="flex justify-center items-center h-screen  bg-gradient-to-t to-[#805AD5] from-[#E030A3]">
      <div className="max-w-[418px] ">
        <h1 className="text-3xl leading-10 font-bold mb-5">
          Gerenciar redes sociais
          <br /> não deveria ser complicado. Descubra a Octopost
        </h1>
        <p className="font-light">
          Sua solução simples para uma gestão descomplicada de redes sociais.
          feito para todos, de empreendedores a criadores de conteúdo.
        </p>
        <button className="my-5 px-4 py-3 font-light text-sm shadow-md drop-shadow border-white border rounded-full">
          Experimente agora
        </button>
        <div className="flex gap-2">
          <div className="rounded-full w-10 h-10 bg-white"></div>
          <div className="rounded-full w-10 h-10 bg-white"></div>
          <div className="rounded-full w-10 h-10 bg-white"></div>
          <div className="rounded-full w-10 h-10 bg-white"></div>
        </div>
      </div>
      <div className="">
        <HeroImg />
      </div>
    </section>
  );
}

export default Hero;
