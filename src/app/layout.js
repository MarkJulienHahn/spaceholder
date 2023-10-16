import './globals.css'

export const metadata = {
  title: 'Spaceholder eV',
  description: 'Spaceholder — Verein für gemeinwohlorientierte Raumentwicklung',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
