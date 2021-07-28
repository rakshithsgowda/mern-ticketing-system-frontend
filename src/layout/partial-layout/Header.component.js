import { Nav, Navbar } from 'react-bootstrap'

import logo from '../../assets/img/logo.png'

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      bg='info'
      variant='dark'
      expand='md'
      // className=' justify-content-end'
    >
      <Navbar.Brand>
        <img src={logo} alt='logo' width='50px' className='ms-4' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav justify-content-end'>
        <Nav className='ms-auto '>
          <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
          <Nav.Link href='/tickets'>Tickets</Nav.Link>
          <Nav.Link href='/logout'>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
