'use client'

import { useState } from 'react'
import { Logo } from './assets/Logo'
import { MenuButton } from './assets/Menu-button'
import { SearchIcon } from './assets/SearchIcon'
import { Menu } from './assets/Menu'
import { LogoMobile } from './assets/Logo-mobile'
import { MenuButtonMobile } from './assets/Menu-button-mobile'
import { NavbarTypes } from './Navbar.types'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearch, setIsSearch] = useState(true)

  const handleButton = () => setIsOpen(o => !o)

  const handleSearchButton = () => setIsSearch(s => !s)

  return (
    <div className="py-8">
      <header className="flex  justify-between w-[80%] h-20 mx-auto sm:w-[90%]">
        <div className="flex">
          <nav className='flex items-center mobile:w-[90%] mx-auto '>
            <div className='w-28 items-center mr-10'>
              {isSearch
                ? <Logo />
                : <LogoMobile />
              }
            </div>
            <div
              className={`${!isOpen ? '' : 'left-[-400px]'} absolute flex flex-col left-0 top-[8rem] lg:relative lg:left-0 lg:top-0 `}
            >
              <Menu />
            </div>
          </nav>
        </div>
        <div className='flex items-center  space-x-3'>
          <div
            className={`flex border-2 space-x-3 border-gray-200 rounded-3xl px-4 py-3 cursor-pointer`}
          >
            <SearchIcon
              handleSearchButton={handleSearchButton} />
            <input
              className={` hidden lg:block`}
              type="search"
              name="search"
              placeholder="Pesquise seu amigo aqui!"
            />

          </div>
          <button
            className={`${!isOpen ? 'block' : 'hidden'} absolute left-0 top-[30rem] bg-petdex-secondaryGreen text-white px-10 py-3 rounded-3xl lg:relative lg:block lg:top-0 `}
          >
            Entrar | Cadastrar
          </button>
          {isSearch &&
            <div className='cursor-pointer lg:hidden'>
              {!isOpen
                ? <MenuButton handleButton={handleButton} />
                : <MenuButtonMobile handleButton={handleButton} />
              }
            </div>
          }
        </div>
      </header >
    </div >
  )
}

export { Navbar }