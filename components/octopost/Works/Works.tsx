import Card from "./Card";

function Works() {

  return (
    <div className="w-full h-screen bg-black flex items-center">
      <div className="m-auto flex flex-col w-8/12">
        <div className="flex flex-col w-6/12 m-auto justify-between items-center gap-10">
          <h2 className="font-semibold text-[#A076F9] text-4xl">Como Funciona?</h2>
          <p className="text leading-6 text-[#5C5CA0] text-center">O OctoPost simplifica o compartilhamento de conteúdo em diversas plataformas. Veja como podemos transformar sua experiência online. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div>
          <Card 
          title='Gerenciamento Simples'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Works;