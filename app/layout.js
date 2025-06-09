import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'

export const metadata = {
  title: 'Fernando Contreras | Portfolio',
  description: 'Frontend and Mobile Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
};