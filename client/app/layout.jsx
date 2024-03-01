import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import '@styles/globals.css'
import { TransactionProvider} from '@context/TransactionContext'

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <TransactionProvider>
            <div className='flex flex-col'>
                <Navbar/>
                {children}
                <Footer/>
            </div>
          </TransactionProvider>
        </body>
    </html>
  )
}

export default RootLayout