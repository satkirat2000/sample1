import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './_layoutComponents/Navbar'
import Footer from './_layoutComponents/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MazzaFC',
  description: 'We work in the development of web, mobile and database integration systems, tailored and on demand.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Script src="https://kit.fontawesome.com/d9397739da.js" crossOrigin="anonymous" async></Script>
      </body>
    </html>
  )
}
