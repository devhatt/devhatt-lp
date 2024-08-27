import { CloudIcon } from './assets/CloudIcon'

export default function Datas() {
  const dataNumbers = [
    {
      icon: CloudIcon,
      numbers: 1200,
      text: 'Dados Importantes',
    },
    {
      icon: CloudIcon,
      numbers: 1200,
      text: 'Dados Importantes',
    },
    {
      icon: CloudIcon,
      numbers: 1200,
      text: 'Dados Importantes',
    },
    {
      icon: CloudIcon,
      numbers: 1200,
      text: 'Dados Importantes',
    },
  ]

  return (
    <section className="flex-center relative h-[247px] flex-wrap overflow-hidden bg-gradient-to-r from-octopost-primaryViolet to-octopost-primaryPink">
      <div className="before:absolute before:-top-[500px] before:left-80 before:size-[2000px] before:rounded-full before:bg-white/5 after:absolute after:-right-52 after:-top-10 after:size-[800px] after:overflow-hidden after:rounded-full after:bg-white/10"></div>
      {dataNumbers.map(({ icon: Icon }, index) => (
        <div key={index} className="z-100 relative flex max-w-[300px] gap-5">
          <div className="flex-center size-24 rounded-md bg-white/30 transition-all hover:scale-x-[-1]">
            <Icon />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-3xl font-bold">1200+</h1>
            <p className="flex-wrap text-xl font-bold text-white/60">
              Dados importantes
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
