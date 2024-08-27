import '../../styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Octopost',
  description:
    'A octo te leva para um mergulho em todas suas redes em um click',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-primary-gray max-h-screen`}>
        {children}
      </body>
    </html>
  )
}
