import { Geist, Geist_Mono } from "next/font/google";
import { Satoshi } from "next/font/google";
import { Lustria } from 'next/font/google';
import './globals.css'

const lustria = Lustria({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Fernando Contreras | Portfolio',
  description: 'Frontend and Mobile Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400&display=swap"
          rel="stylesheet"
        />
        </head>
      <body>{children}</body>
    </html>
  )
};