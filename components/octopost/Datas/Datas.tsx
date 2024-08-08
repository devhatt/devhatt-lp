import { CloudIcon } from "./assets/CloudIcon";

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

  return (
    <section
      className="h-[247px]  flex-center relative bg-gradient-to-r flex-wrap
<<<<<<< HEAD
      from-octopost-primaryViolet overflow-hidden to-octopost-primaryPink"
=======
      from-octopost-primaryViolet to-octopost-primaryPink overflow-hidden"
>>>>>>> main
    >
      <div
        className=" after:bg-white/10 after:size-[800px] after:rounded-full  after:absolute after:-right-52 after:-top-10
before:bg-white/5 before:size-[2000px] before:rounded-full  before:absolute before:left-80 before:-top-[500px] after:overflow-hidden"
      ></div>
      {dataNumbers.map(({ icon: Icon, ...data }, index) => (
        <div key={index} className="flex gap-5 max-w-[300px] z-100 relative">
          <div className="size-24 flex-center hover:scale-x-[-1] transition-all bg-white/30 rounded-md">
            <Icon />
          </div>
          <div className="flex flex-col text-white gap-2">
            <h1 className="text-3xl font-bold ">1200+</h1>
            <p className="text-white/60 text-xl font-bold flex-wrap">
              Dados importantes
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
