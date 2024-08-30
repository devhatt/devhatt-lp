import Facebook from '@/components/petdex/Footer/assets/Facebook'
import Instagram from './assets/Instragram'
import LogoPetdex from './assets/LogoPetdex'
import Twitter from './assets/Twitter'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home', icon: <Facebook /> },
  { href: '/', label: 'Petdex', icon: <Instagram /> },
  { href: '/', label: 'Contato', icon: <Twitter /> },
]
export default function Footer() {
  return (
    <footer className="bg-petdex-darkBlueSecondary flex w-full items-center justify-center">
      <div className="text-petdex-primayWhite w-full">
        <div className="grid grid-flow-row items-center justify-center gap-y-8 py-8 lg:grid-flow-col lg:gap-x-52">
          <div className="min-w-50 flex justify-center lg:col-start-2">
            <LogoPetdex />
          </div>

          <div className="flex min-w-52 items-center justify-center gap-10 text-sm">
            {links.map((link) => (
              <Link key={link.label} href={link.href}>
                <span className="border-petdex-primaryWhite hover:border-b-[1px]">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex min-w-52 items-center justify-center gap-10">
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-petdex-primayWhite mx-auto border-t-[1px] lg:max-w-[70rem]"></div>

        <div className="flex w-full items-center justify-center py-6">
          <span className="text-lg font-light text-[#E0E0E0]">
            © 2024 DevHat. All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  )
}
