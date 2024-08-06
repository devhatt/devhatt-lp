import CloudIcon from "./assets/CloudIcon";

type CardProps = {
  title: string,
  text: string,
}

function Card({
  title,
  text,
}: CardProps) {
  return (
    <div className="w-72 bg-white shadow-dropshadow-card h-96 rounded-xl px-8 pt-10 pb-14 flex flex-col justify-between items-center">
      <div className="mb-9">
        <CloudIcon />
      </div>
      <div className="overflow-hidden text-ellipsis">
        <h3 className="font-bold text-xl text-center text-[#5C5CA0] mb-3">{title}</h3>
        <div className="">
          <p className=" text-sm text-center text-[#2E2667] leading-6">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;