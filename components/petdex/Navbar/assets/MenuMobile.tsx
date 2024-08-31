import Link from "next/link"

function MenuMobile({ isOpen }) {
  return (
    <ul className={`${isOpen ? '' : 'hidden'} space-y-6 ml-10 lg:hidden`}>
      <li className='text-petdex-secondaryGreen'>
        <Link className='hover:underline hover:font-semibold' href="#">Home</Link>
      </li>
      <li className='text-petdex-secondaryGreen'>
        <Link className='hover:underline hover:font-semibold' href="#">Petdex</Link>
      </li>
      <li className='text-petdex-secondaryGreen'>
        <Link className='hover:underline hover:font-semibold' href="#">Contato</Link>
      </li>
    </ul >
  )
}

export { MenuMobile }
