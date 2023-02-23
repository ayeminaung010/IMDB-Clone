import Header from '@/components/Header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        {/* header  */}
        <Header/>

        {/* NavBar  */}
        

        {/* Search Bar  */}


        {children}
      </body>
    </html>
  )
}
