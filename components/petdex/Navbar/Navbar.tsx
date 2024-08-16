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
    <div className="">
      <header className="flex  justify-between w-[80%] h-20 mx-auto mobile:w-[90%]">
        <div className="flex">
          <nav className='flex items-center mobile:w-[90%] mx-auto '>
            <div className='w-28 items-center'>
              <Logo />
            </div>
            <ul className="flex space-x-3  mobile:hidden tablet:hidden">
              <li><a href="#">home</a></li>
              <li><a href="#">petdex</a></li>
              <li><a href="#">contato</a></li>
            </ul>
          </nav>
        </div>
        <div className='flex items-center  space-x-10 '>
          {!isOpen &&
            <div className='flex border-2 border-gray-200 rounded-3xl px-4 py-3 '>
              <SearchIcon />

              <input className='mobile:hidden tablet:hidden' type="search" name="search" placeholder="Pesquise seu amigo aqui!" />
            </div>
          }
          <button
            className='bg-petdex-secondaryGreen text-white mobile:hidden tablet:hidden '
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