import Link from "next/link";
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/">홈</Link>
          <Link href="/list">가판대</Link>
          <Link href="/cart">카트</Link>
          <Link href="/write">등록</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
