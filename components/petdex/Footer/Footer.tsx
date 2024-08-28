import Facebook from '@/components/petdex/Footer/assets/Facebook'
import Instagram from './assets/Instragram'
import LogoPetdex from './assets/LogoPetdex'
import Twitter from './assets/Twitter'

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-center bg-[#1E2833]">
      <div className="w-full text-white">
        <div className="grid grid-flow-row items-center justify-center gap-y-8 py-8 lg:grid-flow-col lg:gap-x-52">
          <div className="min-w-50 flex justify-center lg:col-start-2">
            <LogoPetdex />
          </div>

          <div className="flex min-w-52 items-center justify-center gap-10 text-sm">
            <a href="/">
              <span className="border-[#E0E0E0] hover:border-b-[1px]">
                Home
              </span>
            </a>

            <a href="/">
              <span className="border-[#E0E0E0] hover:border-b-[1px]">
                Petdex
              </span>
            </a>

            <a href="/">
              <span className="border-[#E0E0E0] hover:border-b-[1px]">
                Contato
              </span>
            </a>
          </div>

          <div className="flex min-w-52 items-center justify-center gap-10">
            <a href="/">
              <Facebook />
            </a>

            <a href="/">
              <Twitter />
            </a>

            <a href="/">
              <Instagram />
            </a>
          </div>
        </div>

        <div className="mx-auto border-t-[1px] border-[#E0E0E0] lg:max-w-[70rem]"></div>

        <div className="flex w-full items-center justify-center py-6 text-base">
          <span>© 2024 DevHat. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  )
}
