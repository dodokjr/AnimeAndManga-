import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/utilities/Navbar'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from '@/components/utilities/Footer'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'mfAnimeList',
  description: 'Anime list by mfikria',
}

export default function RootLayout({ children })
{
  return (
    <html lang="id">
      <body className={`${roboto.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer/>
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  )
}
