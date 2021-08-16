import { Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory } from 'react-router'

const Header = () => {
  const history = useHistory()

  const logMeOut = () => {
    history.push('/')
  }

  return (
    <Navbar collapseOnSelect bg='info' variant='dark' expand='md'>
      <Navbar.Brand>
        <img src={logo} alt='logo' width='50px' className='ms-4' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav justify-content-end'>
        <Nav className='ms-auto '>
          <LinkContainer to='/dashboard'>
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/tickets'>
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <LinkContainer to=''>
            <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
