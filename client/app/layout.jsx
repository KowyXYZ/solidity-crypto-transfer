import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import '@styles/globals.css'

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='flex flex-col'>
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </body>
    </html>
  )
}

export default RootLayout