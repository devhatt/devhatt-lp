'use client'

import { useState } from 'react'
import { Logo } from './assets/Logo'
import { MenuButton } from './assets/Menu-button'
import { SearchIcon } from './assets/SearchIcon'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  //state pra lidar com menu responsivo
  //fn para abrir men u responsivo
  const handleButton = () => setIsOpen(o => !o)

  return (
    <div className="py-8">
      <header className="flex  justify-between w-[80%] h-20 mx-auto mobile:w-[90%]">
        <div className="flex">
          <nav className='flex items-center mobile:w-[90%] mx-auto '>
            <div className='w-28 items-center mr-10'>
              <Logo />
            </div>
            <ul className="flex space-x-10  ml-3 mobile:hidden tablet:hidden">
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
          </nav>
        </div>
        <div className='flex items-center  space-x-10 '>
          {!isOpen &&
            <div className='flex border-2 space-x-3 border-gray-200 rounded-3xl px-4 py-3 '>
              <SearchIcon />

              <input className='mobile:hidden tablet:hidden' type="search" name="search" placeholder="Pesquise seu amigo aqui!" />
            </div>
          }
          <button
            className='hidden bg-petdex-secondaryGreen text-white desktop:block px-10 py-3 rounded-3xl'
          >
            Entrar | Cadastrar
          </button>
          <div className='cursor-pointer desktop:hidden'>
            <MenuButton handleButton={handleButton} isOpen={isOpen} />
          </div>
        </div>
      </header>
    </div>
  )
}

export { Navbar }