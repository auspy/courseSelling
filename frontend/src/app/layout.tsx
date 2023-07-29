import './globals.scss'
import "@/static/styles/text.scss"
import "../static/styles/common.css"
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} fcc`}>{children}</body>
    </html>
  )
}
