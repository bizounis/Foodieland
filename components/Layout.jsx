import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Foodieland</title>
    </Head>
    <header className='fcontainer'>
      <Navbar />
    </header>
    <main>
      {children}
    </main>
    <footer className='fcontainer'>
      <Footer />
    </footer>
  </>
)

export default Layout 