function Menu() {
  return (
    <ul className=" lg:space-x-10 space-y-6 ml-10 lg:space-y-0 lg:ml-3 lg:flex">
      <li className='text-petdex-secondaryGreen'>
        <a className='hover:underline hover:font-semibold' href="#">Home</a>
      </li>
      <li className='text-petdex-secondaryGreen'>
        <a className='hover:underline hover:font-semibold' href="#">Petdex</a>
      </li>
      <li className='text-petdex-secondaryGreen'>
        <a className='hover:underline hover:font-semibold' href="#">Contato</a>
      </li>
    </ul>
  )
}

export { Menu }
