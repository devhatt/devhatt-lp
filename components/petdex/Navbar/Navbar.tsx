'use client'

import { useState } from 'react'
import { Logo } from './assets/Logo'
import { MenuButton } from './assets/Menu-button'
import { SearchIcon } from './assets/SearchIcon'
import { Menu } from './assets/Menu'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  //state pra lidar com menu responsivo
  //fn para abrir men u responsivo
  const handleButton = () => setIsOpen(o => !o)

  const handleSearchButton = () => console.log('pesquisando ...')

  return (
    <div className="py-8">
      <header className="flex  justify-between w-[80%] h-20 mx-auto sm:w-[90%]">
        <div className="flex">
          <nav className='flex items-center mobile:w-[90%] mx-auto '>
            <div className='w-28 items-center mr-10'>
              <Logo />
            </div>
            <div className='absolute flex flex-col left-0 top-[8rem] lg:relative lg:left-0 lg:top-0 '>
              {!isOpen && <Menu />}
            </div>
          </nav>
        </div>
        <div className='flex items-center  space-x-3'>
          <div
            onClick={handleSearchButton}
            className='flex border-2 space-x-3 border-gray-200 rounded-3xl px-4 py-3 cursor-pointer'
          >
            <SearchIcon />
            {!isOpen &&
              <input
                type="search"
                name="search"
                placeholder="Pesquise seu amigo aqui!"
              />
            }
          </div>

          <button
            className='hidden bg-petdex-secondaryGreen text-white lg:block px-10 py-3 rounded-3xl'
          >
            Entrar | Cadastrar
          </button>
          <div className='cursor-pointer lg:hidden'>
            <MenuButton handleButton={handleButton} isOpen={isOpen} />
          </div>
        </div>
      </header>
    </div>
  )
}

export { Navbar }