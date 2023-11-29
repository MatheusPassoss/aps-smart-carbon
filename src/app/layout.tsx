import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { MapProvider } from '@/context/MapProvider'
import { Header } from '../components/UI/Header'
import { Footer } from '@/components/UI/Footer'


const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Carbon',
  description: 'Uma pesquisa dos alunos do segundo semestre de ciência da computação.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='!scroll-smooth'>
      <body className={poppins.className}>
        <MapProvider>
          <Header />
            {children}
          <Footer />
        </MapProvider>
      </body>
    </html>
  )
}
