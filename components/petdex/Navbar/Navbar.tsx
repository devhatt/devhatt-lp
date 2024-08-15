
import { Logo } from './assets/Logo'
import { SearchIcon } from './assets/SearchIcon'

function Navbar() {
  return (
    <div className="border-2 border-red-500">
      <header className="flex  justify-between mx-auto">
        <div className="flex place-content-end border-2 border-red-500">
          <Logo />
          <nav>
            <ul className="flex">
              <li><a href="#">home</a></li>
              <li><a href="#">petdex</a></li>
              <li><a href="#">contato</a></li>
            </ul>
          </nav>
        </div>
        <div className='border-2 border-red-500'>
          <SearchIcon />
          <input type="search" name="search" placeholder="Pesquise seu amigo aqui!" />
          <button
            className='bg-petdex-secondaryGreen text-white'
          >
            Entrar | Cadastrar
          </button>
        </div>
      </header>
    </div>
  )
}

export { Navbar }