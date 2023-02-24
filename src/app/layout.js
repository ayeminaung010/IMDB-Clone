import Header from '@/components/Header'
import './globals.css'
import Providers from './Providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Providers>
          {/* header  */}
          <Header/>

          {/* NavBar  */}
        

          {/* Search Bar  */}


          {children}
        </Providers>

      </body>
    </html>
  )
}
