import Footer from './partial-layout/Footer.component'
import Header from './partial-layout/Header.component'

const DefaultLayout = ({ children }) => {
  return (
    <div className='default-layout'>
      <header className='header mb-3'>
        <Header />
      </header>
      <main className='main'>{children}</main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default DefaultLayout
