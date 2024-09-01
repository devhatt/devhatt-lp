import { CloudIcon } from "./assets/CloudIcon";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Datas() {
  const dataNumbers = [
    {
      icon: CloudIcon,
      numbers: 1200,
      text: "Dados Importantes",
    },
    {
      icon: CloudIcon,
      numbers: 1200,
      text: "Dados Importantes",
    },
    {
      icon: CloudIcon,
      numbers: 1200,
      text: "Dados Importantes",
    },
    {
      icon: CloudIcon,
      numbers: 1200,
      text: "Dados Importantes",
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex items-center lg:max-h-64 bg-gradient-to-r from-octopost-primaryViolet to-octopost-primaryPink pt-3 overflow-hidden">
      <button
        onClick={scrollLeft}
        className="absolute left-2 z-20 bg-white/30 rounded-full w-10 h-10 flex items-center justify-center"
      >
        <ArrowLeft className="text-white" />
      </button>

      <div
        className="after:bg-white/10 after:w-[800px] after:h-[800px] after:rounded-full after:absolute after:-right-52 after:-top-10
        before:bg-white/5 before:w-[2000px] before:h-[2000px] before:rounded-full before:absolute before:left-80 before:-top-[500px] after:overflow-hidden"
      ></div>

      <div
        ref={scrollRef}
        className="flex p-2 max-h-64 min-h-64 lg:flex-row lg:maxh-64 lg:min-h-64 flex-nowrap overflow-x-auto overflow-y-hidden lg:h-[247px] space-x-5"
      >
        {dataNumbers.map(({ icon: Icon }, index) => (
          <div
            key={index}
            className={`flex ml-0 lg:flex-row lg:gap-5 gap-5 lg:max-w-[340px] w-full z-10 relative flex-row
${index % 2 === 0 ? "ml-56 mt-32 w-full" : ""}`}
          >
            <div className="group">
              <div className="size-24 flex-center group-hover:scale-x-[-1] transition-all bg-white/30 rounded-md">
                <Icon />
              </div>
            </div>
            <div className="flex flex-col text-white gap-2">
              <h1 className="text-3xl font-bold ">1200+</h1>
              <p className="text-white/60 text-xl font-bold flex-wrap">
                Dados importantes
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-2 z-20 bg-white/30 rounded-full w-10 h-10 flex items-center justify-center"
      >
        <ArrowRight className="text-white" />
      </button>
    </section>
  );
}
