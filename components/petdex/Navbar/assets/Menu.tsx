import Link from "next/link"

function Menu() {
  return (
    <ul className="hidden lg:space-x-10 lg:space-y-0 lg:ml-3 lg:flex">
      <li className='text-petdex-secondaryGreen'>
        <Link className='hover:underline hover:font-semibold' href="#">Home</Link>
      </li>
      <li className='text-petdex-secondaryGreen'>
        <Link className='hover:underline hover:font-semibold' href="#">Petdex</Link>
      </li>
      <li className='text-petdex-secondaryGreen'>
        <Link className='hover:underline hover:font-semibold' href="#">Contato</Link>
      </li>
    </ul>
  )
}

export { Menu }
