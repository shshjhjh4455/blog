import Header from '@/components/Header';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import Footer from '@/components/Footer';

const sans = Open_Sans({ subsets: ['latin'] });

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html >
  )
}
